import React,{Component} from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Index from '../index/index'
import Two from '../two/index'
import Base from '../base.js';
import { Provider } from 'mobx-react';
import stores from '../stores/index';
class Router  extends Component{
    constructor() {
      super();
      this.state = {};
    } 
    render(){
        return (
            <Provider {...stores}>
                    {/* <Route path="/" component={Index} /> */}
                    <Redirect from="/" to="/two" exact />
                        <div>
                            <Route>
                                <Base></Base>
                                {/* <Index/>
                                <Two /> */}
                            </Route>
                        </div>                  
             </Provider> 
        )
    }
}
export default Router;

