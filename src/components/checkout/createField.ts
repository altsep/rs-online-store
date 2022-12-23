export default function createField(className: string, type: string, name: string ): HTMLInputElement {

  const field = document.createElement('input');

  field.className = className;
  field.type = type;
  field.placeholder = name;

  return field;
}
