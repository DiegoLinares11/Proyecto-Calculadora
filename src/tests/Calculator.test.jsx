import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Calculator from '../components/Calculator'

describe('Calculator', () => {
  it('should render the calculator with display showing 0', () => {
    render(<Calculator />)
    expect(screen.getByTestId('display').textContent).toBe('0')
  })

  it('should update display when clicking digit buttons', () => {
    render(<Calculator />)
    fireEvent.click(screen.getByText('5'))
    expect(screen.getByTestId('display').textContent).toBe('5')
  })

  it('should handle multi-digit input correctly', () => {
    render(<Calculator />)
    fireEvent.click(screen.getByText('1'))
    fireEvent.click(screen.getByText('2'))
    fireEvent.click(screen.getByText('3'))
    expect(screen.getByTestId('display').textContent).toBe('123')
  })

  it('should perform addition when + is clicked', () => {
    render(<Calculator />)
    fireEvent.click(screen.getByText('5'))
    fireEvent.click(screen.getByText('+'))
    fireEvent.click(screen.getByText('3'))
    fireEvent.click(screen.getByText('='))
    expect(screen.getByTestId('display').textContent).toBe('8')
  })

  it('should perform subtraction when - is clicked', () => {
    render(<Calculator />)
    fireEvent.click(screen.getByText('8'))
    fireEvent.click(screen.getByText('-'))
    fireEvent.click(screen.getByText('3'))
    fireEvent.click(screen.getByText('='))
    expect(screen.getByTestId('display').textContent).toBe('5')
  })

  it('should perform multiplication when × is clicked', () => {
    render(<Calculator />)
    fireEvent.click(screen.getByText('4'))
    fireEvent.click(screen.getByText('×'))
    fireEvent.click(screen.getByText('5'))
    fireEvent.click(screen.getByText('='))
    expect(screen.getByTestId('display').textContent).toBe('20')
  })

  it('should clear the display when C is clicked', () => {
    render(<Calculator />)
    fireEvent.click(screen.getByText('5'))
    fireEvent.click(screen.getByText('C'))
    expect(screen.getByTestId('display').textContent).toBe('0')
  })

  it('should handle decimal input correctly', () => {
    render(<Calculator />)
    fireEvent.click(screen.getByText('5'))
    fireEvent.click(screen.getByText('.'))
    fireEvent.click(screen.getByText('2'))
    expect(screen.getByTestId('display').textContent).toBe('5.2')
  })

  it('should display ERROR for negative results', () => {
    render(<Calculator />)
    fireEvent.click(screen.getByText('3'))
    fireEvent.click(screen.getByText('-'))
    fireEvent.click(screen.getByText('8'))
    fireEvent.click(screen.getByText('='))
    expect(screen.getByTestId('display').textContent).toBe('ERROR')
  })
  
})