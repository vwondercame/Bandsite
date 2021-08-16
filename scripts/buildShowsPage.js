const showsList = document.querySelector(".shows-list");

//API key and API url
const SHOW_API_URL = "https://project-1-api.herokuapp.com";
const SHOW_API_KEY = "7e86765a-d022-4e1e-9a42-4ade64d55a39";

// create a ul list shows
const shows = document.createElement("ul");
shows.classList.add("shows");
showsList.appendChild(shows);

//create a li item only for tablet/desktop view
const showsSubHeadingTD = document.createElement("li");
showsSubHeadingTD.classList.add("shows__subheading--td");
shows.appendChild(showsSubHeadingTD);

// create <h4 class="shows-card__sub-heading">VENUES</h4>
const datesSubheading = document.createElement("h3");
datesSubheading.classList.add(
  "shows__subheading--td-dates",
  "shows__subheading--td-item"
);
datesSubheading.innerText = "DATES";
showsSubHeadingTD.appendChild(datesSubheading);

// create <h4 class="shows-card__sub-heading">VENUES</h4>
const venueSubheading = document.createElement("h3");
venueSubheading.classList.add(
  "shows__subheading--td-venue",
  "shows__subheading--td-item"
);
venueSubheading.innerText = "VENUE";
showsSubHeadingTD.appendChild(venueSubheading);

// create <h4 class="shows-card__sub-heading">VENUES</h4>
const locationSubheading = document.createElement("h3");
locationSubheading.classList.add(
  "shows__subheading--td-location",
  "shows__subheading--td-item"
);
locationSubheading.innerText = "LOCATION";
showsSubHeadingTD.appendChild(locationSubheading);
//end of table/desktop only view

//a function for creating shows card content
const generateCardContent = (showsData) => {
  //create list item
  const showsCard = document.createElement("li");
  showsCard.classList.add("shows-card");
  shows.appendChild(showsCard);

  // create div class="shows-card__description
  const showsCardDescription = document.createElement("div");
  showsCardDescription.classList.add("shows-card__description");
  showsCard.appendChild(showsCardDescription);

  //create <div class="shows-card__content shows-card__content--date">
  const showsCardContent = document.createElement("div");
  showsCardContent.classList.add(
    "shows-card__content",
    "shows-card__content--date"
  );
  showsCardDescription.appendChild(showsCardContent);

  // create <h4 class="shows-card__sub-heading">DATES</h4>
  const showsCardSubHeading = document.createElement("h4");
  showsCardSubHeading.classList.add("shows-card__sub-heading");
  showsCardSubHeading.innerText = "DATES";
  showsCardContent.appendChild(showsCardSubHeading);

  // create <p class="shows-card__detail">date detail</p>
  const showsCardDetail = document.createElement("p");
  showsCardDetail.classList.add("shows-card__detail", "shows-card__detail--dates");
  let timestamp = parseInt(showsData.date);
  let date = new Date(timestamp).toString();
  showsCardDetail.innerText = date.split(" ").slice(1, 4).join(" ");
  showsCardContent.appendChild(showsCardDetail);

  // create <h4 class="shows-card__sub-heading">VENUES</h4>
  const showsCardSubHeading2 = document.createElement("h4");
  showsCardSubHeading2.classList.add("shows-card__sub-heading");
  showsCardSubHeading2.innerText = "VENUES";
  showsCardContent.appendChild(showsCardSubHeading2);

  // create <p class="shows-card__detail">venue detail</p>
  const showsCardDetail2 = document.createElement("p");
  showsCardDetail2.classList.add("shows-card__detail");
  showsCardDetail2.innerText = showsData.place;
  showsCardContent.appendChild(showsCardDetail2);

  // create <h4 class="shows-card__sub-heading">LOCATION</h4>
  const showsCardSubHeading3 = document.createElement("h4");
  showsCardSubHeading3.classList.add("shows-card__sub-heading");
  showsCardSubHeading3.innerText = "LOCATION";
  showsCardContent.appendChild(showsCardSubHeading3);

  // create <p class="shows-card__detail">location</p>
  const showsCardDetail3 = document.createElement("p");
  showsCardDetail3.classList.add("shows-card__detail");
  showsCardDetail3.innerText = showsData.location;
  showsCardContent.appendChild(showsCardDetail3);

  //create <div class="shows-card__cta"> BUY TICKETS</div> and append to showsCard
  const showsButton = document.createElement("div");
  showsButton.classList.add("shows-card__cta");
  showsButton.innerText = "Buy Tickets";
  showsCard.appendChild(showsButton);

  showsButton.addEventListener("click", function () {
    console.log(showsData.place);
  });

  return showsCard;
};

//generate elements for showsLit
const displayShow = (show) => {
  show.forEach((item) => {
    const showsData = item;
    const showsCard = generateCardContent(showsData);
    shows.appendChild(showsCard);
  });
};

let showsArray = [];

//displaying the shows
function getShows() {
  return axios
    .get(`${SHOW_API_URL}/showdates?api_key=${SHOW_API_KEY}`)
    .then((res) => {
      const newArr = res.data.map((item) => {
        return {...item };
      });
      console.log(newArr);
      displayShow(newArr);
    })
    .catch((error) => console.log(error));
}

getShows();
