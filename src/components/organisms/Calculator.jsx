import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'
import Display from '@/components/atoms/Display'
import ButtonGrid from '@/components/molecules/ButtonGrid'
import MemoryIndicator from '@/components/molecules/MemoryIndicator'

const Calculator = () => {
  const [currentInput, setCurrentInput] = useState('0')
  const [previousResult, setPreviousResult] = useState(null)
  const [operation, setOperation] = useState(null)
  const [waitingForOperand, setWaitingForOperand] = useState(false)
  const [memory, setMemory] = useState(0)
  const [error, setError] = useState(false)

  const calculate = useCallback((firstOperand, secondOperand, operation) => {
    try {
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
    } catch (error) {
      throw new Error('Calculation error')
    }
  }, [])

  const performFunction = useCallback((func, value) => {
    try {
      const num = parseFloat(value)
      if (isNaN(num)) throw new Error('Invalid number')
      
      switch (func) {
        case 'sin':
          return Math.sin(num * Math.PI / 180) // Convert to radians
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
    } catch (error) {
      throw new Error('Function error')
    }
  }, [])

  const handleButtonClick = useCallback((action) => {
    setError(false)
    
    try {
      if (action >= '0' && action <= '9') {
        if (waitingForOperand) {
          setCurrentInput(action)
          setWaitingForOperand(false)
        } else {
          setCurrentInput(currentInput === '0' ? action : currentInput + action)
        }
      } else if (action === '.') {
        if (waitingForOperand) {
          setCurrentInput('0.')
          setWaitingForOperand(false)
        } else if (currentInput.indexOf('.') === -1) {
          setCurrentInput(currentInput + '.')
        }
      } else if (action === 'CLEAR') {
        setCurrentInput('0')
        setPreviousResult(null)
        setOperation(null)
        setWaitingForOperand(false)
        toast.success('Calculator cleared')
      } else if (action === 'negate') {
        if (currentInput !== '0') {
          setCurrentInput(currentInput.charAt(0) === '-' ? currentInput.slice(1) : '-' + currentInput)
        }
      } else if (['+', '-', '*', '/', '^'].includes(action)) {
        const inputValue = parseFloat(currentInput)
        
        if (previousResult === null) {
          setPreviousResult(inputValue)
        } else if (operation) {
          const currentResult = calculate(previousResult, inputValue, operation)
          setPreviousResult(currentResult)
          setCurrentInput(String(currentResult))
        }
        
        setWaitingForOperand(true)
        setOperation(action)
      } else if (action === '=') {
        const inputValue = parseFloat(currentInput)
        
        if (previousResult !== null && operation) {
          const result = calculate(previousResult, inputValue, operation)
          setCurrentInput(String(result))
          setPreviousResult(null)
          setOperation(null)
          setWaitingForOperand(true)
          toast.success('Calculation completed')
        }
      } else if (['sin', 'cos', 'tan', 'log', 'ln', 'square', 'reciprocal'].includes(action)) {
        const result = performFunction(action, currentInput)
        setCurrentInput(String(result))
        setWaitingForOperand(true)
        toast.success(`${action.toUpperCase()} function applied`)
      } else if (action === 'STO') {
        setMemory(parseFloat(currentInput))
        toast.success('Value stored in memory')
      } else if (action === 'ON') {
        setCurrentInput('0')
        setPreviousResult(null)
        setOperation(null)
        setWaitingForOperand(false)
        setMemory(0)
        toast.info('Calculator reset')
      } else if (['MATH', 'APPS', 'PRGM', 'VARS'].includes(action)) {
        toast.info(`${action} menu (feature coming soon)`)
      } else if (action === '(' || action === ')') {
        toast.info('Parentheses (feature coming soon)')
      } else if (action === ',') {
        toast.info('Comma separator (feature coming soon)')
      }
    } catch (error) {
      setError(true)
      setCurrentInput('Error')
      setWaitingForOperand(true)
      toast.error('Calculation error occurred')
    }
  }, [currentInput, previousResult, operation, waitingForOperand, calculate, performFunction])

  // Keyboard support
  useEffect(() => {
    const handleKeyPress = (event) => {
      const key = event.key
      event.preventDefault()
      
      if (key >= '0' && key <= '9') {
        handleButtonClick(key)
      } else if (key === '.') {
        handleButtonClick('.')
      } else if (key === '+') {
        handleButtonClick('+')
      } else if (key === '-') {
        handleButtonClick('-')
      } else if (key === '*') {
        handleButtonClick('*')
      } else if (key === '/') {
        handleButtonClick('/')
      } else if (key === 'Enter' || key === '=') {
        handleButtonClick('=')
      } else if (key === 'Escape' || key === 'c' || key === 'C') {
        handleButtonClick('CLEAR')
      } else if (key === 'Backspace') {
        if (currentInput.length > 1) {
          setCurrentInput(currentInput.slice(0, -1))
        } else {
          setCurrentInput('0')
        }
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [currentInput, handleButtonClick])

  return (
    <motion.div
      className="bg-calc-body p-6 rounded-2xl shadow-2xl calc-shadow max-w-md mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="mb-4">
        <h1 className="text-white text-lg font-bold text-center mb-2">TI-84 Plus</h1>
        <MemoryIndicator hasMemory={memory !== 0} />
      </div>

      {/* Display */}
      <Display
        currentInput={currentInput}
        previousResult={previousResult}
        error={error}
        className="mb-6"
      />

      {/* Button Grid */}
      <ButtonGrid onButtonClick={handleButtonClick} />

      {/* Brand */}
      <div className="mt-4 text-center text-xs text-gray-400">
        CalcPro 84 - Advanced Scientific Calculator
      </div>
    </motion.div>
  )
}

export default Calculator