export default function Reducers(state: any, action: any) {
  switch (action.type) {
    case 'SET':
      return {
        cabinData: action.payload,
        loading: action.loading
      }
    default:
      return state
  }
}
