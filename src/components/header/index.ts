function renderHeader(parentNodeName: string): void {
  const parentNode = document.querySelector(parentNodeName || '');

  if (parentNode) {
    parentNode.textContent = 'Header';
  }
}

export default renderHeader;
