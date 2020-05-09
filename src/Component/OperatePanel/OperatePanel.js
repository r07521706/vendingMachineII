import React from 'react'
import Expressor from '../Expressor/Expressor'
import {connect} from 'react-redux'
function OperatePanel(props) {
    const inspectLength = ()=>{
        if(props.machine.number.length>1){
            props.cleanNumber()
        }
    }
    return (
        <div className="operate-panel">
            <div className = "input-button">
                <div className='number-button' onClick={()=>{inspectLength();props.setNumber(1)}}>1</div>
                <div className='number-button' onClick={()=>{inspectLength();props.setNumber(2)}}>2</div>
                <div className='number-button' onClick={()=>{inspectLength();props.setNumber(3)}}>3</div>
                <div className='number-button' onClick={()=>{inspectLength();props.setNumber(4)}}>4</div>
                <div className='number-button' onClick={()=>{inspectLength();props.setNumber(5)}}>5</div>
                <div className='number-button' onClick={()=>{inspectLength();props.setNumber(6)}}>6</div>
                <div className='number-button' onClick={()=>{inspectLength();props.setNumber(7)}}>7</div>
                <div className='number-button' onClick={()=>{inspectLength();props.setNumber(8)}}>8</div>
                <div className='number-button' onClick={()=>{inspectLength();props.setNumber(9)}}>9</div>
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


const mapStateToProps = state =>({
    machine:state.machine,
  })
  const mapDispatchToProps =  dispatch=>({
    setNumber:(number)=>dispatch(
      {
      type:'SET_NUMBER',
      payload: number}
      ),
    cleanNumber:()=>dispatch(
        {
        type:'CLEAN_NUMBER'}
        ),
  
  });
export default connect(mapStateToProps,mapDispatchToProps)(OperatePanel);
