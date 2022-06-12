/* import React, { useEffect, useState } from 'react'
import ItemList from '../Items/ItemList';
import './ItemListContainer.css'

export default function ItemListContainer() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [resultado, setResultado] = useState([]);

  useEffect(() => {
    const productos = new Promise((res, rej) => {
      setTimeout(() => {
        res([{
          "id": 1,
          "nombre": "Nike",
          "tipo": "ejercicio",
          "cantidad": 1,
          "desc": "Unas zapatillas que vinieron a revolucionar el mercado.",
          "precio": 12500,
          "img": "img/zapatillasNike.jpg"
      }, {
          "id": 2,
          "nombre": "Adidas",
          "tipo": "ejercicio",
          "cantidad": 1,
          "desc": "Una zapatilla ideal a la hora de hacer ejercicio, tanto como en casa como afuera.",
          "precio": 10500,
          "img": "img/zapatillasAdidas.jpg"
      }, {
          "id": 3,
          "nombre": "Air Jordan",
          "tipo": "urbana",
          "cantidad": 1,
          "desc": "Si hablamos de clasicos no hay nada como un buen par de Jordans. Sumate al movimiento.",
          "precio": 22500,
          "img": "img/zapatillasJordan.jpg"
      },
      
      {
          "id": 4,
          "nombre": "Puma",
          "tipo": "urbana",
          "cantidad": 1,
          "desc": "Para los que buscan un diseño audaz pero hermoso a la vez.",
          "precio": 9500,
          "img": "img/zapatillasPuma.jpg"
      },
      {
          "id": 5,
          "nombre": "Converse",
          "tipo": "urbana",
          "cantidad": 1,
          "desc": "Es una moda que llegó para quedarse, una de las zapatillas mas usadas en todo el mundo.",
          "precio": 8500,
          "img": "img/zapatillasConverse.jpg"
      }
      ]);
      }, 1000);
    });

    productos
      .then((result) => {
        setResultado(result);
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  console.log(resultado)

  return (
    <>
      <div>{loading && 'Cargando...'}</div>
      <div>{error && 'Estamos teniendo problemas con nuestros servidores, pronto volverá a la normalidad'}</div>
      <div>
        <ItemList resultado={resultado} />
      </div>
    </>
  );
} */