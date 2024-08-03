import React from 'react'
import './modalProject.css'

export default function ModalProject({ modalActive, closeModal, name }) {
    if (!modalActive) return null
    return (
        <div
            className={
                modalActive
                    ? 'modal-project-container active'
                    : 'modal-project-container'
            }
            onClick={closeModal}
        >
            <div
                className="modal-project-content"
                onClick={(e) => e.stopPropagation()}
            >
                {name}

                <p>
                    {' '}
                    <a onClick={closeModal}>close</a>
                </p>
            </div>
        </div>
    )
}
