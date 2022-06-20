import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { getProductos } from "../helpers/products";
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {
	const [resultado, setResultado] = useState({});
	const [loading, setLoading] = useState(true);
	const { id } = useParams();
	useEffect(() => {
		getProductos
			.then((result) => {
				setResultado(result.find((producto) => producto.id == id));
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	return <>{loading ? "Cargando..." : <ItemDetail resultado={resultado} />}</>;
}
