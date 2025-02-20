import React, { useState, useEffect } from 'react';
import '../css/main.css'
import Arrow from '../../img/arrow.png'

function Main() {
    return (
        <div className='info'>
            <div className='name'>
                홍익대학교<br />
                조소과<br />
                야외조각전
            </div>
            <div className='addr'>
                서울특별시 마포구 와우산로 94(상수동)
                홍익대학교 서울캠퍼스 일대
            </div>
            <div className='date'>
                2023.6.7-2023.6.18
            </div>
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
            <div className='year'>
                <a className='linkBig2' href=''>2024</a><br /><br />
                <a className='linkBig' href=''>2023</a><br /><br />
                <a className='linkBig2' href=''>2022</a><br /><br />
                <a className='linkBig2' href=''>2021</a><br /><br />
                &nbsp;&nbsp;-
                <br />
                <a className='linkBig2' href=''>1975</a>
            </div>
        </div>
    )

}

export default Main; 