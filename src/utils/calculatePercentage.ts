export function calculatePercentage(n: number, total: number) {
  const percentage = Math.floor((n / total) * 100 * 10) / 10;
  return percentage;
}
