import Login from "../../ParameterModels/onLoginParameters.model";

export default  interface IActions {
    setLanguage(locale: string): any
    onLogin(login: Login): Promise<any>
    onLogout(): void,
    setUser(token: string): void
  }

