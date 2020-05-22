export const splitProductDatas=(data)=>{
    let rowNum=(Math.ceil(data.length/7));
    let rowProducts=[]
    let rowProduct=[]
    let real_index =0
    let new_productDatas=data
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

