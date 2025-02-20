import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../../component/css/newapi.css'
import Left from '../../component/Left';
import Right from '../../component/Right';

const cash = new Map();

const Works = () => {
    const [data, setData] = useState({});
    const { id } = useParams();



    useEffect(() => {
        const fetchData = async () => {
            if (cash.has(id)) {
                setData(cash.get(id))
            }
            else {
                try {
                    const response = await axios.get(`https://port-0-hongikyazo2023-3szcb0g2bloyr54gv.sel5.cloudtype.app/getInfo/` + id);
                    setData(response.data);
                    cash.set(id, response.data);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            }
        };
        fetchData();
    }, [id]);

    return (
        <div>
            <Left />
            <Right />
            <div className='page'>
                <div className='arc-texts'>
                    <pre className='arc-title'>{data.title}</pre>
                    <p className='arc-name'>{data.name}</p>
                    <pre className='arc-material'>{data.ing}</pre>
                    <pre className='arc-size'>{data.size}</pre>
                    <p className='arc-caption'>{data.text}</p>
                </div>
                <div className='arc-pics'>
                    {data.photoList && data.photoList.map((photo, index) => (
                        <img key={index} src={photo} className='arc-img' />))}
                    {data.movieList && data.movieList.map((movie, index) => (
                        <iframe key={index} src={movie} className='arc-mov' width='400px' height='500px' />))}
                </div>
            </div>
        </div>
    );
};

export default Works;