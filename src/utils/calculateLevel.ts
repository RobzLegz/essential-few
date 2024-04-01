export function calculateLevel(totalXP: number) {
  let level = 1;
  let xpRequired = 0;

  while (totalXP >= xpRequired) {
    xpRequired = Math.pow(2, level);
    totalXP -= xpRequired;
    level++;
  }

  return level - 1; // Adjusting for the final level increment
}
