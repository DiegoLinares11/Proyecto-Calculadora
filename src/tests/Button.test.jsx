import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Button from '../components/Button'

describe('Button', () => {
  it('should render the button with children text', () => {
    render(<Button>7</Button>)
    expect(screen.getByRole('button').textContent).toBe('7')
  })

  it('should apply additional class names', () => {
    render(<Button className="test-class">7</Button>)
    expect(screen.getByRole('button').classList.contains('test-class')).toBe(true)
  })

  it('should call the onClick handler when clicked', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>7</Button>)
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('should render as operator button with correct class', () => {
    render(<Button className="operator-key">+</Button>)
    const button = screen.getByRole('button')
    expect(button.textContent).toBe('+')
    expect(button.classList.contains('operator-key')).toBe(true)
  })
})