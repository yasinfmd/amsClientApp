import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import 'antd/dist/antd.css'
import ApplicationProvider from './context/Application/store'
import {AppProvider} from "./context/App/store"
ReactDOM.render(
    <AppProvider>
      <App />
    </AppProvider>,
  document.getElementById('root')
)

serviceWorker.unregister()
