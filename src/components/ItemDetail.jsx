import React, {useContext, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {motion} from "framer-motion";
import ItemCount from "./ItemCount";
import {CartContext} from "../context/CartContext";
import "./ItemDetail.css";

const ItemDetail = ({resultado}) => {
	const {id, name, img, stock, price, category} = resultado;
	const {isInCart, addItem} = useContext(CartContext);
	const navigate = useNavigate();
	const [compra, setCompra] = useState(1);

	const handleNavigate = () => {
		navigate(-1);
	};

	const agregarAlCarrito = (cantidad) => {
		const itemToAdd = {
			...resultado,
			cantidad: cantidad,
		};
		addItem(itemToAdd);
	};

	return (
		<div className='item-detail-container'>
			<motion.div
				initial={{opacity: 0, y: 20}}
				animate={{opacity: 1, y: 0}}
				transition={{duration: 0.5}}
				className='item-detail-card'
			>
				<div className='detail-grid'>
					<div className='detail-image-section'>
						<img src={img} alt={name} className='detail-image' />
					</div>

					<div className='detail-info-section'>
						<div className='detail-category'>{category}</div>
						<h1 className='detail-name'>{name}</h1>

						<div className='detail-price-section'>
							<span className='detail-price'>${price}</span>
							<span className='detail-stock'>
								{stock > 0 ? `${stock} disponibles` : "Sin stock"}
							</span>
						</div>

						<div className='detail-divider'></div>

						{!isInCart(id) ? (
							<ItemCount
								compra={compra}
								stock={stock}
								setCompra={setCompra}
								agregarAlCarrito={agregarAlCarrito}
							/>
						) : (
							<div className='detail-actions-added'>
								<p className='added-message'>✓ Producto agregado al carrito</p>
								<div className='detail-buttons'>
									<Link to='/'>
										<button className='btn-continue'>
											Continuar comprando
										</button>
									</Link>
									<Link to='/cart'>
										<button className='btn-checkout'>Ir al carrito</button>
									</Link>
								</div>
							</div>
						)}
					</div>
				</div>

				<div className='detail-back-button'>
					<button onClick={handleNavigate} className='btn-back'>
						← Volver
					</button>
				</div>
			</motion.div>
		</div>
	);
};

export default ItemDetail;
