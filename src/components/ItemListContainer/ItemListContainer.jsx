import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../Items/ItemList";
import "./ItemListContainer.css";
import {
	collection,
	doc,
	getDocs,
	getFirestore,
	query,
	where,
} from "firebase/firestore";

export default function ItemListContainer() {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [resultado, setResultado] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		const db = getFirestore();
		const productsCollection = collection(db, "items");

		if (id) {
			const q = query(productsCollection, where("category", "==", id));

			getDocs(q)
				.then((snapshot) => {
					setResultado(
						snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
					);
				})
				.catch((error) => {
					setError(error);
				})
				.finally(() => {
					setLoading(false);
				});
		} else {
			getDocs(productsCollection)
				.then((snapshot) => {
					setResultado(
						snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
					);
				})
				.catch((error) => {
					setError(error);
				})
				.finally(() => {
					setLoading(false);
				});
		}
	}, [id]);

	console.log(id);
	console.log(resultado);
	return (
		<>
			<div>{loading && "Cargando..."}</div>
			<div>
				{error &&
					"Estamos teniendo problemas con nuestros servidores, pronto volverá a la normalidad"}
			</div>
			<div>
				<ItemList resultado={resultado} />
			</div>
		</>
	);
}
