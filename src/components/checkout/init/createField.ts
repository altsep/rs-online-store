export default function createField(className: string, type: string, name: string ): HTMLInputElement {

  // const fieldContainer = document.createElement('div');
  // fieldContainer.className = 'form__input_container'
  const field = document.createElement('input');
  field.className = className;
  field.type = type;
  field.placeholder = name;
  // field.required = true;

  // const fieldError = document.createElement('div');
  // fieldError.className = 'field__error';
  // fieldContainer.append(field, fieldError);


  return field;
}
