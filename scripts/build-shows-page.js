//YOU NEED TO CREATE HTML ELEMENTS IN FUNCTION
//NEED TO FIX BEM
//NEED TO CHENAGE CLASS NAMES FOR __BLOCK AND __SECTION

const apiKey = "c62b0fd4-eb02-460b-865a-8c24013d6a2e";
//Create instances for each type of data

const api = new BandSiteApi(apiKey);

//Get SHOWS data (date, location and place)
async function getShows() {
  // Fetch show data from the API
  const showData = await api.getShows();
  console.log(showData);
  renderShows(showData);
}

getShows();

function renderShows(shows) {
  //create shows BODY
  const showsSection = document.getElementById("shows-section");

  //create shows HEADER
  const header = document.createElement("h1");
  header.classList.add("shows-header");
  header.innerText = "Shows";
  showsSection.appendChild(header);

  //create shows LABELS for tablet/desktop
  const labelsBlock = document.createElement('div');
  labelsBlock.classList.add('shows-block');
  showsSection.appendChild(labelsBlock);

  const labelsDate = document.createElement('p');
  labelsDate.classList.add('shows-block__date');
  labelsDate.innerText = 'DATE';
  labelsBlock.appendChild(labelsDate);

  const labelsVenue = document.createElement('p');
  labelsVenue.classList.add('shows-block__venue');
  labelsVenue.innerText = 'VENUE';
  labelsBlock.appendChild(labelsVenue);

  const labelsLocation = document.createElement('p');
  labelsLocation.classList.add('shows-block__location');
  labelsLocation.innerText = 'LOCATION';
  labelsBlock.appendChild(labelsLocation);

  shows.forEach((show) => {
    const showCard = document.createElement("div");
    showCard.classList.add("show-cards");
    showsSection.appendChild(showCard);

    const labels = ["DATE", "VENUE", "LOCATION"];

    //DATE CONVERSION
    function getMonthName(month) {
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "April",
        "May",
        "June",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ];
      return months[month]; // No need to adjust month index
    }

    function getDayName(day) {
      const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
      return days[day];
    }

    function convertDateToWords(date) {
      const date1 = new Date(date);
      const dayWords = getDayName(date1.getDay()); // Use getDay instead of getDate
      let day = date1.getDate();
      day = String(date1.getDate()).padStart(2, "0");
      const month = getMonthName(date1.getMonth());
      const year = date1.getFullYear();
      return `${dayWords} ${month} ${day} ${year}`; // Return the formatted date as a string
      console.log(`${dayWords} ${month} ${day} ${year}`);
    }

    const inputs = [convertDateToWords(show.date), show.place, show.location];

    for (let i = 0; i < 3; i++) {
      const showPair = document.createElement("div");
      showPair.classList.add("show-pairs");
      showCard.appendChild(showPair);

      const label = document.createElement("p");
      label.classList.add(`show-pairs__${labels[i].toLowerCase()}-label`);
      label.innerText = labels[i];
      showPair.appendChild(label);

      const input = document.createElement("p");
      input.classList.add(`show-pairs__${labels[i].toLowerCase()}-input`);
      
      if (i === 0) {
        input.classList.add("show-pairs__date-input--bold");
      }
      input.innerText = inputs[i];
      showPair.appendChild(input);
    }

    const buyTicketsButton = document.createElement("button");
    buyTicketsButton.classList.add("submit-button");
    showCard.appendChild(buyTicketsButton);

    const buttonText = document.createElement("p");
    buttonText.classList.add("submit-button__text");
    buttonText.innerText = "BUY TICKETS";
    buyTicketsButton.appendChild(buttonText);
  });
}


