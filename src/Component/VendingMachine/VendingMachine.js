import React, { Component } from 'react'
import ProductRow from '../ProductRow/ProductRow'
import OperatePanel from '../OperatePanel/OperatePanel'
import './VendingMachine.css'
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
          
        <div className="vending-machine-body">
            
           
            {
              (this.splitProductDatas(this.state.productDatas)).map((rowProductDatas)=>{
                  return  <ProductRow productDatas={rowProductDatas[0]} key={rowProductDatas[1]}></ProductRow>
              })
            }

            <OperatePanel></OperatePanel>
            
            <div value={'oooo'} onClick={(e)=>{console.log(e.target.value)}}>
                {'oooooo'}
            </div>
          
      </div>
    
        )
    }
}

export default VendingMachine
