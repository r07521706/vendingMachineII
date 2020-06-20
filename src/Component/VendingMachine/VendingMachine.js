import React, { Component } from 'react'
import ProductRow from '../ProductRow/ProductRow'
import OperatePanel from '../OperatePanel/OperatePanel'
import './VendingMachine.css'
import CoinArea from '../CoinArea/CoinArea'
import {connect} from 'react-redux';
import {splitProductDatas} from './VendingMachine.util'
export class VendingMachine extends Component {

    render() {
        
        return (
    <div>
        <div className="vending-machine-body">
                {
                    (splitProductDatas(this.props.productDatas)).map((rowProductDatas)=>{
                        return  <ProductRow productDatas={rowProductDatas[0]} key={rowProductDatas[1]}></ProductRow>
                    })
                }
                <OperatePanel></OperatePanel>
        </div>
        <CoinArea></CoinArea> 
      </div>
    
        )
    }
}
const mapStateToProps = state =>({
    productDatas:state.machine.productDatas,
  })

export default connect(mapStateToProps,null)(VendingMachine);
