import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './colorPicker.css';

const ColorPicker = () => {
  const history = useHistory();

  const onButtonClick = (difficulty) => {
      return history.push(`/colorPicker/${difficulty}`, difficulty);
  }
  return (
    // TODO: Design
    <div>
        <h1>케이테스트 색감 테스트</h1>
        <p>중간에 틀리면 다시 처음으로 돌아가요</p>
        <p>아래 버튼을 누르면 3초 뒤에 시작</p>
        <div>
            <button onClick={() => onButtonClick("easy")} className='difficulty-button' type='button'>Easy</button>
            <button onClick={() => onButtonClick("medium")} className='difficulty-button' type='button'>Medium</button>
            <button onClick={() => onButtonClick("hard")} className='difficulty-button' type='button'>Hard</button>
        </div>
    </div>
  )
}

export default ColorPicker;