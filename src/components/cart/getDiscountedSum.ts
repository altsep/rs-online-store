import { promoCodes } from '../../constants';

export const getDiscountedSum = (totalSum: number): number => {
  const activePromo = promoCodes.filter((c) => c.active);

  const totalDiscount: number = activePromo.reduce((a, b) => a + b.discountPercentage, 0);

  const getSumDecrease = (sum: number, discount: number): number => (discount / 100) * sum;

  const discountedSum = totalSum - getSumDecrease(totalSum, totalDiscount);

  return discountedSum;
};
