import { v4 as uuidv4 } from "uuid"

export const projectsData = [
  {
    id: uuidv4(),
    title: "tabata-time",
    description:
      "React Based Tabata Timer.",
    url: "http://tabata-timer.netlify.app",
    repo: "https://github.com/dsanderson90/tabata-time", // if no repo, the button will not show up
    tags: ["create-react-app", "emotion"],
  },
  {
    id: uuidv4(),
    title: "gatsby-source-pokemons",
    description:
      "Source plugin for pulling pokemon data into your Gatsby project.",
    url: "http://pokemons-source-example.surge.sh/",
    repo: "https://github.com/dsanderson90/gatsby-source-pokemons", // if no repo, the button will not show up
    tags: ["Gatsby", "GraphQL", "Tailwindcss"],
  },
  {
    id: uuidv4(),
    title: "Github User Lookup",
    description:
      "A simple tool for looking up users by username on Github. The project was built using the Github API, create-react-app, tailwindcss, emotion, awesome-debounce-promise, and react-async-hook. The search input element uses a debounce function so that the API request is made 5 seconds after the user's last keystroke.",
    url: "http://github-user-lookup.netlify.app",
    repo: "https://github.com/dsanderson90/github-user-lookup", // if no repo, the button will not show up
    tags: ["create-react-app", "classnames", "Tailwindcss"],
  },
  {
    id: uuidv4(),
    title: "Rick and Morty API",
    description: "GraphQL API for serving Rick and Morty quotes.",
    url: "",
    repo: "https://github.com/dsanderson90/RMGQL.API", // if no repo, the button will not show up
    tags: ["C#", "ASP.NET", "GraphQL"],
  },
  {
    id: uuidv4(),
    img: "create-react-app-emotion-tailwind-prettier.JPG",
    title: "create-react-app-emotion-tailwind-prettier",
    description:
      "I got tired of configuring create-react-app with Emotion, TailwindCSS, Prettier, and Husky so I created a React starter that comes with these packages pre-configured.",
    url: "",
    repo:
      "https://github.com/dsanderson90/create-react-app-emotion-tailwind-prettier", // if no repo, the button will not show up
    tags: ["create-react-app", "Tailwindcss"],
  },
  {
    id: uuidv4(),
    title: "Note Reader 🎹",
    description:
      "Note Reader is a simple React app that helps you learn how to read sheet music. More features are currently in development.",
    url: "http://note-reader.surge.sh/",
    repo: "https://github.com/dsanderson90/notereader", // if no repo, the button will not show up
    tags: ["create-react-app", "react-keyboard-event-handler"],
  },
  {
    id: uuidv4(),
    title: "Poké-Search",
    description:
      "Poké-Search is an application that allows users to search for their favorite Pokémon or for a group of Pokémons sorted by type. If the Pokémon exists, the user is presented with an animated sprite and stats of the corresponding Pokémon. If the sprite is expired, the user sees the Squirtle squad and an error notification. I built this project using React and the pokemons library available through npm.",
    url: "http://poke-search-ds.surge.sh/",
    repo: "https://github.com/dsanderson90/pokesearch", // if no repo, the button will not show up
    tags: ["create-react-app", "pokemons"],
  },
  {
    id: uuidv4(),
    title: "Activate New Mexico Landing Page",
    description:
      "Landing page for forthcoming Activate NM website. The landing page was built using GatsbyJS and React ParticlesJS. The final site is being built in WordPress.",
    url: "http://kindly-note.surge.sh/",
    repo: "https://github.com/dsanderson90/under-construction-activatenm", // if no repo, the button will not show up
    tags: ["Gatsby", "gatsby themes"],
  },
  {
    id: uuidv4(),
    title: "Activate New Mexico",
    description:
      "Activate New Mexico (ActivateNM) is an Albuquerque-based start-up incubator/accelerator powered by CNM Ingenuity. During my tenure as Resident Web Developer, I collaborated with Ruth Dove(Project Manager) and Adrian Tsosie(Graphic Designer) to redesign, rebrand, and revamp Activate NM's online presence with a new website built using WordPress.",
    url: "https://activatenm.com/",
    repo: "", // if no repo, the button will not show up
    tags: ["WordPress", "Genesis"],
  },
  {
    id: uuidv4(),
    title: "Little Lions Learn",
    description:
      "Little Lions Learn is an online language learning company that delivers high-quality, immersive second language instruction in Spanish and English for children between the ages of 4 and 13. I built this site as part of my residency at the start-up accelerator, ActivateNM. The site uses WordPress, the Genesis Framework and is integrated with Hubspot and WooCommerce.",
    url: "https://littlelionslearn.com",
    repo: "", // if no repo, the button will not show up
    tags: ["Genesis", "WordPress", "Hubspot", "WooCommerce"],
  },
  // {
  //   id: uuidv4(),
  //   img: 'cat.jpg',
  //   title: 'hype_bot_9000',
  //   description:
  //     'Hype Bot 9000 is a twitter bot that encourages developers who are going through the #100DaysOfCode challenge. The bot posts one inspirational quote a day, and periodically likes and retweets tweets that contain the #100DaysOfCode hashtag. I coded this bot using Node.js and the twit library available through npm.',
  //   info2: '',
  //   url: 'https://twitter.com/hype_bot_9000',
  //   repo: '', // if no repo, the button will not show up
  // },
]
