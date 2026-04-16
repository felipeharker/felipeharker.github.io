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
navHome.classList.add("nav-hov-1");

// About Me link
const navAbout = document.createElement('a');
navAbout.href = 'about.html'; // Link to the About Me page
navAbout.textContent = 'About';
navAbout.classList.add("nav-hov-1");

// LinkedIn
const navLinked = document.createElement('a');
navLinked.href = 'index.html'; // Link to the Home page
navLinked.textContent = 'LinkedIn';
navLinked.classList.add("nav-hov-1");

// GitHub
const navGit = document.createElement('a');
navGit.href = 'https://github.com/felipeharker/alexandria-project'; // Link to the About Me page
navGit.textContent = 'GitHub';
navGit.classList.add("nav-hov-1");

// Append the navbar header and links to the navbar
nav.appendChild(navbarHeader);
nav.appendChild(navHome);
nav.appendChild(navAbout);
nav.appendChild(navLinked);
nav.appendChild(navGit);

// Append the navbar to the body or another element
document.body.insertBefore(nav, document.body.firstChild);