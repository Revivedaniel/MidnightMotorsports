import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import 'bootstrap/dist/css/bootstrap.min.css'

// util
import { StoreProvider } from './utils/GlobalState';

// pages
import About from './pages/About';
import Cart from './components/Cart';
import Login from './pages/Login';
import Brands from './pages/Brands';
import Contact from './pages/Contact';
import NoRoute from './pages/NoRoute';

// brands and products
import BMWModels from './pages/Brands/BMW'
import BMWProducts from './pages/BrandProducts/BMWProducts'

import MitsubishiModels from './pages/Brands/Mitsubishi'
import MitsubishiProducts from './pages/BrandProducts/MitsubishiProducts'

import SubaruModels from './pages/Brands/Subaru'
import SubaruProducts from './pages/BrandProducts/SubaruProducts'

// global components
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer'
import Success from './pages/Success';

const httpLink = createHttpLink({
    uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <Header />
                <Nav />
                <StoreProvider>
                    <Switch>
                        <Route exact path="/" render={() => <Redirect to="/brands" />} />
                        <Route exact path="/brands" component={Brands} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/success" component={Success} />

                        <Route exact path="/bmw" component={BMWModels} />
                        <Route exact path="/bmw/:model" component={BMWProducts} />

                        <Route exact path="/mitsubishi" component={MitsubishiModels} />
                        <Route exact path="/mitsubishi/:model" component={MitsubishiProducts} />

                        <Route exact path="/subaru" component={SubaruModels} />
                        <Route exact path="/subaru/:model" component={SubaruProducts} />

                        <Route component={NoRoute} />
                    </Switch>
                    <Cart />
                </StoreProvider>
                <Footer />
            </Router>
        </ApolloProvider>
    );
}

export default App;