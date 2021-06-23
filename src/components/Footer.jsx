import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";

function Footer({ active, setActive }) {

	return (
		
		<div className="footer">
			<div className="footer__main container">

				<Link to="/">
    			<img
	  			className="footer__icon footer__logo"
	  			alt="logo"
	  			src={logo} />
    		</Link>	
  			
  			
  			<ul className="footer__list">
	    		<Link 
	    		className="nav__item nav__item--footer" 
	    		to="/"
	    		onClick={
		    		() => { setActive("home") }
		    	}>
	    			<li>HOME</li>
	    		</Link>

	    		<Link 
	    		className="nav__item nav__item--footer" 
	    		to="/portfolio"
	    		onClick={
		    		() => { setActive("portfolio") }
		    	}>
	    			<li>PORTFOLIO</li>
	    		</Link>

	    		<Link 
	    		className="nav__item nav__item--footer" 
	    		to="/contact"
	    		onClick={
		    		() => { setActive("contact") }
		    	}>
	    			<li>CONTACT ME</li>
	    		</Link>
	    	</ul> 

	    	<div className="row footer__icons">
	    		<a 
	    		href="https://github.com/GlenOttley/"
	    		target="_blank"
	    		rel="noreferrer">
		    		<i 
		    		className="footer__icon fab fa-2x fa-github"
		    		alt="github icon"></i>
		    	</a>
	    	</div>
	    </div>

		</div>	
	)
}

export default Footer