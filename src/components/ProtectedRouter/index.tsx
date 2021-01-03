import { Redirect, Route } from 'react-router-dom'
import React, { useContext, useEffect, useState } from 'react'
import { ApplicationUtils } from '../../utils'
import useLocalStorage from '../../customHooks/useLocalStorage'
import { useApplicationState } from '../../context/Application/store'
import { useAppActions } from '../../context/App/store'

const ProtectedRoute = ({ component: Component, ...rest }: any) => {
  const { getLocalStorage } = useLocalStorage()
  //const [state,{setUser}] = useApplicationState();
  const {setUser}=useAppActions()

  const [isAuth, setIsAuth] = useState(false)
  const [authDone, setAuthDone] = useState('')
  useEffect(() => {
    const token = getLocalStorage('token')

    if (token !== undefined && token !== null) {
      try {
        let validToken = ApplicationUtils.parseJwt(token)
        setUser(token);
        setAuthDone('ok')
        setIsAuth(true)
      } catch (e) {
        setAuthDone('ok')
        setIsAuth(false)
      }
    } else {
      setAuthDone('ok')
      setIsAuth(false)
    }
  }, [])

  return (
    <Route
      {...rest}
      render={(props) => {
        return authDone !== '' && isAuth === true ? (
          <Component {...props} />
        ) : authDone !== '' && isAuth === false ? (
          <Redirect
            to={{
              pathname: '/login'
            }}
          />
        ) : null
      }}
    ></Route>
  )
}

export default React.memo(ProtectedRoute)
