import React, {useContext, useState} from "react";
import Swal from "sweetalert2";
import {CartContext} from "../../context/CartContext";
import {Navigate} from "react-router-dom";
import {addDoc, collection, getFirestore} from "firebase/firestore";
import "./Checkout.css";

const Checkout = () => {
	const {cart, cartTotal, cartClear} = useContext(CartContext);
	const db = getFirestore();
	const ordersRef = collection(db, "orders");

	const [values, setValues] = useState({
		name: "",
		email: "",
	});

	const handleChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};

	const [errorMsg, setErrorMsg] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (values.name === "" || values.email === "") {
			setErrorMsg(true);
		}

		if (values.name !== "" && values.email !== "") {
			const order = {
				items: cart,
				total: cartTotal(),
				buyer: {values},
			};

			addDoc(ordersRef, order)
				.then((doc) => {
					cartClear();
					Swal.fire({
						title: "Compra realizada",
						html: `Tu compra ha sido realizada con éxito. Muchas gracias! <br>&#128516; <br> <br> <b>ID de orden: ${doc.id}</b>`,
						icon: "success",
						confirmButtonText: "Confirmar",
						confirmButtonColor: "seagreen",
					});
				})
				.catch((err) => {
					console.log(err);
				});
		}
	};

	if (cart.length === 0) {
		return <Navigate to='/' />;
	}

	return (
		<div className='container' style={{color: "#fff"}}>
			<h2>CHECKOUT</h2>
			<p>Ingresá tus datos para terminar la compra</p>
			<div>
				<div className='container formContact'>
					<form onSubmit={handleSubmit} className='form-control'>
						<input
							type='text'
							placeholder='Escribí tu nombre'
							className='form-control my-2'
							onChange={handleChange}
							name='name'
						/>

						<input
							type='email'
							placeholder='Escribí tu mail'
							className='form-control my-2'
							onChange={handleChange}
							name='email'
						/>

						<div>
							<button type='submit' className='btn btn-success my-3'>
								Finalizar Compra
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
