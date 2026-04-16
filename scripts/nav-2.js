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
navAbout.textContent = 'About';
navAbout.classList.add("link-2");

// Append the navbar header and links to the navbar
nav.appendChild(navbarHeader);
nav.appendChild(navHome);
nav.appendChild(navAbout);

// Append the navbar to the body or another element
document.body.insertBefore(nav, document.body.firstChild);