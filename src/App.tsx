import React, { useEffect, useState } from 'react';
import './index.css';
import 'antd/dist/antd.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Page from './components/Page';

const initialValue:any=[]

const reducer = (state = initialValue, action: any) =>{
  switch (action.type) {
    case 'ADD_ITEM':
      return [action.payload] 
    default:
      return state
  }

}
const store = createStore(reducer)

function App() {

  return (
    <Provider store={store}>
    <div className="App">
    <Page/>
    </div>
    </Provider>

  );
}

export default App;
