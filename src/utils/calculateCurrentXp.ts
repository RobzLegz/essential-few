export function calculateCurrentXP(totalXP: number) {
  let level = 0;
  let xpRequired = 0;
  let xpUsed = 0;

  while (totalXP >= xpRequired) {
    xpRequired = Math.pow(2, level);
    xpUsed += xpRequired;
    totalXP -= xpRequired;
    level++;
  }

  const currentXP = xpUsed - xpRequired + totalXP;
  return currentXP;
}
