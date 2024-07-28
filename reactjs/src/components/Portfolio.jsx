import React from 'react'
import Skill from './Skill'
import Project from './Project'

import './portfolio.css'
export default function Portfolio() {
    return (
        <section className="portfolio">
            <h1>Portfolio</h1>
            <div className="about-me-description-container">
                <h3>About me</h3>
                <p className="description-text">
                    Hi there! I am Web Developer! Hi there! I am Web Developer!
                    Hi there! I am Web Developer! Hi there! I am Web Developer!
                    Hi there! I am Web Developer! Hi there! I am Web Developer!
                    Hi there! I am Web Developer! Hi there! I am Web Developer!
                    Hi there! I am Web Developer! Hi there! I am Web Developer!
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
            <div className="tech-and-skills-container">
                <h3>Skills</h3>
                <Skill />
            </div>
            <div className="projects-container">
                <h3>Projects</h3>
                <div className="projects">
                    <Project />
                    <Project />
                    <Project />
                </div>
            </div>
        </section>
    )
}
