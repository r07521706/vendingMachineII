import React, { Component } from 'react';
import { ReactComponent as Drink } from '../../pic/drink-water.svg';
import {connect} from 'react-redux';
import './Product.css'
function Product(props) {
    const handleOnClick=()=>{
        props.cleanNumber();
        props.setPrice(props.productData.price)
    }

    return (
        <div>
            <div className="product" onClick={handleOnClick}>
                <div className = "view">{props.productData.name}
                     <Drink className="drink" alt="logo" strokeWidth="1rem" style={{width:"100%",height:"100%"}}/>
                     
                </div>
                <div className = "price">
                   {props.productData.price}
                </div>
                
            </div>
        </div>
    )
}


const mapStateToProps = state =>({
    machine:state.machine,
  })
  const mapDispatchToProps =  dispatch=>({
    setPrice:(price)=>dispatch(
      {
      type:'SET_PRICE',
      payload: price}
      ),
    cleanNumber:()=>dispatch({
        type:'CLEAN_NUMBER'
    })
  
  });
export default connect(mapStateToProps,mapDispatchToProps)(Product);
