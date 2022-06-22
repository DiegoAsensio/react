import { createContext, useState } from "react";

export const CartContext = createContext();

export const CustomCartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addItem = (item) => {
		setCart([...cart, item]);
	};

	const isInCart = (name) => {
		return cart.some((e) => e.name === name);
	};

	const itemsInCart = () => {
		return cart.reduce((acc, prod) => (acc += prod.cantidad), 0);
	};

	const vaciarCarrito = () => {
		return setCart([]);
	};

	const cartTotal = () => {
		return cart.reduce((acc, prod) => (acc += prod.cantidad * prod.price), 0);
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
