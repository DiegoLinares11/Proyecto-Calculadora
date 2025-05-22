import Button from './Button'

const KeyPad = ({
  onDigitClick,
  onOperatorClick,
  onDecimalClick,
  onClearClick,
  onEqualClick,
  onToggleSignClick,
  onPercentageClick   
}) => {
  return (
    <div className="calculator-keypad">
      <div className="keypad-row">
        <Button onClick={onClearClick} className="function-key">
          C
        </Button>
        <Button onClick={onToggleSignClick} className="operator-key">
          +/-
        </Button>
        <Button onClick={onPercentageClick} className="operator-key">%</Button>
        <Button onClick={() => onOperatorClick('/')} className="operator-key">
          ÷
        </Button>
      </div>

      <div className="keypad-row">
        <Button onClick={() => onDigitClick('7')}>7</Button>
        <Button onClick={() => onDigitClick('8')}>8</Button>
        <Button onClick={() => onDigitClick('9')}>9</Button>
        <Button onClick={() => onOperatorClick('*')} className="operator-key">
          ×
        </Button>
      </div>

      <div className="keypad-row">
        <Button onClick={() => onDigitClick('4')}>4</Button>
        <Button onClick={() => onDigitClick('5')}>5</Button>
        <Button onClick={() => onDigitClick('6')}>6</Button>
        <Button onClick={() => onOperatorClick('-')} className="operator-key">
          -
        </Button>
      </div>

      <div className="keypad-row">
        <Button onClick={() => onDigitClick('1')}>1</Button>
        <Button onClick={() => onDigitClick('2')}>2</Button>
        <Button onClick={() => onDigitClick('3')}>3</Button>
        <Button onClick={() => onOperatorClick('+')} className="operator-key">
          +
        </Button>
      </div>

      <div className="keypad-row">
        <Button
          onClick={() => onDigitClick('0')}
          className="double-width"
        >
          0
        </Button>
        <Button onClick={onDecimalClick}>.</Button>
        <Button onClick={onEqualClick} className="operator-key">
          =
        </Button>
      </div>
    </div>
  )
}

export default KeyPad