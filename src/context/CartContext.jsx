import { createContext, useState } from "react";

export const CartContext = createContext();

export const CustomCartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addItem = (resultado) => {
		setCart([resultado, ...cart]);
	};

	const isInCart = (name) => {
		return cart.some((e) => e.name === name);
	};

	const itemsInCart = () => {
		return cart.reduce((acc, prod) => (acc += prod.compra), 0);
	};

	const vaciarCarrito = () => {
		return setCart([]);
	};

	const cartTotal = () => {
		return cart.reduce((acc, prod) => (acc += prod.compra * prod.precio), 0);
	};

	const eliminarElemento = (name) => {
		setCart(cart.filter((e) => e.name !== name));
	};

	return (
		<CartContext.Provider
			value={{
				cart,
				setCart,
				addItem,
				isInCart,
				itemsInCart,
				vaciarCarrito,
				cartTotal,
				eliminarElemento,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
