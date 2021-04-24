export const TOGGLE = "[UI] TOGGLE CART";

export const toggle = () => ({
  type: TOGGLE,
});

export const SHOW_NOTIFICATION = "[UI] SHOW NOTIFICATION";

export const showNotification = (payload) => ({
  type: SHOW_NOTIFICATION,
  payload,
});
export const HIDE_NOTIFICATION = "[UI] HIDE NOTIFICATION";

export const hideNotification = () => ({
  type: HIDE_NOTIFICATION,
});
// export const TOGGLE = "[UI] TOOGLE";

// export const toggle = (payload) => ({
//   type: TOGGLE,
//   payload,
// });

