import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Works = () => {
    const location = useLocation();
    const [data, setData] = useState({});

    useEffect(() => {
        console.log((location))
    })


    useEffect(() => {
        const fetchData = async () => {
            if (location.state && location.state.num) {
                try {
                    const response = await axios.get(`https://port-0-yazo2023-3prof2lll0d1goc.sel4.cloudtype.app/getInfo/` + location.state.num);
                    setData(response.data);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            }
        };

        fetchData();
    }, [location.state.num]);

    return (
        <div className='arc-works'>
            <p className='arc-p'>{data.name}</p>
            <p className='arc-p'>{data.title}</p>
            <p className='arc-p'>{data.ing}</p>
            <p className='arc-p'>{data.size}</p>
            <p className='arc-p'>{data.text}</p>
            {data.photoList && data.photoList.map((photo, index) => (
                <img key={index} src={photo} className='arc-img' />))}
            {data.movieList && data.movieList.map((movie, index) => (
                <iframe key={index} src={movie} className='arc-mov' />))}
        </div>
    );
};

export default Works;