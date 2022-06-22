import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartItem = ({ item }) => {
	const { name, img, cantidad, price } = item;

	const { eliminarElemento } = useContext(CartContext);

	return (
		<>
			<div className="cart-card">
				<img
					src={img}
					alt="#"
					style={{ maxWidth: "250px", maxHeight: "250px" }}
				/>

				<div className="cart-card-right">
					<h3>{name}</h3>

					<div className="cart-card-text">
						<p>Precio por unidad: ${price}</p>
						<p>Unidades solicitadas: {cantidad}</p>
						<span>
							<p>TOTAL: ${price * cantidad}</p>
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
