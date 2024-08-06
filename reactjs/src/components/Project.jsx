import React, { useState } from 'react'
import ModalProject from './ModalProject'
import './project.css'
import projectImg from '../files/petproject.png'

export default function Project({ projectData }) {
    const { name, description, technologies, source, site } = projectData

    const [modalActive, setModalActive] = useState(false)

    const openModal = () => {
        setModalActive(true)
    }

    const closeModal = () => {
        console.log('Closing modal')
        setModalActive(false)
    }

    return (
        <div className="project-container">
            <div className="project-main" onClick={openModal}>
                <div className="project-img-holder">
                    <img className="project-img" src={projectImg} alt="" />
                </div>
                <div className="project-descr-holder">
                    <p>{description}</p>
                </div>
                <div className="project-tags-holder">
                    {technologies
                        ? technologies.map((tech) => (
                              <span key={tech}>{tech}</span>
                          ))
                        : 'Will be soon'}
                </div>
            </div>

            <ModalProject
                modalActive={modalActive}
                closeModal={closeModal}
                name={name}
            />
        </div>
    )
}
