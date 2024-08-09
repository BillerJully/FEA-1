import React from 'react'
import './modalProject.css'
import projectImgModal from '../files/petproject.png'

export default function ModalProject({
    modalActive,
    closeModal,
    name,
    type,
    description,
    technologies,
    source,
    site,
}) {
    const handleClick = (e) => {
        // Проверяем, что клик был на фоне модального окна, а не внутри его содержимого
        if (e.target.classList.contains('modal-project-container')) {
            closeModal()
        }
    }

    return (
        <div
            className={`modal-project-container ${modalActive ? 'active' : ''}`}
            onClick={handleClick}
        >
            <div className="modal-project-content">
                <div className="modal-header">
                    <strong className="modal-project-name"> {name}</strong>
                    <p>
                        <a
                            className="close-modal-project-botton"
                            onClick={closeModal}
                        >
                            close
                        </a>
                    </p>
                </div>
                <div className="modal-img">
                    <img src={projectImgModal} alt="" />
                </div>
                <div className="modal-project-info">
                    <div className="modal-project-description">
                        <h4>Description</h4>
                        <strong>{type}</strong>
                        <p className="modal-description-text">{description}</p>
                    </div>
                    <hr />
                    <div className="modal-project-technologies">
                        <h4>Technologies</h4>
                        <p className="modal-description-text">
                            {' '}
                            {technologies
                                ? technologies.map((tech) => (
                                      <span key={tech}>{tech}</span>
                                  ))
                                : 'Will be soon'}
                        </p>
                    </div>
                </div>
                <div className="modal-project-link-container">
                    <div className="modal-project-link">
                        <strong href="">{source}</strong>
                        <strong>{site}</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}
