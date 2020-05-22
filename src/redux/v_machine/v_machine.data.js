const noKeyProducts = [{'name':'飲料','price':10},{'name':'舒跑','price':15},{'name':'沙士','price':20},{'name':'雪碧','price':24},{'name':'泡麵','price':30},{'name':'紅茶','price':30}
,{'name':'綠茶','price':18},{'name':'苦茶','price':38},{'name':'飲料','price':10},{'name':'舒跑','price':15},{'name':'沙士','price':20},{'name':'雪碧','price':24},{'name':'泡麵','price':30},{'name':'紅茶','price':30}
,{'name':'綠茶','price':18},{'name':'苦茶','price':38},{'name':'沙士','price':20},{'name':'雪碧','price':24},{'name':'泡麵','price':30},{'name':'紅茶','price':30}
,{'name':'綠茶','price':18}]
let keyProducts = [];
for (let i =0;i<noKeyProducts.length;i++){
    keyProducts.push({...noKeyProducts[i],key:i})
}


export default keyProducts;