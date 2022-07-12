import {createContext, useEffect, useState} from "react";

export const CartContext = createContext();

export const CustomCartProvider = ({children}) => {
	const [cart, setCart] = useState(
		JSON.parse(localStorage.getItem("cart") || "[]")
	);

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cart));
	}, [cart]);

	const addItem = (item) => {
		setCart([...cart, item]);
	};

	const isInCart = (name) => {
		return cart.some((e) => e.name === name);
	};

	const itemsInCart = () => {
		return cart.reduce((acc, prod) => (acc += prod.cantidad), 0);
	};

	const cartClear = () => {
		setCart([]);
	};

	const cartTotal = () => {
		return cart.reduce((acc, prod) => (acc += prod.cantidad * prod.price), 0);
	};

	const deleteElement = (name) => {
		setCart(cart.filter((e) => e.name !== name));
	};

	const increaseQuantity = (name) => {
		const productoSeleccionado = cart.map((item) => {
			if (item.name === name) {
				if (item.cantidad < item.stock) {
					return {
						...item,
						cantidad: item.cantidad + 1,
					};
				}
			}
			return item;
		});
		setCart(productoSeleccionado);
	};

	const decreaseQuantity = (name) => {
		const productoSeleccionado = cart.map((item) => {
			if (item.name === name) {
				if (item.cantidad > 1) {
					return {
						...item,
						cantidad: item.cantidad - 1,
					};
				}
			}
			return item;
		});
		setCart(productoSeleccionado);
	};

	return (
		<CartContext.Provider
			value={{
				cart,
				setCart,
				addItem,
				isInCart,
				itemsInCart,
				cartClear,
				cartTotal,
				deleteElement,
				increaseQuantity,
				decreaseQuantity,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
