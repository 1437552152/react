import React,{Component} from 'react';
import { getcountry } from '../../config/getData'
export default class One extends Component{
    constructor() {
      super();
      this.state = {
        country:null
      };
    } 

componentDidMount(){
  getcountry().then(res=>{
    let country = res.data[0].typeid;
      this.setState({country})
  })
}
    render(){
      const {country} = this.state;
        return (
          // <div>{this.state.country}</div>
          <div>{country}</div>
        )
}
}