export const checkInputNumber = (e: KeyboardEvent): boolean => {
  const key = e.key;
  return (key >= '0' && key <= '9') || key == 'ArrowLeft'
                  || key == 'ArrowRight' || key == 'Delete'
                  || key == 'Backspace'  || key == 'Tab';
}
export const checkInputTel = (e: KeyboardEvent): boolean => {
  const key = e.key;
  return (key >= '0' && key <= '9')
          || key == 'ArrowLeft' || key == '+'
          || key == 'ArrowRight' || key == 'Delete'
          || key == 'Backspace'  || key == 'Tab';
}