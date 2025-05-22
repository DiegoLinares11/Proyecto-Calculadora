import Display from './Display'
import KeyPad from './KeyPad'
import { useCalculator } from '../hooks/useCalculator'

const Calculator = () => {
  const {
    display,
    clearDisplay,
    inputDigit,
    inputDecimal,
    toggleSign,
    performOperation
  } = useCalculator()

  const handleEqualClick = () => {
    performOperation('=')
  }

  return (
    <div className="calculator">
      <Display value={display} />
      <KeyPad
        onDigitClick={inputDigit}
        onOperatorClick={performOperation}
        onDecimalClick={inputDecimal}
        onClearClick={clearDisplay}
        onEqualClick={handleEqualClick}
        onToggleSignClick={toggleSign}
      />
    </div>
  )
}

export default Calculator