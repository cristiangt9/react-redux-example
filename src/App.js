import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { getCartData, sendCartData } from "./store/actions";

let initial = true;

function App() {
  const dispatch = useDispatch();
  const cartIsVisible = useSelector((state) => state.uiReducer.cartIsVisible);
  const cartItems = useSelector((state) => state.cartReducer.items);
  const notification = useSelector((state) => state.uiReducer.notification);

  useEffect(() => {
    // update items in the backend
    // simuletion off sending..
    if (initial) {
      console.log("geting the cart items...");
      dispatch(getCartData());
      initial = false;
      return;
    }
    dispatch(sendCartData(cartItems));
    console.log("Sending new car to backend", cartItems);
  }, [cartItems, dispatch]);
  return (
    <>
      {notification && <Notification notification={notification} />}
      <Layout>
        {cartIsVisible && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
