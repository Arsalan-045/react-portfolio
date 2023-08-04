import React from 'react';
import './projects.css'; // You can create this CSS file for styling
import { useState } from 'react';
const projects = [
  {
    title: 'T-Signature',
    image: require('../assets/tsig.jpg.png'), // Replace with actual image URL
    description: ' Team signature is the student body that enhances the skills of the students in domains such as Full-Stack development, DSAI, Mechatronics, and Cyber security. ',
    link: 'https://tsigmjcet.in/'
  },
  {
    title: 'Tic Tac Toe',
    image: require('../assets/tic-tac-toe.jpg.png'), // Replace with actual image URL
    description: ' It is a game developed using React Js. Components, states, and hooks are used to build this game. It provides a good interface that interacts with the user to play',
    link: 'https://tictactoe-arsalan.netlify.app'
  },
  {
    title: 'IMDB Movie App',
    image: require('../assets/imdb.jpg.png'), // Replace with actual image URL
    description: 'The IMDb Movie App, crafted with React, offers seamless exploration of an extensive movie database, providing users with quick access to film details, ratings, and reviews in a sleek and interactive interface.',
    link: 'https://arsalan-045.github.io/box-office/'
  },
  {
    title: 'ZF Mobiles',
    image: require('../assets/zf-mobiles.jpg.png'), // Replace with actual image URL
    description: ' It is a mobile website that provides services and sales. This website shows detailed information about the ZF mobile store. The customers can reach out or can contact ZF mobile store through this site.',
    link: 'https://zfmobiles.netlify.app'
  },
  {
    title: 'Todo Application',
    image: require('../assets/todo-fb.jpg.png'), // Replace with actual image URL
    description: ' It is a mobile website that provides services and sales. This website shows detailed information about the ZF mobile store. The customers can reach out or can contact ZF mobile store through this site.',
    link: 'https://arsalan-045.github.io/todo-firebase/'
  },
  {
    title: 'Weather Application',
    image: require('../assets/weather.jpg.png'), // Replace with actual image URL
    description: 'The Weather App is a user-friendly website that lets you enter a city name to instantly see the current weather, including temperature, humidity, and conditions.',
    link: 'https://arsalan-045.github.io/weatherapp-react/'
  },
  {
    title: 'Secret Message Sharing App',
    image: require('../assets/sec-msg.jpg.png'), // Replace with actual image URL
    description: 'The Secret Message Sharing App is a secure site built with encryption technique, enabling users to confidentially exchange private messages. The app ensures communication while safeguarding content from unauthorized access.',
    link: 'https://arsalan-045.github.io/secret-message-app/'
  },
  {
    title: 'E-commerce',
    image: require('../assets/e-commerce.jpg.png'), // Replace with actual image URL
    description: 'It is a static website to buy products like clothes and shoes. It includes signup and login option as well',
    link: 'https://arsalan-e-commerce.netlify.app/'
  },
  


  // Add more projects as needed
];

const ProjectCard = ({ project }) => {
    return (
      <div className="project-card" id='proj'>
        <img src={project.image} alt={project.title} />
        <h3 className='proj-title'>{project.title}</h3>
        <p>{project.description}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer">Click To Visit</a>
      </div>
    );
  };
  
  

const ProjectComponent = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleCards = () => {
    setShowAll(!showAll);
  };

  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <div className="project-component">
      <h2 className="project-heading">Projects</h2>
      <div className="project-cards">
        {displayedProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      <div className="see-more-button-container">
        {projects.length > 3 && (
          <button className="see-more-button" onClick={toggleCards}>
            {showAll ? 'See Less' : 'See More'}
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectComponent;
