import React from "react";
import '../css/about.css'
import Modals from "../../component/Modals";
import { useState, useEffect } from "react";

function About_poster() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <>
            <div className="poster">
                <img src='https://i.postimg.cc/zfw3ZMh0/Kakao-Talk-20231206-202803636.jpg' className="pos_img" />
            </div>
            {windowWidth < 990 ?
                <Modals imgSrc={'https://i.postimg.cc/zfw3ZMh0/Kakao-Talk-20231206-202803636.jpg'} /> : ''}
        </>

    )
}

export default About_poster;