import React from 'react'

export default function Product(props) {
    return (
        <div>
            <div className="product">
                <div className = "view">{props.productData.name}</div>
                <div className = "price">
                   {props.productData.price}
                </div>
            </div>
        </div>
    )
}
