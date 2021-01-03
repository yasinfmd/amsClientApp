import IStore from "./store.model";

export   const initState: IStore = {
  locale: 'tr',
  token: '',
  user: {
    email: '',
    name: '',
    lastName: '',
    gender: '',
    complexId: ''
  }
  }