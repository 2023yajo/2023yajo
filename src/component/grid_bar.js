import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo_49.png"
import "./css/grid_bar.css"
import arrow from '../img/arrow.png'

function Grid_bars({ back_img }) {
    return (
        <div className='container_main'>
            <img className='main_back' src={back_img} />
            <div className="grid-container">
                <div className="grid-item">
                    <Link to={'/'} >
                        <img src={logo} className='grid_logo' />
                    </Link>
                </div>
                <div className="grid-item"></div>
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
                <div className="grid-item"></div>
                <div className="grid-item">
                    <div className='grid_side'>
                        <p className='grid_side_top'>
                            홍익대학교<br />
                            조소과<br />
                            야외조각전
                        </p>
                    </div>
                </div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item">
                    <div className='grid_side_bottom'>
                        <a href='' className='grid_side_a'>2024</a>
                        <br />
                        <br />
                        <a href='https://www.instagram.com/hongik_yajo/' className='grid_side_a_new'>2023</a>
                        <br />
                        <br />
                        <a href='' className='grid_side_a'>2022</a>
                        <br />
                        <br />
                        <a href='' className='grid_side_a'>2021</a>
                        <p className='grid_side_hyph'>-</p>
                        <a href='' className='grid_side_a'>1975</a>
                    </div>
                </div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item">
                    <div className="gird_bottom">
                        <p className='grid_date'>
                            &nbsp;2023.6.7-2023.6.18
                        </p>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="gird_bottom">
                        <p className='grid_date'>
                        &nbsp;04066 서울특별시 마포구 와우산로 94(상수동)<br />
                        &nbsp;홍익대학교 서울캠퍼스 일대
                        </p>
                    </div>
                </div>
                <div className="grid-item"></div>
                <div className="grid-item">
                    <div className="gird_bottom">
                        <a href='https://www.instagram.com/hongik_yajo/' className='grid_a'>
                        &nbsp;Instagram&nbsp;
                        <img src={arrow} className="grid_arrow"/>
                        </a>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="gird_bottom">
                        <a href='https://scu.hongik.ac.kr/dept/index.html' className='grid_a'>
                        &nbsp;Hongik University&nbsp;
                        <img src={arrow} className="grid_arrow"/>
                        <br />
                        &nbsp;Sculpture Of Art
                        </a>
                    </div>
                </div>
                <div className="grid-item"></div>
            </div>
        </div>
    )


}

export default Grid_bars;