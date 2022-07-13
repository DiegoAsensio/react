import React from "react";
import {Link} from "react-router-dom";
import CartWidget from "../CartWidget";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./NavBar.css";

function MyNavBar() {
	return (
		<div
			id='navbar'
			className='sticky d-flex justify-content-around align-items-center'
		>
			<div className='nav-left'>
				<DropdownButton
					id='dropdown-basic-button'
					title='Catálogo'
					variant='danger'
				>
					<Dropdown.Item>
						{" "}
						<Link to='/'>Productos</Link>
					</Dropdown.Item>
					<Dropdown.Item>
						{" "}
						<Link to='/category/ejercicio'>Ejercicio</Link>
					</Dropdown.Item>
					<Dropdown.Item>
						{" "}
						<Link to='/category/urbana'>Urbanas</Link>
					</Dropdown.Item>
				</DropdownButton>
			</div>

			<div>
				<Link to='/'>
					<div className='logo'>
						<img className='w-25' src={"/img/logoShoes.png"} alt='Logo' />
						<div className=' logo-text'>
							<h1>
								Perfect<span>shoes</span>
							</h1>
						</div>
					</div>
				</Link>
			</div>

			<div className='nav-right'>
				<Link to='/cart'>
					<CartWidget />
				</Link>
			</div>
		</div>
	);
}

export default MyNavBar;
