import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Button from './Button';
import home from './Home';
import Help from './Help';



const Header = () => {
    return (
        <Router>
            <header className='header'>
            <h1>Lambda Eats</h1>
            <Switch>
                <Redirect exact from='/' to="/home" />
                    <Route path='/home'>
                        <Button className='home' color='green' text='Home' />;
                    </Route>
                    <Route exact path='./Help'>
                        <Button className='help' color='red' text='Help' />
                    </Route>
                </Switch>    
        </header>
        </Router>
    )
}

export default Header;