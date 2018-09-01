import uuid from 'uuid';
import {GET_ITEMS,ADD_ITEMS,DELETE_ITEMS,ITEMS_LOADING} from '../actions/types';

const initialState={
items:[],
loading:false

}
export default function(state = initialState,action) {
switch (action.type) {
  case GET_ITEMS:
    return {
      ...state,items:action.payload,loading:false
    };
    break;
case DELETE_ITEMS:
return {
  ...state,
  items:state.items.filter(item => item._id !== action.payload)
};
break;
case ADD_ITEMS:
console.log(state);
return {

  ...state,items:[action.payload,...state.items]
};
break;
case ITEMS_LOADING:
  return {
    ...state,loading:true
  };
  break;
  default:
  return {
    ...state
  };
  break;
}


}
