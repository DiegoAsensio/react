import React, {useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";
import {useParams} from "react-router-dom";
import {getProductById} from "../api/products";
import LoadingSpinner from "./common/LoadingSpinner";

export default function ItemDetailContainer() {
	const [producto, setProducto] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);
	const {id} = useParams();

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				setLoading(true);
				setError(null);
				const data = await getProductById(id);
				setProducto(data);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchProduct();
	}, [id]);

	if (loading) {
		return <LoadingSpinner />;
	}

	if (error) {
		return (
			<div
				className='text-center mt-5'
				style={{color: "#fff", padding: "4rem 2rem"}}
			>
				<h2>Error al cargar el producto</h2>
				<p>{error}</p>
			</div>
		);
	}

	return (
		<div className='text-center mt-5'>
			<h2 style={{color: "#fff", marginBottom: "3rem"}}>
				DETALLE DEL PRODUCTO
			</h2>
			{producto && <ItemDetail resultado={producto} />}
		</div>
	);
}
