import React from "react";
import {useParams} from "react-router-dom";
import ItemList from "../Items/ItemList";
import {useProducts} from "../../hooks/useProducts";
import LoadingSpinner from "../common/LoadingSpinner";
import "./ItemListContainer.css";

export default function ItemListContainer() {
	const {id} = useParams();
	const {products, loading, error} = useProducts(id);

	if (loading) {
		return <LoadingSpinner />;
	}

	if (error) {
		return (
			<div className='error-container'>
				<h3>Error al cargar productos</h3>
				<p>
					Estamos teniendo problemas con nuestros servidores, pronto volverá a
					la normalidad
				</p>
			</div>
		);
	}

	if (products.length === 0) {
		return (
			<div className='empty-container'>
				<h3>No hay productos disponibles</h3>
				<p>Por favor, verifica que la base de datos tenga productos cargados</p>
			</div>
		);
	}

	return (
		<>
			<div className='products-section'>
				{id && (
					<div className='category-header'>
						<h2>Categoría: {id}</h2>
					</div>
				)}
				<ItemList resultado={products} />
			</div>
		</>
	);
}
