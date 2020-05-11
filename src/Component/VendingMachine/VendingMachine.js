import React, { Component } from 'react'
import ProductRow from '../ProductRow/ProductRow'
import OperatePanel from '../OperatePanel/OperatePanel'
import './VendingMachine.css'
import coin50 from '../../pic/coin50.jpg';
import coin10 from '../../pic/coin10.jpg'
import coin5 from '../../pic/coin5.jpg'
import coin1 from '../../pic/coin1.jpg'
import DragCard from '../DragCard/DragCard';
export class VendingMachine extends Component {
    constructor(props) {
        super(props);
        this.state = {productDatas:[{'name':'飲料','price':10},{'name':'舒跑','price':15},{'name':'沙士','price':20},{'name':'雪碧','price':24},{'name':'泡麵','price':30},{'name':'紅茶','price':30}
        ,{'name':'綠茶','price':18},{'name':'苦茶','price':38},{'name':'飲料','price':10},{'name':'舒跑','price':15},{'name':'沙士','price':20},{'name':'雪碧','price':24},{'name':'泡麵','price':30},{'name':'紅茶','price':30}
        ,{'name':'綠茶','price':18},{'name':'苦茶','price':38},{'name':'沙士','price':20},{'name':'雪碧','price':24},{'name':'泡麵','price':30},{'name':'紅茶','price':30}
        ,{'name':'綠茶','price':18}]};
      }
    
    splitProductDatas=(data)=>{
        let rowNum=(Math.ceil(this.state.productDatas.length/7));
        let rowProducts=[]
        let rowProduct=[]
        let real_index =0
        let new_productDatas=this.state.productDatas
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
                (this.splitProductDatas(this.state.productDatas)).map((rowProductDatas)=>{
                    return  <ProductRow productDatas={rowProductDatas[0]} key={rowProductDatas[1]}></ProductRow>
                })
                }

                <OperatePanel></OperatePanel>
                
            
        </div>
        <div className="coin-area">
            <DragCard>
                <div className="coin" >
                    <img src={coin50} alt="Background"  id="50" style={{height:'100%',width:'100%'}} />
                </div>
            </DragCard>
            <DragCard>
                <div className="coin">
                    <img src={coin10} alt="Background" id="10" style={{height:'85%',width:'90%',marginTop:5}} />
                </div>
            </DragCard>
            <DragCard>
                <div className="coin">
                    <img src={coin5} alt="Background" id="5" style={{height:'70%',width:'80%',marginTop:15}} />
                </div>
            </DragCard>
            <DragCard>
                <div className="coin">
                    <img src={coin1} alt="Background" id="1" style={{height:'60%',width:'65%',marginTop:20}} />
                </div>
            </DragCard>
        </div>
      </div>
    
        )
    }
}

export default VendingMachine
