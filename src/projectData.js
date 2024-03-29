const projectData = [
  {
    path: 'kanban',
    heading: 'Kanban Board',
    description: `Drag, drop and feel productive daily with this cool kanban board app!`,
    skills: 'Full Stack Development / Accessibility',
    languages:
      'Typescript / Node / React / React Query / TailwindCSS / MongoDB / React Testing Library / Jest',
    website: 'https://kanban-task-management-web-app-46060f7d6d84.herokuapp.com/',
    code: 'https://github.com/GlenOttley/kanban-task-management-web-app',
    background: `I wanted to write all the components for this application from scratch, without relying on component libraries.
     This presented many challenges, particularly with the extensive use of modals throughout this design.`,
    frontendMentor: true,
    portfolio: require('./images/portfolio/kanban/kanban-portfolio.webp').default,
    hero: require('./images/portfolio/kanban/kanban-hero.jpg').default,
    preview1: require('./images/portfolio/kanban/kanban-preview-1.webp').default,
    preview2: require('./images/portfolio/kanban/kanban-preview-2.webp').default,
  },
  {
    path: 'product-feedback-app',
    heading: 'Product Feedback App',
    description: `A full interactive app for suggesting, voting and commenting upon application feature requests`,
    skills: 'Full Stack Development / Serverless Development / Progressive Enhancement',
    languages: 'SvelteKit / Typescript / TailwindCSS',
    website: 'https://product-feedback-app-svelte.vercel.app/',
    code: 'https://github.com/GlenOttley/product-feedback-app-svelte',
    background: `This is my second project built using Sveltekit. I challenged myself by implementing progressive enhancement throughout, 
    making sure that all the functionality worked correctly with or without JavaScript - please disable JS in your browser if you wish to test this out.`,
    frontendMentor: true,
    portfolio:
      require('./images/portfolio/product-feedback/product-feedback-portfolio.webp')
        .default,
    hero: require('./images/portfolio/product-feedback/product-feedback-hero.jpg')
      .default,
    preview1:
      require('./images/portfolio/product-feedback/product-feedback-preview-1.webp')
        .default,
    preview2:
      require('./images/portfolio/product-feedback/product-feedback-preview-2.webp')
        .default,
  },
  {
    path: 'audiophile',
    heading: 'Audiophile',
    description: `This e-commerce site allows you to browse and buy the best (imaginary) audio products!`,
    skills: 'Full Stack Development / Test Driven Development',
    languages:
      'Typescript / Node / React / Redux / MUI / MongoDB / React Testing Library / Jest',
    website: 'https://audiophile-ecommerce-webapp.herokuapp.com/',
    code: 'https://github.com/GlenOttley/audiophile-ecommerce-website',
    background: `My main goal with this project was to ensure that both the frontend and backend had good test coverage for the key features (e.g. handling the cart).
        I also wanted to reinforce the skills learned when building my last project - 'Invoice Application', which you can check out right here on my portfolio. 
        It occurred to me that it would be helpful to be able to share type definitions, interfaces etc between both the client and server. To achieve this I made use of 
        'lerna', a build system which simplifies the development of monorepos.`,
    frontendMentor: true,
    portfolio: require('./images/portfolio/audiophile/audiophile-portfolio.jpg').default,
    hero: require('./images/portfolio/audiophile/audiophile-hero.jpg').default,
    preview1: require('./images/portfolio/audiophile/audiophile-preview-1.jpg').default,
    preview2: require('./images/portfolio/audiophile/audiophile-preview-2.jpg').default,
  },
  {
    path: 'invoice-app',
    heading: 'Invoice App',
    description: `This web app allows you to create and manage invoices online with ease.`,
    skills: 'Full Stack Development / Responsive Design',
    languages: 'Typescript / Node / React / Redux / MUI / MongoDB',
    website: 'https://invoice-application-mern.herokuapp.com/',
    code: 'https://github.com/GlenOttley/invoice-app',
    background: `For this project I decided to challenge myself on many levels, not only by building this out as a full stack application - 
        but also through the use of multiple new languages and tools. Both the front and back end are written in Typescript, with MongoDB being used for the database.
        On the front end, Material UI is used to provide dynamic theming, React Hook Form for form validation, and Redux with Redux toolkit for state management.`,
    frontendMentor: true,
    portfolio: require('./images/portfolio/invoice/invoice-portfolio.jpg').default,
    hero: require('./images/portfolio/invoice/invoice-hero.jpg').default,
    preview1: require('./images/portfolio/invoice/invoice-preview-1.jpg').default,
    preview2: require('./images/portfolio/invoice/invoice-preview-2.jpg').default,
  },
  {
    path: 'devjobs',
    heading: 'Devjobs',
    description: `A simple job search site for finding your dream dev job!`,
    skills: 'Full Stack Development / Serverless Development / Progressive Enhancement',
    languages: 'SvelteKit / Typescript / TailwindCSS',
    website: 'https://devjobs-web-14jb160ai-glenottley.vercel.app/',
    code: 'https://github.com/GlenOttley/devjobs-web-app',
    background: `This was my first time using Svelte and Tailwind, I was interested in being able to maintain the search and filtering functionality with 
        JavaScript disabled by taking advantage of SvelteKits server side form actions.`,
    frontendMentor: true,
    portfolio: require('./images/portfolio/devjobs/devjobs-portfolio.webp').default,
    hero: require('./images/portfolio/devjobs/devjobs-hero.jpg').default,
    preview1: require('./images/portfolio/devjobs/devjobs-preview-1.webp').default,
    preview2: require('./images/portfolio/devjobs/devjobs-preview-2.webp').default,
  },
  // {
  //   path: 'countries-fact-site',
  //   heading: 'Countries Fact Site',
  //   description: `This web app interacts with the REST Countries API to present information about every country on earth!`,
  //   skills: 'API Interaction / Responsive Design',
  //   languages: 'HTML / CSS / SASS / JS / React / Redux',
  //   website: 'https://zealous-heyrovsky-19478f.netlify.app/',
  //   code: 'https://github.com/GlenOttley/rest-countries-api',
  //   background: `Although perhaps a little overkill for a project such as this, Redux is used for state management on this project. API requests are made using Thunks, both for fetching all of the countries as well as each individual country.`,
  //   frontendMentor: true,
  //   portfolio: require('./images/portfolio/countries/countries-portfolio.webp').default,
  //   hero: require('./images/portfolio/countries/countries-hero.jpeg').default,
  //   preview1: require('./images/portfolio/countries/countries-preview-1.webp').default,
  //   preview2: null,
  // },
  // {
  //   path: 'planets-fact-site',
  //   heading: 'Planets Fact Site',
  //   description: `To make this eight page fact site about the planets in our solar system,
  // I made extensive use of React’s conditional rendering to provide three distinct layouts for mobile,
  // tablet and desktop. SASS mixins and variables were used in addition to CSS to ensure the styles
  // are neat and easy to maintain. Information about each planet is retrieved dynamically from a JavaScript object.
  // Finally, a simple state hook determines what information and image needs to be displayed for each planet.
  // Out of this world!`,
  //   skills: 'Interaction Design / Responsive Design',
  //   languages: 'HTML / CSS / SASS / JS / React',
  //   website: 'https://glenottley.github.io/planets-fact-site',
  //   code: 'https://github.com/GlenOttley/planets-fact-site',
  //   background: `I tend to prefer a vanilla CSS approach wherever possible, but since this project required a
  // fairly significant amount of media queries, I chose to utilise SASS mixins and variables.
  // It's one of my more recent projects and it's one that I’m particularly proud of.`,
  //   frontendMentor: true,
  //   portfolio: require('./images/portfolio/planets/planets-portfolio.webp').default,
  //   hero: require('./images/portfolio/planets/planets-hero.jpg').default,
  //   preview1: require('./images/portfolio/planets/planets-preview-1.webp').default,
  //   preview2: require('./images/portfolio/planets/planets-preview-2.webp').default,
  // },
  // {
  //   path: 'url-shortener',
  //   heading: 'URL Shortener',
  //   description: `This URL shortening landing page interacts with the bitly API using JavaScript fetch requests.
  // This has been one of the most SASS-heavy projects I have attempted so far, with extensive use of mixins to create
  // the responsive design.`,
  //   skills: 'API Interaction / Responsive Design',
  //   languages: 'HTML / CSS / SASS / JS / React',
  //   website: 'https://admiring-poitras-636607.netlify.app/',
  //   code: 'https://github.com/GlenOttley/url-shortening-api-master',
  //   background: `One of the trickier aspects of this design was getting the main image to stick to the right
  // side of the screen whislt mainining a consistent margin with the rest of the page on the left. I achieved this by
  // performing some arithmetic in SASS which calculates the container width for this section.`,
  //   frontendMentor: true,
  //   portfolio: require('./images/portfolio/url-shortener/url-shortener-portfolio.webp')
  //     .default,
  //   hero: require('./images/portfolio/url-shortener/url-shortener-hero.jpg').default,
  //   preview1: require('./images/portfolio/url-shortener/url-shortener-preview-1.webp')
  //     .default,
  //   preview2: null,
  // },

  // {
  //   path: 'to-do',
  //   heading: 'To Do',
  //   description: `A neat take on the classic to-do app, with a few twists.
  // For this project, I wanted to make the app fully responsive to a range
  // of devices and include an optional dark mode. I utilised React’s state
  // hook to mark tasks as complete as well as filter out complete/incomplete tasks.
  // Task data is stored in a json file, then mapped over to create the ‘to do’ items.
  // I used the BEM naming convention to keep my CSS clean and easy to maintain.`,
  //   skills: 'Interaction Design / Responsive Design',
  //   languages: 'HTML / CSS / JS / React',
  //   website: 'https://glenottley.github.io/todo-app-main/',
  //   code: 'https://github.com/GlenOttley/todo-app-main',
  //   background: `This project challenged me to create something useful and user-friendly.
  // It allowed me to refine my front-end skills whilst improving and adapting my methods.
  // The ‘dark mode’ feature was implemented using the Theme Provider from React’s ‘styled-components’ library.
  // Please note that since this project is hosted on GitHub pages, the backend code is disabled and your notes
  //  will not be saved if you refresh or leave the page. Don’t use it to make your grocery list just yet!`,
  //   frontendMentor: true,
  //   portfolio: require('./images/portfolio/todo/todo-portfolio.jpeg').default,
  //   hero: require('./images/portfolio/todo/todo-hero.jpeg').default,
  //   preview1: require('./images/portfolio/todo/todo-preview-1.jpeg').default,
  //   preview2: null,
  // },
  // {
  //   path: 'crowdfund',
  //   heading: 'Crowdfund',
  //   description: `This project presented the opportunity to use modals to provide a stellar user experience
  // and keep the app to a single page. React’s state hook was used to track donations to the charity,
  // products available and progress towards the pledge goal. Since this was one of the larger CSS files I have written,
  // careful attention was paid to ensure maintainability, utilizing clearly marked sections and BEM naming throughout.`,
  //   skills: 'Interaction Design / Responsive Design',
  //   languages: 'HTML / CSS / JS / React',
  //   website: 'https://glenottley.github.io/crowdfunding-product-page-main/',
  //   code: 'https://github.com/GlenOttley/crowdfunding-product-page-main',
  //   background: `For this project, I wanted to create something that would challenge me to learn a new aspect of front end design.
  // Implementing the modal design ensures that the app is functional, intuitive, and easy on the eyes.`,
  //   frontendMentor: true,
  //   portfolio: require('./images/portfolio/crowdfund/crowdfund-portfolio.jpeg').default,
  //   hero: require('./images/portfolio/crowdfund/crowdfund-hero.jpeg').default,
  //   preview1: require('./images/portfolio/crowdfund/crowdfund-preview-1.jpeg').default,
  //   preview2: require('./images/portfolio/crowdfund/crowdfund-preview-2.jpeg').default,
  // },
]

export default projectData
