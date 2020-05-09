import React, { Component } from 'react'
import Product from '../Product/Product'
import './ProductRow.css'
export const ProductRow=(props)=>{
       
        return (
            
                
            <div className="product-row">
                {/* {this.props.productDatas.map((productData=>{
                    return <Product productData={productData}></Product>
                }))} */}
                {(props.productDatas).map((i)=>{
                    return <Product productData = {i} key={i.key}></Product>
                })}
             </div>
                    
                   
                   
            
        )
    
}

export default ProductRow
