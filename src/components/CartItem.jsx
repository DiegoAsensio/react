import React, {useContext, useState} from "react";
import {CartContext} from "../context/CartContext";
import "./CartItem.css";

const CartItem = ({item}) => {
	const {name, img, cantidad, price, stock, id} = item;
	const {deleteElement, increaseQuantity, decreaseQuantity} =
		useContext(CartContext);
	const [edit, setEdit] = useState(false);

	const handleEdit = () => {
		setEdit(!edit);
	};

	return (
		<div className='cart-item'>
			<div className='cart-item-content'>
				<div className='cart-item-image'>
					<img src={img} alt={name} />
				</div>

				<div className='cart-item-info'>
					<h3 className='cart-item-name'>{name}</h3>
					<p className='cart-item-price'>Precio: ${price}</p>
					<p className='cart-item-quantity'>Cantidad: {cantidad}</p>
					<p className='cart-item-total'>
						<strong>Total: ${price * cantidad}</strong>
					</p>

					{!edit ? (
						<div className='cart-item-actions'>
							<button onClick={handleEdit} className='btn-edit'>
								✏️ Editar
							</button>
							<button onClick={() => deleteElement(id)} className='btn-delete'>
								🗑️ Eliminar
							</button>
						</div>
					) : (
						<div className='cart-item-edit'>
							<button
								onClick={() => decreaseQuantity(id)}
								className='quantity-control'
								disabled={cantidad <= 1}
							>
								−
							</button>
							<span className='quantity-value'>
								{cantidad} / {stock}
							</span>
							<button
								onClick={() => increaseQuantity(id)}
								className='quantity-control'
								disabled={cantidad >= stock}
							>
								+
							</button>
							<button onClick={handleEdit} className='btn-done'>
								✓ Listo
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default CartItem;
