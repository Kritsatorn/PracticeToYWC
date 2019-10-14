import React, {Component} from 'react';
import { reduxForm , Field} from 'redux-form';

class ProductForm extends Component {


  renderFields() {
    const formFeilds = [
      { name : "productName" , type: "text"},
      { name : "unitPrice" , type: "number"},
      { name : "thumbnail" , type: "text"}
    ]
    return formFeilds.map( ({name , type}) => {
      return(
        <Field name={name} type={type} component="input "/>
      )
    })
  }

  render(){
    return(
      <div>
        <form>
          {this.renderFields()}
        </form>
      </div>
    )
  }
}

ProductForm = reduxForm({ form : "productForm"})(ProductForm);
export default ProductForm;