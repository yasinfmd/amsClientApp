import React from 'react'
import Routers from './router/index'
import LanguageProvider from './lang'
import './assets/css/global.scss'
import {AppProvider} from "./context/App/store"
function App() {
  return (
    <>
      <AppProvider>
      <LanguageProvider>
        <Routers />
      </LanguageProvider>
      </AppProvider>
    </>
  )
}

export default App
