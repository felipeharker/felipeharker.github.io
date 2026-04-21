const projectCards = [
  {
    title: 'Living Outside the Box',
    href: 'project-lotb.html',
    image: './assets/projects/Portfolio-Cover-Images/LOTB-Cover-01.png',
    location: 'Rio de Janeiro, RJ, Brazil',
    discipline: 'Residential, Urban Planning',
    type: 'Academic'
  },
  {
    title: 'Dead Mall Fall',
    href: 'project-dmf.html',
    image: './assets/projects/Portfolio-Cover-Images/Dead-Mall-Fall-Cover-01.png',
    location: 'Houston, TX, USA',
    discipline: 'Urban Planning',
    type: 'Academic'
  },
  {
    title: 'Collingsworth Marketplace',
    href: 'project-cmp.html',
    image: './assets/projects/Portfolio-Cover-Images/Collingsworth-Cover-01.png',
    location: 'Houston, TX, USA',
    discipline: 'Adaptive Reuse, Urban Planning',
    type: 'Academic'
  },
  {
    title: 'Alexandria Project',
    href: 'project-alex.html',
    image: './assets/projects/Portfolio-Cover-Images/Alex-Cover-01.png',
    location: 'Rhino and Grasshopper Application Plugin',
    discipline: 'Parametric and Computational Design',
    type: 'Research, Professional'
  },
  {
    title: '7001 Burnet',
    href: './assets/projects/Professional-Work/Harker_Work Sample_7001 Burnet.pdf',
    image: './assets/projects/Portfolio-Cover-Images/7001-Cover.png',
    location: 'Austin, TX, USA',
    discipline: 'Mixed-use Development',
    type: 'Professional',
    external: true
  },
  {
    title: 'Tenaris',
    href: './assets/projects/Professional-Work/Harker_Work Sample_Tenaris.pdf',
    image: './assets/projects/Portfolio-Cover-Images/Tenaris-Cover.png',
    location: 'Houston, TX, USA',
    discipline: 'Commercial',
    type: 'Professional',
    external: true
  }
];

function createProjectCard(project) {
  const article = document.createElement('article');
  article.className = 'project-card';

  const mediaLink = document.createElement('a');
  mediaLink.href = project.href;
  mediaLink.className = 'project-card__media';

  const textLink = document.createElement('a');
  textLink.href = project.href;
  textLink.className = 'project-card__title-link';
  textLink.textContent = project.title;

  if (project.external) {
    mediaLink.target = '_blank';
    mediaLink.rel = 'noopener noreferrer';
    textLink.target = '_blank';
    textLink.rel = 'noopener noreferrer';
  }

  const image = document.createElement('img');
  image.src = project.image;
  image.alt = `${project.title} cover image`;
  image.loading = 'lazy';

  mediaLink.appendChild(image);

  const content = document.createElement('div');
  content.className = 'project-card__content';
  content.innerHTML = `
    <h2 class="project-card__title"></h2>
    <hr>
    <p class="project-card__meta">${project.location}</p>
    <p class="project-card__meta project-card__meta--muted"><em>${project.discipline}</em></p>
    <p class="project-card__meta project-card__meta--muted"><em>${project.type}</em></p>
  `;

  content.querySelector('.project-card__title').appendChild(textLink);
  article.append(mediaLink, content);

  return article;
}

function renderProjectCards() {
  const projectList = document.getElementById('project-list');
  if (!projectList) return;

  const fragment = document.createDocumentFragment();
  projectCards.forEach((project) => {
    fragment.appendChild(createProjectCard(project));
  });

  projectList.appendChild(fragment);
}

renderProjectCards();
