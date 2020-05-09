import React from 'react'

export default function Expressor(props) {
    return (
    <div className = "diplay-input-money">
        <div>
           目前金額
        </div>
        <div>
           {props.amount+'元'}
        </div>
    </div>
    )
}
