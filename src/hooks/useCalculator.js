import { useState } from 'react'

const MAX_DISPLAY_LENGTH = 9
const MAX_VALUE = 999999999

export const useCalculator = () => {
  const [display, setDisplay] = useState('0')
  const [previousValue, setPreviousValue] = useState(null)
  const [operation, setOperation] = useState(null)
  const [waitingForOperand, setWaitingForOperand] = useState(false)

  const clearDisplay = () => {
    setDisplay('0')
    setPreviousValue(null)
    setOperation(null)
    setWaitingForOperand(false)
  }

  const inputDigit = (digit) => {
    setDisplay((prevDisplay) => {
      if (prevDisplay === 'ERROR') {
        return digit
      }

      if (waitingForOperand) {
        return digit
      } else {
        return prevDisplay === '0' ? digit : prevDisplay.length < MAX_DISPLAY_LENGTH ? prevDisplay + digit : prevDisplay
      }
    })
    setWaitingForOperand(false)
  }

  const inputDecimal = () => {
    if (display === 'ERROR') {
      setDisplay('0.')
      setWaitingForOperand(false)
      return
    }

    if (waitingForOperand) {
      setDisplay('0.')
      setWaitingForOperand(false)
      return
    }

    if (display.length >= MAX_DISPLAY_LENGTH) return
    if (!display.includes('.')) {
      setDisplay(display + '.')
    }
  }

  const toggleSign = () => {
    if (display === 'ERROR') return

    if (display === '0') return // no tiene sentido cambiar el signo de cero

    const newValue = parseFloat(display) * -1
    const newDisplay = newValue.toString()

    if (newDisplay.length > MAX_DISPLAY_LENGTH) {
      setDisplay('ERROR')
    } else {
      setDisplay(newDisplay)
    }
  }

  const formatResult = (result) => {
    if (isNaN(result) || result < 0 || result > MAX_VALUE) {
      return 'ERROR'
    }

    // Lógica para manejar decimales y longitud
    const resultString = result.toString()
    if (resultString.length > MAX_DISPLAY_LENGTH) {
      if (resultString.includes('.')) {
        const [integer, decimal] = resultString.split('.')
        const availableSpace = MAX_DISPLAY_LENGTH - integer.length - 1
        return availableSpace > 0
          ? `${integer}.${decimal.slice(0, availableSpace)}`
          : 'ERROR'
      }
      return 'ERROR'
    }
    return resultString
  }

  const applyPercentage = () => {
    if (display === 'ERROR') return

    const currentValue = parseFloat(display)
    const result = currentValue / 100
    const formatted = formatResult(result)

    setDisplay(formatted)
    setWaitingForOperand(true)
  }

  const performOperation = (nextOperation) => {
    if (display === 'ERROR') return
    const currentValue = parseFloat(display)

    setPreviousValue((prevPrevious) => {
      if (prevPrevious === null) {
        // Primer operando: guardar valor y operación
        setOperation(nextOperation !== '=' ? nextOperation : null)
        setWaitingForOperand(true)
        return currentValue
      } else {
        // Realizar cálculo con el valor anterior
        let result
        switch (operation) {
          case '+':
            result = prevPrevious + currentValue
            break
          case '-':
            result = prevPrevious - currentValue
            break
          case '*':
            result = prevPrevious * currentValue
            break
          case '/':
            result = currentValue === 0 ? NaN : prevPrevious / currentValue
            break
          default:
            result = currentValue
        }

        const formattedResult = formatResult(result)
        setDisplay(formattedResult)

        if (nextOperation === '=') {
          setOperation(null)
          return null
        } else {
          setOperation(nextOperation)
          return formattedResult === 'ERROR' ? 0 : parseFloat(formattedResult)
        }
      }
    })

    setWaitingForOperand(true)
  }

  return {
    display,
    clearDisplay,
    inputDigit,
    inputDecimal,
    toggleSign,
    performOperation,
    applyPercentage
  }
}
