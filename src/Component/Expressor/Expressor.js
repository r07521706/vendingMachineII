import React from 'react'
import {connect} from 'react-redux';
import './Expressor.css';
function Expressor(props) {
   const initstyle={borderRadius:'999em',background:'#2196f3',width:10,height:10,margin:'0 auto ',marginTop:8}
   const noMoneyStyle={borderRadius:'999em',background:'red',width:10,height:10,margin:'0 auto ',marginTop:8}
   // const enoughMoneyStyle={borderRadius:'999em',background:'green',width:10,height:10,margin:'0 auto ',marginTop:8}
   const getKeyPrice =()=>{
      if(props.machine.productDatas[Number(props.machine.number)-1]!==undefined){
         return props.machine.productDatas[Number(props.machine.number)-1].price
      }
      else{
         return '_'
      }
   }
    return (
    
    <div className = "diplay-input-money">
        <div style={{float:'left',width:"50%"}}>
           金額
        </div>
        <div style={{float:'right',width:"50%",textAlign:"right"}}>
           {props.machine.number===''?props.machine.price+'元':getKeyPrice()+'元'}
        </div>
        <div style={{float:'left',width:"70%"}}>
           投入金額
        </div>
        <div style={{float:'right',width:"30%",textAlign:"right"}}>
           {props.machine.coin+'元'}
        </div>
        
        <div style={{float:'left',width:"50%"}}>
         按鈕        
        </div > 
        
        <div  style={{float:'right',width:"50%",textAlign:"right"}}>
           {props.machine.number+'號'}
        </div>
        <div style={{width:75,float:'left',height:30,width:"40%"}}>
        {props.machine.coin>=props.machine.price||getKeyPrice()<props.machine.coin?<div style={initstyle}></div>:<div style={noMoneyStyle}></div>}
        
        </div>
    
         <div className="buy-button" style={{float:'right',width:"50%",textAlign:"center"}}>
            購買
         </div>
      
    </div>
    )
}
const mapDispatchToProps =  dispatch=>({
 
 });
const mapStateToProps = state =>({
    machine:state.machine,
  })

export default connect(mapStateToProps,mapDispatchToProps)(Expressor);