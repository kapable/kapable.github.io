import React from 'react'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'

const ColorPickerResult = () => {
  const location = useLocation();
  return (
    // TODO: Design
    <div>{location.state}모드를 클리어 했다 너</div>
  )
}

export default ColorPickerResult