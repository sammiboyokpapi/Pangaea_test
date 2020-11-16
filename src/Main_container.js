import React from 'react';
import ReactDOM from 'react-dom'; // you used 'react-dom' as 'ReactDOM'
import Sidebar from './Sidebar.js';
import Products from './Products.js';

import Jumbotron from 'react-bootstrap/Jumbotron';

import { Grid, Row, Col, Container, Dropdown } from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import '@fortawesome/fontawesome-free/css/all.min.css';


import Cart from './Cart.js';


 var data = [];

class Main_container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: [], currency: [], price_update: []};
    console.log("Results now");
    console.log(this.props);
    //var 
  }

      openNav = (a,b) => {
         console.log("firedddedddddd");
         console.log(this.state);
         console.log(this.props.items);
        //this.setState({a: this.props.items});

  }

update_price = (a,b) => {
	console.log("updating the price final ");
    console.log(a);
     console.log(b);
var index = a.index;
var price = a.price;



this.state.value[index].price =  price;
var newStateArray = this.state.value.slice();

newStateArray[index] = price;

this.setState({value: newStateArray});
}


cart_add = (a,b) => {

         console.log("new new new ");
      //   console.log(this.state);
         console.log(b);
          console.log(a);
        
     //    data.push(b);
       // this.setState({value: data});
       var newStateArray = this.state.value.slice();
  console.log(newStateArray);
  //if()
  if(this.state.value.length > 0){
		var result = [];
		result =  search_param(newStateArray, a, 0);

		if(result[1]){
	  		newStateArray.push({param : a , count : 1 });
  		}
  		console.log("not empty add value");
  }
  else{
		console.log("empty add value");
		newStateArray.push({param : a , count : 1 });
  }

this.setState({value: newStateArray});

 console.log(this.state);
           document.getElementById("mySidebar").style.width = "350px";
      		document.getElementById("main").style.marginRight= "350px";

  }



//var param = {values: };


  
  render() {
    return (
    	<div>
    	<Sidebar items={{values: this.state.value,currency : this.state.currency ,callback : this.update_price.bind()}} />
		          <Header_layout />

		  <Container className="p-3">
		        <Row>
		       
		       	{this.props.items.map((a) => (
		 
		  < Products items={{param: a,funct: this.cart_add.bind()}} />
		   
		 ))}
		        </Row>
		  </ Container>
		 </div>
    );
  }
}

//fire


function search_param(a, b, c){
	if(c <= a.length -1 ){
	 console.log("checkl values");
	 console.log(a);
	 console.log(b);
	 console.log(c);
	 if(a[c].param == b){
	 	console.log("found my lost bone");
	 	console.log(a[c]);
	 	//update the count with number
	 	a[c].count = a[c].count + 1;
	 	return [a,false];	 
	 }
	return search_param(a, b, c + 1);
	}else{
		return [a,true];
	}
}



class Header_layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {alldata:  ''};
  }
  myChangeHandler = (event) => {
  //  this.setState({username: event.target.value});
  }

  
  render() {
    return (
      <div>
          <Container className="p-3">
    <Jumbotron>
      <h1 className="header">LUMIN</h1>
        A 360 Degree Look at LUMIN
        <span role="img" aria-label="tada">
          
        </span>
    </Jumbotron>
  </Container>
  </div>
    );
  }
}






export default Main_container;

