import KeyPad from '../components/Keypad'
import '../App.css'

export default {
  title: 'Components/KeyPad',
  component: KeyPad,
  argTypes: {
    onDigitClick: { action: 'digit clicked' },
    onOperatorClick: { action: 'operator clicked' },
    onDecimalClick: { action: 'decimal clicked' },
    onClearClick: { action: 'clear clicked' },
    onEqualClick: { action: 'equal clicked' },
    onToggleSignClick: { action: 'toggle sign clicked' }
  }
}

export const Default = {
  args: {}
}