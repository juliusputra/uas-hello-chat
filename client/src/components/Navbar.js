import React, { useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import $ from "jquery";

export default function Navbar() {
	useEffect(() => {
		$(window).on('click', function(event) {
			let $clickOver = $(event.target)
		
			if ($('.navbar .navbar-toggler').attr('aria-expanded') == 'true' && $clickOver.closest('.navbar').length === 0) {
				$('button[aria-expanded="true"]').click();
			}
		})
	})

	const logoutRefresh = (e) => {
		e.preventDefault()

		localStorage.removeItem('whatsapp-clone-id')
		localStorage.removeItem('whatsapp-clone-conversations')
		localStorage.removeItem('whatsapp-clone-contacts')

		window.location.href = '/'
	}

	const location = useLocation()

	return (
		<nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<Link className="navbar-brand" to="/">Hello Chat</Link>
				
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className={`nav-item ${location.pathname == '/' || location.pathname == '/home' ? 'active' : ''}`}>
							<Link className="nav-link" to="/">Home</Link>
						</li>

						<li className={`nav-item ${location.pathname == '/about' ? 'active' : ''}`}>
							<Link className="nav-link" to="/about">About</Link>
						</li>
					</ul>
					
					<ul className="navbar-nav ml-auto">
						{localStorage.getItem('whatsapp-clone-id') && (<li className="nav-item">
							<form onSubmit={logoutRefresh}>
								<button type="submit" className="nav-link btn btn-dark">Logout</button>
							</form>
						</li>)}
					</ul>
				</div>
			</div>
		</nav>
	)
}