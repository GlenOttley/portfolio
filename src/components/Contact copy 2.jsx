import { useForm } from "react-hook-form";
import githubIcon from "../images/icons/github.svg";
import twitterIcon from "../images/icons/twitter.svg";
import linkedinIcon from "../images/icons/linkedin.svg";

function Contact({ breakPoints }) {

  async function onSubmit(data) {
  	const response = await fetch("/submit", {
  		method: "POST",
  		headers: {
  			"Content-Type": "application/json"
  		},
  		body: JSON.stringify({data})
  	});

  	if (response.ok) {
  		alert("Thanks for getting in touch, I will get back to you shortly.");
  		document.getElementById("contact-form").reset();
  	} else {
  		alert("Something went wrong, please try again.")
  	}
  }

  const { register, handleSubmit, formState: { errors } } = useForm();

	return (
		<div className="contact container">

			<div className="contact__message">
				<h2 className="contact__heading">Get in Touch</h2>
				
				<div className="contact__right">
					<p>Thank you for taking the time to peruse my portfolio so far. 
					I’d love to hear what you’re working on and how I could help. 
					I’m looking for an exciting new role with a great company in Toronto, 
					but I’m also open to working as part of a remote team elsewhere.
					Diligent, optimistic and detail-oriented, 
					I think I would be an asset to your web development team.  
					Please get in touch using this form. </p>

				  {/*<div className="row contact__icons">
		    		<img
		    		alt="github logo"
		    		src={githubIcon} />
		    		<img
		    		alt="twitter logo"
		    		src={twitterIcon} />
		    		<img
		    		alt="linkedin logo"
		    		src={linkedinIcon} />
		    	</div>*/}
		    </div>

		  </div>

		  <div className="form">

		  	<h2 className="form__heading">Contact Me</h2>

			  <form 
			  id="contact-form" 
			  method="POST"
			  onSubmit={handleSubmit((data) => {
			  	onSubmit(data);
			  })}
			  >
			    <div className="form__group">

			        <label
			        className="form__label" 
			        htmlFor="name">
			        Name
			        </label>

			        <input {
			        	...register("name", {
			        		required: "This field is required" 
			        	})}
			        type="text" 
			        className="form__field"     
			        placeholder="Jane Appleseed"
			        style={{ outline: errors.name ?  "2px solid var(--bright-red" : null }}
			        />

			        {errors.name && 
			        	<span className="form__error">{errors.name.message}</span>
			        }

			    </div>

			    <div className="form__group">

			        <label
			        className="form__label" 
			        htmlFor="exampleInputEmail1">
			        Email Address
			        </label>

			        <input {
			        	...register("email", {
			        		required: "This field is required",
			        		pattern: {
			        			value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
			        			message: "Please use a valid email address"
			        		}
			        	})}
			        type="text"
			        className="form__field"
			        placeholder="email@example.com"
			        style={{ outline: errors.email ?  "2px solid var(--bright-red" : null }}
			        />

			        {errors.email && 
			        	<span className="form__error">{errors.email.message}</span>
			        }

			    </div>

			    <div className="form__group">

			        <label
			        className="form__label" 
			        htmlFor="message">
			        Message
			        </label>

			        <textarea {
			        	...register("message", {
			        		required: "This field is required" 
			        	})}
			        className="form__field" 
			        rows="3"        
			        placeholder="How can I help?"
			        style={{ outline: errors.message ?  "2px solid var(--bright-red" : null }}
			        >
			        </textarea>

			        {errors.message && 
			        	<span className="form__error">{errors.message.message}</span>
			        }

			    </div>

			    <button 
			    type="submit"
	  			className="btn btn-primary">
	  				<p className="btn__text btn-primary__text">SEND MESSAGE</p>
	  			</button>

				</form>

			</div>

		</div>
	)
}

export default Contact;


// PASTE BELOW OPENING BODY TAG IN INDEX.html
// <form 
// name="contact-form"
// netlify
// netlify-honeypot="bot-field"
// action="thank-you"
// hidden>

//   <input
//   name="name"
//   type="text"
//   />

//   <input
//   name="email"
//   type="text"
//   />

//   <textarea
//   name="message">

//   </textarea>

// </form>