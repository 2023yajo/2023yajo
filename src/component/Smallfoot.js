import React from 'react';
import '../pages/css/main.css'
import Arrow from '../img/arrow.png'
const Smallfoot = () => {
    return (
        <div>
            <div className='sculpture'>
                <a className='link' href='https://scu.hongik.ac.kr/dept/index.html'>
                    Hongik University Sculpture of Art &nbsp;
                    <img className='arrow' src={Arrow} />
                </a>
            </div>
            <div className='insta'>
                <a className='link' href='https://www.instagram.com/hongik_yajo/'>
                    Instagram &nbsp;
                    <img className='arrow' src={Arrow} />
                </a>
            </div>
        </div>
    );
};

export default Smallfoot;