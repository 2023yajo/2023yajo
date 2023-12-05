//이 주소가 실제 프로젝트에서 쓰일 주소
import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import './css/newapi.css'

function NewApi() {
  const [data, setData] = useState(null); // 가져온 데이터가 담긴 변수
  const [num, setNum] = useState(1); //가져올 사람 번호가 담긴 변수

  const locateArray = [0, 458, 381, 371, 457, 383, 605, 375, 566, 388, 411
    , 424, 338, 467, 420, 529, 336, 374, 384, 508, 344
    , 215, 292, 346, 385, 345, 421, 548, 427, 423, 376
    , 261, 342, 368, 527]; //버튼 넣고 싶은 셀 번호 목록

  const cash = useMemo(() => {
    const cash = new Map();
    return cash;
  }, [])// 캐시 메모리

  useEffect(() => {
    if (cash.has(num)) {
      setData(cash.get(num))
    } else {
      axios.get(`https://port-0-yazo2023-3prof2lll0d1goc.sel4.cloudtype.app/getInfo/` + num)
        .then(response => {
          setData(response.data);
          cash.set(num, response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  }, [num]); //백엔드에 요청 날려서 데이터 받아오는 함수

  const renderCellValue = (cellIndex, rowIndex) => {
    const calculatedValue = cellIndex + 40 * rowIndex + 1;
    if (calculatedValue === 261 || calculatedValue === 342 || calculatedValue === 368 || calculatedValue === 527) { return 25; }
    return locateArray.indexOf(calculatedValue);
  }; // 셀 번호 계산해서 리턴하는 함수

  const haslocate = (cellIndex, rowIndex) => {
    const calculatedValue = cellIndex + 40 * rowIndex + 1;
    return locateArray.includes(calculatedValue);
  }; //셀 번호에 버튼 들어가도 괜찮은지 계산하는 함수

  const handleCellClick = (cellIndex, rowIndex) => {
    setNum(renderCellValue(cellIndex, rowIndex));
  }; // 셀 번호로 num 바꿔주는 함수

  return (
    <div className='api_container'>
      <table className='ApiTable'>
        <tbody>
          {Array.from({ length: 20 }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              {Array.from({ length: 40 }).map((_, cellIndex) => (
                <td key={cellIndex} className='TdCell'>
                  {haslocate(cellIndex, rowIndex) ? <button style={{ width: '20px', height: '20px', fontSize: 10, backgroundColor: 'skyblue', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => handleCellClick(cellIndex, rowIndex)}>{renderCellValue(cellIndex, rowIndex)}</button> : null}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {data ? (
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
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default NewApi;