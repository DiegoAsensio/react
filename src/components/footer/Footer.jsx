import React from "react";
import {Link} from "react-router-dom";
import "./Footer.css";

const Footer = () => {
	return (
		<footer>
			<p>
				{" "}
				<span>Perfect Shoes.</span> Todos los derechos reservados.
			</p>
			<Link to='/about' className='btn btn-outline-dark btn-sm'>
				+ más info
			</Link>
		</footer>
	);
};

export default Footer;
