import React from 'react'
import './portfolio.css'
export default function Portfolio() {
    return (
        <section className="portfolio">
            <h1>This is portfolio</h1>
            <div className="about-me-description">
                <h3>about me</h3>
            </div>
            <div className="tech-and-skills">
                <div className="tech-and-skills-block">Skill 1</div>
                <div className="tech-and-skills-block">Skill 2</div>
                <div className="tech-and-skills-block">Skill 3</div>
                <div className="tech-and-skills-block">Skill 4</div>
                <div className="tech-and-skills-block">Skill 5</div>
            </div>
            <div className="projects-container">
                <div className="projects">
                    <div className="project-container">Project 1</div>
                    <div className="project-container">Project 2</div>
                    <div className="project-container">Project 3</div>
                    <div className="project-container">Project 4</div>
                    <div className="project-container">Project 5</div>
                    <div className="project-container">Project 6</div>
                    <div className="project-container">Project 7</div>
                    <div className="project-container">Project 8</div>
                </div>
            </div>
        </section>
    )
}
