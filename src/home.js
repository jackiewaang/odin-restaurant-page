export const home = () => {
    const content = document.querySelector("#content");
    const hero = document.createElement('div');
    const title = document.createElement('h1');
    const subtitle = document.createElement('p');
    const reservation = document.createElement('button');

    subtitle.classList.add("sub-title");
    title.classList.add("title");
    hero.classList.add("hero");
    reservation.id = "reservation";
    reservation.textContent = "Make a reservation";
    subtitle.textContent = "Experience exquisite dining with us.";
    title.textContent = "Welcome to Kyoto Sushi";
    content.classList.add("home");
    content.classList.remove("menu");
    content.classList.remove("about");

    hero.appendChild(title);
    hero.appendChild(subtitle);
    hero.appendChild(reservation);
    content.appendChild(hero);
}