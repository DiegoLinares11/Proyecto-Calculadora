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
    if (display === 'ERROR') {
      setDisplay(digit)
      setWaitingForOperand(false)
      return
    }

    if (waitingForOperand) {
      setDisplay(digit)
      setWaitingForOperand(false)
    } else {
      setDisplay(display === '0' ? digit : display.length < MAX_DISPLAY_LENGTH ? display + digit : display)
    }
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
    if (result < 0) return 'ERROR'
    if (result > MAX_VALUE) return 'ERROR'

    const resultString = result.toString()
    
    if (resultString.length > MAX_DISPLAY_LENGTH) {
      // Si es un decimal, tratar de ajustar decimales
      if (resultString.includes('.')) {
        const integerPart = Math.floor(result)
        const integerString = integerPart.toString()
        
        if (integerString.length >= MAX_DISPLAY_LENGTH) {
          return 'ERROR'
        }
        
        const availableDecimals = MAX_DISPLAY_LENGTH - integerString.length - 1 // -1 para el punto
        if (availableDecimals <= 0) {
          return integerString
        }
        
        return result.toFixed(availableDecimals)
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
    
    if (previousValue === null) {
      setPreviousValue(currentValue)
      setWaitingForOperand(true)
      setOperation(nextOperation)
      return
    }
    
    let result
    switch (operation) {
      case '+':
        result = previousValue + currentValue
        break
      case '-':
        result = previousValue - currentValue
        break
      case '*':
        result = previousValue * currentValue
        break
      case '/':
        if (currentValue === 0) {
          setDisplay('ERROR')
          setPreviousValue(null)
          setOperation(null)
          setWaitingForOperand(true)
          return
        }
        result = previousValue / currentValue
        break
      case '%':
        result = previousValue % currentValue
        break
      default:
        result = currentValue
    }
    
    const formattedResult = formatResult(result)
    setDisplay(formattedResult)
    setPreviousValue(parseFloat(formattedResult === 'ERROR' ? 0 : formattedResult))
    setWaitingForOperand(true)
    setOperation(nextOperation)
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