import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../store/actions";
// import { toggle } from '../../store/actions';
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.cartReducer.totalQuantity);
  console.log(totalQuantity);
  const toggleCartHandler = () => {
    dispatch(toggle());
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
