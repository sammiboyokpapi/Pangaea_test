import React from 'react';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { gql, useQuery } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import Sidebar from './Sidebar.js';

import Button from 'react-bootstrap/Button';
import { Grid, Row, Col, Container } from 'react-bootstrap';

import Products from './Products.js';
import Main_container from './Main_container.js';


const client = new ApolloClient({
  uri: 'https://pangaea-interviews.now.sh/api/graphql',
  cache: new InMemoryCache()
});


class Datasource_new extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: [], currency: []};
    console.log("Results sdfdfsdfsfsdfsdffsdfsd");

    console.log(this.props);
    console.log("values");
             console.log(this.props.items.link.values);
          console.log(this.props.items.currency);

          var callback_link = this.props.items.link.values;
          var currency_value = this.props.items.currency;
    //var 
  }

      openNav = (a,b) => {
         console.log("firedddedddddd");
         console.log(this.state);
         console.log(this.props.items.links.currency);
          console.log(this.props.items.currency);
        //this.setState({a: this.props.items});

  }



//var param = {values: };


  
  render() {
    return (
     <ApolloProvider client={client}>
    
            < Datasource_currency  cur={{value: this.props.items.currency, link: this.props.items.link.values, callback: this.props.items.link.callback }}/>
    </ApolloProvider>

    );
  }
}


//

function Datasource_currency(param) {
console.log("values retrieved");
 console.log(param);
 console.log(param.cur.value);
 console.log(param.cur.link);

var cur =param.cur.value;
var param_new = param.cur.link;
//console.log(link);

 const PRODUCT_QUERY =  gql`
      query ($hcurrency: Currency){
   products {
      id
      title
    image_url
    price(currency: $hcurrency )
            product_options{
              title
              prefix
              suffix
              options{id
              value}
            } 
   } 
}
    `;

    const PARAME = gql`
    query{
      currency{
        USD
      }

    }
    `;

    console.log(PRODUCT_QUERY);


const { loading, error, data } = useQuery(PRODUCT_QUERY, {
    variables: {
    "hcurrency": param.cur.value
    } });




  if (loading) 
  //
  if (error) {
    console.log("error data");
    console.log(error.graphQLErrors);
  }
//
 if (data) {
console.log("complete dataascaasdasdasdasdas");
  console.log(data);
  console.log(param_new);

  //param_new[0].count = param_new[0].count - 1;
  //param.cur.link = data;
//this.setState({prince: this.props});
var elements = param_new;   
var i = elements.length;
var total_price = 0;
if(i > 0 ){
  while (i--) {
//search for record where ID is the same 
      var elements2 = data.products;   
      var v = elements2.length;
           while (v--) {
            //search for record where ID is the same 


            if (elements[i].param.id == elements2[v].id) {
               console.log("its updating");
              //update the price here 
              console.log(param.cur);
                console.log(param_new[i].param.price);

                param.cur.callback.bind({index:i,value:elements2[v].price});
             // param_new[i].count += 500;
               {}   
                }
               // total_price =  total_price + (this.props.items[i].param.price * this.props.items[i].count) ;
                
              }


    }
   // total_price =  total_price + (this.props.items[i].param.price * this.props.items[i].count) ;
    
    }
  }

  //this.setState({total_value: total_price});




    return (
     
     <div>

//<Sidebar items={{values: param_new,currency : param.cur.value}} />

     </div>
     

     );

}





export default Datasource_new;