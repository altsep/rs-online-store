export function createDescriptionItem(parentNode: HTMLDivElement, name: string, content: string | number): void {
  const item = document.createElement('div');
  item.className = 'description__item';
  const itemTitle = document.createElement('h3');
  itemTitle.className = 'description__item_title';
  itemTitle.textContent = name;

  const itemContent = document.createElement('div');
  itemContent.className = 'description__item_content';
  itemContent.textContent = String(content);

  item.append(itemTitle, itemContent);

  parentNode.append(item);
}
