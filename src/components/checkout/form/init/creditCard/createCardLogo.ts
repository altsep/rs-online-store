import cardPlaceholder from '../../../img/cardPlaceholder.svg';
import visaLogo from '../../../img/visaLogo.svg';
import masterCardLogo from '../../../img/mastercardLogo.svg';
import mirLogo from '../../../img/mirLogo.svg';

export default function createCardLogo(card: HTMLInputElement): HTMLImageElement {
  let sistemID = card.value[0];
  const logo = document.createElement('img');
  logo.alt = '';
  logo.className = 'card__logo';
  logo.src = cardPlaceholder;
  card.addEventListener('input', (e: Event) => {
    const target = e.target as HTMLInputElement;
    sistemID = target?.value[0];
    switch (sistemID) {
      case '2': {
        logo.src = mirLogo;
        break;
      }
      case '4': {
        logo.src = visaLogo;
        break;
      }
      case '5': {
        logo.src = masterCardLogo;
        break;
      }
      default: {
        logo.src = cardPlaceholder;
      }
    }
  });
  return logo;
}
