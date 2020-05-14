import React,{useState} from 'react'
import {connect} from 'react-redux';
import './Expressor.css';
function Expressor(props) {
   const [lamp,setLamp] = useState('')
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
        <div style={{float:'left'}}>
           金額
        </div>
        <div style={{float:'right'}}>
           {props.machine.number===''?props.machine.price+'元':getKeyPrice()+'元'}
        </div>
        <div style={{float:'left'}}>
           投入金額
        </div>
        <div style={{float:'right'}}>
           {props.machine.coin+'元'}
        </div>
        
        <div style={{float:'left'}}>
         按鈕        
        </div > 
        
        <div  style={{float:'right'}}>
           {props.machine.number+'號'}
        </div>
        <div style={{width:75,float:'left',height:30}}>
        {props.machine.coin>props.machine.price||getKeyPrice()<props.machine.coin?<div style={initstyle}></div>:<div style={noMoneyStyle}></div>}
        </div>
    
         <div className="buy-button" style={{float:'right'}}>
            購買
         </div>
      
    </div>
    )
}
const mapDispatchToProps =  dispatch=>({
   setPrice:(price)=>dispatch(
     {
     type:'SET_PRICE',
     payload: price}
     ),
 
 });
const mapStateToProps = state =>({
    machine:state.machine,
  })

export default connect(mapStateToProps,mapDispatchToProps)(Expressor);