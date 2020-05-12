import React from 'react';
import {connect} from 'react-redux';
function Board(props){
    const drop = (event)=>{
        event.preventDefault();
        props.addCoin();
    }
    const dragOver = e=>{
        e.preventDefault();
    }

    return(
        <div
            id={props.id}
            className = {props.className}
            onDrop = {drop}
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
    addCoin:()=>dispatch(
      {
      type:'ADD_COIN'
      }
      )
  
  });
export default connect(mapStateToProps,mapDispatchToProps)(Board);