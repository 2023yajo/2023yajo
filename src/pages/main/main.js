import React from 'react';
import '../css/main.css'
import back_img from '../../img/background_jpeg.jpg'
import { Link } from 'react-router-dom';
import logo from '../../img/logo_49.png'
function Main() {
    return (
        <div className='container_main'>
            <img className='main_back' src={back_img} />
            <div className="grid-container">
                <div className="grid-item">
                    <Link to={'/'} >
                        <img src={logo} className='grid_logo' />
                    </Link>
                </div>
                <div className="grid-item">
                    <p className="grid_text">
                        Hongik University<br />
                        Outdoor<br />
                        Sculpture<br />
                        Exhibition
                    </p>
                </div>
                <div className="grid-item">
                    <Link to={'/about'} className='grid_link'>
                        <p className='grid_nav'>
                            About
                        </p>
                    </Link></div>
                <div className="grid-item">
                    <Link to={'/archive'} className='grid_link'>
                        <p className='grid_nav'>
                            Archive
                        </p>
                    </Link>
                </div>
                <div className="grid-item">
                    <Link to={'/program'} className='grid_link'>
                        <p className='grid_nav'>
                            Program
                        </p>
                    </Link></div>
                <div className="grid-item">
                    <Link to={'/credit'} className='grid_link'>
                        <p className='grid_nav'>
                            Credit
                        </p>
                    </Link></div>
                <div className="grid-item">
                    <div className='grid_side'>
                        <p className='grid_side_top'>
                            홍익대학교<br />
                            조소과<br />
                            야외조각전
                        </p>
                        <br />
                        <div className='grid_side_bottom'>
                            <a href='' className='grid_side_a'>2024</a>
                            <br />
                            <br />
                            <a href='' className='grid_side_a'>2023</a>
                            <br />
                            <br />
                            <a href='' className='grid_side_a'>2022</a>
                        </div>
                    </div>
                </div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item">
                    <p className='grid_date'>
                        2023.6.7-2023.6.18
                    </p></div>
                <div className="grid-item">
                    <p className='grid_address'>
                        서울특별시 마포구 와우산로 94<br />
                        홍익대학교 서울캠퍼스 일대
                    </p>
                </div>
                <div className="grid-item"></div>
                <div className="grid-item">
                    <a href='' className='grid_a'>
                        Instagram
                    </a>
                </div>
                <div className="grid-item">
                    <a href='' className='grid_a'>
                        Hongik University<br />
                        Sculpture Of Art
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Main;