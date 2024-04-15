import { useDispatch} from 'react-redux';
import { createStore } from '@reduxjs/toolkit';

const {store}=require('./store/store.js');
const {
  ACTION_COUNTER_DECREMENT,
    ACTION_COUNTER_INCREMENT,
    ACTION_COUNTER_SET,
    ACTION_COUNTER_WITH_PAYLOAD,
    incrementAction,
    decrementAction,
    setAction,
    setActionWithValue
} = require('./store/actions');

const reducer = (state = {counter: 0}, {type, payload})=>{
  switch(type) {
    case 'ACTION_COUNTER_INCREMENT':
      return { counter: state.counter + 1}

    case 'ACTION_COUNTER_DECREMENT':
      return {counter: state.counter - 1}
      
    case 'ACTION_COUNTER_SET':
      return {counter: 5}

    case 'ACTION_COUNTER_WITH_PAYLOAD':
      return {counter: payload}

    default: 
      return state;
  }
}
store.dispatch(setActionWithValue)
store.dispatch(incrementAction)
console.log(store.getState());
