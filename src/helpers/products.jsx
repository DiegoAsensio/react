export const products = [
	{
		id: 1,
		name: "Nike",
		category: "ejercicio",
		amount: 1,
		description: "Unas zapatillas que vinieron a revolucionar el mercado.",
		price: 12500,
		img: "/img/zapatillasNike.jpg",
	},
	{
		id: 2,
		name: "Adidas",
		category: "ejercicio",
		amount: 1,
		description:
			"Una zapatilla ideal a la hora de hacer ejercicio, tanto en casa como afuera.",
		price: 10500,
		img: "/img/zapatillasAdidas.jpg",
	},
	{
		id: 3,
		name: "Air Jordan",
		category: "urbana",
		amount: 1,
		description:
			"Si hablamos de clasicos no hay nada como un buen par de Jordans. Sumate al movimiento.",
		price: 22500,
		img: "/img/zapatillasJordan.jpg",
	},

	{
		id: 4,
		name: "Puma",
		category: "urbana",
		amount: 1,
		description: "Para los que buscan un diseño audaz pero hermoso a la vez.",
		price: 9500,
		img: "/img/zapatillasPuma.jpg",
	},
	{
		id: 5,
		name: "Converse",
		category: "urbana",
		amount: 1,
		description:
			"Es una moda que llegó para quedarse, una de las zapatillas mas usadas en todo el mundo.",
		price: 8500,
		img: "/img/zapatillasConverse.jpg",
	},
];

export const getProductos = new Promise((res, rej) => {
	setTimeout(() => {
		res(products);
	}, 1000);
});
