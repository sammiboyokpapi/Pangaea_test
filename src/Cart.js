import React from 'react';
import ReactDOM from 'react-dom'; // you used 'react-dom' as 'ReactDOM'

import { Grid, Row, Col, Container, Dropdown } from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import '@fortawesome/fontawesome-free/css/all.min.css';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {items: []};
    
    console.log("cart");
    console.log(this.props.items);

     this.state.total_value = this.props.items[0].param.price;

  }

update_price = () => {
console.log("console log");
//console.log(value);

var elements = this.props.items;   
var i = elements.length;
var total_price = 0;
if(i > 0 ){
	while (i--) {

		total_price =  total_price + (this.props.items[i].param.price * this.props.items[i].count) ;
    
	}

	//this.setState({total_value: total_price});

	 
}

return total_price;

}

  	remove_cartItem = (parameter,c) => {
//removes the cart item 
//this.state.total_value = this.state.total_value + parameter.items.price;

console.log("remove the cart attribute");
console.log(parameter);
console.log(c);

//var newvalue = parameter.count - 1;

//parameter.count = newvalue;


//delete parameter;



var elements = this.props.items;   
var i = elements.length;
while (i--) {

    if (elements[i] == parameter) {
       // elements.splice(i, 1);
       	console.log("we have got you ");
	       	if( this.props.items[i].count > 1 ){
					this.props.items[i].count = this.props.items[i].count - 1;

					// this.setState({total_value: this.state.total_value - this.props.items[i].param.price});

			}else{
				 //this.setState({total_value: this.state.total_value - this.props.items[i].param.price});
				this.props.items.splice(i,1);

			}
    }
}
this.setState({items: this.props.items});

//search_param(a, b, c);

  }




  	add_cartItem = (parameter,c) => {
//removes the cart item 
//this.state.total_value = this.state.total_value + parameter.items.price;

console.log("add the cart attribute");
console.log(parameter);
console.log(c);

//var newvalue = parameter.count - 1;

//parameter.count = newvalue;


//delete parameter;



var elements = this.props.items;   
var i = elements.length;
while (i--) {

    if (elements[i] == parameter) {
       // elements.splice(i, 1);
       	console.log("we have got you ");
	       	if( this.props.items[i].count >= 1 ){
					this.props.items[i].count = this.props.items[i].count + 1;

					// this.setState({total_value: this.state.total_value - this.props.items[i].param.price});

			}
    }
}
this.setState({items: this.props.items});

//search_param(a, b, c);

  }






  render() {
//this.update_price(this.props);
  	
   console.log("cart");
    console.log(this.props.items);

    return (
      <div>




		{this.props.items.map((a) => (
		 
		
         <div className="p-4 white_bg cart_container">
          <Row>
          <div className="col-sm-12 font_small2 padding_bottom"> {a.param.title}</div>
          </Row>
        <Row>
           <div className="col-sm-12">
           <img className="image_align image_align_right" src={a.param.image_url} style={{ height: 40, width: 40 }} /> 
           </div>
         </Row>
         
         <Row>
	          <div className="col-md-6"> 

	          				
					               <div class="input-group">
									<span class="input-group-btn">
					                       <button type="button" class="quantity-left-minus btn btn-danger btn-number"  data-type="minus" data-field="">
					                             <i className="fas fa-minus" onClick={this.remove_cartItem.bind(this.props,a)}  />
					                         </button>
					                   
					                </span>
					                <input type="text" id="quantity" name="quantity" class="form-control input-number" value={a.count} min="1" max="100"/>

                               <span class="input-group-btn">
                                        <button type="button" class="quantity-right-plus btn btn-success btn-number" data-type="plus" data-field="">
                                            <i className="fas fa-plus" onClick={this.add_cartItem.bind(this.props,a)} />
                                        </button>
                                    </span>
                                  </div>
                          


	          </div>
          <div className="col-md-6"> {a.param.price} </div>
         </Row>
         </div>
	 ))}
  
	 <div id="container ">
  <hr />
  <div id="copyright">
    <Row>
         <div className="col-md-4">Total: 
         </div>
          <div className="col-md-4"> {this.update_price()}
         </div>
         </Row>
  </div>
</div>

      </div>


    );
  }

}





export default Cart;
