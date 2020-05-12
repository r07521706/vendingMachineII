import React from 'react'
import {connect} from 'react-redux';
import './Expressor.css';
function Expressor(props) {
   const getKeyPrice =()=>{
      console.log(props.machine.productDatas[Number(props.machine.number)-1])
      if(props.machine.productDatas[Number(props.machine.number)-1]!==undefined){
         return props.machine.productDatas[Number(props.machine.number)-1].price
      }
      else{
         return '_'
      }
   }

    return (
    <div className = "diplay-input-money">
       {console.log(props.machine.number)}
        <div style={{float:'left'}}>
           金額
        </div>
        <div>
           {props.machine.number===''?props.machine.price+'元':getKeyPrice()+'元'}
        </div>
        <div style={{float:'left'}}>
           投入金額
        </div>
        <div>
           {props.machine.coin+'元'}
        </div>
        <div style={{float:'left'}}>
         按鈕        
        </div>
        <div>
           {props.machine.number}
        </div>
        <div className="buy-button" >購買</div>
    </div>
    )
}
const mapStateToProps = state =>({
    machine:state.machine,
  })

export default connect(mapStateToProps,null)(Expressor);