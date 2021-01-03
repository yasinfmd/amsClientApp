import React from "react"
import {AppStateContext} from "./store"
export default function useAppState() {
    const context = React.useContext(AppStateContext)
    if (context === undefined) {
      throw new Error('useCountState must be used within a CountProvider')
    }
    return context
  }