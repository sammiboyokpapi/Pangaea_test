import React from 'react';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { gql, useQuery } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';

import Button from 'react-bootstrap/Button';
import { Grid, Row, Col, Container } from 'react-bootstrap';

import Products from './Products.js';
import Main_container from './Main_container.js';


const client = new ApolloClient({
  uri: 'https://pangaea-interviews.now.sh/api/graphql',
  cache: new InMemoryCache()
});



function Datasource2({ cur }) {
console.log(cur);

const PRODUCT_QUERY =  gql`
      query {
   products {
      id
      title
    image_url
    price(currency:USD)
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


const { loading, error, data } = useQuery(PRODUCT_QUERY, {
    variables: { currency : cur }});

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

console.log("complete data");
  console.log(data);
		return (
		 
		  < Main_container items={data.products} />
		   
		 );

}

function Datasource() {
  return (
    <ApolloProvider client={client}>
    
            < Datasource2  cur="USD"/>
    </ApolloProvider>
  );
}


export default Datasource;

