import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../Redcuer/reducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunkMiddleware],
});

// Get the current state of the Redux store
const currentState = store.getState();
console.log('Current State of store:', currentState);

export default store;