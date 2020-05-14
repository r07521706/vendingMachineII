import React, { Component } from 'react';
import { ReactComponent as Drink } from '../../pic/drink-water.svg';
import { ReactComponent as Coke } from '../../pic/coke.svg';
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
                     
                     {props.productData.key%2===1?<Drink alt="logo" strokeWidth="1rem" style={{width:"100%",height:"100%"}}/>:
                    <Coke alt="logo" strokeWidth="1rem"  style={{width:"100%",height:"100%"}}/>}
                </div>
                <div className = "price">
                   {props.productData.price}
                   <br></br>
                   <div style={{color:'#102e49',border:"1px ",margin:3}}>
                      {props.productData.key+1}
                   </div>
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
