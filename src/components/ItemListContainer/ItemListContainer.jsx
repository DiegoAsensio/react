import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import ItemList from "../Items/ItemList";
import "./ItemListContainer.css";
import {
	collection,
	getDocs,
	getFirestore,
	query,
	where,
} from "firebase/firestore";

export default function ItemListContainer() {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [resultado, setResultado] = useState([]);
	const {id} = useParams();

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				setLoading(true);
				setError(false);

				const db = getFirestore();
				const productsCollection = collection(db, "items");

				let q;
				if (id) {
					q = query(productsCollection, where("category", "==", id));
				} else {
					q = productsCollection;
				}

				const snapshot = await getDocs(q);

				if (snapshot.empty) {
					console.log("No se encontraron productos en la colección 'items'");
					setResultado([]);
				} else {
					const products = snapshot.docs.map((doc) => ({
						...doc.data(),
						id: doc.id,
					}));
					console.log("Productos cargados:", products);
					setResultado(products);
				}
			} catch (err) {
				console.error("Error al cargar productos:", err);
				setError(true);
			} finally {
				setLoading(false);
			}
		};

		fetchProducts();
	}, [id]);

	return (
		<div style={{minHeight: "50vh"}}>
			{loading && (
				<div style={{color: "#fff", textAlign: "center", padding: "2rem"}}>
					<h3>Cargando productos...</h3>
				</div>
			)}

			{error && (
				<div style={{color: "#fff", textAlign: "center", padding: "2rem"}}>
					<h3>Error al cargar productos</h3>
					<p>
						Estamos teniendo problemas con nuestros servidores, pronto volverá a
						la normalidad
					</p>
				</div>
			)}

			{!loading && !error && resultado.length === 0 && (
				<div style={{color: "#fff", textAlign: "center", padding: "2rem"}}>
					<h3>No hay productos disponibles</h3>
					<p>
						Por favor, verifica que la base de datos tenga productos cargados
					</p>
				</div>
			)}

			{!loading && !error && resultado.length > 0 && (
				<ItemList resultado={resultado} />
			)}
		</div>
	);
}
