const INITIAL_STATE={
    price:0,
    number:'',
    coin:0,
    chooseCoin:''
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
           default:
               return state
       }
   }
   
   export default machineReducer;
   