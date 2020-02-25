
import {SET_CITY} from '../actions/index'




  export const city =(state={} , action ) =>{ //state ={ } valor por defecto
      switch(action.type){
        
        case SET_CITY:
            return action.value
        default :
            return state;
      }
  }