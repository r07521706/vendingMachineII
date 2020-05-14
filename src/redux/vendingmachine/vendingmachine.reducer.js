const noKeyProducts = [{'name':'飲料','price':10},{'name':'舒跑','price':15},{'name':'沙士','price':20},{'name':'雪碧','price':24},{'name':'泡麵','price':30},{'name':'紅茶','price':30}
,{'name':'綠茶','price':18},{'name':'苦茶','price':38},{'name':'飲料','price':10},{'name':'舒跑','price':15},{'name':'沙士','price':20},{'name':'雪碧','price':24},{'name':'泡麵','price':30},{'name':'紅茶','price':30}
,{'name':'綠茶','price':18},{'name':'苦茶','price':38},{'name':'沙士','price':20},{'name':'雪碧','price':24},{'name':'泡麵','price':30},{'name':'紅茶','price':30}
,{'name':'綠茶','price':18}]
let keyProducts = [];
for (let i =0;i<noKeyProducts.length;i++){
    keyProducts.push({...noKeyProducts[i],key:i})
}

const INITIAL_STATE={
    price:0,
    number:'',
    coin:0,
    chooseCoin:'',
    productDatas:keyProducts,
    lamp:''
   }
   
   const machineReducer = (state = INITIAL_STATE,action)=>{
       switch(action.type){
           case 'SET_PRICE':
             
               return{
                   ...state,
                  price:action.payload
               }
            case 'SET_NUMBER':
                return{
                    ...state,
                    number:state.number+(action.payload)
                }
            case 'CLEAN_NUMBER':
                return{
                    ...state,
                    number:''
                }
            case 'ADD_COIN':
                return{
                    ...state,
                    coin:state.coin+Number(state.chooseCoin)
                }
            case 'CHOOSE_COIN':
                return{
                    ...state,
                    chooseCoin:action.payload
                }
            case 'CLEAN_COIN':
                return{
                    ...state,
                    coin:0
                }
            case 'SET_LAMP':
                return{
                    ...state,
                    lamp:action.payload
                }
           default:
               return state
       }
   }
   
   export default machineReducer;
   