// Mathematical utility functions for the calculator

export const formatNumber = (num) => {
  if (num === null || num === undefined) return '0'
  
  const str = num.toString()
  
  // Handle very large or very small numbers
  if (Math.abs(num) >= 1e10 || (Math.abs(num) < 1e-6 && num !== 0)) {
    return parseFloat(num).toExponential(6)
  }
  
  // Handle regular numbers
  if (str.includes('.')) {
    const parts = str.split('.')
    if (parts[1].length > 8) {
      return parseFloat(num).toFixed(8)
    }
  }
  
  return str
}

export const isValidNumber = (str) => {
  return !isNaN(parseFloat(str)) && isFinite(str)
}

export const degToRad = (degrees) => {
  return degrees * Math.PI / 180
}

export const radToDeg = (radians) => {
  return radians * 180 / Math.PI
}

export const factorial = (n) => {
  if (n < 0) throw new Error('Factorial of negative number')
  if (n === 0 || n === 1) return 1
  if (n > 170) throw new Error('Number too large for factorial')
  
  let result = 1
  for (let i = 2; i <= n; i++) {
    result *= i
  }
  return result
}

export const combinations = (n, r) => {
  if (n < r || n < 0 || r < 0) throw new Error('Invalid combination values')
  return factorial(n) / (factorial(r) * factorial(n - r))
}

export const permutations = (n, r) => {
  if (n < r || n < 0 || r < 0) throw new Error('Invalid permutation values')
  return factorial(n) / factorial(n - r)
}

export const gcd = (a, b) => {
  a = Math.abs(a)
  b = Math.abs(b)
  while (b !== 0) {
    let temp = b
    b = a % b
    a = temp
  }
  return a
}

export const lcm = (a, b) => {
  return Math.abs(a * b) / gcd(a, b)
}

export const isPrime = (n) => {
  if (n < 2) return false
  if (n === 2) return true
  if (n % 2 === 0) return false
  
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false
  }
  return true
}

export const quadraticFormula = (a, b, c) => {
  if (a === 0) throw new Error('Not a quadratic equation')
  
  const discriminant = b * b - 4 * a * c
  
  if (discriminant < 0) {
    return { hasRealRoots: false, roots: [] }
  }
  
  const sqrtDiscriminant = Math.sqrt(discriminant)
  const root1 = (-b + sqrtDiscriminant) / (2 * a)
  const root2 = (-b - sqrtDiscriminant) / (2 * a)
  
  return {
    hasRealRoots: true,
    roots: discriminant === 0 ? [root1] : [root1, root2]
  }
}