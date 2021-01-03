import { SET_LANGUAGE, SET_TOKEN, SET_USER , DispatchType} from './actionTypes'
import IStore from './store.model'
import { User } from '../../Models/User.model'
export default function appReducer(
    state: IStore,
    action: { payload: any; type: DispatchType }
  )
 {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        locale: action.payload
      }
    case SET_USER:
      return {
        ...state,
        user: action.payload
      }
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload
      }
    default:
      return state
  }
}
