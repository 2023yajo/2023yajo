import React, { useState } from 'react';
import './css/newapi.css'
import { Link } from 'react-router-dom';

function NewApi() {
  const [num, setNum] = useState(1); //가져올 사람 번호가 담긴 변수

  const locateArray = [0, 458, 381, 371, 457, 383, 605, 375, 566, 388, 411
    , 424, 338, 467, 420, 529, 336, 374, 384, 508, 344
    , 215, 292, 346, 385, 345, 421, 548, 427, 423, 376
    , 261, 342, 368, 527]; //버튼 넣고 싶은 셀 번호 목록

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
                  {haslocate(cellIndex, rowIndex) ?
                    <Link
                      to={`/person/${renderCellValue(cellIndex, rowIndex)}`}
                      state={{ num: renderCellValue(cellIndex, rowIndex) }}
                    >
                      <button onClick={() => handleCellClick(cellIndex, rowIndex)}>
                        {renderCellValue(cellIndex, rowIndex)}
                      </button>
                    </Link> : null}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default NewApi;