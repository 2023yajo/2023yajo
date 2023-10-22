import React from "react";
import yajo_pos from '../../img/poster.jpg'
import '../css/about.css'


function About_poster(){
    return(
        <div className="poster">
            <img src={yajo_pos} className="pos_img"/>
        </div>
    )
}

export default About_poster;