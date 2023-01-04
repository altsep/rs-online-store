export const checkInputNumber = (key: string, ...exceptionArgs: string[]): boolean => {
  const keys = ['ArrowLeft', 'ArrowRight', 'Delete', 'Backspace', 'Tab'];

  for (let i = 0; i < 10; i += 1) {
    keys.push(String(i));
  }

  if (exceptionArgs.length) {
    keys.push(...exceptionArgs);
  }

  return keys.includes(key);
};
