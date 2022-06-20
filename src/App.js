
import './App.css';

import { Shop } from './components/shop';
import { Provider } from 'react-redux';
import {configureStore } from "@reduxjs/toolkit"
import shopReducer from './components/reducer/shopReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import {store} from "./components/store"

function App() {
  return (
    <>
    <Provider store={store}>
    <Shop/>
    </Provider>
    </>
  );
}

export default App;
