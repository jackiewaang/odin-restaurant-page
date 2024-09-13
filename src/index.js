import "./style.css";
import {home} from "./home.js";
import {menu} from "./menu.js";
import {about} from "./about.js";


const initialLoader = (() => {
    const content = document.querySelector("#content");
    home();
    return{content}
})();

const changePages = (() => {
    const homePage = document.querySelector("#home-page");
    const menuPage = document.querySelector("#menu-page");
    const aboutPage = document.querySelector("#about-page");
    const content = initialLoader.content;
    
    function update(){
        content.textContent = '';
    }

    homePage.addEventListener('click', () => {
        update();
        home();
    })
    
    menuPage.addEventListener('click', () => {
        update();
        menu();
    })

    aboutPage.addEventListener('click', () => {
        update();
        about();
    })
})();
