import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PropTypes } from 'prop-types';
import { createStore } from 'redux'
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom';
import todoApp from './redux/reducers/todos.js';
// Pages
import { Home } from '../app/home/index';
import { Todos } from '../app/todos/index';
import { NotFound } from '../app/notFound/index';

// ROUTES
const routes = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/todos',
        component: Todos,
        exact: true
    },
    {
        path: '*',
        component: NotFound,
        exact: false
    }
]



// MAIN APP COMPONENTS
class Navigation extends React.Component {
    render() {
        return(
            <div className="app__navigation-container">
                <NavLink exact to="/" activeClassName='active'>Home</NavLink>
                <NavLink exact to="/todos" activeClassName='active'>Todo List</NavLink>
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return(
            <header className="app__header-container">
                <Navigation />
            </header>
        )
    }
}

class Footer extends React.Component {
    render() {
        return(
            <footer className="app__footer-container">
            </footer>
        )
    }
}

class App extends React.Component {
    render() {
        return(
            <main className="app__main-container">
                <Header />
                <div className="app__view-container">
                    <Switch>
                        {routes.map((route, index) => <Route key={index} exact={route.exact} path={route.path} component={route.component}/> )}
                    </Switch>
                </div>
                <Footer />
            </main>
        )
    }
}

const store = createStore(todoApp);

store.subscribe(() => {
    store.getState();
});

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
, document.getElementById('app'))

module.hot.accept();