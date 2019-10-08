import types from '../action/type'

const DEFAULTSTATE={
   user:null,
   cart:null,
   checkout:null,
   loggedIn: false
}
export default (state = DEFAULTSTATE,action)=>{
  switch(action.type){
    case types.ACTIVE_USER_LOGIN:
      return{
        user:action.payload,
        loggedIn:true
      }
    case types.USER_LOGIN:
      return{
        user:action.payload,
        loggedIn: true
      }
    case types.LOG_OUT:
      return{
        DEFAULTSTATE
      }
    case types.GET_USER_CHECKOUT:
      return{
        ...state,
        checkout:action.payload
      }

      default:
      return state
  }
} 