export const isPositiveNumber = (num: number | string): boolean => ((!isNaN(Number(num)) && Number(num) > 0) ? true : false);
