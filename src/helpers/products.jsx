export const products=[{
    "id": 1,
    "nombre": "Nike",
    "categoria": "ejercicio",
    "cantidad": 1,
    "desc": "Unas zapatillas que vinieron a revolucionar el mercado.",
    "precio": 12500,
    "img": "/img/zapatillasNike.jpg"
}, {
    "id": 2,
    "nombre": "Adidas",
    "categoria": "ejercicio",
    "cantidad": 1,
    "desc": "Una zapatilla ideal a la hora de hacer ejercicio, tanto como en casa como afuera.",
    "precio": 10500,
    "img": "/img/zapatillasAdidas.jpg"
}, {
    "id": 3,
    "nombre": "Air Jordan",
    "categoria": "urbana",
    "cantidad": 1,
    "desc": "Si hablamos de clasicos no hay nada como un buen par de Jordans. Sumate al movimiento.",
    "precio": 22500,
    "img": "/img/zapatillasJordan.jpg"
},

{
    "id": 4,
    "nombre": "Puma",
    "categoria": "urbana",
    "cantidad": 1,
    "desc": "Para los que buscan un diseño audaz pero hermoso a la vez.",
    "precio": 9500,
    "img": "/img/zapatillasPuma.jpg"
},
{
    "id": 5,
    "nombre": "Converse",
    "categoria": "urbana",
    "cantidad": 1,
    "desc": "Es una moda que llegó para quedarse, una de las zapatillas mas usadas en todo el mundo.",
    "precio": 8500,
    "img": "/img/zapatillasConverse.jpg"
}
]

export const getProductos = new Promise((res, rej) => {
    setTimeout(() => {
      res(products);
    }, 1000);
  });