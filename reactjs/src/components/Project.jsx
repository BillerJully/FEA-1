import React, { useState } from 'react'
import ModalProject from './ModalProject'
import './project.css'

export default function Project(projectData) {
    const { name, description, technologies, source, site } =
        projectData.projectData

    const [modalActive, setModalActive] = useState(false)

    const openModal = () => {
        setModalActive(true)
    }

    const closeModal = () => {
        setModalActive(false)
    }

    return (
        <div className="project-container" onClick={openModal}>
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
            <ModalProject
                modalActive={modalActive}
                closeModal={closeModal}
                name={name}
            />
        </div>
    )
}
