import React from 'react';
import ReactDOM from 'react-dom';
import './Sidebar.css';
import Peroducts from './Products.js';
import Cart from './Cart.js';
import Datasource_new from './datasource_new.js';

import DropdownButton from 'react-bootstrap/DropdownButton';

import { Grid, Row, Col, Container, Dropdown } from 'react-bootstrap';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { prince: []};
  }
  myChangeHandler = (event) => {
  //  this.setState({username: event.target.value});
  }
      closeNav() {
      document.getElementById("mySidebar").style.width = "0";
      document.getElementById("main").style.marginRight= "0";
  }

  update_price=(v,e)=>{
alert(e)
    console.log(e);
    //call datasource2 to fetch the updated price
     console.log("fire now now ");
     console.log({currency: e, link : this.props.items});
    // new Datasource_new(e,this.props.items.currency);
    

//this.setState({prince: this.props});     	

    const componentd = ReactDOM.render(<Datasource_new items={{currency: e, link : this.props.items}} />, document.getElementById('testlink'));
  console.log("ggg");
  console.log(componentd);
//this.setState({prince: this.props});

  }

    componentDidMount() {
    	alert("ssss");
    setTimeout(() => {
      this.setState({prince: this.props});
    }, 1000)
  }
  
  render() {
  	var Data = ["USD", "AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM"
  				, "BBD", "BDT", "BGN", "BIF", "BMD", "BND", "BOB", "BRL", "BSD", "BWP", "BZD",
  				 "CAD", "CDF", "CHF", "CLP", "CNY", "COP", "CRC", "CVE", "CZK", "DJF", "DKK", "DOP",
  				 "DZD", "EGP", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GIP", "GMD", "GNF", "GTQ"
  				 , "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "INR", "ISK", "JMD", 
  				 "JPY", "KES", "KSG", "KHR", "KMF", "KRW", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD"
  				 , "LSL", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRO", "MUR", "MVR", "MWK"
  				 , "MXN", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "PAB", "PEN", "PGK"
  				 , "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR"
  				 , "SEK", "SGD", "SHP", "SLL", "SOS", "SRD", "STD", "SVC", "SZL", "THB", "TJS", "TOP"
  				 , "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "UYU", "UZS", "VND", "VUV", "WST", "XAF"
  				 , "XCD", "XOF", "XPF", "YER", "ZAR", "ZMW"];
  	const MakeItem = function(X) {
                return <Dropdown.Item eventKey={X}>{X}</Dropdown.Item>;
            };
//ss


let button;

//		console.log(this.props.items);
//		console.log(this.props.items.length);
      if (this.props.items.values.length > 0) {
      button = <Cart items={this.props.items.values} />;
    }

    return (
     <div id="mySidebar" className="sidebar">
  <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>×</a>
 
   <Container className="p-3 ">
        <Row>
         <div className="col-sm-4">
         <div className="center padding_bottom">



  <DropdownButton
      alignRight
      title="Dropdown right"
      id="dropdown-menu-align-right"
      onSelect={this.update_price.bind(this.props,this.props)}
        >
           {Data.map(MakeItem)}
      </DropdownButton>
      <h4>You selected {}</h4>




          </div>
		</div>

        </Row>
  </ Container>

<div id="cart_container">

{button}

</div>
<div id="testlink">

</div>


</div>
    );
  }
}


export default Sidebar;
