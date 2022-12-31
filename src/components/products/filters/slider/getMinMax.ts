interface MinMax {
  min: number;
  max: number;
}

export const getMinMax = (parent: HTMLFieldSetElement): MinMax => {
  const first = parent.querySelector<HTMLInputElement>('.slider-range.first');
  const second = parent.querySelector<HTMLInputElement>('.slider-range.second');

  const obj = { min: 0, max: 0 };

  if (first && second) {
    obj.min = Math.min(Number(first.value), Number(second.value));
    obj.max = Math.max(Number(first.value), Number(second.value));
  }

  return obj;
};
