import { hideNotification, showNotification } from "./ui.actions";
import DummyDataCart from "../DummyDataCart";

export const ADD_ITEM_CART = "[CART] ADD ITEM";
export const addItemCart = (payload) => ({
  type: ADD_ITEM_CART,
  payload,
});

export const REMOVE_ITEM_CART = "[CART] REMOVE ITEM";
export const removeItemCart = (payload) => ({
  type: REMOVE_ITEM_CART,
  payload,
});

export const LOAD_CART = "[CART] LOAD ITEMS";
export const loadCardData = (payload) => ({
  type: LOAD_CART,
  payload,
});

export const getCartData = () => {
  return (dispatch) => {
    setTimeout(() => {
      setTimeout(() => {
        dispatch(hideNotification());
      }, 300);

      dispatch(
        showNotification({
          status: "success",
          title: "Geted",
          message: "cart data geted!",
        })
      );
      let totalQuantity = 0;
      DummyDataCart.forEach((item) => {
        totalQuantity += item.quantity;
      });
      dispatch(
        loadCardData({
          items: DummyDataCart,
          totalQuantity,
        })
      );
    }, 500);

    dispatch(
      showNotification({
        status: "pending",
        title: "Geting...",
        message: "Geting cart data!",
      })
    );
  };
};

export const sendCartData = (cart) => {
  return (dispatch) => {
    setTimeout(() => {
      setTimeout(() => {
        dispatch(hideNotification());
      }, 300);

      dispatch(
        showNotification({
          status: "success",
          title: "Saved",
          message: "cart data saved",
        })
      );
    }, 500);

    dispatch(
      showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );
  };
};
