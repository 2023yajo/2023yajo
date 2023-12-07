import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Right = () => {
    const { id } = useParams();
    const destination = parseInt(id, 10) + 1

    if (id < 30) {
        return (
            <div>
                <Link to={`/person/${destination}`}>
                    <p className='right'>→</p>
                </Link>
            </div>
        );
    } else
        return null;
};

export default Right;