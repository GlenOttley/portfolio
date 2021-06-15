import React from "react";
import { Link } from "react-router-dom";
import arrowLeft from "../images/icons/arrow-left.svg";
import arrowRight from "../images/icons/arrow-right.svg";

function ProjectDetail({ project, breakPoints }) {
	
	return (
		<div className="project--detail container">

			<div className="project__image--detail project__hero">
				<img
					alt="project hero"
					src={project.hero} 
	  			/>
			</div>

			<div className="desktop-layout">

				<div className="project__message project__message--detail desktop__left">
					<div>
						<h2 className="project__heading">{project.heading}</h2>
						
						{breakPoints.mobileSm || breakPoints.mobileLg ||
							breakPoints.tabletSm || breakPoints.desktopLg ?
							<p className="project__text">{project.description}</p>
							: null
						}	

						<div className="project__skills">
							<p className="highlight">{project.skills}</p>
							<p className="highlight">{project.languages}</p>
						</div>

					  <a 
					  className="btn btn-secondary project__link"
					  href={project.website}
					  target="_blank"
					  rel="noreferrer">
					  	<p className="btn__text btn-secondary__text">VISIT WEBSITE</p>
					  </a>

					  <a 
					  className="btn btn-secondary project__link"
					  href={project.code}
					  target="_blank"
					  rel="noreferrer">
					  	<p className="btn__text btn-secondary__text">VIEW CODE</p>
					  </a>

				  </div>

				  <div className="project__text">
				  {breakPoints.tabletLg || breakPoints.desktopSm ?
						<p>{project.description}</p>
						: null
					}	
				  </div>

				</div>

				<div className="desktop__right">
					<div className="project__background">
						<h3>Project Background</h3>
						<p className="project__text">{project.background}</p>
						{project.frontendMentor && 
						<p className="project__text project__text--italic">Design by Frontend Mentor</p>
						}
					</div>

					<div className="project__previews">
						<h3>Static Previews</h3>
						<div className="project__image--detail project__preview">
							<img
								alt="project preview"
								src={project.preview1} 
				  			/>
						</div>

						{project.preview2 && 
						<div className="project__image--detail project__preview">
							<img
								alt="project preview"
								src={project.preview2} 
				  			/>
						</div>
						}

					</div>
				</div>
			</div>

			<div className="project__nav">
				<Link 
				to={`/${project.prevProjectPath}`} 
				className="nav__previous">
					<img 
					alt="previous project"
					src={arrowLeft} />
					<h3>{project.prevProjectName}</h3>
					<p>Previous Project</p>
				</Link>

				<Link 
				to={`/${project.nextProjectPath}`}
				className="nav__next">
					<img 
						alt="next project"
						src={arrowRight} />
					<h3>{project.nextProjectName}</h3>
					<p>Next Project</p>
				</Link>
			</div>

		</div>
	)
}

export default ProjectDetail