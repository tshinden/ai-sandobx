export function sum(values: number[]): number {
  let total = 0
  for (let i = 0; i < values.length; i++) {
    total = total + values[i]
  }
  return total
}

// 空配列を渡した場合は 0 を返す（0除算を回避）
export function average(values: number[]): number {
  if (values.length === 0) return 0
  return sum(values) / values.length
}
