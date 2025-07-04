import { motion } from 'framer-motion'

const Display = ({ currentInput, previousResult, error, className = '' }) => {
  const formatDisplay = (value) => {
    if (value === null || value === undefined) return ''
    
    const str = value.toString()
    
    // Handle very large or very small numbers
    if (Math.abs(value) >= 1e10 || (Math.abs(value) < 1e-6 && value !== 0)) {
      return parseFloat(value).toExponential(6)
    }
    
    // Handle regular numbers
    if (str.includes('.')) {
      const parts = str.split('.')
      if (parts[1].length > 8) {
        return parseFloat(value).toFixed(8)
      }
    }
    
    return str
  }

  return (
    <div className={`calc-display bg-calc-display rounded-lg p-4 shadow-calc-display ${className}`}>
      <div className="text-right space-y-1">
        {/* Previous result line */}
        <div className="text-calc-display-text font-mono text-sm opacity-70 min-h-[1.25rem]">
          {previousResult !== null && previousResult !== undefined ? formatDisplay(previousResult) : ''}
        </div>
        
        {/* Current input line */}
        <motion.div 
          className="text-calc-display-text font-mono text-2xl font-bold min-h-[2rem] calc-display-text"
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {error ? (
            <span className="text-red-400">Error</span>
          ) : (
            currentInput || '0'
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default Display