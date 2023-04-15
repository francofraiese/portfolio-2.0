import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiRedux,
  SiNestjs,
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";

export const ProjectsData = [
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
      <SiJavascript key="javascript" id="javascript" className="tools-icon" />,
      <SiTypescript key="typescript" id="typescript" className="tools-icon" />,
      <FaReact key="react" id="react" className="tools-icon" />,
      <SiRedux key="redux" id="redux" className="tools-icon" />,
      <FaNodeJs key="node" id="node" className="tools-icon" />,
      <SiNestjs key="nest" id="nest" className="tools-icon" />,
      <SiMongodb key="mongo" id="mongo" className="tools-icon" />,
    ],
  },
  {
    title: "ReWork",
    text: "A website for a card videogame where players can create accounts, view other players' profiles and check ranking.",
    links: {
      deployUrl: "https://re-work-ten.vercel.app/",
      githubUrl: [
        "https://github.com/The-final-pg/PF-Grupo07-BackEnd",
        "https://github.com/The-final-pg/Client",
      ],
    },
    images: {
      landing: "ReWork.png",
      home: "ReWork home.png"
    },
    tools: [
      <SiJavascript key="javascript" id="javascript" className="tools-icon" />,
      <SiTypescript key="typescript" id="typescript" className="tools-icon" />,
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
      <SiJavascript key="javascript" id="javascript" className="tools-icon" />,
      <FaReact key="react" id="react" className="tools-icon" />,
      <SiRedux key="redux" id="redux" className="tools-icon" />,
      <FaNodeJs key="node" id="node" className="tools-icon" />,
      <SiExpress key="express" id="express" className="tools-icon" />,
      <SiPostgresql key="postgres" id="postgres" className="tools-icon" />,
    ],
  },
];
