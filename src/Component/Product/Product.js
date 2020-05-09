import React from 'react'
import {connect} from 'react-redux';
import './Product.css'
function Product(props) {
    const handleOnClick=()=>{
        props.setPrice(props.productData.price)
    }

    return (
        <div>
            <div className="product" onClick={handleOnClick}>
                <div className = "view">{props.productData.name}
                
                    <div style={{color:'red'}}>
                        {props.productData.key}
                    </div>
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
  
  });
export default connect(mapStateToProps,mapDispatchToProps)(Product);
