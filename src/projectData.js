const projectData = [
{	
	path: "/planets-fact-site",
	heading: "Planets Fact Site",
	description: `To make this eight page fact site about the planets in our solar system, 
	I made extensive use of React’s conditional rendering to provide three distinct layouts for mobile, 
	tablet and desktop. SASS mixins and variables were used in addition to CSS to ensure the styles
	are neat and easy to maintain. Information about each planet is retrieved dynamically from a JavaScript object. 
	Finally, a simple state hook determines what information and image needs to be displayed for each planet. 
	Out of this world!`,
  skills: "Interaction Design / Responsive Design",
  languages: "HTML / CSS / JS / React",
  website: "https://glenottley.github.io/planets-fact-site",
  code: "https://github.com/GlenOttley/planets-fact-site",
  background: `I tend to prefer a vanilla CSS approach wherever possible, but since this project required a 
  fairly significant amount of media queries, I chose to utilise SASS mixins and variables. 
  It's one of my more recent projects and it's one that I’m particularly proud of.`,
  frontendMentor: true,
  prevProjectName: "Crowdfund",
  prevProjectPath: "crowdfund",
  nextProjectName: "To Do",
  nextProjectPath: "to-do",

  portfolio: require("./images/portfolio/planets/planets-portfolio.webp").default,
  hero: require("./images/portfolio/planets/planets-hero.jpg").default,
  preview1: require("./images/portfolio/planets/planets-preview-1.webp").default,
  preview2: require("./images/portfolio/planets/planets-preview-2.webp").default
},
{	
	path: "/to-do",
	heading: "To Do",
	description: `A neat take on the classic to-do app, with a few twists. 
	For this project, I wanted to make the app fully responsive to a range 
	of devices and include an optional dark mode. I utilised React’s state 
	hook to mark tasks as complete as well as filter out complete/incomplete tasks. 
	Task data is stored in a json file, then mapped over to create the ‘to do’ items. 
	I used the BEM naming convention to keep my CSS clean and easy to maintain.`,
  skills: "Interaction Design / Responsive Design",
  languages: "HTML / CSS / JS / React",
  website: "https://glenottley.github.io/todo-app-main/",
  code: "https://github.com/GlenOttley/todo-app-main",
  background: `This project challenged me to create something useful and user-friendly. 
  It allowed me to refine my front-end skills whilst improving and adapting my methods. 
  The ‘dark mode’ feature was implemented using the Theme Provider from React’s ‘styled-components’ library.
  Please note that since this project is hosted on GitHub pages, the backend code is disabled and your notes
   will not be saved if you refresh or leave the page. Don’t use it to make your grocery list just yet!`,
  frontendMentor: true,
  prevProjectName: "Planets Fact Site",
  prevProjectPath: "planets-fact-site",
  nextProjectName: "Crowdfund",
  nextProjectPath: "crowdfund",

  portfolio: require("./images/portfolio/todo/todo-portfolio.jpeg").default,
  hero: require("./images/portfolio/todo/todo-hero.jpeg").default,
  preview1: require("./images/portfolio/todo/todo-preview-1.jpeg").default,
  preview2: null
},
{	
	path: "/crowdfund",
	heading: "Crowdfund",
	description: `This project presented the opportunity to use modals to provide a stellar user experience 
	and keep the app to a single page. React’s state hook was used to track donations to the charity, 
	products available and progress towards the pledge goal. Since this was one of the larger CSS files I have written, 
	careful attention was paid to ensure maintainability, utilizing clearly marked sections and BEM naming throughout.`,
  skills: "Interaction Design / Responsive Design",
  languages: "HTML / CSS / JS / React",
  website: "https://glenottley.github.io/crowdfunding-product-page-main/",
  code: "https://github.com/GlenOttley/crowdfunding-product-page-main",
  background: `For this project, I wanted to create something that would challenge me to learn a new aspect of front end design. 
  Implementing the modal design ensures that the app is functional, intuitive, and easy on the eyes.`,
  frontendMentor: true,
  prevProjectName: "To Do",
  prevProjectPath: "to-do",
  nextProjectName: "Planets Fact Site",
  nextProjectPath: "planets-fact-site",

  portfolio: require("./images/portfolio/crowdfund/crowdfund-portfolio.jpeg").default,
  hero: require("./images/portfolio/crowdfund/crowdfund-hero.jpeg").default,
  preview1: require("./images/portfolio/crowdfund/crowdfund-preview-1.jpeg").default,
  preview2: require("./images/portfolio/crowdfund/crowdfund-preview-2.jpeg").default
}
// {	
// 	path: "/signup-form",
// 	heading: "Sign Up Form",
// 	description: `HTML and CSS were used to make this project fully responsive for mobile and desktop. 
// 	I used vanilla JavaScript instead of React to create the client-side form validation.`,
//   skills: "Interaction Design / Responsive Design",
//   languages: "HTML / CSS / JS",
//   website: "https://glenottley.github.io/intro-component-with-signup-form-master/",
//   code: "https://github.com/GlenOttley/intro-component-with-signup-form-master",
//   background: `This one being a fairly simple project, I wanted to up the level of difficulty a little by not relying 
//   on external form libraries. Instead, I chose to write my own form validation and error handling. 
//   It proved to be an aesthetic challenge as well as a coding one.`,
//   frontendMentor: true,
//   prevProjectName: "Crowdfund",
//   prevProjectPath: "crowdfund",
//   nextProjectName: "FAQ Page",
//   nextProjectPath: "faq-page",

//   portfolio: require("./images/portfolio/signup/signup-portfolio.jpg").default,
//   hero: require("./images/portfolio/signup/signup-hero.jpg").default,
//   preview1: require("./images/portfolio/signup/signup-preview-1.jpg").default,
//   preview2: null
// },
// {	
// 	path: "/faq-page",
// 	heading: "FAQ Page",
// 	description: `To create the drop down effect when answers are selected, I used vanilla JavaScript. 
// 	The BEM naming convention also came in handy here to keep my CSS sustainable and clean.`,
//   skills: "Interaction Design / Responsive Design",
//   languages: "HTML / CSS / JS",
//   website: "https://glenottley.github.io/faq-accordion-card-main/",
//   code: "https://github.com/GlenOttley/faq-accordion-card-main",
//   background: `One of the earlier projects I attempted, this one was full of important lessons along my coding journey. 
//   The drop down answers were tricky to implement and I learned a lot about image placement within responsive layouts. 
//   All in all, I feel like this project gave me some important skills as a web developer, skills that I can now 
//   confidently apply to almost any project I take on.`,
//   frontendMentor: true,
//   prevProjectName: "Signup Form",
//   prevProjectPath: "signup-form",
//   nextProjectName: "Planets Fact Site",
//   nextProjectPath: "planets-fact-site",

//   portfolio: require("./images/portfolio/faq/faq-portfolio.jpg").default,
//   hero: require("./images/portfolio/faq/faq-hero.jpg").default,
//   preview1: require("./images/portfolio/faq/faq-preview-1.jpg").default,
//   preview2: null
// }
]

export default projectData
