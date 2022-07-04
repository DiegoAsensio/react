import React, {useContext} from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {CartContext} from "../context/CartContext";

const CartWidget = () => {
	const {cart, itemsInCart} = useContext(CartContext);

	return (
		<>
			<div style={{paddingTop: "0.7rem"}}>
				<button
					type='button'
					className='btn btn-danger rounded-pill position-relative'
				>
					<ShoppingCartIcon />
					{cart.length > 0 && (
						<span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success'>
							{itemsInCart()}
						</span>
					)}
				</button>
			</div>
		</>
	);
};
export default CartWidget;
