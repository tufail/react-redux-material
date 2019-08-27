import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducer from './store/reducer';
import {Provider} from 'react-redux';
import './styles.scss';
const store = createStore(reducer)

ReactDOM.render(<Provider store = {store}><App/></Provider>, document.getElementById('root'))
