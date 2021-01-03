import React from 'react'
import appReducer from './reducer'
import useAppDispatch from './useAppDispatch';
import useAppActions from './useAppActions';
import useAppState from "./useAppState"
import { initState } from './initialState'

let initialState:any;
export const AppStateContext = React.createContext(initialState)
export const AppDispatchContext = React.createContext(initialState)
function AppProvider({children}:any) {
  const [state, dispatch] = React.useReducer(appReducer, initState)
  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  )
}
export {AppProvider,useAppActions,useAppDispatch,useAppState}