import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'

const Error = ({ message = "Something went wrong", onRetry }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <motion.div 
        className="bg-calc-body p-8 rounded-2xl shadow-2xl calc-shadow text-center max-w-md"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center space-y-6">
          <div className="bg-red-100 p-4 rounded-full">
            <ApperIcon name="AlertCircle" size={48} className="text-red-500" />
          </div>
          
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white">Calculator Error</h3>
            <p className="text-gray-300">{message}</p>
          </div>
          
          {onRetry && (
            <motion.button
              onClick={onRetry}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center space-x-2">
                <ApperIcon name="RefreshCw" size={20} />
                <span>Try Again</span>
              </div>
            </motion.button>
          )}
        </div>
      </motion.div>
    </div>
  )
}

export default Error