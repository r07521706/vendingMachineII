const INITIAL_STATE={
    price:0,
    number:''
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
           default:
               return state
       }
   }
   
   export default machineReducer;
   