import { combineReducers } from 'redux';

const stocksReducer = (state=[], action={}) => {
  switch(action.type){
    case 'ADD':
      return [...state, ...action.payload];
    case 'Update':
      return [...state, ...action.payload];
    case 'CREATE':
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default combineReducers(
  {
    stocks:stocksReducer
  }
);