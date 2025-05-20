import Display from './Display'
import Keypad from './Keypad'
import useCalculator from '../hooks/useCalculator'

function Calculator() {
  const { display, handleInput } = useCalculator()

  return (
    <div className="calculator">
      <Display value={display} />
      <Keypad onButtonClick={handleInput} />
    </div>
  )
}

export default Calculator
