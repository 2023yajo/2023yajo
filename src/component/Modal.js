import React, { useState } from 'react';
import '../pages/css/about.css'

function Modal({ imgsrc }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleImageClick = () => {
        setIsModalOpen(true);
    };
    const handleModalClose = () => {
        setIsModalOpen(false);
    };
    return (
        <div>
            <img src={imgsrc} onClick={handleImageClick} className='pro-pic' />
            {isModalOpen && (
                <div className="modal-container">
                    <div className="modal-content">
                        <img src={imgsrc} className='modal-on' onClick={handleModalClose} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Modal;