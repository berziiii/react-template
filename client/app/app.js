import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom';
// Pages
import { Home } from '../app/home/index';
import { Todos } from '../app/todos/index';
import { Todo } from '../app/todo/index';
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
        path: '/todos/:todoId',
        component: Todo,
        exact: true
    },
    {
        path: '*',
        component: NotFound,
        exact: false
    }
]



// MAIN APP COMPONENTS
const Navigation = () => {
    return(
        <div className="app__navigation-container">
            <NavLink exact to="/" activeClassName='active'>Home</NavLink>
            <NavLink exact to="/todos" activeClassName='active'>Todo List</NavLink>
        </div>
    )
}

const Header = () => {
    return(
        <header className="app__header-container">
            <Navigation />
        </header>
    )
}


const Footer = () => {
    return(
        <footer className="app__footer-container">
        </footer>
    )
}

const App = () => (
    <main className="app__main-container">
        <Header />
        <div className="app__view-container">
            <Switch>
                {routes.map((route, index) => <Route key={index} exact={route.exact} path={route.path} component={route.component} /> )}
            </Switch>
        </div>
        <Footer />
    </main>
)

ReactDOM.render(
    <Router>
      <App />
    </Router>
, document.getElementById('app'))

module.hot.accept();