import { Props } from '../../constants';
import { handleHistory } from '../../utility';
import clearCart from './clearCart';
import { closePopUp } from './popUpToggle';
import timer from './timer';

export default function closeModal(props: Props): void {
  const checkoutContent = document.querySelector<HTMLDivElement>('.checkout__pop-up_content');
  const submitMessage = document.querySelector<HTMLDivElement>('.submit-message');
  checkoutContent?.classList.add('hidden');
  submitMessage?.classList.remove('hidden');

  if (checkoutContent) {
    clearCart(props);
    timer();
    setTimeout(() => {
      closePopUp();
      handleHistory('/');
    }, 5000);
  }
}
