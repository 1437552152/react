import React,{Component} from 'react';
import { Link } from 'react-router-dom'
class Header  extends Component{
    constructor() {
      super();
      this.state = {};
    } 
    render(){
        return (
            <div> 
                 <Link to="/one">我是头部部分1</Link>
                 <Link to="/two"> 我是头部部分2 </Link>
            </div>
        )
    }
}
export default Header;

