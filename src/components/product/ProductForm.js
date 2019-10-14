import React, {Component} from 'react';
import { reduxForm , Field} from 'redux-form';
import FormFeilds from '../common/FormFeild';
import { connect } from 'react-redux';
import {productFormFeilds} from '../product/formFeilds';
class ProductForm extends Component {


  renderFields(formFeilds) {
    return formFeilds.map(( {label ,name , type, required} ) => {
      return(
        <Field key={name} label={label} name={name} type={type} required={required} component={FormFeilds} />
      )
    })
  }

  render(){
    const {onProductSubmit} = this.props
    return(
      <div>
        <form onProductSubmit={this.props.handleSubmit(onProductSubmit)} >
          {this.renderFields(productFormFeilds)}
          <button className="bnt btn-block btn-info title" type="submit">
            บันทึก
          </button>
        </form>
      </div>
    )
  }
}

function validate(values) {
  const errors ={};
  productFormFeilds.forEach(({name,required}) => {
    if(!values[name] && required){
      errors[name]= "กรุณากรอกข้อมูล";
    }
  });
  return errors;
}

ProductForm = reduxForm({ validate, form : "productForm"})(ProductForm);

function mapStateToProps( {product} ) {
  if(product) {
    return { innitialValues : product};
  } else {
    return null;
  }
}
export default connect(mapStateToProps)(ProductForm);