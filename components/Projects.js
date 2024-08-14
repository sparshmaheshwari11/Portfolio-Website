import "../css/projects.css";

import IMG1 from "../assets/LNM_Connect.png";
import IMG3 from "../assets/Visualizer.png";
import IMG2 from "../assets/WhatsApp Image 2024-08-14 at 13.57.18.jpeg";
import IMG4 from "../assets/personal.png";
import IMG5 from "../assets/tindog.png";
import IMG6 from "../assets/tasktracker.png";
import React from "react";

//Portfolio function
const Portfolio = () => {
    const soloProjects = [
        {
            id: 1,
            title: "LNM Connect",
            img: IMG1,
            description:
                "A Website where college students can find all the latest news and updates regarding and important for college.",
            technologies: "HTML | CSS | Javascript | React Js | Node.js | MongoDB",
            link: "https://lnmconnect.netlify.app/",
            github: "https://github.com/Joshal007/LNMConnect",
        },
        {
            id: 2,
            title: "Task Master",
            img: IMG2,
            description:
                "It involves developing a work management tool with role-based access control, where admins can manage projects, assign tasks, and monitor progress.",
            technologies: "HTML | CSS | Javascript | React Js | Node.js | Express.js",
            link: "https://taskmaster-unr0.onrender.com/login",
            github: "https://github.com/Joshal007/Pathfinding-Visualizer",
        },
        {
            id: 3,
            title: "Path Finding Visualizer",
            img: IMG3,
            description: "Pathfinding Visualizer aimed at helping users understand and visualize how different pathfinding algorithms work.",
            technologies: "HTML | CSS | Javascript | React Js",
            link: "https://joshal007.github.io/Pathfinding-Visualizer/",
            github: "https://github.com/Joshal007/RealEstate_Website",
        },
        {
            id: 4,
            title: "Personal Portfolio",
            img: IMG4,
            description:
                "Website to show all my skills , education and projects done till date .",
            technologies: "HTML | CSS | JavaScript | React Js",
            link: "#",
            github: "https://github.com/Joshal007/Portfolio-Website",
        },
        {
            id: 5,
            title: "tindog Website",
            img: IMG5,
            description:
                "Tindog is a simple web application that allows users to browse and connect with other dog owners in their area.",
            technologies: "HTML | CSS | Bootstrap",
            link: "https://joshal007.github.io/tindog-Website/",
            github: "https://github.com/Joshal007/tindog-Website",
        },
        {
            id: 6,
            title: "Peak Progress",
            img: IMG6,
            description:
                "The To-Do List app is a user-friendly task management tool that keeps you organized and productive. Easily add, update, and delete tasks .",
            technologies: "HTML | CSS | Javascript | React Js | Express | PostgreSQL",
            link: "#",
            github: "https://github.com/Joshal007/Task-Tracker",
        },
    ];

    return (
        <section id="projects">
            <h2 className="section_title" >Projects</h2>
            <span className="section_subtitle" >Recent Work</span>
            <div className="container portfolio__container">
                {soloProjects.map((pro) => (
                    <article className="portfolio__item" key={pro.id}>
                        <div className="portfolio__item-image">
                            <img src={pro.img} alt={pro.title} />
                        </div>
                        <div className="portfolio__item-content">
                            <h3>{pro.title}</h3>
                            <p>{pro.description}</p>
                            <p>{pro.technologies}</p>
                        </div>
                        <div className="portfolio__item-cta">
                            <a
                                href={pro.github}
                                target="_blank"
                                className="button button-flex"
                                rel="noreferrer"
                            >
                                GitHub
                            </a>
                            <a
                                href={pro.link}
                                target="_blank"
                                className="button button-flex"
                                rel="noreferrer"
                            >
                                Live Demo
                            </a>
                        </div>
                    </article>
                ))}
            </div>
            <br />
            <br />
        </section>
    );
};

export default Portfolio;