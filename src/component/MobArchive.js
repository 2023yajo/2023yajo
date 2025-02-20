import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Smallworks from './Smallworks';
import './css/small.css'

const MobArchive = () => {

    const [data, setData] = useState({ nameList: [], thumnailList: [], titleList: [] });


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://port-0-hongikyazo2023-3szcb0g2bloyr54gv.sel5.cloudtype.app/nameAndThumbnail');
                setData(response.data);
                console.log(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    return (
        <div className='worksContainer'>
            {data.nameList.map((name, index) => (
                (name && data.thumbnailList[index]) && (
                    <Smallworks
                        key={index}
                        thumb={data.thumbnailList[index]}
                        title={data.titleList[index]}
                        name={name}
                        id={index + 1}
                    />
                )
            ))}
        </div>
    );
};

export default MobArchive;

