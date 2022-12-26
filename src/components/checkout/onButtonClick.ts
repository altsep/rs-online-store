import { Props, State } from '../../constants';
import { handleHistory } from '../../utility';
import clearCart from './clearCart';
import { popUpRemove } from './popUpToggle';
import timer from './timer';

export default function onButtonClick(state: State) {

  const checkoutContent = document.querySelector<HTMLDivElement>('.checkout__pop-up_content');
  const submitMessage = document.querySelector<HTMLDivElement>('.submit-message');
  checkoutContent?.classList.add('hidden');
  submitMessage?.classList.remove('hidden');

  if (checkoutContent) {

    timer();
    setTimeout(() => {
      clearCart(state);
      popUpRemove();
      handleHistory('/');
    }, 5000);
  }
}
