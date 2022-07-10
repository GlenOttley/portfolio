const projectData = [
  {
    path: '/invoice-app',
    heading: 'Invoice App',
    description: `This web app allows you to create and manage invoices online with ease`,
    skills: 'State Management / Responsive Design',
    languages: 'Typescript / Node / React / Redux / MUI / MongoDB',
    website: 'https://invoice-application-mern.herokuapp.com/',
    code: 'https://github.com/GlenOttley/invoice-app',
    background: `For this project I decided to challenge myself on many levels, not only by building this out as a full stack application - 
    but also through the use of multiple new languages and tools. Both the front and back end are written in Typescript, with MongoDB being used for the database.
    On the front end, Material UI is used to provide dynamic theming, React Hook Form for form validation, and Redux with Redux toolkit for state management.`,
    frontendMentor: true,
    prevProjectName: 'Crowdfund',
    prevProjectPath: '/crowdfund',
    nextProjectName: 'Countries Fact Site',
    nextProjectPath: '/countries-fact-site',

    portfolio: require('./images/portfolio/invoice/invoice-portfolio.jpg')
      .default,
    hero: require('./images/portfolio/invoice/invoice-hero.jpg').default,
    preview1: require('./images/portfolio/invoice/invoice-preview-1.jpg')
      .default,
    preview2: require('./images/portfolio/invoice/invoice-preview-2.jpg')
      .default,
  },
  {
    path: '/countries-fact-site',
    heading: 'Countries Fact Site',
    description: `This web app interacts with the REST Countries API to present information about every country on earth!`,
    skills: 'API Interaction / Responsive Design',
    languages: 'HTML / CSS / SASS / JS / React / Redux',
    website: 'https://zealous-heyrovsky-19478f.netlify.app/',
    code: 'https://github.com/GlenOttley/rest-countries-api',
    background: `Although perhaps a little overkill for a project such as this, Redux is used for state management on this project. API requests are made using Thunks, both for fetching all of the countries as well as each individual country.`,
    frontendMentor: true,
    prevProjectName: 'Crowdfund',
    prevProjectPath: '/crowdfund',
    nextProjectName: 'URL Shortener',
    nextProjectPath: '/url-shortener',

    portfolio: require('./images/portfolio/countries/countries-portfolio.webp')
      .default,
    hero: require('./images/portfolio/countries/countries-hero.jpeg').default,
    preview1: require('./images/portfolio/countries/countries-preview-1.webp')
      .default,
    preview2: null,
  },
  {
    path: '/url-shortener',
    heading: 'URL Shortener',
    description: `This URL shortening landing page interacts with the bitly API using JavaScript fetch requests. 
	This has been one of the most SASS-heavy projects I have attempted so far, with extensive use of mixins to create 
	the responsive design.`,
    skills: 'API Interaction / Responsive Design',
    languages: 'HTML / CSS / SASS / JS / React',
    website: 'https://admiring-poitras-636607.netlify.app/',
    code: 'https://github.com/GlenOttley/url-shortening-api-master',
    background: `One of the trickier aspects of this design was getting the main image to stick to the right 
	side of the screen whislt mainining a consistent margin with the rest of the page on the left. I achieved this by 
	performing some arithmetic in SASS which calculates the container width for this section.`,
    frontendMentor: true,
    prevProjectName: 'Invoice App',
    prevProjectPath: '/invoice-app',
    nextProjectName: 'Planets Fact Site',
    nextProjectPath: '/planets-fact-site',

    portfolio:
      require('./images/portfolio/url-shortener/url-shortener-portfolio.webp')
        .default,
    hero: require('./images/portfolio/url-shortener/url-shortener-hero.jpg')
      .default,
    preview1:
      require('./images/portfolio/url-shortener/url-shortener-preview-1.webp')
        .default,
    preview2: null,
  },
  {
    path: '/planets-fact-site',
    heading: 'Planets Fact Site',
    description: `To make this eight page fact site about the planets in our solar system, 
	I made extensive use of React’s conditional rendering to provide three distinct layouts for mobile, 
	tablet and desktop. SASS mixins and variables were used in addition to CSS to ensure the styles
	are neat and easy to maintain. Information about each planet is retrieved dynamically from a JavaScript object. 
	Finally, a simple state hook determines what information and image needs to be displayed for each planet. 
	Out of this world!`,
    skills: 'Interaction Design / Responsive Design',
    languages: 'HTML / CSS / SASS / JS / React',
    website: 'https://glenottley.github.io/planets-fact-site',
    code: 'https://github.com/GlenOttley/planets-fact-site',
    background: `I tend to prefer a vanilla CSS approach wherever possible, but since this project required a 
  fairly significant amount of media queries, I chose to utilise SASS mixins and variables. 
  It's one of my more recent projects and it's one that I’m particularly proud of.`,
    frontendMentor: true,
    prevProjectName: 'URL Shortener',
    prevProjectPath: '/url-shortener',
    nextProjectName: 'To Do',
    nextProjectPath: '/to-do',

    portfolio: require('./images/portfolio/planets/planets-portfolio.webp')
      .default,
    hero: require('./images/portfolio/planets/planets-hero.jpg').default,
    preview1: require('./images/portfolio/planets/planets-preview-1.webp')
      .default,
    preview2: require('./images/portfolio/planets/planets-preview-2.webp')
      .default,
  },
  {
    path: '/to-do',
    heading: 'To Do',
    description: `A neat take on the classic to-do app, with a few twists. 
	For this project, I wanted to make the app fully responsive to a range 
	of devices and include an optional dark mode. I utilised React’s state 
	hook to mark tasks as complete as well as filter out complete/incomplete tasks. 
	Task data is stored in a json file, then mapped over to create the ‘to do’ items. 
	I used the BEM naming convention to keep my CSS clean and easy to maintain.`,
    skills: 'Interaction Design / Responsive Design',
    languages: 'HTML / CSS / JS / React',
    website: 'https://glenottley.github.io/todo-app-main/',
    code: 'https://github.com/GlenOttley/todo-app-main',
    background: `This project challenged me to create something useful and user-friendly. 
  It allowed me to refine my front-end skills whilst improving and adapting my methods. 
  The ‘dark mode’ feature was implemented using the Theme Provider from React’s ‘styled-components’ library.
  Please note that since this project is hosted on GitHub pages, the backend code is disabled and your notes
   will not be saved if you refresh or leave the page. Don’t use it to make your grocery list just yet!`,
    frontendMentor: true,
    prevProjectName: 'Planets Fact Site',
    prevProjectPath: '/planets-fact-site',
    nextProjectName: 'Crowdfund',
    nextProjectPath: '/crowdfund',

    portfolio: require('./images/portfolio/todo/todo-portfolio.jpeg').default,
    hero: require('./images/portfolio/todo/todo-hero.jpeg').default,
    preview1: require('./images/portfolio/todo/todo-preview-1.jpeg').default,
    preview2: null,
  },
  {
    path: '/crowdfund',
    heading: 'Crowdfund',
    description: `This project presented the opportunity to use modals to provide a stellar user experience 
	and keep the app to a single page. React’s state hook was used to track donations to the charity, 
	products available and progress towards the pledge goal. Since this was one of the larger CSS files I have written, 
	careful attention was paid to ensure maintainability, utilizing clearly marked sections and BEM naming throughout.`,
    skills: 'Interaction Design / Responsive Design',
    languages: 'HTML / CSS / JS / React',
    website: 'https://glenottley.github.io/crowdfunding-product-page-main/',
    code: 'https://github.com/GlenOttley/crowdfunding-product-page-main',
    background: `For this project, I wanted to create something that would challenge me to learn a new aspect of front end design. 
  Implementing the modal design ensures that the app is functional, intuitive, and easy on the eyes.`,
    frontendMentor: true,
    prevProjectName: 'To Do',
    prevProjectPath: '/to-do',
    nextProjectName: 'Invoice App',
    nextProjectPath: '/invoice-app',

    portfolio: require('./images/portfolio/crowdfund/crowdfund-portfolio.jpeg')
      .default,
    hero: require('./images/portfolio/crowdfund/crowdfund-hero.jpeg').default,
    preview1: require('./images/portfolio/crowdfund/crowdfund-preview-1.jpeg')
      .default,
    preview2: require('./images/portfolio/crowdfund/crowdfund-preview-2.jpeg')
      .default,
  },
]

export default projectData
