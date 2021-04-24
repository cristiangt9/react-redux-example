import * as Actions from "../actions";
const initialState = {
  items: [],
  totalQuantity: 0,
};

const cartReducer = (state = initialState, { type, payload }) => {
  let items;
  let existingItem;
  console.log(type, payload);
  console.log(state);
  switch (type) {
    case Actions.ADD_ITEM_CART:
      const newItem = payload;
      items = [...state.items];
      existingItem = items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        // add
        return {
          ...state,
          items: [
            ...state.items,
            { ...newItem, totalPrice: newItem.price, quantity: 1 },
          ],
          totalQuantity: ++state.totalQuantity,
        };
      } else {
        existingItem.quantity++; // increase
        existingItem.totalPrice += existingItem.price;
        return { ...state, items, totalQuantity: ++state.totalQuantity };
      }
    case Actions.REMOVE_ITEM_CART:
      const id = payload;
      items = [...state.items];
      existingItem = items.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        //remove
        return {
          ...state,
          items: state.items.filter((item) => item.id !== id),
          totalQuantity: state.totalQuantity--,
        };
      } else {
        //decrease
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
        return { ...state, items, totalQuantity: state.totalQuantity-- };
      }

    case Actions.LOAD_CART:
      return {
        ...state,
        items: payload.items,
        totalQuantity: payload.totalQuantity,
      };

    default:
      return state;
  }
};

export default cartReducer;
