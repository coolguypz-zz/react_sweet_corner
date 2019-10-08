import types from '../action/type.js'

const DEFAULT_STATE={
  details:null
}

export default (state = DEFAULT_STATE,action)=>{
  switch(action.type){
    case types.GET_GUEST_ORDER_DETAILS:
      return{
        ...state,
        orderDetail:action.orderDetail.data
      }
     case types.GET_USER_ORDER_DETAIL:
       return{
         ...state,
         details:action.payload,
       }
      default:
        return{
          ...state
        }
  }
}