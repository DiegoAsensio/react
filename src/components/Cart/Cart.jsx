import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {CartContext} from "../../context/CartContext";
import CartItem from "../CartItem";
import "./CartStyle.css";

const Cart = () => {
	const {cart, cartClear, cartTotal} = useContext(CartContext);

	if (cart.length === 0) {
		return (
			<div className='text-center mt-5 CartClear'>
				<h2 className='fw-bold mb-5 tittleCarrito'>CARRITO DE COMPRAS</h2>
				<p className='fs-5 textProducts'>
					Aún no tenés productos en tu carrito
				</p>
				<Link to='/'>
					<button className='mt-5 btn btn-primary'>Empezar a comprar</button>
				</Link>
			</div>
		);
	}

	return (
		<>
			<div className='text-center mt-5 container' style={{color: "#fff"}}>
				<h2 className='fw-bold'>CARRITO DE COMPRAS</h2>

				<div>
					<div className='my-5'>
						{cart.map((item) => (
							<CartItem item={item} key={item.id} />
						))}
					</div>

					<button onClick={cartClear} className='btn btn-danger'>
						Vaciar todo el carrito
					</button>

					<h3 className='my-5'>
						TOTAL DE LA COMPRA:
						<p className='fw-bold text-warning'> ${cartTotal()}</p>
					</h3>

					<Link to='/' className='me-3'>
						<button className='btn btn-xl btn-primary'>
							Continuar comprando
						</button>
					</Link>

					<Link to='/checkout'>
						<button className='btn btn-xl btn-success'>Finalizar compra</button>
					</Link>
				</div>
			</div>
		</>
	);
};
export default Cart;
