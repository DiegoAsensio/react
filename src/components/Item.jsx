import React from "react";
import {Card, ListGroup, ListGroupItem, Button} from "react-bootstrap";
import {Link} from "react-router-dom";

const Item = ({item}) => {
	return (
		<Card
			style={{width: "18rem", marginLeft: "15px", backgroundColor: "#0F395C"}}
		>
			<img
				src={item?.img}
				alt={item.name}
				style={{maxWidth: "100%", maxHeight: "100%"}}
			/>
			<Card.Body>
				<Card.Title style={{color: "#fff"}}>{item.name}</Card.Title>
			</Card.Body>
			<ListGroup className='list-group-flush'>
				<ListGroupItem style={{backgroundColor: "#0F395C", color: "#fff"}}>
					Precio: ${item.price}
				</ListGroupItem>
				<ListGroupItem style={{backgroundColor: "#0F395C", color: "#fff"}}>
					Categoria: {item.category}
				</ListGroupItem>
				<Link to={`/detail/${item.id}`}>
					<Button variant='primary' size='lg'>
						Detalle
					</Button>
				</Link>
			</ListGroup>
		</Card>
	);
};

export default Item;
