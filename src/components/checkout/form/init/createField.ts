export function createField(className: string, type: string, name: string): HTMLInputElement {
  const field = document.createElement('input');
  field.className = 'checkout__input';
  field.classList.add(className);
  field.name = className;
  field.type = type;
  field.placeholder = name;

  return field;
}

export function errorField(input: HTMLInputElement): HTMLSpanElement {
  const fieldError = document.createElement('span');
  fieldError.className = input.name;
  fieldError.classList.add('field__error', 'hidden');
  fieldError.textContent = 'error';

  return fieldError;
}
