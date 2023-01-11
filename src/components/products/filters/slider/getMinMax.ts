import { Product } from '../../../../constants';

interface MinMax {
  min: number;
  max: number;
}

type NumKeys = 'price' | 'discountPercentage' | 'rating' | 'stock';

export const getMinMaxRangeValues = (parent: HTMLFieldSetElement): MinMax => {
  const first = parent.querySelector<HTMLInputElement>('.slider-range.first');
  const second = parent.querySelector<HTMLInputElement>('.slider-range.second');

  const obj = { min: 0, max: 0 };

  if (first && second) {
    obj.min = Math.min(Number(first.value), Number(second.value));
    obj.max = Math.max(Number(first.value), Number(second.value));
  }

  return obj;
};

export const getMinMaxProducts = (products: Product[] | Readonly<Product[]>, name: string): MinMax => {
  const obj = { min: 0, max: 0 };

  const numArr = products.map((p) => p[name as keyof Pick<Product, NumKeys>]);

  if (numArr.length) {
    obj.min = Math.min(...numArr);
    obj.max = Math.max(...numArr);
  }

  return obj;
};
