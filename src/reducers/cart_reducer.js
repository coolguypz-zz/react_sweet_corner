import types from "../action/type";

const DEFAULT_STATE = {
   total: null,
   cartId: null,
   items: null,
};

export default (state = DEFAULT_STATE, action) => {
   switch (action.type) {
      case types.ADD_ITEM_TO_CART:
         return {
            ...state,
            total: action.cartTotal,
         };
      case types.GET_ACTIVE_CART:
         if (!action.cart) return false;
         return {
            ...state,
            total: action.cart.total,
            cartId: action.cart.cartId,
            items: action.cart.items,
         };
      case types.GET_CART_TOTALS:
         return {
            ...state,
            total: action.total,
         };
      case types.CREATE_GUEST_ORDER:
         return {
            DEFAULT_STATE,
         };
      case types.GET_GUEST_ORDER_DETAILS:
         return {
            ...state,
         };
      case types.ITEM_DELETE:
         const id = `${action.data.config.url}!`;
         const itemId = id.slice(id.lastIndexOf("/") + 1, id.lastIndexOf("!"));
         return {
            ...state,
            items: state.items.filter(id => id.itemId !== itemId),
            total: action.data.data.total,
         };

      case types.ADD_QTY:
         const selectItem = action.payload.item;
         return {
            ...state,
            total: action.payload.total,
            ...state.items.filter(item => {
               if (item.itemId == selectItem.itemId) {
                  item.quantity = selectItem.quantity;
               }
               if (item.itemId == null) {
                  state.items.filter(id => id.itemId !== item.itemId);
               }
            }),
         };
      default:
         return state;
   }
};
