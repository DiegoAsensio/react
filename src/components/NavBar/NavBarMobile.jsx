import React from "react";
import CartWidget from "../CartWidget";
import {Link} from "react-router-dom";

const NavBarMobile = () => {
	const small = true;

	return (
		<header className='mobile-header'>
			<div className='navbar d-flex justify-content-around align-items-center px-3 pt-1'>
				<div>
					<Link to='/'>
						<div className='logo'>
							<img className='w-50' src={"/img/logoMobile.png"} alt='Logo' />
						</div>
					</Link>
				</div>

				<div className='nav-right'>
					<Link to='/cart'>
						<CartWidget small={small} />
					</Link>
				</div>
			</div>

			<div className='second-navbar'>
				<Link to='/'>Productos</Link>
				<Link to='/category/ejercicio'>Ejercicio</Link>
				<Link to='/category/urbana'>Urbanas</Link>
			</div>
		</header>
	);
};
export default NavBarMobile;
