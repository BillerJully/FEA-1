import React from 'react'
import Skill from './Skill'
import Project from './Project'
import projects from '../files/projects.json'
import skills from '../files/skills.json'
import petProjects from '../files/pet-project.json'

import './portfolio.css'
export default function Portfolio() {
    const countProjects = projects.length
    const countPetProjects = petProjects.length

    return (
        <section className="portfolio">
            <h1>Portfolio</h1>
            <div className="about-me-description-container">
                <h3>About me</h3>
                <p className="description-text">
                    I am a novice web developer with a keen interest in creating
                    interactive and modern web applications. I develop projects
                    with responsive user interface design and strive for
                    continuous development in my field.
                </p>
            </div>
            <div className="education-container">
                <h3>Education</h3>
                <div className="education-block">
                    <span className="info-key">Education level:</span>
                    <span className="info-value">Master’s degree</span>
                </div>
                <div className="education-block">
                    <span className="info-key">University:</span>
                    <span className="info-value">
                        Kazan National Research Technical University named after
                        A. N. Tupolev
                    </span>
                </div>
            </div>
            <div className="tech-and-skills-container ">
                <h3>Skills</h3>
                <Skill skillData={skills} />
            </div>
            <div className="projects-container">
                <h3>Projects: {countProjects}</h3>
                <div className="projects">
                    {projects.map((project, index) => (
                        <Project key={index} projectData={project} />
                    ))}
                </div>
            </div>
            <div className="projects-container">
                <h3>Pet Projects: {countPetProjects}</h3>
                <div className="projects">
                    {petProjects.map((petProject, index) => (
                        <Project key={index} projectData={petProject} />
                    ))}
                </div>
            </div>
        </section>
    )
}
