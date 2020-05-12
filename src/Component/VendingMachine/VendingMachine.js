import React, { Component } from 'react'
import ProductRow from '../ProductRow/ProductRow'
import OperatePanel from '../OperatePanel/OperatePanel'
import './VendingMachine.css'
import coin50 from '../../pic/coin50.jpg';
import coin10 from '../../pic/coin10.jpg'
import coin5 from '../../pic/coin5.jpg'
import coin1 from '../../pic/coin1.jpg'
import DragCard from '../DragCard/DragCard';
import {connect} from 'react-redux';
export class VendingMachine extends Component {
    splitProductDatas=(data)=>{
        let rowNum=(Math.ceil(this.props.machine.productDatas.length/7));
        let rowProducts=[]
        let rowProduct=[]
        let real_index =0
        let new_productDatas=this.props.machine.productDatas
        for(let i=0;i<new_productDatas.length;i++){
            new_productDatas[i]['key']=i
        }

        for (let index = 0; index <rowNum; index++) {
           for(let pindex=0;pindex<=6;pindex++){
                real_index = index*7+pindex;
               let product = new_productDatas[real_index]
               if(product){
                rowProduct.push(product)
               }
               else{
                   break
               }
           }
           rowProducts.push([rowProduct,index])
           rowProduct=[]
        }
        return rowProducts
    }

    render() {
        
        return (
        <div>
            <div className="vending-machine-body">
                
                {
                (this.splitProductDatas(this.props.machine.productDatas)).map((rowProductDatas)=>{
                    return  <ProductRow productDatas={rowProductDatas[0]} key={rowProductDatas[1]}></ProductRow>
                })
                }

                <OperatePanel></OperatePanel>
                
            
        </div>
        <div className="coin-area">
            <DragCard>
                <div className="coin" >
                    <img src={coin50} alt="Background"  id="50" style={{height:'100%',width:'100%',background:"#255784"}} />
                </div>
            </DragCard>
            <DragCard>
                <div className="coin">
                    <img src={coin10} alt="Background" id="10" style={{height:'85%',width:'90%',marginTop:5,background:"#255784"}} />
                </div>
            </DragCard>
            <DragCard>
                <div className="coin">
                    <img src={coin5} alt="Background" id="5" style={{height:'70%',width:'80%',marginTop:15,background:"#255784"}} />
                </div>
            </DragCard>
            <DragCard>
                <div className="coin">
                    <img src={coin1} alt="Background" id="1" style={{height:'60%',width:'65%',marginTop:20,background:"#255784"}} />
                </div>
            </DragCard>
        </div>
      </div>
    
        )
    }
}
const mapStateToProps = state =>({
    machine:state.machine,
  })
  const mapDispatchToProps =  dispatch=>({
    setPrice:(price)=>dispatch(
      {
      type:'SET_PRICE',
      payload: price}
      ),
  
  });
export default connect(mapStateToProps,mapDispatchToProps)(VendingMachine);
