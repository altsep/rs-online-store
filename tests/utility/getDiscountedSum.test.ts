import { getDiscountedSum } from '../../src/components/cart/getDiscountedSum';

const promoCodesMock = [
  {
    name: '1',
    description: '10%',
    discountPercentage: 10,
    active: false,
  },
  {
    name: '2',
    description: '20%',
    discountPercentage: 20,
    active: false,
  },
  {
    name: '3',
    description: '30%',
    discountPercentage: 30,
    active: false,
  },
];

jest.mock('../../src/constants', () => ({
  promoCodes: promoCodesMock,
}));

describe('getDiscountedSum', () => {
  const totalSum = 100;

  it('returns sum unchanged if all promo codes are inactive', () => {
    const result = getDiscountedSum(totalSum);
    expect(result).toStrictEqual(totalSum);
  });

  it('subtracts percentage ', () => {
    const discount = 30;
    const code = promoCodesMock.find((el) => el.discountPercentage === discount);

    expect(code).toBeTruthy();

    if (code) {
      code.active = true;
    }

    const result = getDiscountedSum(totalSum);
    expect(result).toStrictEqual(totalSum - discount);
  });
});
