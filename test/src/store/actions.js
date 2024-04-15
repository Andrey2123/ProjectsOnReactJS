const ACTION_COUNTER_INCREMENT = 'ACTION_COUNTER_INCREMENT';
const ACTION_COUNTER_DECREMENT = 'ACTION_COUNTER_DECREMENT';
const ACTION_COUNTER_SET = 'ACTION_COUNTER_SET';
const ACTION_COUNTER_WITH_PAYLOAD = 'ACTION_COUNTER_WITH_PAYLOAD';

const actionCreator = (type, payload) => {
    let action = {type};
    if(payload) action.payload = payload
    return action;
}
  
const incrementAction = actionCreator(ACTION_COUNTER_INCREMENT)
const decrementAction = actionCreator(ACTION_COUNTER_DECREMENT)
const setAction = actionCreator(ACTION_COUNTER_SET)
const setActionWithValue = actionCreator(ACTION_COUNTER_WITH_PAYLOAD, 10)

export {
    ACTION_COUNTER_DECREMENT,
    ACTION_COUNTER_INCREMENT,
    ACTION_COUNTER_SET,
    ACTION_COUNTER_WITH_PAYLOAD,
    incrementAction,
    decrementAction,
    setAction,
    setActionWithValue
}