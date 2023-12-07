import React from 'react';
import { Link, useParams } from 'react-router-dom';
import arrow from '../img/right.png'

const Right = () => {
    const { id } = useParams();
    const destination = parseInt(id, 10) + 1

    if (id < 30) {
        return (
            <div>
                <Link to={`/person/${destination}`}>
                    <img className='right' src={arrow} />
                </Link>
            </div>
        );
    } else
        return null;
};

export default Right;