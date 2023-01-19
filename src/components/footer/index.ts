import rsLogo from '../../assets/images/rs_school_js.svg';

function renderFooter(): void {
  const footer = document.querySelector<HTMLElement>('footer');

  if (footer) {
    const footerContentNode = document.createElement('div');
    footerContentNode.className = 'footer-content';

    const logoAnchor = document.createElement('a');
    logoAnchor.href = 'https://rs.school/js/';
    logoAnchor.className = 'rs-logo';

    const logoImg = document.createElement('img');
    logoImg.src = rsLogo;
    logoImg.className = 'rs-logo-img';
    logoImg.alt = '';

    logoAnchor.append(logoImg);

    const credits = document.createElement('div');
    credits.className = 'credits';

    const copyright = document.createElement('div');
    copyright.className = 'copyright';

    const year = document.createElement('span');
    year.className = 'copyright-text';
    year.textContent = '2023';

    const copyrightText = document.createElement('span');
    copyrightText.className = 'copyright-text';
    copyrightText.textContent = '© Copyright';

    copyright.append(year, copyrightText);

    const authors = document.createElement('div');
    authors.className = 'authors';

    const getAuthor = (name: string): HTMLAnchorElement => {
      const author = document.createElement('a');
      author.text = name;
      author.href = `https://github.com/${name}`;
      author.target = '_blank';
      author.rel = 'noreferrer';
      author.className = 'author';
      return author;
    };

    const author1 = getAuthor('altsep');
    const author2 = getAuthor('annafeona');

    authors.append(author1, author2);

    credits.append(copyright, authors);

    footerContentNode.append(logoAnchor, credits);

    footer.append(footerContentNode);
  }
}

export { renderFooter };
