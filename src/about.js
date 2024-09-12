export const about = () => {
    const content = document.querySelector("#content");

    content.classList.add("about");
    content.classList.remove("home");
    content.classList.remove("menu");
}