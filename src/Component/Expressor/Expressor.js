import React from 'react'
import {connect} from 'react-redux';
function Expressor(props) {
    return (
    <div className = "diplay-input-money">
        <div style={{float:'left'}}>
           金額
        </div>
        <div>
           {props.machine.price+'元'}
        </div>
        <div style={{float:'left'}}>
           投入金額
        </div>
        <div>
           {props.amount+'元'}
        </div>
        <div style={{float:'left'}}>
         按鈕        
        </div>
        <div>
           {props.machine.number}
        </div>
    </div>
    )
}
const mapStateToProps = state =>({
    machine:state.machine,
  })

export default connect(mapStateToProps,null)(Expressor);