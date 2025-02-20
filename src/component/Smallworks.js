import React from 'react';
import './css/small.css'
import { Link } from 'react-router-dom';

const Smallworks = ({ thumb, title, name, id }) => {
    return (
        <div className='workContainer'>
            <Link to={`/person/${id}`} className='links'>
                <div className='imagesContainer'>
                    <img className='images' src={thumb} />
                </div>
                <div className='nameContainer'>
                    <p className='titles'>{title}</p>
                    <br />
                    <p className='names2'>{name}</p>
                </div>
            </Link>
        </div>
    );
};

export default Smallworks;