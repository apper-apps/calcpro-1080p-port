import { motion } from 'framer-motion'

const Button = ({ 
  label, 
  onClick, 
  type = 'number', 
  className = '', 
  disabled = false,
  variant = 'default'
}) => {
const getButtonStyles = () => {
    const baseStyles = "calc-button rounded-lg font-medium shadow-calc-button hover:brightness-110 transition-all duration-100 text-center flex items-center justify-center border border-gray-400"
    
    switch (variant) {
      case 'number':
        return `${baseStyles} bg-ti84-surface text-black text-lg font-semibold`
      case 'operator':
        return `${baseStyles} bg-calc-button-operator text-white text-lg font-bold`
      case 'function':
        return `${baseStyles} bg-calc-button-function text-white text-sm font-medium`
      case 'equals':
        return `${baseStyles} bg-calc-button-equals text-white text-lg font-bold`
      case 'clear':
        return `${baseStyles} bg-calc-button-dark text-white text-sm font-medium`
      case 'accent':
        return `${baseStyles} bg-calc-button-accent text-white text-sm font-medium`
      default:
        return `${baseStyles} bg-calc-button text-black text-sm font-medium`
    }
  }

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={`${getButtonStyles()} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      transition={{ duration: 0.1 }}
    >
      <span className="calc-button-text">{label}</span>
    </motion.button>
  )
}

export default Button