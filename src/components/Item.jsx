import React, {memo} from "react";
import {Card, ListGroup, ListGroupItem, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import "./Item.css";

const Item = ({item}) => {
	return (
		<motion.div
			whileHover={{y: -8, scale: 1.02}}
			transition={{duration: 0.3}}
			className='item-wrapper'
		>
			<Card className='product-card'>
				<div className='product-badge'>{item.category}</div>

				<div className='product-image-wrapper'>
					<img
						src={item?.img}
						alt={item.name}
						className='product-image'
						loading='lazy'
					/>
					<div className='product-overlay' />
				</div>

				<Card.Body className='product-body'>
					<Card.Title className='product-title'>{item.name}</Card.Title>
				</Card.Body>

				<ListGroup className='list-group-flush'>
					<ListGroupItem className='product-info'>
						<span className='product-price'>${item.price}</span>
					</ListGroupItem>
					<ListGroupItem className='product-info'>
						<span className='product-stock'>Stock: {item.stock}</span>
					</ListGroupItem>
				</ListGroup>

				<div className='product-action'>
					<Link to={`/detail/${item.id}`}>
						<Button className='product-button'>Ver Detalles</Button>
					</Link>
				</div>
			</Card>
		</motion.div>
	);
};

export default memo(Item, (prevProps, nextProps) => {
	return prevProps.item.id === nextProps.item.id;
});
