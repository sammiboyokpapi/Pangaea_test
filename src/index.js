import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { gql } from '@apollo/client';
import Datasource from './datasource.js';
import Datasource2 from './datasource.js';
import Sidebar from './Sidebar.js';


import { Grid, Row, Col, Container } from 'react-bootstrap';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';

import Button from 'react-bootstrap/Button';


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';


class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { all: [] };
  }


/*  add_cart = (x) =>{
    alert(x);
    if(x != undefined){
    var myNewState = this.state.all;
  
    this.setState({all: myNewState});
  }
  };

  delete_cart= () =>{
    var myNewState = this.state.mystate -1;
    if(myNewState > 0){
      this.setState({mystate: myNewState});
    }
  }
*/
  
  render() {
    return (
     
  <div id="main" className="main">
      
      <Datasource />

      </div>
    );
  }
}


ReactDOM.render(<MyForm />, document.getElementById('root'));



