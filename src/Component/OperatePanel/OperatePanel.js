import React from 'react'
import Expressor from '../Expressor/Expressor'
export default function OperatePanel() {
    return (
        <div className="operate-panel">
            <div className = "input-button">
                <div className='number-button'>1</div>
                <div className='number-button'>2</div>
                <div className='number-button'>3</div>
                <div className='number-button'>4</div>
                <div className='number-button'>5</div>
                <div className='number-button'>6</div>
                <div className='number-button'>7</div>
                <div className='number-button'>8</div>
                <div className='number-button'>9</div>
            </div>
            
            <Expressor amount={20}></Expressor>

            <div className = "money-area">
                <div className = "back-button">
                    <div className = "back-button-start"></div>
                </div>
                <div className = "coin-slot">
                    <div className = "hole"></div>
                </div>
                <div className = "back-money-hole"></div>
            </div>

            <div className = "pickup-area"></div>
        </div>
    )
}
