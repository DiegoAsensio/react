import React from "react";
import "./ItemCount.css";

const ItemCount = ({stock = 5, compra, setCompra, agregarAlCarrito}) => {
	const sumar = () => {
		if (compra < stock) {
			setCompra(compra + 1);
		}
	};

	const restar = () => {
		if (compra > 1) {
			setCompra(compra - 1);
		}
	};

	return (
		<div className='item-count-container'>
			{stock === 0 ? (
				<button className='btn-no-stock' disabled>
					Sin stock disponible
				</button>
			) : (
				<>
					<div className='quantity-selector'>
						<button
							onClick={restar}
							className='quantity-btn'
							disabled={compra <= 1}
							aria-label='Disminuir cantidad'
						>
							−
						</button>
						<span className='quantity-display'>
							{compra} / {stock}
						</span>
						<button
							onClick={sumar}
							className='quantity-btn'
							disabled={compra >= stock}
							aria-label='Aumentar cantidad'
						>
							+
						</button>
					</div>

					<button
						onClick={() => agregarAlCarrito(compra)}
						className='btn-add-cart'
					>
						<span>🛒</span> Agregar al carrito
					</button>
				</>
			)}
		</div>
	);
};

export default ItemCount;
