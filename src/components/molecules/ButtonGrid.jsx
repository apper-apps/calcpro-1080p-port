import Button from '@/components/atoms/Button'

const ButtonGrid = ({ onButtonClick, className = '' }) => {
  const buttons = [
    // Row 1
    { label: 'MATH', type: 'function', variant: 'function', action: 'MATH' },
    { label: 'APPS', type: 'function', variant: 'function', action: 'APPS' },
    { label: 'PRGM', type: 'function', variant: 'function', action: 'PRGM' },
    { label: 'VARS', type: 'function', variant: 'function', action: 'VARS' },
    { label: 'CLEAR', type: 'clear', variant: 'clear', action: 'CLEAR' },
    
    // Row 2
    { label: 'X⁻¹', type: 'function', variant: 'function', action: 'reciprocal' },
    { label: 'SIN', type: 'function', variant: 'function', action: 'sin' },
    { label: 'COS', type: 'function', variant: 'function', action: 'cos' },
    { label: 'TAN', type: 'function', variant: 'function', action: 'tan' },
    { label: '^', type: 'operator', variant: 'operator', action: '^' },
    
    // Row 3
    { label: 'x²', type: 'function', variant: 'function', action: 'square' },
    { label: ',', type: 'function', variant: 'function', action: ',' },
    { label: '(', type: 'function', variant: 'accent', action: '(' },
    { label: ')', type: 'function', variant: 'accent', action: ')' },
    { label: '÷', type: 'operator', variant: 'operator', action: '/' },
    
    // Row 4
    { label: 'LOG', type: 'function', variant: 'function', action: 'log' },
    { label: '7', type: 'number', variant: 'number', action: '7' },
    { label: '8', type: 'number', variant: 'number', action: '8' },
    { label: '9', type: 'number', variant: 'number', action: '9' },
    { label: '×', type: 'operator', variant: 'operator', action: '*' },
    
    // Row 5
    { label: 'LN', type: 'function', variant: 'function', action: 'ln' },
    { label: '4', type: 'number', variant: 'number', action: '4' },
    { label: '5', type: 'number', variant: 'number', action: '5' },
    { label: '6', type: 'number', variant: 'number', action: '6' },
    { label: '-', type: 'operator', variant: 'operator', action: '-' },
    
    // Row 6
    { label: 'STO', type: 'function', variant: 'function', action: 'STO' },
    { label: '1', type: 'number', variant: 'number', action: '1' },
    { label: '2', type: 'number', variant: 'number', action: '2' },
    { label: '3', type: 'number', variant: 'number', action: '3' },
    { label: '+', type: 'operator', variant: 'operator', action: '+' },
    
    // Row 7
    { label: 'ON', type: 'function', variant: 'clear', action: 'ON' },
    { label: '0', type: 'number', variant: 'number', action: '0' },
    { label: '.', type: 'number', variant: 'number', action: '.' },
    { label: '(-)', type: 'function', variant: 'accent', action: 'negate' },
    { label: 'ENTER', type: 'equals', variant: 'equals', action: '=' },
  ]

  return (
    <div className={`grid grid-cols-5 gap-3 ${className}`}>
      {buttons.map((button, index) => (
        <Button
          key={index}
          label={button.label}
          type={button.type}
          variant={button.variant}
          onClick={() => onButtonClick(button.action)}
          className="h-12 text-sm font-medium"
        />
      ))}
    </div>
  )
}

export default ButtonGrid