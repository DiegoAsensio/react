import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ resultado }) => {
	const { id, name, img, stock = 5, price, description, category } = resultado;
	const { cart, addItem, isInCart } = useContext(CartContext);
	const navigate = useNavigate();
	const handleNavigate = () => {
		navigate(-1);
	};
	const [compra, setCompra] = useState(1);

	const agregarAlCarrito = (compra) => {
		const ItemToAdd = {
			...resultado,
			cantidad: compra,
		};
		addItem(ItemToAdd);
	};

	return (
		<>
			<div className="d-flex flex-column px-2 align-items-center justify-content-center">
				<div
					className="card p-4 text-dark mx-2 "
					style={{ maxWidth: "700px", backgroundColor: "whitesmoke" }}
				>
					<div className="row g-0">
						<div className="col-md-4">
							<img
								src={img}
								alt={{ name }}
								className="img-fluid rounded sm-w-25"
							/>
						</div>
						<div className="col-md-8">
							<div className="card-body">
								<h4 className="card-title text-uppercase fw-bold">{name}</h4>
								<div className="mt-4">
									<p className="card-text">Categoría: {category}</p>
									<p className="card-text">Descripción: {description}</p>
									<p className="card-text">Precio: ${price}</p>
									<p className="card-text">
										Stock disponible: {stock} unidades
									</p>
								</div>
							</div>
							{!isInCart(name) ? (
								<ItemCount
									compra={compra}
									stock={resultado.stock}
									setCompra={setCompra}
									agregarAlCarrito={agregarAlCarrito}
								/>
							) : (
								<div className="mt-3">
									<Link to="/">
										<button className="btn mx-2 btn-sm btn-warning">
											Continuar comprando
										</button>
									</Link>
									<Link to="/cart">
										<button className="btn mx-2 btn-sm btn-primary">
											Terminar compra
										</button>
									</Link>
								</div>
							)}
						</div>
					</div>
				</div>
				<div className="mt-5">
					<button onClick={handleNavigate} className="m-2 mb-5 btn btn-primary">
						Volver
					</button>
					<Link to="/">
						<button className="m-2 mb-5 btn btn-primary">Ir a la Home</button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default ItemDetail;
