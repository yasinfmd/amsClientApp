import { User } from "../../Models/User.model";

export default interface IStore {
    locale: string
    token: string
    user: User
  }