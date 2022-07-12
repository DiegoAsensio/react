import React from "react";
import "./About.css";

const About = () => {
	return (
		<div className='container about'>
			<h2 className='mt-5'>ACERCA DE</h2>

			<p className='main-text'>
				<img className='logo' src={"/img/logoShoes.png"} alt='Logo' /> es un
				e-commerce ficticio, desarrollado por <span>Diego Asensio</span>, como
				proyecto final para el curso de <span>React JS</span> de Coderhouse.
			</p>

			<div className='images-container'>
				<img src={"/img/react.png"} alt='Logo React' />
				<img src={"/img/firebase.png"} alt='Logo Firebase' />
				<img src={"/img/css.png"} alt='Logo Css' />
				<img src={"/img/bootstrap.png"} alt='Logo Bootstrap' />
			</div>

			<div className='description'>
				<p>Para realizar el sitio:</p>

				<ol>
					<li>
						Hice uso de los <span>Hooks propios de React</span> ( useState(),
						useEffect, useRef(), etc. ).
					</li>
					<li>
						Prioricé la <span>reutilización de componentes</span>. De esta
						manera se utilizan los mismos componentes, esto sucede con las
						tarjetas de productos, entre otros. Sólo cambia la información que
						se le pasa por props.{" "}
					</li>
					<li>
						Implementé <span>React Router DOM</span> para la navegación,
						evitando la recarga innecesaria del sitio web.
					</li>
					<li>
						Creé <span>Contexto</span> para el carrito de compras.
					</li>
					<li>
						Empleé <span>Firebase</span> como base de datos de los productos.
					</li>
					<li>
						Creé un <span>formulario</span>, con sus respectivas validaciones
					</li>
					<li>
						En cuanto a los estilos, están realizados con{" "}
						<span>Boostrap 5 y CSS</span> y es complemente responsive.
					</li>
				</ol>
			</div>

			<div className='mb-4'>
				<p className='main-text'>Para más información:</p>

				<a
					className='btn btn-dark mx-2'
					target='_blank'
					rel='noreferrer'
					href='https://github.com/DiegoAsensio/react'
				>
					Ver Código
				</a>

				<a
					className='btn btn-primary mx-2'
					target='_blank'
					rel='noreferrer'
					href='https://www.linkedin.com/in/diego-asensio/'
				>
					LinkedIn
				</a>
			</div>
		</div>
	);
};

export default About;
