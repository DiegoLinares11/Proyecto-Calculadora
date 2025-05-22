import Display from './Display'
import KeyPad from './Keypad'
import { useCalculator } from '../hooks/useCalculator'

const Calculator = () => {
  const {
    display,
    clearDisplay,
    inputDigit,
    inputDecimal,
    toggleSign,
    performOperation,
    applyPercentage
  } = useCalculator()

  const handleEqualClick = () => {
    performOperation('=')
  }

  return (
    <div className='calculator'>
      <Display value={display} />
      <KeyPad
        onDigitClick={inputDigit}
        onOperatorClick={performOperation}
        onDecimalClick={inputDecimal}
        onClearClick={clearDisplay}
        onEqualClick={handleEqualClick}
        onToggleSignClick={toggleSign}
        onPercentageClick={applyPercentage}
      />
    </div>
  )
}

export default Calculator
