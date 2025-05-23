import Button from '../components/Button'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    className: { control: 'text' },
    children: { control: 'text' }
  }
}

export const Default = {
  args: {
    children: '5'
  }
}

export const OperatorButton = {
  args: {
    children: '+',
    className: 'operator-key'
  }
}

export const FunctionButton = {
  args: {
    children: 'C',
    className: 'function-key'
  }
}

export const DoubleWidthButton = {
  args: {
    children: '0',
    className: 'double-width'
  }
}