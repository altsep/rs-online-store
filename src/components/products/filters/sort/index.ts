function createSelect(name: string): HTMLSelectElement {
  const select = document.createElement('select');
  select.className = `${name} filter`;
  select.id = name;
  select.name = name;

  const optionValues = [
    '--Sort--',
    'price asc',
    'price desc',
    'rating asc',
    'rating desc',
    'discount asc',
    'discount desc',
  ];

  optionValues.forEach((v) => {
    const option = document.createElement('option');
    option.value = v === '--Sort--' ? '' : v;
    option.textContent = v;
    select.append(option);
  });

  return select;
}

export default createSelect;
