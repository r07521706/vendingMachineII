import React from 'react'
import {connect} from 'react-redux';
function DragCard(props) {

    const dragStart = (e)=>{
        
        const target = e.target;
        props.setCoin(e.target.id)
        e.dataTransfer.setData('card_id',target.id)
        setTimeout(()=>{
            target.style.diplay = "none";
        },0);
    }

    const dragOver = (e)=>{
        e.stopPropagation();
    }

    return (
        <div 
            id =  {props.id}
            className = {props.className}
            draggable={props.draggable}
            onDragStart = {dragStart}
            onDragOver = {dragOver}
        >
            {props.children}
        </div>
    )
}

const mapStateToProps = state =>({
    machine:state.machine,
  })
  const mapDispatchToProps =  dispatch=>({
    setCoin:(coin)=>dispatch(
      {
      type:'CHOOSE_COIN',
      payload: coin
      }
      )
  
  });
export default connect(mapStateToProps,mapDispatchToProps)(DragCard);