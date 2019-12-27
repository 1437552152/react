import React,{Component} from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Index from './index/index'
import Two from './two/index'
import Base from './base.js';
class Router  extends Component{
    constructor() {
      super();
      this.state = {};
    } 
    render(){
        return (
            <HashRouter>
                <Switch>
                    {/* <Route path="/" component={Index} /> */}
                    <Redirect from="/" to="/two" exact />
                        <div>
                            <Route>
                                <Base></Base>
                                <Index/>
                                <Two />
                            </Route>
                        </div>                  
                </Switch>
            </HashRouter>
        )
    }
}
export default Router;

