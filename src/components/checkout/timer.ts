export function timer(): void {
  const timerContent = document.querySelector<HTMLSpanElement>('.submit-message__timer');

  if (timerContent) {
    timerContent.textContent = '5 s.';
    let i = 4;
    const timerId = setInterval(() => {
      timerContent.textContent = `${i.toString()} s.`;
      i -= 1;
      console.log(i);
    }, 1000);
    setTimeout(() => {
      clearInterval(timerId);
    }, 5000);
  }
}
