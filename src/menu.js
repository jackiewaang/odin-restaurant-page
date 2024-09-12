import nigiri1 from "./assets/nigiri-sake.jpg"
import nigiri2 from "./assets/nigiri-ebi.jpg"
import nigiri3 from "./assets/nigiri-eel.jpg"
import nigiri4 from "./assets/nigiri-tuna.jpg"
import nigiri5 from "./assets/nigiri-amaebi.jpg"


export const menu = () => {
    const content = document.querySelector('#content');
    const container = document.createElement('div');
    const title = document.createElement('div');
    const section1 = document.createElement('section');
    const section2 = document.createElement('section');
    const section3 = document.createElement('section');
    const section4 = document.createElement('section');
    const section5 = document.createElement('section');
    const img1 = document.createElement('img');
    const img2 = document.createElement('img');
    const img3 = document.createElement('img');
    const img4 = document.createElement('img');
    const img5 = document.createElement('img');
    const menuText1 = document.createElement('div');
    const menuText2 = document.createElement('div');
    const menuText3 = document.createElement('div');
    const menuText4 = document.createElement('div');
    const menuText5 = document.createElement('div');
    const foodTitle1 = document.createElement('h1');
    const foodTitle2 = document.createElement('h1');
    const foodTitle3 = document.createElement('h1');
    const foodTitle4 = document.createElement('h1');
    const foodTitle5 = document.createElement('h1');
    const foodSub1 = document.createElement('p');
    const foodSub2 = document.createElement('p');
    const foodSub3 = document.createElement('p');
    const foodSub4 = document.createElement('p');
    const foodSub5 = document.createElement('p');
    const foodPrice1 = document.createElement('p');
    const foodPrice2 = document.createElement('p');
    const foodPrice3 = document.createElement('p');
    const foodPrice4 = document.createElement('p');
    const foodPrice5 = document.createElement('p');

    container.classList.add('menu-container');
    title.classList.add('menu-title');
    menuText1.classList.add('menu-text');
    menuText2.classList.add('menu-text');
    menuText3.classList.add('menu-text');
    menuText4.classList.add('menu-text');
    menuText5.classList.add('menu-text');
    content.classList.add("menu");
    content.classList.remove("home");
    content.classList.remove("about");

    img1.src = nigiri1;
    img2.src = nigiri2;
    img3.src = nigiri3;
    img4.src = nigiri4;
    img5.src = nigiri5;
    
    foodTitle1.textContent = 'Nigiri Sake';
    foodTitle2.textContent = 'Nigiri Ebi';
    foodTitle3.textContent = 'Nigiri Unagi';
    foodTitle4.textContent = 'Nigiri Tuna';
    foodTitle5.textContent = 'Nigiri Amaebi';

    foodPrice1.textContent = '2.50£';
    foodPrice2.textContent = '2.50£';
    foodPrice3.textContent = '5.00£';
    foodPrice4.textContent = '3.00£';
    foodPrice5.textContent = '3.50£';

    foodSub1.textContent = 'rice, vinegar, raw salmon, wasabi';
    foodSub2.textContent = 'rice, vinegar, boiled shrimp, wasabi';
    foodSub3.textContent = 'rice, vinegar, grilled eel, wasabi';
    foodSub4.textContent = 'rice, vinegar, raw tuna, wasabi';
    foodSub5.textContent = 'rice, vinegar, raw shrimp, wasabi';

    menuText1.appendChild(foodTitle1);
    menuText1.appendChild(foodSub1);
    menuText1.appendChild(foodPrice1);
    menuText2.appendChild(foodTitle2);
    menuText2.appendChild(foodSub2);
    menuText2.appendChild(foodPrice2);
    menuText3.appendChild(foodTitle3);
    menuText3.appendChild(foodSub3);
    menuText3.appendChild(foodPrice3);
    menuText4.appendChild(foodTitle4);
    menuText4.appendChild(foodSub4);
    menuText4.appendChild(foodPrice4);
    menuText5.appendChild(foodTitle5);
    menuText5.appendChild(foodSub5);
    menuText5.appendChild(foodPrice5);

    section1.appendChild(img1);
    section1.appendChild(menuText1);
    section2.appendChild(img2);
    section2.appendChild(menuText2);
    section3.appendChild(img3);
    section3.appendChild(menuText3);
    section4.appendChild(img4);
    section4.appendChild(menuText4);
    section5.appendChild(img5);
    section5.appendChild(menuText5);
    
    container.appendChild(title);
    container.appendChild(section1);
    container.appendChild(section2);
    container.appendChild(section3);
    container.appendChild(section4);
    container.appendChild(section5);

    content.appendChild(container);
}