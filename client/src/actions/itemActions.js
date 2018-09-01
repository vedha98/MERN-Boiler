import {GET_ITEMS,ADD_ITEMS,DELETE_ITEMS,ITEMS_LOADING} from '../actions/types';
import axios from 'axios';

export const getItems = ()=> dispatch =>{
  console.log('get called');
dispatch(itemsloading());
axios
.get('/api/items')
.then(res=>
  dispatch({
    type:GET_ITEMS,payload:res.data
  })
)
}
export const deleteItem = (id)=>dispatch=>{
axios.delete('/api/items/'+"?id="+id).then(res=>dispatch({
type:DELETE_ITEMS,
payload:id
}))
  return {
type:DELETE_ITEMS,
payload:id
  };
}
export const addItem = (item)=>dispatch=>{
  axios.post('/api/items',item).then(res=>dispatch({
    type:ADD_ITEMS,payload:res.data
  }))
  return {
type:ADD_ITEMS,
payload:item
  };
}
export const itemsloading = ()=>{

  return {
    type:ITEMS_LOADING
  };
}
