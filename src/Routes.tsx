//import { userInfo } from 'os';
import React from 'react';
import {BrowserRouter, Switch,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Search from './pages/Search';

const Routes = () => (

    <BrowserRouter>
    <Navbar/>
    <Switch>
        <Route path="/" exact>
            <Home/>

        </Route>
        <Route path="/Search"  exact>
            <Search/>

        </Route>
    </Switch>
    
    
    </BrowserRouter>
);

export default Routes;