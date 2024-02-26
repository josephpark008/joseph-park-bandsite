// Create section.shows
const showsSection = document.createElement('section');
showsSection.classList.add('shows');

// Create h1.shows__header
const header = document.createElement('h1');
header.classList.add('shows__header');
showsSection.appendChild(header);

// Create div.shows__block
const showsBlock = document.createElement('div');
showsBlock.classList.add('shows__block');
showsSection.appendChild(showsBlock);

// Create 6 sections.shows__cards
for (let i = 0; i < 6; i++) {
    // Create section.shows__cards
    const cardSection = document.createElement('section');
    cardSection.classList.add('shows__cards');
    showsBlock.appendChild(cardSection);

    // Create div.shows__cards__blocks
    const cardBlock = document.createElement('div');
    cardBlock.classList.add('shows__cards__blocks');
    cardSection.appendChild(cardBlock);


    // Create p.shows__cards__info.shows__cards__info--bold
    const boldInfoParagraph = document.createElement('p');
    boldInfoParagraph.classList.add('shows__cards__info', 'shows__cards__info--bold');
    cardBlock.appendChild(boldInfoParagraph);


    // Create p.shows__cards__info.shows__cards__venue
    const venueInfoParagraph = document.createElement('p');
    venueInfoParagraph.classList.add('shows__cards__info', 'shows__cards__venue');
    cardSection.appendChild(venueInfoParagraph);


    // Create p.shows__cards__info.shows__cards__location
    const locationInfoParagraph = document.createElement('p');
    locationInfoParagraph.classList.add('shows__cards__info', 'shows__cards__location');
    cardSection.appendChild(locationInfoParagraph);

    // Create div.shows__cards__submit
    const submitDiv = document.createElement('div');
    submitDiv.classList.add('shows__cards__submit');
    cardSection.appendChild(submitDiv);

    // Create button.shows__cards__submit__button
    const submitButton = document.createElement('button');
    submitButton.classList.add('shows__cards__submit__button');
    submitDiv.appendChild(submitButton);

    // Create span inside button
    const span = document.createElement('span');
    submitButton.appendChild(span);
}

// Append the showsSection to the document body
document.body.appendChild(showsSection);
function text(className, textInput) {
  const textAdd = document.querySelector(className);
  textAdd.innerText = textInput;
}

function textAllarrays(className, textInputArray) {
  const textAddAllarrays = document.querySelectorAll(className);
  textAddAllarrays.forEach((element, index) => {
      element.innerText = textInputArray[index % textInputArray.length];
  });
}

function textAll(className, textInput) {
  const textAddAll = document.querySelectorAll(className);
  textAddAll.forEach(element => {
      element.innerText = textInput;
  });
}

//HEADER
text('.shows__header', 'Shows');

//BUTTON
textAll('.shows__cards__submit__button span', 'BUY TICKETS');

//DATES
const dates = [
  'Mon Sept 09 2024',
  'Tue Sept 17 2024',
  'Sat Oct 12 2024',
  'Sat Nov 16 2024',
  'Fri Nov 29 2024',
  'Wed Dec 18 2024'
];

textAllarrays('.shows__cards__info--bold', dates);

//VENUES
const venues = [
  'Ronald Lane',
  'Pier 3 East',
  'View Lounge',
  'Hyatt Agency',
  'Moscow Center',
  'Press Club'
];

textAllarrays('.shows__cards__venue', venues);

//LOCATION
textAll('.shows__cards__location', 'San Francisco, CA');

//DETAILS
const details = [
'DATE',
'VENUE',
'LOCATION'
];

textAllarrays('.shows__cards__details', details);
