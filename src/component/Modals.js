import React, { useState } from 'react';
import Extension from '../img/extension.png'

const FullScreenImage = ({ imageUrl, onClose }) => {
    return (
        <div
            style={{
                zIndex: 99999,
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <img
                src={imageUrl}
                alt="Full Screen"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
            <button
                onClick={onClose}
                style={{
                    position: 'absolute',
                    top: 20,
                    right: 20,
                    backgroundColor: 'transparent',
                    color: '#fff',
                    border: 'none',
                    fontSize: '16px',
                    cursor: 'pointer',
                }}
            >
                Close
            </button>
        </div>
    );
};


const Modals = ({ imgSrc }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const buttonOn = () => {
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
    }

    return (
        <div>
            <button onClick={buttonOn} style={{
                position: 'absolute',
                top: '10vh',
                left: '40vw',
                border: 'none',
                background: 'none',
                padding: '0',
                cursor: 'pointer',
            }}>
                <img src={Extension} style={{
                    width: '20px'
                }} />
            </button>
            {modalOpen && (
                <FullScreenImage imageUrl={imgSrc} onClose={closeModal} />
            )}
        </div>
    );
};

export default Modals;