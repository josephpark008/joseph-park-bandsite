//YOU NEED TO CREATE HTML ELEMENTS IN FUNCTION
//NEED TO FIX BEM 
//NEED TO CHENAGE CLASS NAMES FOR __BLOCK AND __SECTION

const apiKey = 'c62b0fd4-eb02-460b-865a-8c24013d6a2e'
//Create instances for each type of data

const api = new BandSiteApi(apiKey)

//Get SHOWS data (date, location and place)
async function getShows() {
  // Fetch show data from the API
  const showData = await api.getShows();
  // console.log(showData)s
  renderShows(showData);
}

getShows()

function renderShows(shows) {


  // Create section.shows
  const showsBody = document.createElement('section');
  showsBody.classList.add('shows');
  const showsSection = document.getElementById("shows-section");
  showsSection.append(showsBody);


  // Create h1.shows__header
  const header = document.createElement('h1');
  header.classList.add('shows__header');
  showsBody.appendChild(header);

  // Create div.shows__block
  const showsBlock = document.createElement('div');
  showsBlock.classList.add('shows__block');
  showsBody.appendChild(showsBlock);

  shows.forEach((showItem) => {

    // Create 6 sections.shows__cards

    // Create section.shows__cards
    const cardSection = document.createElement('section');
    cardSection.classList.add('shows__cards');
    showsBlock.appendChild(cardSection);

    // Create div.shows__cards__blocks
    const cardBlock = document.createElement('div');
    cardBlock.classList.add('shows__cards__blocks');
    cardSection.appendChild(cardBlock);


    //date detail
    const dateLabel = document.createElement('p');
    dateLabel.classList.add('shows__cards__details');
    dateLabel.innerText = 'DATE'
    console.log(showItem.date)
    cardBlock.appendChild(dateLabel);

    // Create p.shows__cards__info.shows__cards__info--bold
    const boldInfoParagraph = document.createElement('p');
    boldInfoParagraph.classList.add('shows__cards__info', 'shows__cards__info--bold1');
    boldInfoParagraph.innerText = showItem.date
    cardBlock.appendChild(boldInfoParagraph);

    //place detail
    const placeLabel = document.createElement('p');
    placeLabel.classList.add('shows__cards__details');
    placeLabel.innerText = 'VENUE'
    cardBlock.appendChild(placeLabel);

    // Create PLACE INPUT
    const placeInfoParagraph = document.createElement('p');
    placeInfoParagraph.classList.add('shows__cards__info', 'shows__cards__place');
    placeInfoParagraph.innerText = `${showItem.place}`
    cardSection.appendChild(placeInfoParagraph);

    //location detail
    const locationLabel = document.createElement('p');
    locationLabel.classList.add('shows__cards__details');
    locationLabel.innerText = 'LOCATION'
    cardBlock.appendChild(locationLabel);
    
    // CREATE LOCATION INPUT
    const venueInfoParagraph = document.createElement('p');
    venueInfoParagraph.classList.add('shows__cards__info', 'shows__cards__location');
    venueInfoParagraph.innerText = `${showItem.location}`
    cardSection.appendChild(venueInfoParagraph);


    // // Create p.shows__cards__info.shows__cards__location
    // const locationInfoParagraph = document.createElement('p');
    // locationInfoParagraph.classList.add('shows__cards__info', 'shows__cards__location');
    // cardSection.appendChild(locationInfoParagraph);

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

  )
}



//BREAK


