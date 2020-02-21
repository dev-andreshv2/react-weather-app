
import {SET_CITY} from '../actions/index'




  export const city =(state={} , action ) =>{ //state ={ } valor por defecto
      switch(action.type){
        
        case SET_CITY:
            return {...state, city:action.value}
        default :
            return state;
      }
  }