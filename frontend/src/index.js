import React from 'react'
import reactDom from 'react-dom'
import { Provider } from 'react-redux'

import App from './App'
import store from './store'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './index.css'

reactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
