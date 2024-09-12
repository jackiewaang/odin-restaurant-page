export const about = () => {
    const content = document.querySelector("#content");

    content.classList.add("about");
    content.classList.remove("home");
    content.classList.remove("menu");

    const body = document.querySelector('body');
    body.style.height = '100%';

    const aboutContainer = document.createElement('div');
    const aboutTitle = document.createElement('div');
    const sectionIntro = document.createElement('section');
    const introTitle = document.createElement('h1');
    const introSub = document.createElement('p');
    const sectionAwards = document.createElement('section');
    const awardsTitle = document.createElement('h1');
    const awardsPara1 = document.createElement('p');
    const awardsPara2 = document.createElement('p');
    const awardsPara3 = document.createElement('p');
    const awardsPara4 = document.createElement('p');
    const awardsPara5 = document.createElement('p');
    const sectionLocation = document.createElement('section');
    const locationTitle = document.createElement('h1');
    const locationPara1 = document.createElement('p');
    const locationPara2 = document.createElement('p');
    const locationPara3 = document.createElement('p');
    const locationPara4 = document.createElement('p');
    const locationPara5 = document.createElement('p');
    const locationPara6 = document.createElement('p');
    const locationPara7 = document.createElement('p');
    const sectionHours = document.createElement('section');
    const hoursTitle = document.createElement('h1');
    const hoursPara1 = document.createElement('p');
    const hoursPara2 = document.createElement('p');
    const hoursPara3 = document.createElement('p');
    const hoursPara4 = document.createElement('p');
    const sectionContact = document.createElement('section');
    const contactTitle = document.createElement('h1');
    const contactPara1 = document.createElement('p');
    const contactPara2 = document.createElement('p');
    const contactPara3 = document.createElement('p');
    const contactPara4 = document.createElement('p');

    aboutContainer.classList.add('about-container');
    aboutTitle.classList.add('about-title');
    aboutTitle.textContent = 'About';
    introTitle.textContent = 'Who are we?';
    introSub.textContent = 'Founded in 2010 by Chef Haruto Takahashi, Kyoto Sushi brings the authentic flavors of Kyoto to the heart of our city. With over 25 years of sushi-making experience, we’re dedicated to crafting fresh, high-quality dishes using sustainably-sourced ingredients. Whether for a casual lunch or a special dinner, we aim to create a welcoming and unforgettable dining experience for all our guests.';

    awardsTitle.textContent = 'Awards';
    awardsPara1.textContent = '• Best Sushi Restaurant – City Food Awards (2018, 2019, 2021)';
    awardsPara2.textContent = '• Top 10 Japanese Restaurants – Gourmet Guide (2020)';
    awardsPara3.textContent = '• Excellence in Sustainable Seafood – Green Plate Awards (2022)';
    awardsPara4.textContent = '• People’s Choice Award – Local Dining Magazine (2023)';
    awardsPara5.textContent = 'We’re honored to receive these recognitions and will continue delivering outstanding sushi and service to our guests.';

    locationTitle.textContent = 'Location';
    locationPara1.textContent = 'Visit us in the heart of Kyoto, where tradition meets modern cuisine.';
    locationPara2.textContent = 'Kyoto Sushi';
    locationPara3.textContent = '12-3 Nishiki Market Street';
    locationPara4.textContent = 'Nakagyo Ward';
    locationPara5.textContent = 'Kyoto, 604-8054';
    locationPara6.textContent = 'Japan'
    locationPara7.textContent = 'Located in the bustling Nishiki Market, we\'re just a short walk from key city attractions and easily accessible by public transport. Whether you\'re a local or a traveler, we invite you to experience authentic Kyoto sushi in a vibrant, historic setting.';

    hoursTitle.textContent = 'Hours';
    hoursPara1.textContent = 'We\'re open every day to serve you fresh, authentic sushi!';
    hoursPara2.textContent = 'Monday - Friday:11:00AM - 10:00PM';
    hoursPara3.textContent = 'Saturday - Sunday:12:00PM - 11:00PM';
    hoursPara4.textContent = 'Enjoy lunch specials during weekdays from 11:00 AM – 2:00 PM, and dinner service all evening. We look forward to welcoming you at Kyoto Sushi!'

    contactTitle.textContent = 'Contact Us';
    contactPara1.textContent = 'We’d love to hear from you! Feel free to reach out with any inquiries or reservations.';
    contactPara2.textContent = 'Phone: +81 75-123-4567';
    contactPara3.textContent = 'Email: info@kyotosushi.jp';
    contactPara4.textContent = 'For reservations, catering, or general questions, don’t hesitate to give us a call or drop us an email. We look forward to serving you!';

    sectionIntro.appendChild(introTitle);
    sectionIntro.appendChild(introSub);
    sectionAwards.appendChild(awardsTitle);
    sectionAwards.appendChild(awardsPara1);
    sectionAwards.appendChild(awardsPara2);
    sectionAwards.appendChild(awardsPara3);
    sectionAwards.appendChild(awardsPara4);
    sectionAwards.appendChild(awardsPara5);
    sectionLocation.appendChild(locationTitle);
    sectionLocation.appendChild(locationPara1);
    sectionLocation.appendChild(locationPara2);
    sectionLocation.appendChild(locationPara3);
    sectionLocation.appendChild(locationPara4);
    sectionLocation.appendChild(locationPara5);
    sectionLocation.appendChild(locationPara6);
    sectionLocation.appendChild(locationPara7);
    sectionHours.appendChild(hoursTitle);
    sectionHours.appendChild(hoursPara1);
    sectionHours.appendChild(hoursPara2);
    sectionHours.appendChild(hoursPara3);
    sectionHours.appendChild(hoursPara4);
    sectionContact.appendChild(contactTitle);
    sectionContact.appendChild(contactPara1);
    sectionContact.appendChild(contactPara2);
    sectionContact.appendChild(contactPara3);
    sectionContact.appendChild(contactPara4);
    aboutContainer.appendChild(aboutTitle);
    aboutContainer.appendChild(sectionIntro);
    aboutContainer.appendChild(sectionAwards);
    aboutContainer.appendChild(sectionLocation);
    aboutContainer.appendChild(sectionHours);
    aboutContainer.appendChild(sectionContact);
    content.appendChild(aboutContainer);
}