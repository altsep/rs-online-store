export function createField(className: string, type: string, name: string): HTMLInputElement {
  const field = document.createElement('input');
  field.className = className;
  field.name = className;
  field.type = type;
  field.placeholder = name;

  return field;
}

export function errorField(input: HTMLInputElement): HTMLLabelElement {
  const fieldError = document.createElement('label');
  fieldError.className = 'field__error hidden';
  fieldError.htmlFor = input.name;
  fieldError.textContent = 'error';

  return fieldError;
}

export default {
  createField,
  errorField,
};
