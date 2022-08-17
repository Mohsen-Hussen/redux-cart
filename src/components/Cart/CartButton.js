import React from "react";
import classes from "./CartButton.module.css";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../../store/uiSlice";

const CartButton = (props) => {
	const cartQuantity = useSelector((state) => state.cart.totalQuantity);
	const dispatch = useDispatch();

	const toggleCartHandler = () => {
		dispatch(toggle());
	};
	return (
		<button className={classes.button} onClick={toggleCartHandler}>
			<span>My Cart</span>
			<span className={classes.badge}>{cartQuantity}</span>
		</button>
	);
};

export default CartButton;
