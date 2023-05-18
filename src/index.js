import './style.css';
import printMe from './menu.js'
const content = document.getElementById('content');

const btn = document.createElement('button');
btn.innerHTML = 'TU TU TU TUTTU';
btn.onclick = printMe;

content.appendChild(btn);
