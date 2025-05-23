import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Display from '../components/Display'

describe('Display', () => {
  it('should render the display with provided value', () => {
    render(<Display value="123" />)
    expect(screen.getByTestId('display').textContent).toBe('123')
  })

  it('should render the display with a large number', () => {
    render(<Display value="123456789" />)
    expect(screen.getByTestId('display').textContent).toBe('123456789')
  })

  it('should render the display with an error message', () => {
    render(<Display value="ERROR" />)
    expect(screen.getByTestId('display').textContent).toBe('ERROR')
  })

  it('should render the display with a decimal number', () => {
    render(<Display value="12.34" />)
    expect(screen.getByTestId('display').textContent).toBe('12.34')
  })
})