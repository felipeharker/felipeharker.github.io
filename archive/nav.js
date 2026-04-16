// Create the navbar
const nav = document.createElement('nav');

// Create a div for the navbar header text
const navbarHeader = document.createElement('div');
navbarHeader.id = 'navbar-header';

// Create the text element for the navbar header
const headerText = document.createElement('h1');
headerText.textContent = 'H'; // The text to display in the navbar header
headerText.classList.add("h1-nav");

// Append the text to the navbar header div
navbarHeader.appendChild(headerText);

// Home link
const navHome = document.createElement('a');
navHome.href = 'index.html'; // Link to the Home page
navHome.textContent = 'Home';
navHome.classList.add("link-1");

// About Me link
const navAbout = document.createElement('a');
navAbout.href = 'about.html'; // Link to the About Me page
navAbout.textContent = 'About Me';
navAbout.classList.add("link-2");

// Portfolio link
const navPortfolio = document.createElement('a');
navPortfolio.href = 'felipe-portfolio.html'; // Link to the Portfolio page
navPortfolio.textContent = 'Portfolio';
navPortfolio.classList.add("link-3");


// Alexandria Plugin link
const navAlexandria = document.createElement('a');
navAlexandria.href = 'alexandria-plugin.html'; // Link to the Alexandria Plugin page
navAlexandria.textContent = 'Alexandria Plugin';
navAlexandria.classList.add("link-4");

// Append the navbar header and links to the navbar
nav.appendChild(navbarHeader);
nav.appendChild(navHome);
nav.appendChild(navAbout);
nav.appendChild(navPortfolio);
nav.appendChild(navAlexandria);

// Append the navbar to the body or another element
document.body.insertBefore(nav, document.body.firstChild);
