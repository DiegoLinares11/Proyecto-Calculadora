import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useCalculator } from '../hooks/useCalculator';

describe('useCalculator', () => {
  let result;

  beforeEach(() => {
    const { result: hookResult } = renderHook(() => useCalculator());
    result = hookResult;
  });

  it('should initialize with display 0', () => {
    expect(result.current.display).toBe('0');
  });

  it('should update display with digits', async () => {
    await act(() => result.current.inputDigit('5'));
    expect(result.current.display).toBe('5');
  });

  it('should concatenate digits', async () => {
    await act(() => result.current.inputDigit('1'));
    await act(() => result.current.inputDigit('2'));
    await act(() => result.current.inputDigit('3'));
    expect(result.current.display).toBe('123');
  });

  it('should not exceed 9 digits', async () => {
    const digits = ['1','2','3','4','5','6','7','8','9','0'];
    for (const digit of digits) {
      await act(() => result.current.inputDigit(digit));
    }
    expect(result.current.display).toBe('123456789');
  });

  it('should clear display', async () => {
    await act(() => result.current.inputDigit('5'));
    await act(() => result.current.clearDisplay());
    expect(result.current.display).toBe('0');
  });

  it('should perform addition', async () => {
    await act(() => result.current.inputDigit('5'));
    await act(() => result.current.performOperation('+'));
    await act(() => result.current.inputDigit('3'));
    await act(() => result.current.performOperation('='));
    expect(result.current.display).toBe('8');
  });

  it('should show ERROR for negatives', async () => {
    await act(() => result.current.inputDigit('3'));
    await act(() => result.current.performOperation('-'));
    await act(() => result.current.inputDigit('8'));
    await act(() => result.current.performOperation('='));
    expect(result.current.display).toBe('ERROR');
  });
});