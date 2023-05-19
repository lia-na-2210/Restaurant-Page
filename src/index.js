import './style.css';
import menuLoad from './menu.js'
// import homeLoad from './home.js'
import { btnHome, logoArea, diagram, diagram } from './home.js'
import contactLoad from './contact.js'

const content = document.getElementById('content');

const homeBtn = btnHome;
const logo = logoArea;
const teaDiagram = diagram;
const menuBtn = menuLoad();
const contactBtn = contactLoad();
content.appendChild(homeBtn);
content.appendChild(menuBtn);
content.appendChild(contactBtn);
content.appendChild(logo);
content.appendChild(teaDiagram);



