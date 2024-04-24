import React from 'react'
import './colorPicker.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const ColorPicker = () => {
    const history = useHistory();

    const onButtonClick = (difficulty) => {
        return history.push(`/colorPicker/${difficulty}`, difficulty);
    }
  return (
    <div>
        <h1>케이테스트 색감 테스트</h1>
        <div>
            <button onClick={() => onButtonClick("easy")} className='difficulty-button' type='button'>Easy</button>
            <button onClick={() => onButtonClick("medium")} className='difficulty-button' type='button'>Medium</button>
            <button onClick={() => onButtonClick("hard")} className='difficulty-button' type='button'>Hard</button>
        </div>
    </div>
  )
}

export default ColorPicker