import React, {useContext, useState} from "react";
import {CartContext} from "../context/CartContext";

const CartItem = ({item}) => {
	const {name, img, cantidad, price, stock} = item;

	const {deleteElement, increaseQuantity, decreaseQuantity} =
		useContext(CartContext);

	const [edit, setEdit] = useState(false);
	const handleEdit = () => {
		!edit ? setEdit(true) : setEdit(false);
	};

	return (
		<>
			<div
				style={{
					width: "500px",
					maxWidth: "85%",
					backgroundColor: "#f5f5f5",
					borderRadius: "10px",
				}}
				className='card my-4 mx-auto text-black py-2'
			>
				<div className='row g-0 m-2'>
					<div className='col-md-4'>
						<img
							src={img}
							alt={`${name}`}
							style={{maxHeight: "200px"}}
							className='img-fluid rounded'
						/>
					</div>
					<div className='col-md-8'>
						<div className='card-body px-auto'>
							<h5 className='card-title fw-bold text-uppercase'>{name}</h5>
							<p className='card-text m-0'>Precio por unidad: ${price}</p>
							<p className='card-text m-0'>Unidades solicitadas: {cantidad}</p>
							<span>
								<p className='mt-1 fw-bold'>TOTAL: ${price * cantidad}</p>
							</span>

							{!edit ? (
								<div>
									<button
										onClick={handleEdit}
										className='btn btn-warning btn-sm mx-2'
									>
										Editar
									</button>

									<button
										onClick={() => deleteElement(name)}
										className='btn btn-danger btn-sm mx-2'
									>
										Eliminar
									</button>
								</div>
							) : (
								<div className='d-flex justify-content-center'>
									<button
										onClick={() => decreaseQuantity(name)}
										className='btn btn-warning btn-sm mx-1'
									>
										-
									</button>

									<span style={{width: "3rem"}} className='text-dark'>
										{cantidad} / {stock}
									</span>

									<button
										onClick={() => increaseQuantity(name)}
										className='btn btn-warning btn-sm mx-1'
									>
										+
									</button>

									<button
										onClick={handleEdit}
										className='btn btn-sm mx-4 btn-success'
									>
										Realizado
									</button>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CartItem;
