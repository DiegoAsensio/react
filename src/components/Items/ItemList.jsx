import React from "react";
import Item from "../Item";
import "./ItemList.css";

const ItemList = ({resultado}) => {
	return (
		<div className='productos'>
			{resultado?.map((item) => (
				<Item key={item.id} item={item} />
			))}
		</div>
	);
};

export default ItemList;
