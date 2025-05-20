import { useState } from 'react'
import Display from './Display'
import Keypad from './Keypad'

function Calculator() {
  const [display, setDisplay] = useState('0')

  const handleButtonClick = (label) => {
    setDisplay((prev) => prev === '0' ? label : prev + label)
  }

  return (
    <div className="calculator">
      <Display value={display} />
      <Keypad onButtonClick={handleButtonClick} />
    </div>
  )
}

export default Calculator