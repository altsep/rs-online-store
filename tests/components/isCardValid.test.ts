import {
  isCardCodeValid,
  isCardNumberValid,
  isExpirationDateValid,
} from '../../src/components/checkout/form/validate/isCardValid';

describe('isCardNumberVaid', () => {
  const input = document.createElement('input');
  const validCardNumber = ['1234 5678 9012 3456', '1111 2222 3333 4444'];
  const invalidCardNumber = ['', '1234', '11111111'];

  it('should return true for valid card number', () => {
    expect.hasAssertions();

    validCardNumber.forEach((val) => {
      input.value = val;
      expect(isCardNumberValid(input)).toBe(true);
    });

    invalidCardNumber.forEach((val) => {
      input.value = val;
      expect(isCardNumberValid(input)).toBe(false);
    });
  });
});

describe('isExpirationDateValid', () => {
  const input = document.createElement('input');
  const validCardDate = ['12 / 25', '11 / 27, 09 / 27'];
  const invalidCardDate = ['', '13 / 25', '11', '11 / 21'];

  it('should return true for valid card expiration date', () => {
    expect.hasAssertions();

    validCardDate.forEach((val) => {
      input.value = val;
      expect(isExpirationDateValid(input)).toBe(true);
    });

    invalidCardDate.forEach((val) => {
      input.value = val;
      expect(isExpirationDateValid(input)).toBe(false);
    });
  });
});

describe('isCardCodeValid', () => {
  const input = document.createElement('input');
  const validCardCode = ['123', '234', '323'];
  const invalidCardCode = ['', '1', '12'];

  it('should return true for valid card code', () => {
    expect.hasAssertions();

    validCardCode.forEach((val) => {
      input.value = val;
      expect(isCardCodeValid(input)).toBe(true);
    });

    invalidCardCode.forEach((val) => {
      input.value = val;
      expect(isCardCodeValid(input)).toBe(false);
    });
  });
});
