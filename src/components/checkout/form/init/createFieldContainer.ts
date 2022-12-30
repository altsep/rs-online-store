import { errorField } from "./createField";

export default function createFieldContainer(parent: HTMLDivElement, child: HTMLInputElement): HTMLDivElement {
  const fieldContainer = document.createElement('div');
  fieldContainer.className = 'field__container';
  fieldContainer.append(child, errorField(child))

  parent.append(fieldContainer);

  return fieldContainer;
}