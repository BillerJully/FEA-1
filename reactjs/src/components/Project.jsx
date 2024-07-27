import React from 'react'
import './project.css'

export default function Project() {
    return (
        <div className="project-container">
            <div className="project-main"></div>
            <div className="project-buttons">
                <button className="project-button">Source code</button>
                <button className="project-button">Demo site</button>
                <button className="project-button">See case</button>
            </div>
        </div>
    )
}
