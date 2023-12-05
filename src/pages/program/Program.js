import React from 'react';
import '../css/about.css';
import Barr from '../../img/barrier.jpeg'


const Program = () => {
    return (
        <div>
            <div className='prog-pic'>
                <img src={Barr} className='pro-pic' />
                <p className='pro-p'>
                    2023년 6월 16일 '마을이 신나는 장애인 야학'에서 오신 관객들에게 작품을 설명하고 있는 조윤정 학우.
                </p>
            </div>
            <div className='prog_container'>
                <div className='prog-name'>
                    배리어 프리 도슨트 프로그램 <br />
                    Barrier-free Docent<br />
                </div>
                <div className='articles'>
                    <p className='highlight'>
                        이전의 야외조각전은 캠퍼스 전역에서 조각 작품을 선보이는 전시의 특성에도 불구하고, 홍익대학교 건축 공간의 고질적인 문제인 물리적 접근 장벽에 대한 고려가 없었습니다. 이러한 이유에서 제 49회 야외조각전 준비위원회는 전시공간이 지닌 모든 형태의 접근 장벽을 넘어, 캠퍼스 전역에 놓인 조각들과 자유롭게 소통할 수 있는 '배리어 프리 도슨트' 프로그램을 진행했습니다.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Program;