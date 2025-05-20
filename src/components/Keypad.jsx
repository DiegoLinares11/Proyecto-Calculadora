import Button from './Button'

const buttons = [
  '7', '8', '9', '+',
  '4', '5', '6', '-',
  '1', '2', '3', '*',
  '0', '.', '=', 'C'
]

function Keypad({ onButtonClick }) {
  return (
    <div className="keypad">
      {buttons.map((btn) => (
        <Button key={btn} label={btn} onClick={onButtonClick} />
      ))}
    </div>
  )
}

export default Keypad