import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer() {
    const [personajes, setPersonajes] = useState([]);

    useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
    .then(res => res.json())
    .catch(error => console.log(error))
    .then(res => setPersonajes(res.results))
    }, [])
    
    console.log(personajes)

return (
    <div>
        <ItemDetail personajes={personajes} />
    </div>
)
}
