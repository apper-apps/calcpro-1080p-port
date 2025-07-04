import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import CalculatorComponent from '@/components/organisms/Calculator'
import Loading from '@/components/ui/Loading'
import Error from '@/components/ui/Error'

const Calculator = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    // Simulate loading time for calculator initialization
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleRetry = () => {
    setHasError(false)
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  if (isLoading) {
    return <Loading />
  }

  if (hasError) {
    return <Error message="Failed to initialize calculator" onRetry={handleRetry} />
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md"
      >
        <CalculatorComponent />
      </motion.div>
    </div>
  )
}

export default Calculator