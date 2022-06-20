import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartItem = ({ item }) => {
	const { name, img, compra, price } = item;

	const { eliminarElemento } = useContext(CartContext);

	return (
		<>
			<div className="cart-card">
				<img src={{ img }} alt="#" />

				<div className="cart-card-right">
					<h3>{name}</h3>

					<div className="cart-card-text">
						<p>Precio por unidad: ${price}</p>
						<p>Unidades solicitadas: {compra}</p>
						<span>
							<p>TOTAL: ${price * compra}</p>
						</span>
					</div>

					<div className="cart-buttons">
						<button
							onClick={() => eliminarElemento(name)}
							className="btn mx-1 btn-sm btn-danger"
						>
							<i className="bi bi-trash-fill"></i>Eliminar
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default CartItem;
