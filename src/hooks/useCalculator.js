import { useState, useCallback } from 'react'

export const useCalculator = () => {
  const [currentInput, setCurrentInput] = useState('0')
  const [previousResult, setPreviousResult] = useState(null)
  const [operation, setOperation] = useState(null)
  const [waitingForOperand, setWaitingForOperand] = useState(false)
  const [memory, setMemory] = useState(0)
  const [history, setHistory] = useState([])

  const calculate = useCallback((firstOperand, secondOperand, operation) => {
    const first = parseFloat(firstOperand)
    const second = parseFloat(secondOperand)
    
    if (isNaN(first) || isNaN(second)) {
      throw new Error('Invalid numbers')
    }
    
    switch (operation) {
      case '+':
        return first + second
      case '-':
        return first - second
      case '*':
        return first * second
      case '/':
        if (second === 0) throw new Error('Division by zero')
        return first / second
      case '^':
        return Math.pow(first, second)
      default:
        return second
    }
  }, [])

  const performFunction = useCallback((func, value) => {
    const num = parseFloat(value)
    if (isNaN(num)) throw new Error('Invalid number')
    
    switch (func) {
      case 'sin':
        return Math.sin(num * Math.PI / 180)
      case 'cos':
        return Math.cos(num * Math.PI / 180)
      case 'tan':
        return Math.tan(num * Math.PI / 180)
      case 'log':
        if (num <= 0) throw new Error('Invalid input for log')
        return Math.log10(num)
      case 'ln':
        if (num <= 0) throw new Error('Invalid input for ln')
        return Math.log(num)
      case 'square':
        return num * num
      case 'reciprocal':
        if (num === 0) throw new Error('Division by zero')
        return 1 / num
      default:
        return num
    }
  }, [])

  const addToHistory = useCallback((expression, result) => {
    const newEntry = {
      expression,
      result,
      timestamp: Date.now()
    }
    setHistory(prev => [newEntry, ...prev].slice(0, 10)) // Keep last 10 calculations
  }, [])

  const clearHistory = useCallback(() => {
    setHistory([])
  }, [])

  const reset = useCallback(() => {
    setCurrentInput('0')
    setPreviousResult(null)
    setOperation(null)
    setWaitingForOperand(false)
    setMemory(0)
  }, [])

  return {
    currentInput,
    setCurrentInput,
    previousResult,
    setPreviousResult,
    operation,
    setOperation,
    waitingForOperand,
    setWaitingForOperand,
    memory,
    setMemory,
    history,
    calculate,
    performFunction,
    addToHistory,
    clearHistory,
    reset
  }
}