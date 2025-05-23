import { render, screen, fireEvent } from '@testing-library/react'
import KeyPad from '../components/Keypad'
import { vi } from 'vitest'

test('debe llamar a los callbacks correctamente al hacer clic', () => {
  const digitClick = vi.fn()
  const operatorClick = vi.fn()
  const decimalClick = vi.fn()
  const clearClick = vi.fn()
  const equalClick = vi.fn()
  const toggleSignClick = vi.fn()
  const percentageClick = vi.fn()

  render(
    <KeyPad
      onDigitClick={digitClick}
      onOperatorClick={operatorClick}
      onDecimalClick={decimalClick}
      onClearClick={clearClick}
      onEqualClick={equalClick}
      onToggleSignClick={toggleSignClick}
      onPercentageClick={percentageClick}
    />
  )

  fireEvent.click(screen.getByText('C'))
  expect(clearClick).toHaveBeenCalled()

  fireEvent.click(screen.getByText('5'))
  expect(digitClick).toHaveBeenCalledWith('5')

  fireEvent.click(screen.getByText('+'))
  expect(operatorClick).toHaveBeenCalledWith('+')

  fireEvent.click(screen.getByText('.'))
  expect(decimalClick).toHaveBeenCalled()

  fireEvent.click(screen.getByText('='))
  expect(equalClick).toHaveBeenCalled()

  fireEvent.click(screen.getByText('+/-'))
  expect(toggleSignClick).toHaveBeenCalled()

  fireEvent.click(screen.getByText('%'))
  expect(percentageClick).toHaveBeenCalled()
})
