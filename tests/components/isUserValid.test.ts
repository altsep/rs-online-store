import { isAdressValid, isEmailValid, isNameValid, isPhoneValid } from "../../src/components/checkout/form/validate/isUserValid";

describe('isNameValid', () => {
  const input = document.createElement('input');
  const validName = ['Jon Smith', 'aaa bbb fhff'];
  const invalidName = ['', 'aaa', 'aaaa jj', 'a b'];

  it('should return true for valid user name', () => {
    expect.hasAssertions();

    validName.forEach((val) => {
      input.value = val;
      expect(isNameValid(input)).toBe(true);
    });

    invalidName.forEach((val) => {
      input.value = val;
      expect(isNameValid(input)).toBe(false);
    })
  });
});

describe('isAdressValid', () => {
  const input = document.createElement('input');
  const validAdress = ['country village house', 'qqqqq wwwww eeeee rrrrr'];
  const invalidAdress = ['', 'aaaaa qqq', 'sssss ddddd ff', 'a b'];

  it('should return true for valid adress', () => {
    expect.hasAssertions();

    validAdress.forEach((val) => {
      input.value = val;
      expect(isAdressValid(input)).toBe(true);
    });

    invalidAdress.forEach((val) => {
      input.value = val;
      expect(isAdressValid(input)).toBe(false);
    })
  });
});

describe('isPhoneValid', () => {
  const input = document.createElement('input');
  const validPhone = ['+123456789', '+12345678901'];
  const invalidPhone = ['', '+123', '123456789'];

  it('should return true for valid phone number', () => {
    expect.hasAssertions();

    validPhone.forEach((val) => {
      input.value = val;
      expect(isPhoneValid(input)).toBe(true);
    })

    invalidPhone.forEach((val) => {
      input.value = val;
      expect(isPhoneValid(input)).toBe(false);
    })
  });
});

describe('isEmailValid', () => {
  const input = document.createElement('input');
  const validEmail = ['name@mail.com', 'name.last@com.com'];
  const invalidEmail = ['', 'name@', 'name'];

  it('should return true for valid email', () => {
    expect.hasAssertions();

    validEmail.forEach((val) => {
      input.value = val;
      expect(isEmailValid(input)).toBe(true);
    });

    invalidEmail.forEach((val) => {
      input.value = val;
      expect(isEmailValid(input)).toBe(false);
    });
  });
});

