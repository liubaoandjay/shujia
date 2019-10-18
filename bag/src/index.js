import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router/Router'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import '../src/index.scss'

ReactDOM.render(<BrowserRouter>
    <Provider store={store}><Router></Router></Provider>
</BrowserRouter>, document.getElementById('root'));