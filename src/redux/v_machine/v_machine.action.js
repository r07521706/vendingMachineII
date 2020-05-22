import  vendingMachineActionTypes  from './v_machine.type';

export const setPrice = price => ({
  type: vendingMachineActionTypes.SET_PRICE,
  payload:price
});

export const setNumber = number => ( {
    type:'SET_NUMBER',
    payload: number
});

export const cleanNumber = () => ( {
    type:'CLEAN_NUMBER'
});

    
export const cleanCoin = () => ({
    type:'CLEAN_COIN'
});

