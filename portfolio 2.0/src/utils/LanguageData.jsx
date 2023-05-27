import React from "react";
import { FaReact, FaNodeJs, FaBootstrap } from "react-icons/fa";
import {
  SiRedux,
  SiNestjs,
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiSequelize,
  SiPrisma,
  SiGit,
  SiGithub,
  SiGitlab,
  SiBitbucket,
  SiTrello,
  SiJirasoftware,
  SiCss3,
  SiHtml5,
  SiSwagger,
} from "react-icons/si";

const LanguageData = {
  en: {
    navbar: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    about: {
      title: {
        line1: "Hello,",
        line2: "I am ",
      },
      text: {
        line1: "Let me introduce myself!",
        line2:
          "I'm 27 yo, currently living in Mar del Plata, Argentina, and I'm looking for opportunities that represent new challenges and allow me to continue growing as professional.",
      },
    },
    skills: {
      title: "These are some of my",
      titleGreen: "skills",
      front: {
        title: "Front-end",
        icons: [
          <FaReact key="react" id="react" className="skills-icon" />,
          <SiRedux key="redux" id="redux" className="skills-icon" />,
          <SiCss3 key="css3" id="css3" className="skills-icon" />,
          <SiHtml5 key="html5" id="html5" className="skills-icon" />,
          <FaBootstrap
            key="bootstrap"
            id="bootstrap"
            className="skills-icon"
          />,
          <SiJavascript key="js" id="js" className="skills-icon" />,
        ],
      },
      back: {
        title: "Back-end",
        icons: [
          <FaNodeJs key="node" id="node" className="skills-icon" />,
          <SiNestjs key="nest" id="nest" className="skills-icon" />,
          <SiExpress key="express" id="express" className="skills-icon" />,
          <SiSwagger key="swagger" id="swagger" className="skills-icon" />,
          <SiJavascript key="js" id="js" className="skills-icon" />,
          <SiTypescript key="ts" id="ts" className="skills-icon" />,
        ],
      },
      db: {
        title: "Databases",
        icons: [
          <SiMongodb key="mongo" id="mongo" className="skills-icon" />,
          <SiPostgresql key="postgres" id="postgres" className="skills-icon" />,
          <SiMysql key="mysql" id="mysql" className="skills-icon" />,
          <SiSequelize
            key="sequelize"
            id="sequelize"
            className="skills-icon"
          />,
          <SiPrisma key="prisma" id="prisma" className="skills-icon" />,
        ],
      },
      toolkit: {
        title: "Toolkit",
        icons: [
          <SiGit key="git" id="git" className="skills-icon" />,
          <SiGithub
            key="github-skill"
            id="github-skill"
            className="skills-icon"
          />,
          <SiGitlab key="gitlab" id="gitlab" className="skills-icon" />,
          <SiBitbucket
            key="bitbucket"
            id="bitbucket"
            className="skills-icon"
          />,
          <SiTrello key="trello" id="trello" className="skills-icon" />,
          <SiJirasoftware key="jira" id="jira" className="skills-icon" />,
        ],
      },
    },
    projects: [
      {
        title: "Madeira Stats",
        text: "A website for a card videogame where players can create and customize accounts, view other players' profiles and check their current global ranking.",
        links: {
          deployUrl: "https://madeiraproject.vercel.app/",
          githubUrl: ["https://github.com/Atlantic-Dev/FRONT-Madeira"],
        },
        images: {
          landing: "Madeira.png",
          home: "Madeira home.png",
        },
        tools: [
          <SiJavascript
            key="javascript"
            id="javascript"
            className="tools-icon"
          />,
          <SiTypescript
            key="typescript"
            id="typescript"
            className="tools-icon"
          />,
          <FaReact key="react" id="react" className="tools-icon" />,
          <SiRedux key="redux" id="redux" className="tools-icon" />,
          <FaNodeJs key="node" id="node" className="tools-icon" />,
          <SiNestjs key="nest" id="nest" className="tools-icon" />,
          <SiMongodb key="mongo" id="mongo" className="tools-icon" />,
        ],
      },
      {
        title: "ReWork",
        text: "A website for professional networking, where you can hire a professional for your project or company or you can offer your services as professional to anyone who needs it.",
        links: {
          deployUrl: "https://re-work-ten.vercel.app/",
          githubUrl: [
            "https://github.com/The-final-pg/PF-Grupo07-BackEnd",
            "https://github.com/The-final-pg/Client",
          ],
        },
        images: {
          landing: "ReWork.png",
          home: "ReWork home.png",
        },
        tools: [
          <SiJavascript
            key="javascript"
            id="javascript"
            className="tools-icon"
          />,
          <SiTypescript
            key="typescript"
            id="typescript"
            className="tools-icon"
          />,
          <FaReact key="react" id="react" className="tools-icon" />,
          <SiRedux key="redux" id="redux" className="tools-icon" />,
          <FaNodeJs key="node" id="node" className="tools-icon" />,
          <SiExpress key="express" id="express" className="tools-icon" />,
          <SiPostgresql key="postgres" id="postgres" className="tools-icon" />,
        ],
      },
      {
        title: "Frikipedia",
        text: "A SPA where you can search for video games by sorting and filtering them by genre and platform and can also upload a video game that you have not found.",
        links: {
          deployUrl: "https://frikipedia.vercel.app/",
          githubUrl: [
            "https://github.com/francofraiese/frikipedia-front",
            "https://github.com/francofraiese/frikipedia-back",
          ],
        },
        images: {
          landing: "frikipedia.png",
          home: "frikipedia home.png",
        },
        tools: [
          <SiJavascript
            key="javascript"
            id="javascript"
            className="tools-icon"
          />,
          <FaReact key="react" id="react" className="tools-icon" />,
          <SiRedux key="redux" id="redux" className="tools-icon" />,
          <FaNodeJs key="node" id="node" className="tools-icon" />,
          <SiExpress key="express" id="express" className="tools-icon" />,
          <SiPostgresql key="postgres" id="postgres" className="tools-icon" />,
        ],
      },
    ],
    contact: {
      cv: {
        title: "View resume",
        es: "Spanish",
        en: "English",
      },
      title: {
        white: "Let's get in ",
        green: "touch",
      },
      text: {
        firstWhite: "You can do it either by ",
        firstGreen: "email",
        secondWhite: "or through my ",
        secondGreen: "social media",
      },
      form: {
        name: "Name",
        message: "Message",
        submit: "Send",
      },
    },
  },
  es: {
    navbar: {
      about: "Sobre mí",
      skills: "Habilidades",
      projects: "Proyectos",
      contact: "Contacto",
    },
    about: {
      title: {
        line1: "Hola,",
        line2: "soy ",
      },
      text: {
        line1: "Permitime presentarme!",
        line2:
          "Tengo 27 años, vivo en Mar del Plata, Argnetina, y estoy buscando en búsqueda de oportunidades que me presenten nuevos desafíos y que me permitan seguir desarrollándome como profesional.",
      },
    },
    skills: {
      title: "Estas son algunas de mis",
      titleGreen: "habilidades",
      front: {
        title: "Front-end",
        icons: [
          <FaReact key="react" id="react" className="skills-icon" />,
          <SiRedux key="redux" id="redux" className="skills-icon" />,
          <SiCss3 key="css3" id="css3" className="skills-icon" />,
          <SiHtml5 key="html5" id="html5" className="skills-icon" />,
          <FaBootstrap
            key="bootstrap"
            id="bootstrap"
            className="skills-icon"
          />,
          <SiJavascript key="js" id="js" className="skills-icon" />,
        ],
      },
      back: {
        title: "Back-end",
        icons: [
          <FaNodeJs key="node" id="node" className="skills-icon" />,
          <SiNestjs key="nest" id="nest" className="skills-icon" />,
          <SiExpress key="express" id="express" className="skills-icon" />,
          <SiSwagger key="swagger" id="swagger" className="skills-icon" />,
          <SiJavascript key="js" id="js" className="skills-icon" />,
          <SiTypescript key="ts" id="ts" className="skills-icon" />,
        ],
      },
      db: {
        title: "Bases de datos",
        icons: [
          <SiMongodb key="mongo" id="mongo" className="skills-icon" />,
          <SiPostgresql key="postgres" id="postgres" className="skills-icon" />,
          <SiMysql key="mysql" id="mysql" className="skills-icon" />,
          <SiSequelize
            key="sequelize"
            id="sequelize"
            className="skills-icon"
          />,
          <SiPrisma key="prisma" id="prisma" className="skills-icon" />,
        ],
      },
      toolkit: {
        title: "Herramientas",
        icons: [
          <SiGit key="git" id="git" className="skills-icon" />,
          <SiGithub
            key="github-skill"
            id="github-skill"
            className="skills-icon"
          />,
          <SiGitlab key="gitlab" id="gitlab" className="skills-icon" />,
          <SiBitbucket
            key="bitbucket"
            id="bitbucket"
            className="skills-icon"
          />,
          <SiTrello key="trello" id="trello" className="skills-icon" />,
          <SiJirasoftware key="jira" id="jira" className="skills-icon" />,
        ],
      },
    },
    projects: [
      {
        title: "Madeira Stats",
        text: "Un sitio web para un videojuego de cartas donde puedes crear y personalizar tu cuenta, ver los perfiles de otros jugadores y ver su puesto actual en el ranking global.",
        links: {
          deployUrl: "https://madeiraproject.vercel.app/",
          githubUrl: ["https://github.com/Atlantic-Dev/FRONT-Madeira"],
        },
        images: {
          landing: "Madeira.png",
          home: "Madeira home.png",
        },
        tools: [
          <SiJavascript
            key="javascript"
            id="javascript"
            className="tools-icon"
          />,
          <SiTypescript
            key="typescript"
            id="typescript"
            className="tools-icon"
          />,
          <FaReact key="react" id="react" className="tools-icon" />,
          <SiRedux key="redux" id="redux" className="tools-icon" />,
          <FaNodeJs key="node" id="node" className="tools-icon" />,
          <SiNestjs key="nest" id="nest" className="tools-icon" />,
          <SiMongodb key="mongo" id="mongo" className="tools-icon" />,
        ],
      },
      {
        title: "ReWork",
        text: "Un sitio web de búsqueda de empleo, donde puedes contratar a un profesional para tu proyecto o empresa, o puedes ofrecer tus servicios como profesional a cualquiera que los necesite.",
        links: {
          deployUrl: "https://re-work-ten.vercel.app/",
          githubUrl: [
            "https://github.com/The-final-pg/PF-Grupo07-BackEnd",
            "https://github.com/The-final-pg/Client",
          ],
        },
        images: {
          landing: "ReWork.png",
          home: "ReWork home.png",
        },
        tools: [
          <SiJavascript
            key="javascript"
            id="javascript"
            className="tools-icon"
          />,
          <SiTypescript
            key="typescript"
            id="typescript"
            className="tools-icon"
          />,
          <FaReact key="react" id="react" className="tools-icon" />,
          <SiRedux key="redux" id="redux" className="tools-icon" />,
          <FaNodeJs key="node" id="node" className="tools-icon" />,
          <SiExpress key="express" id="express" className="tools-icon" />,
          <SiPostgresql key="postgres" id="postgres" className="tools-icon" />,
        ],
      },
      {
        title: "Frikipedia",
        text: "Una SPA donde puedes buscar un videojuego mediante ordanamientos y filtros en base a sus géneros y plataformas y también puedes cargar uno que no hayas encontrado.",
        links: {
          deployUrl: "https://frikipedia.vercel.app/",
          githubUrl: [
            "https://github.com/francofraiese/frikipedia-front",
            "https://github.com/francofraiese/frikipedia-back",
          ],
        },
        images: {
          landing: "frikipedia.png",
          home: "frikipedia home.png",
        },
        tools: [
          <SiJavascript
            key="javascript"
            id="javascript"
            className="tools-icon"
          />,
          <FaReact key="react" id="react" className="tools-icon" />,
          <SiRedux key="redux" id="redux" className="tools-icon" />,
          <FaNodeJs key="node" id="node" className="tools-icon" />,
          <SiExpress key="express" id="express" className="tools-icon" />,
          <SiPostgresql key="postgres" id="postgres" className="tools-icon" />,
        ],
      },
    ],
    contact: {
      cv: {
        title: "Ver curriculum",
        es: "Español",
        en: "Inglés",
      },
      title: {
        white: "Pongámonos en ",
        green: "contacto",
      },
      text: {
        firstWhite: "Podes hacerlo mediante mi ",
        firstGreen: "email",
        secondWhite: "o a través de mis ",
        secondGreen: "redes",
      },
      form: {
        name: "Nombre",
        message: "Mensaje",
        submit: "Enviar",
      },
    },
  },
};

export default LanguageData;
