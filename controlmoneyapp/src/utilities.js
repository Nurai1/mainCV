export function isPositiveNumber(num) {
  const newNum = Number(num);
  if (typeof newNum === 'number' && !isNaN(newNum)) {
    return newNum >= 0;
  }
}
