import './style.css';
import { btnMenu, item1 } from './menu.js'
import { btnHome, logoArea, diagram } from './home.js'
import contactLoad from './contact.js'

const content = document.getElementById('content');

const homeBtn = btnHome;
const menuBtn = btnMenu;
const contactBtn = contactLoad();
content.appendChild(homeBtn);
content.appendChild(menuBtn);
content.appendChild(contactBtn);
const menuContent = document.createElement('div');
menuContent.style.display = 'none'
const homeContent = document.createElement('div');
content.appendChild(homeContent);

homeBtn.addEventListener('click', () => {
    const logo = logoArea;
    const teaDiagram = diagram;
    homeContent.appendChild(logo);
    homeContent.appendChild(teaDiagram);
})

menuBtn.addEventListener('click',() => {
    homeContent.style.display = 'none';
    menuContent.style.display = 'block';
    const firstItem = item1;
    content.appendChild(menuContent);
    menuContent.appendChild(firstItem);
} )



