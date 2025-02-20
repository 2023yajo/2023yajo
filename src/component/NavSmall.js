import React, { useEffect, useState } from 'react';
import './css/navsmall.css'
import Logo from './../img/moblogo.png'
import { Link, useLocation } from 'react-router-dom';
import Butt from '../img/butt.png'
import XButt from '../img/left2.png'

const NavSmall = ({ background }) => {
    const location = useLocation();
    const isArchivePage = location.pathname === '/archive';

    const [menuOn, setmenuOn] = useState(false);
    const [buttonImage, setButtonImage] = useState(Butt);
    const toggle = () => {
        setmenuOn(!menuOn);
        setButtonImage(menuOn ? Butt : XButt);
    }
    useEffect(() => {
        if (menuOn) {
            window.scrollBy({
                left: 1000,
                behavior: 'smooth',
            });
        }
    }, [menuOn]);

    return (
        <>
            <div className='imgContainer'>
                <img className='navBack' src={background} />
            </div>
            <div className={`gridContainer ${isArchivePage ? 'archivePage' : ''}`}>
                <div className='gridItem'>
                    <Link to={'/2023yajo'}>
                        <img className='mobLogo' src={Logo} />
                    </Link>
                </div>
                <div className='gridItem'>
                    <p className='topName'>
                        Hongik University<br />
                        Outdoor<br />
                        Sculpture<br />
                        Exhibition<br />
                    </p>
                </div>
                <div className='gridItem'>
                    <button className='buttons' onClick={toggle}><img src={buttonImage} /></button>
                </div>
                <div className='gridItem'>
                </div>

                <div className='gridItem'></div>
                <div className='gridItem'></div>
                <div className='gridItem'></div>
                <div className='gridItem'></div>
                <div className='gridItem'></div>
                <div className='gridItem'></div>
                <div className='gridItem'></div>
                <div className='gridItem'></div>
                <div className='gridItem'></div>
                <div className='gridItem'></div>
                <div className='gridItem'></div>
                <div className='gridItem'></div>
                <div className='gridItem'></div>
                <div className='gridItem'></div>
                <div className='gridItem'></div>
                <div className='gridItem'></div>
            </div>
            {menuOn ? (
                <div className='menuContainer'>
                    <div className='noneblanks'>

                    </div>
                    <div className='menu'>
                        <Link className='menuLink' to={'/about'} onClick={toggle}>
                            About
                        </Link>
                    </div>
                    <div className='menu'>
                        <Link className='menuLink' to={'/archive'} onClick={toggle}>
                            Archive
                        </Link>
                    </div>
                    <div className='menu'>
                        <Link className='menuLink' to={'/program'} onClick={toggle}>
                            Program
                        </Link>
                    </div>
                    <div className='menu'>
                        <Link className='menuLink' to={'/credit'} onClick={toggle}>
                            Credit
                        </Link>
                    </div>
                    <div className='noneblank'>

                    </div>
                </div>
            ) : null}
        </>
    );
};

export default NavSmall;