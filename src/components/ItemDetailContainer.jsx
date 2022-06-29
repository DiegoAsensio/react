import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

export default function ItemDetailContainer() {
	const [resultado, setResultado] = useState({});
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);
	const { id } = useParams();
	useEffect(() => {
		const db = getFirestore();
		const productRef = doc(db, "items", id);

		getDoc(productRef)
			.then((snapshot) => {
				setResultado({ ...snapshot.data(), id: snapshot.id });
			})
			.catch((error) => {
				setError(error);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [id]);

	return <>{loading ? "Cargando..." : <ItemDetail resultado={resultado} />}</>;
}
