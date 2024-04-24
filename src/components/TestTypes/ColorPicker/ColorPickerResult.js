import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min'

const ColorPickerResult = () => {
  const location = useLocation();
  const history = useHistory();
  useState(() => {
    if(!location.state) {
      alert("잘못된 경로로 접근하셨습니다.");
      history.push('/colorPicker');
    }
  }, [location]);
  return (
    // TODO: Design
    <div>{location.state}모드를 클리어 했다 너</div>
  )
}

export default ColorPickerResult