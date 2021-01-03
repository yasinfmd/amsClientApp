import React from 'react'
import useAppDispatch from "./useAppDispatch"
import IActions from '../Application/actions.model'
import { SET_LANGUAGE, SET_USER } from '../Application/actionTypes';
import { ApplicationUtils } from '../../utils';
import Login from '../../ParameterModels/onLoginParameters.model';
import request from '../../request'
import { User } from '../../Models/User.model';
import useLocalStorage from '../../customHooks/useLocalStorage';
import { initState } from '../Application/initialState';

const useAppActions = () => {
  const { setLocalStorage, removeLocalStorage } = useLocalStorage()
    const dispatch=useAppDispatch();
    const setLanguage=(locale:string):any=>{
      dispatch({ type: SET_LANGUAGE, payload: locale })
    }
  const setUser=(token:string)=>{
        if(token){
      var user = ApplicationUtils.parseJwt(token);
       dispatch({ type: SET_USER, payload: user })
     }
  }
  const onLogout=()=>{
         removeLocalStorage('token');
     dispatch({type: SET_USER, payload:initState.user});
  }
  const onLogin=(login:Login):Promise<any>=>{
         let user: User
     return request
       .post('Login/Index', login)
       .then((response) => {
         if (response.status === 200) return response.data
       })
       .then((response) => {
         if (response.success === true) {
           var token = response.data.token
           user = ApplicationUtils.parseJwt(token)
           dispatch({ type: SET_USER, payload: user })
           setLocalStorage('token', token)
         } else {
           console.log('login Error')
         }
         return response
       })
       .catch((error) => {
         debugger
       })
  }
  const actions:IActions={setLanguage,setUser,onLogin,onLogout}
  return actions
}
export default useAppActions