const navLinks = [
  { href: 'index.html', label: 'Home' },
  { href: 'about.html', label: 'About' },
  { href: 'resources.html', label: 'Resources' },
  { href: 'https://www.linkedin.com/in/felipeharker/', label: 'LinkedIn', external: true },
  { href: 'https://github.com/felipeharker/alexandria-project', label: 'GitHub', external: true }
];

function createNavLink({ href, label, external = false }) {
  const link = document.createElement('a');
  link.href = href;
  link.textContent = label;
  link.className = 'nav-link';

  if (external) {
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  }

  return link;
}

function renderNavigation() {
  const nav = document.createElement('nav');
  nav.className = 'site-nav';
  nav.setAttribute('aria-label', 'Primary');

  const brand = document.createElement('a');
  brand.href = 'index.html';
  brand.className = 'site-nav__brand';
  brand.textContent = 'H';
  brand.setAttribute('aria-label', 'Harkitecture home');

  const linkList = document.createElement('div');
  linkList.className = 'site-nav__links';

  navLinks.forEach((linkData) => {
    linkList.appendChild(createNavLink(linkData));
  });

  nav.append(brand, linkList);
  document.body.prepend(nav);
}

renderNavigation();
