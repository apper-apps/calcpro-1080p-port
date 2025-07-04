import { motion } from 'framer-motion'

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <motion.div 
        className="bg-calc-body p-8 rounded-2xl shadow-2xl calc-shadow"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-6">
          {/* Display Loading */}
          <div className="bg-calc-display rounded-lg p-6 shadow-calc-display">
            <div className="h-12 bg-gray-700 rounded animate-pulse"></div>
            <div className="h-8 bg-gray-700 rounded mt-2 animate-pulse"></div>
          </div>
          
          {/* Button Grid Loading */}
          <div className="grid grid-cols-5 gap-3">
            {Array.from({ length: 30 }).map((_, i) => (
              <div 
                key={i}
                className="h-12 bg-gray-600 rounded animate-pulse"
                style={{ animationDelay: `${i * 0.05}s` }}
              ></div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Loading