import { configureStore } from '@reduxjs/toolkit';
import cakeRducer from './cake/cakeReducers';

const store = configureStore({ reducer: cakeRducer });

export default store;
