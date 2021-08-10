{/* <article class="shows-card">
<div class="shows-card__description">
    <div class="shows-card__content shows-card__content--date">
        <h4 class="shows-card__sub-heading">DATES</h4>
        <p class="shows-card__detail">Mon Sept 06 2021</p>
    </div>

    <div class="shows-card__content shows-card__content--venue">
        <h4 class="shows-card__sub-heading">VENUE</h4>
        <p class="shows-card__detail">Ronald lane</p>
    </div>

    <div class="shows-card__content">
        <h4 class="shows-card__sub-heading shows-card__content--location">LOCATION</h4>
        <p class="shows-card__detail">San Francisco, CA</p>
    </div>
</div>

<div class="shows-card__cta"> BUY TICKETS</div>

</article> */}


//shows cards info array
let cardInfo = [
    {
      dates: 'Mon Sept 06 2021 ',
      venue: 'Ronald Lane',
      location: 'San Francisco, CA'
    },
    {
      dates: 'Tue Sept 21 2021',
      venue: 'Pier 3 East',
      location: 'San Francisco, CA'
    },
    {
        dates: 'Fri Oct 15 2021',
        venue: 'View Lounge',
        location: 'San Francisco, CA'
      },
      {
        dates: 'Sat Nov 06 2021',
        venue: 'Hyatt Agency',
        location: 'San Francisco, CA'
      },
      {
        dates: 'Fri Nov 26 2021',
        venue: 'Moscow Center',
        location: 'San Francisco, CA'
      },
      {
        dates: 'Wed Dec 15 2021',
        venue: 'Press Club',
        location: 'San Francisco, CA'
      }
  ];

const showsList = document.querySelector('.shows-list');

// create a ul list shows
const shows = document.createElement('ul');
shows.classList.add('shows');
showsList.appendChild(shows);

//create a li item only for tablet/desktop view
      const showsSubHeadingTD = document.createElement('li');
      showsSubHeadingTD.classList.add('shows__subheading--td');
      shows.appendChild(showsSubHeadingTD);

      // create <h4 class="shows-card__sub-heading">VENUES</h4>
      const datesSubheading = document.createElement('h3');
      datesSubheading.classList.add('shows__subheading--td-dates');
      datesSubheading.innerText = 'DATES';
      showsSubHeadingTD.appendChild(datesSubheading);

      // create <h4 class="shows-card__sub-heading">VENUES</h4>
      const venueSubheading = document.createElement('h3');
      venueSubheading.classList.add('shows__subheading--td-venue');
      venueSubheading.innerText = 'VENUE';
      showsSubHeadingTD.appendChild(venueSubheading);

      // create <h4 class="shows-card__sub-heading">VENUES</h4>
      const locationSubheading = document.createElement('h3');
      locationSubheading.classList.add('shows__subheading--td-location');
      locationSubheading.innerText = 'LOCATION';
      showsSubHeadingTD.appendChild(locationSubheading);
      //end of table/desktop only view



    //a function for creating shows card content
    const generateCardContent = (showsData) => {
      
      //create list item 
      const showsCard = document.createElement('li');
      showsCard.classList.add('shows-card');
      shows.appendChild(showsCard);
    
      // create div class="shows-card__description
      const showsCardDescription = document.createElement('div');
      showsCardDescription.classList.add('shows-card__description');
      showsCard.appendChild(showsCardDescription);
    
      //create <div class="shows-card__content shows-card__content--date">
      const showsCardContent = document.createElement('div');
      showsCardContent.classList.add('shows-card__content', 'shows-card__content--date');
      showsCardDescription.appendChild(showsCardContent);
    
      // create <h4 class="shows-card__sub-heading">DATES</h4>
      const showsCardSubHeading = document.createElement('h4');
      showsCardSubHeading.classList.add('shows-card__sub-heading');
      showsCardSubHeading.innerText = 'DATES';
      showsCardContent.appendChild(showsCardSubHeading);
    
      // create <p class="shows-card__detail">date detail</p>
      const showsCardDetail = document.createElement('p');
      showsCardDetail.classList.add('shows-card__detail');
      showsCardDetail.innerText = showsData.dates;
      showsCardContent.appendChild(showsCardDetail);
    
      // create <h4 class="shows-card__sub-heading">VENUES</h4>
       const showsCardSubHeading2 = document.createElement('h4');
       showsCardSubHeading2.classList.add('shows-card__sub-heading');
       showsCardSubHeading2.innerText = 'VENUES';
       showsCardContent.appendChild(showsCardSubHeading2);
    
      // create <p class="shows-card__detail">venue detail</p>
        const showsCardDetail2 = document.createElement('p');
        showsCardDetail2.classList.add('shows-card__detail');
        showsCardDetail2.innerText = showsData.venue;
        showsCardContent.appendChild(showsCardDetail2);
    
      // create <h4 class="shows-card__sub-heading">LOCATION</h4>
        const showsCardSubHeading3 = document.createElement('h4');
        showsCardSubHeading3.classList.add('shows-card__sub-heading');
        showsCardSubHeading3.innerText = 'LOCATION';
        showsCardContent.appendChild(showsCardSubHeading3);
    
      // create <p class="shows-card__detail">location</p>
        const showsCardDetail3 = document.createElement('p');
        showsCardDetail3.classList.add('shows-card__detail');
        showsCardDetail3.innerText = showsData.location;
        showsCardContent.appendChild(showsCardDetail3);

      //create <div class="shows-card__cta"> BUY TICKETS</div> and append to showsCard
      const showsButton = document.createElement('div');
      showsButton.classList.add('shows-card__cta');
      showsButton.innerText = 'Buy Tickets';
      showsCard.appendChild(showsButton);

      showsButton.addEventListener('click', function() {
        console.log(showsData.venue);
      });

  return showsCard;
}


const generateCardList = (cardInfo) => {
    for(let i = 0; i < cardInfo.length; i++) {
    const showsData = cardInfo[i];
    const showsCard = generateCardContent(showsData);
    shows.appendChild(showsCard);
  }
}

// Start here
generateCardList(cardInfo);