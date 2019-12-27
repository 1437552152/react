import React,{Component} from 'react';
import { getcountry } from '../../config/getData';
class One extends Component{
    constructor() {
      super();
      this.state = {
        country:null
      };
    } 

componentDidMount(){
  // getcountry().then(res=>{
  //   let country = res.data[0].typeid;
  //     this.setState({country})
  // })
  const {dispatch}=this.props;
  dispatch({
    type: "noteInfo/getNoteInfo",
    payload: {},
    callback: resp => {
      console.log(resp);
    }
  });
}
    render(){
      const {country} = this.state;
        return (
          // <div>{this.state.country}</div>
          <div>sdsdsdsddsd</div>
        )
}
}
export default One;