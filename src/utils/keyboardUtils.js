// Keyboard utility functions for calculator input

export const mapKeyToAction = (key) => {
  const keyMap = {
    '0': '0', '1': '1', '2': '2', '3': '3', '4': '4',
    '5': '5', '6': '6', '7': '7', '8': '8', '9': '9',
    '.': '.',
    '+': '+',
    '-': '-',
    '*': '*',
    '/': '/',
    'Enter': '=',
    '=': '=',
    'Escape': 'CLEAR',
    'c': 'CLEAR',
    'C': 'CLEAR',
    'Backspace': 'BACKSPACE',
    '^': '^',
    '(': '(',
    ')': ')',
    's': 'sin',
    'S': 'sin',
    'l': 'log',
    'L': 'log',
    'n': 'ln',
    'N': 'ln',
    'q': 'square',
    'Q': 'square',
    'r': 'reciprocal',
    'R': 'reciprocal',
    'm': 'STO',
    'M': 'STO'
  }
  
  return keyMap[key] || null
}

export const isValidKey = (key) => {
  return mapKeyToAction(key) !== null
}

export const getKeyDescription = (key) => {
  const descriptions = {
    '0': 'Number 0',
    '1': 'Number 1',
    '2': 'Number 2',
    '3': 'Number 3',
    '4': 'Number 4',
    '5': 'Number 5',
    '6': 'Number 6',
    '7': 'Number 7',
    '8': 'Number 8',
    '9': 'Number 9',
    '.': 'Decimal point',
    '+': 'Addition',
    '-': 'Subtraction',
    '*': 'Multiplication',
    '/': 'Division',
    'Enter': 'Calculate result',
    '=': 'Calculate result',
    'Escape': 'Clear calculator',
    'c': 'Clear calculator',
    'C': 'Clear calculator',
    'Backspace': 'Delete last digit',
    '^': 'Power/Exponent',
    '(': 'Open parenthesis',
    ')': 'Close parenthesis',
    's': 'Sine function',
    'S': 'Sine function',
    'l': 'Logarithm function',
    'L': 'Logarithm function',
    'n': 'Natural logarithm',
    'N': 'Natural logarithm',
    'q': 'Square function',
    'Q': 'Square function',
    'r': 'Reciprocal function',
    'R': 'Reciprocal function',
    'm': 'Store in memory',
    'M': 'Store in memory'
  }
  
  return descriptions[key] || 'Unknown key'
}