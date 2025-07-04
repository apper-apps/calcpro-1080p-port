import { motion } from 'framer-motion'

const MemoryIndicator = ({ hasMemory, className = '' }) => {
  return (
    <div className={`flex items-center justify-between text-xs ${className}`}>
      <div className="flex items-center space-x-2">
        <motion.div
          className={`w-2 h-2 rounded-full ${hasMemory ? 'bg-green-400' : 'bg-gray-600'}`}
          animate={hasMemory ? { scale: [1, 1.2, 1] } : {}}
          transition={{ duration: 0.5 }}
        />
        <span className="text-gray-300">MEM</span>
      </div>
      
      <div className="text-gray-400">
        CalcPro 84
      </div>
    </div>
  )
}

export default MemoryIndicator