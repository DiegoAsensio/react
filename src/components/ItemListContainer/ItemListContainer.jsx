import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getProductos } from '../../helpers/products';
import ItemList from '../Items/ItemList';
import './ItemListContainer.css'

export default function ItemListContainer() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [resultado, setResultado] = useState([]);
  const {category} = useParams();
  useEffect(() => {

    getProductos
      .then((result) => {
        if (category) {
          setResultado(result.filter(producto => producto.categoria === category));
        }else {
        setResultado(result);
        }
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [category]);

  console.log(category)
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
}