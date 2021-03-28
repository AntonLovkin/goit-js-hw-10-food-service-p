
// import './styles.css';
import cards from './menu.json'
import cardsTpl from './cards.hbs'

const cardContainer = document.querySelector(".js-menu"); 
const chekboxStatus = document.querySelector('.theme-switch__toggle');
const bodyRef = document.querySelector('body');

const cardsMurkup = createCardMurcup(cards);
cardContainer.insertAdjacentHTML('beforeend', cardsMurkup);

function createCardMurcup(cards) {
    return cards.map(cardsTpl).join('')
}

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const { LIGHT, DARK } = Theme;

bodyRef.classList.add(LIGHT);

let darkTheme = localStorage.getItem('Theme');
// console.log(darkTheme);

function changeClass(newClass, oldClass) {
    bodyRef.classList.remove(oldClass);
    bodyRef.classList.add(newClass);
}

const turnOnDarkTheme = () => {
  changeClass(DARK, LIGHT)
  localStorage.setItem('Theme', 'dark');
  chekboxStatus.setAttribute('checked', true)
}

const turnOffDarkTheme = () => {
   changeClass(LIGHT, DARK)
  localStorage.setItem('Theme', 'light');
}

if (darkTheme === 'dark') {
  turnOnDarkTheme();
}

chekboxStatus.addEventListener('change', onCheckBoxChange);

function onCheckBoxChange() {
    const Theme = localStorage.getItem('Theme'); 
     if (Theme !== 'dark') {
       turnOnDarkTheme();
     } else
       turnOffDarkTheme(); 
}