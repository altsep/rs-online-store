let timeoutId: NodeJS.Timeout | undefined;

const copyUrl = (btn: HTMLInputElement, initialText: string): void => {
  clearTimeout(timeoutId);

  const text = window.location.href;

  window.navigator.clipboard
    .writeText(text)
    .then(() => {
      btn.value = 'Copied!';
    })
    .catch((e) => {
      console.error(e);
      btn.value = 'Could not copy';
    });

  timeoutId = setTimeout(() => {
    btn.value = initialText;
  }, 1000);
};

export default copyUrl;
