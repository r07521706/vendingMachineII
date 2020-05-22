import keyProducts from './v_machine.data'
import vMachineActionTypes from './v_machine.type'
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
           case vMachineActionTypes.SET_PRICE:
               return{
                   ...state,
                  price:action.payload
               }
            case vMachineActionTypes.SET_NUMBER:
                return{
                    ...state,
                    number:state.number+(action.payload)
                }
            case vMachineActionTypes.CLEAN_NUMBER:
                return{
                    ...state,
                    number:''
                }
            case vMachineActionTypes.ADD_COIN:
                return{
                    ...state,
                    coin:state.coin+Number(state.chooseCoin)
                }
            case vMachineActionTypes.CHOOSE_COIN:
                return{
                    ...state,
                    chooseCoin:action.payload
                }
            case vMachineActionTypes.CLEAN_COIN:
                return{
                    ...state,
                    coin:0
                }
            case vMachineActionTypes.SET_LAMP:
                return{
                    ...state,
                    lamp:action.payload
                }
           default:
               return state
       }
   }
   
   export default machineReducer;
   