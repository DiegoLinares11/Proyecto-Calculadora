import { useState } from 'react'

function useCalculator() {
  const [display, setDisplay] = useState('0')
  const [accumulator, setAccumulator] = useState(null)
  const [operator, setOperator] = useState(null)
  const [waitingForNewInput, setWaitingForNewInput] = useState(false)

  const MAX_DIGITS = 9
  const MAX_VALUE = 999999999

  const isOperator = (char) => ['+', '-', '*', '/', '%'].includes(char)

  const handleInput = (label) => {
    if (display === 'ERROR') return

    // Limpiar pantalla si esperamos un nuevo número
    if (waitingForNewInput && !isOperator(label) && label !== '=') {
      setDisplay(label === '.' ? '0.' : label)
      setWaitingForNewInput(false)
      return
    }

    if (!isNaN(label)) {
      if (display.length >= MAX_DIGITS) return
      setDisplay(prev => (prev === '0' ? label : prev + label))
    } else if (label === '.') {
      if (display.includes('.') || display.length >= MAX_DIGITS) return
      setDisplay(prev => prev + '.')
    } else if (isOperator(label)) {
      calculateIntermediate(label)
    } else if (label === '=') {
      calculateResult()
    } else if (label === 'C') {
      clear()
    }
  }

  const calculateIntermediate = (newOperator) => {
    const current = parseFloat(display)

    if (accumulator === null) {
      setAccumulator(current)
    } else if (operator) {
      const result = operate(accumulator, current, operator)
      if (result === 'ERROR') return setDisplay('ERROR')
      setAccumulator(result)
      setDisplay(result.toString())
    }

    setOperator(newOperator)
    setWaitingForNewInput(true)
  }

  const calculateResult = () => {
    if (operator === null || accumulator === null) return

    const current = parseFloat(display)
    const result = operate(accumulator, current, operator)

    if (result === 'ERROR') return setDisplay('ERROR')

    setDisplay(result.toString())
    setAccumulator(null)
    setOperator(null)
    setWaitingForNewInput(true)
  }

  const operate = (a, b, op) => {
    let result
    switch (op) {
      case '+': result = a + b; break
      case '-': result = a - b; break
      case '*': result = a * b; break
      case '/': result = b === 0 ? 'ERROR' : a / b; break
      case '%': result = a % b; break
      default: return a
    }

    if (result < 0 || result > MAX_VALUE) return 'ERROR'

    const str = result.toString()
    if (str.replace('.', '').length > MAX_DIGITS) return 'ERROR'

    return parseFloat(result.toFixed(6)) // para evitar muchos decimales
  }

  const clear = () => {
    setDisplay('0')
    setAccumulator(null)
    setOperator(null)
    setWaitingForNewInput(false)
  }

  return { display, handleInput }
}

export default useCalculator
