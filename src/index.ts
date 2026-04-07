export function sum(values: number[]): number {
  let total = 0
  for (let i = 0; i < values.length; i++) {
    total = total + values[i]
  }
  return total
}

export function average(values: number[]): number {
  if (values.length === 0) return 0
  return sum(values) / values.length
}
