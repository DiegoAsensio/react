import React from "react";
import {Link} from "react-router-dom";
import CartWidget from "../CartWidget";
import "./NavBar.css";

function MyNavBar() {
	return (
		<div
			id='navbar'
			className='sticky d-flex justify-content-around align-items-center'
		>
			<div className='nav-left'>
				<div lassName='menu'>
					<ul>
						<li>
							<Link to='/category/ejercicio'>Ejercicio</Link>
						</li>
						<li>
							<Link to='/category/urbana'>Urbanas</Link>
						</li>
					</ul>
				</div>
			</div>

			<div>
				<Link to='/'>
					<div className='logo'>
						<img className='w-25' src={"/img/logoShoes.png"} alt='Logo' />
						<div className=' logo-text'>
							<h1>
								Zapa<span>tillas</span>
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
