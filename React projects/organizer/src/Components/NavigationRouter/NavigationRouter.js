import React from "react";
import {Route, NavLink, HashRouter} from "react-router-dom";

import WatchesBlock from "../WatchesBlock/WatchesBlock";
import ClickerBlock from "../ClickerBlock/ClickerBlock";
import ToDoBlock from "../ToDo/ToDoBlock";
import Home from "./Home";

import "./NavigationRouter.css"
import CounterBlock from "../Counter/CounterBlock";

export default class NavigationRouter extends React.Component {
    render() {
        return(
            <HashRouter>
            <div className="NavigationRouterWrapper">
                <ul className="routerHeader">
                    <li><NavLink exact to="/">Main</NavLink></li>
                    <li><NavLink to="/clicker">Clicker</NavLink></li>
                    <li><NavLink to="/watchesdate">Time to Time</NavLink></li>
                    <li><NavLink to="/todo">To do</NavLink></li>
                    <li><NavLink to="/counter">Counter</NavLink></li>
                </ul>
    
                <div className="routerContent">
                    <Route exact path="/" component={Home}/>
                    <Route path="/clicker" component={ClickerBlock}/>
                    <Route path="/watchesdate" component={WatchesBlock}/>
                    <Route path="/todo" component={ToDoBlock}/>
                    <Route path="/counter" component={CounterBlock}/>
                </div>
            </div>
            </HashRouter>
        );
    }
}