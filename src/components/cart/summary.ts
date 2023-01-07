import { Promo, promoCodes, store } from '../../constants';
import { getCurrencyString } from '../../utility';
import { openPopUp } from '../checkout/popUpToggle';

function renderSummary(parent: HTMLDivElement): void {
  const { itemsInCart, totalSum } = store;

  const summaryNode = document.createElement('div');
  summaryNode.className = 'cart__summary';

  const productsNode = document.createElement('div');
  productsNode.className = 'cart__summary-products';
  productsNode.textContent = `Products: ${itemsInCart}`;

  const totalNode = document.createElement('div');
  totalNode.className = 'cart__summary-total';
  totalNode.textContent = `Total: ${getCurrencyString(totalSum)}`;

  const totalDiscountedNode = document.createElement('div');
  totalDiscountedNode.className = 'cart__summary-total-discount hidden';
  totalDiscountedNode.textContent = `Total: ${getCurrencyString(totalSum)}`;

  const promoInputNode = document.createElement('input');
  promoInputNode.type = 'text';
  promoInputNode.placeholder = 'Enter promo code';
  promoInputNode.className = 'cart__summary-promo input-text';

  const promoCodesNode = document.createElement('div');
  promoCodesNode.className = 'cart__summary-promo-codes hidden';

  const getActivePromo = (): Promo[] => promoCodes.filter((c) => c.active);

  const initialActivePromo = getActivePromo();

  const getDiscountedSum = (): number => {
    const activePromo = getActivePromo();

    const totalDiscount: number = activePromo.reduce((a, b) => a + b.discountPercentage, 0);

    const getSumDecrease = (sum: number, discount: number): number => (discount / 100) * sum;

    const discountedSum = store.totalSum - getSumDecrease(store.totalSum, totalDiscount);

    return discountedSum;
  };

  const handlePromoClick = (e: MouseEvent, promo: Promo, promoContainer: HTMLDivElement): void => {
    const target = e.target as HTMLInputElement;

    promo.active = !promo.active;

    promoContainer.dataset.active = String(promo.active);

    if (promo.active) {
      target.value = 'Drop';
      totalNode.classList.add('line-through');
      totalDiscountedNode.classList.remove('hidden');
    } else if (promoInputNode.value.toLowerCase() === promo.name.toLowerCase()) {
      target.value = 'Add';
    } else {
      promoContainer.remove();
    }

    totalDiscountedNode.textContent = getCurrencyString(getDiscountedSum());

    const activePromoCodes = getActivePromo();

    if (!activePromoCodes.length) {
      totalDiscountedNode.classList.add('hidden');
      totalNode.classList.remove('line-through');
    }

    localStorage.setItem('aahh-rs-os-promo', JSON.stringify(promoCodes));
  };

  function renderPromo(promo: Promo, container: HTMLDivElement): void {
    promoCodesNode.classList.remove('hidden');

    const { description, discountPercentage, active } = promo;

    const promoCodeNode = document.createElement('div');
    promoCodeNode.className = 'cart__summary-promo-code';
    promoCodeNode.dataset.active = String(active);

    const descriptionNode = document.createElement('div');
    descriptionNode.className = 'cart__summary-promo-code-desc desc';
    descriptionNode.textContent = `${description} - ${discountPercentage}%`;

    const btn = document.createElement('input');
    btn.type = 'button';
    btn.className = 'cart__summary-promo-code-add btn';
    btn.value = active ? 'Drop' : 'Add';

    btn.addEventListener('click', (btnE: MouseEvent) => handlePromoClick(btnE, promo, promoCodeNode));

    promoCodeNode.append(descriptionNode, btn);

    container.append(promoCodeNode);
  }

  if (initialActivePromo.length) {
    totalNode.classList.add('line-through');
    totalDiscountedNode.textContent = getCurrencyString(getDiscountedSum());
    totalDiscountedNode.classList.remove('hidden');
    initialActivePromo.forEach((p) => renderPromo(p, promoCodesNode));
  }

  const handleInput = (e: Event): void => {
    const { value } = e.target as HTMLInputElement;

    const activePromos = getActivePromo();

    if (!activePromos.length) {
      promoCodesNode.classList.add('hidden;');
    }

    const promoChildArr = [...promoCodesNode.children] as HTMLDivElement[];

    promoChildArr.forEach((child) => {
      const inactive = child.dataset.active !== 'true';

      if (inactive) {
        child.remove();
      }
    });

    const promo = promoCodes.find((el) => el.name.toLowerCase() === value.toLowerCase());

    if (promo && !activePromos.includes(promo)) {
      renderPromo(promo, promoCodesNode);
    }
  };

  promoInputNode.addEventListener('input', handleInput);

  const testPromoNode = document.createElement('div');
  testPromoNode.className = 'cart__summary-promo-example mono';
  testPromoNode.textContent = 'Test codes: "SALE", "ELAS"';

  const buyNowBtn = document.createElement('input');
  buyNowBtn.type = 'button';
  buyNowBtn.className = 'cart__summary-buy btn';
  buyNowBtn.value = 'Buy now';

  buyNowBtn.addEventListener('click', openPopUp);

  summaryNode.append(
    productsNode,
    totalNode,
    totalDiscountedNode,
    promoInputNode,
    promoCodesNode,
    testPromoNode,
    buyNowBtn
  );

  parent.append(summaryNode);
}

export { renderSummary };
