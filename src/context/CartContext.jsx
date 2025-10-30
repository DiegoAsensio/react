import {createContext, useCallback} from "react";
import {useLocalStorage} from "../hooks/useLocalStorage";

export const CartContext = createContext();

export const CustomCartProvider = ({children}) => {
	const [cart, setCart] = useLocalStorage("cart", []);

	const addItem = useCallback(
		(item) => {
			setCart((prevCart) => {
				const existingItem = prevCart.find((i) => i.id === item.id);

				if (existingItem) {
					return prevCart.map((i) =>
						i.id === item.id
							? {...i, cantidad: Math.min(i.cantidad + item.cantidad, i.stock)}
							: i
					);
				}

				return [...prevCart, item];
			});
		},
		[setCart]
	);

	const isInCart = useCallback(
		(id) => {
			return cart.some((e) => e.id === id);
		},
		[cart]
	);

	const itemsInCart = useCallback(() => {
		return cart.reduce((acc, prod) => acc + prod.cantidad, 0);
	}, [cart]);

	const cartClear = useCallback(() => {
		setCart([]);
	}, [setCart]);

	const cartTotal = useCallback(() => {
		return cart.reduce((acc, prod) => acc + prod.cantidad * prod.price, 0);
	}, [cart]);

	const deleteElement = useCallback(
		(id) => {
			setCart((prevCart) => prevCart.filter((e) => e.id !== id));
		},
		[setCart]
	);

	const increaseQuantity = useCallback(
		(id) => {
			setCart((prevCart) =>
				prevCart.map((item) => {
					if (item.id === id && item.cantidad < item.stock) {
						return {
							...item,
							cantidad: item.cantidad + 1,
						};
					}
					return item;
				})
			);
		},
		[setCart]
	);

	const decreaseQuantity = useCallback(
		(id) => {
			setCart((prevCart) =>
				prevCart.map((item) => {
					if (item.id === id && item.cantidad > 1) {
						return {
							...item,
							cantidad: item.cantidad - 1,
						};
					}
					return item;
				})
			);
		},
		[setCart]
	);

	const value = {
		cart,
		addItem,
		isInCart,
		itemsInCart,
		cartClear,
		cartTotal,
		deleteElement,
		increaseQuantity,
		decreaseQuantity,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
