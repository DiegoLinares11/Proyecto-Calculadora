function Button({ label, onClick }) {
  const isOperator = ['+', '-', '*', '/', '='].includes(label)
  const isFunction = ['C', '+/-', '%'].includes(label)

  let className = 'calculator-button'
  if (isOperator) className += ' operator-key'
  if (isFunction) className += ' function-key'
  if (label === '0') className += ' double-width'

  return (
    <button className={className} onClick={() => onClick(label)}>
      {label}
    </button>
  )
}


export default Button