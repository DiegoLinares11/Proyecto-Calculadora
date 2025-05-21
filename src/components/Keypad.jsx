import Button from './Button'

const keys = [
  'C', '+/-', '%', '/',
  '7', '8', '9', '*',
  '4', '5', '6', '-',
  '1', '2', '3', '+',
  '0', '.', '='
]

function Keypad({ onButtonClick }) {
  return (
    <div className="keypad">
      {[0, 1, 2, 3, 4].map(row => (
        <div className="keypad-row" key={row}>
          {keys.slice(row * 4, row * 4 + 4).map(btn => (
            <Button key={btn} label={btn} onClick={onButtonClick} />
          ))}
        </div>
      ))}
    </div>
  )
}



export default Keypad