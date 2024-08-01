import React from 'react'
import './project.css'

export default function Project(projectData) {
    const { name, description, technologies, source, site } =
        projectData.projectData
    console.log('Project data:', projectData)
    console.log('Project name:', technologies)
    return (
        <div className="project-container">
            <div className="project-main">
                <p>{name}</p>
                <p>{description}</p>
                <p>{technologies ? technologies.join(',') : 'Will be soon'}</p>
            </div>
            <div className="project-buttons">
                <button className="project-button">
                    <a href={source}>Source code</a>
                </button>
                <button className="project-button">
                    <a href={site}>Demo site</a>
                </button>
                <button className="project-button">See case</button>
            </div>
        </div>
    )
}
