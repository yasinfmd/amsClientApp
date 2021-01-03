import React, { useReducer, useContext, createContext } from 'react'
import reducer from './reducers'

// interfaces
interface IStore {
  cabinData: Array<any>
  loading: boolean
}

interface IActions {
  fetch(data: any): Promise<any>

  save(data: any): Promise<any>

  delete(data: any): Promise<any>

  update(data: any): Promise<any>

  find(data: any): Promise<any>
}

let initialState: any
// context
const DefineBuildContext = createContext<[IStore, IActions]>(initialState)

const Store = ({ children }: any) => {
  const initialState: IStore = {
    cabinData: [],
    loading: false
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const actions: IActions = {
    save(data: object): any {},
    update(data: object): any {},
    delete(deletedData: any): any {},

    fetch(data: object): any {},
    find(data: any): any {}
  }

  return (
    <DefineBuildContext.Provider value={[state as IStore, { ...actions }]}>
      {children}
    </DefineBuildContext.Provider>
  )
}

export const useDefineCabinState = () => {
  return useContext(DefineBuildContext)
}

export default Store
