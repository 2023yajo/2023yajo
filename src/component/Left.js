import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './css/pointer.css'

const Left = () => {
    const { id } = useParams();
    const destination = id - 1

    if (id > 1) {
        return (
            <div>
                <Link to={`/person/${destination}`}>
                    <p className='left'>←</p>
                    {/* <img className='left' src={arrow} /> */}
                </Link>
            </div>
        );
    } else
        return null;
};

export default Left;