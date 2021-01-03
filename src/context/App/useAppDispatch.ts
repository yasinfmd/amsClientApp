import React from "react"
import {AppDispatchContext} from "./store"
 export default function useAppDispatch() {
    const context = React.useContext(AppDispatchContext)
    if (context === undefined) {
      throw new Error('useCountDispatch must be used within a CountProvider')
    }
    return context
  }