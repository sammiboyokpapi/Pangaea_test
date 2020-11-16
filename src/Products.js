import React from 'react';
import ReactDOM from 'react-dom'; // you used 'react-dom' as 'ReactDOM'
import Sidebar from './Sidebar.js';
import { Grid, Row, Col, Container, Dropdown } from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Cart from './Cart.js';


class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
     console.log("asdasad");
    console.log(this.props.items);
    //var 
  }
  

      openNav = (a,b) => {
         console.log("fireddd");
         console.log(this.state);
         console.log(this.props);
        //this.setState({a: this.props.items});

   //   document.getElementById("mySidebar").style.width = "350px";
    //  document.getElementById("main").style.marginRight= "350px";

 //alert(a.title);
 //farm = this.props.items.title;

// let myRegistrationModal = ReactDOM.render(<Cart param ={a} />, document.getElementById('cart_container') );


//console.log(myRegistrationModal);
  //     return myRegistrationModal;
  }



  
  render() {
    return (
          <div className="col-sm-4">
         <div className="center padding_bottom"><img className="image_align" src={this.props.items.param.image_url} style={{ height: 100, width: 100 }} /> </div> 
    <div className="center font_small">{ this.props.items.param.title }</div> 
    <div className="center font_small"> From { this.props.items.param.price }</div> 
  <div className="center"> <button type="button" className="btn btn-success btn-block" onClick={this.props.items.funct.bind(this,this.props.items.param)} >Add To Cart</button></div> 
   
   
</div>
    );
  }
} 















export default Products;
