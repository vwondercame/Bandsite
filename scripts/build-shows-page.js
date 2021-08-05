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

const generateCardList = (cardInfo) => {
    for (let i = 0; i < cardInfo.length; i++) {
        const cardData = cardInfo[i];
        console.log('Card Data: ', cardData);

        
        showsList.appendChild(cardData)
    }
}

//create article class="shows-card" 
const showsCard = document.createElement('article');
showsCard.classList.add('shows-card');
showsList.appendChild(showsCard);


// create div class="shows-card__description
const showsCardDescription = document.createElement('div');
showsCardDescription.classList.add('shows-card__description');
showsList.appendChild(showsCardDescription);

//create <div class="shows-card__content shows-card__content--date">
const showsCardContent = document.createElement('div');
showsCardContent.classList.add('shows-card__content', 'shows-card__content--date');
showsCardDescription.appendChild(showsCardContent);

// create <h4 class="shows-card__sub-heading">DATES</h4>
const showsCardSubHeading = document.createElement('h4');
showsCardSubHeading.classList.add('shows-card__sub-heading');
showsCardSubHeading.innerText = cardInfo.dates;
showsCardContent.appendChild(showsCardSubHeading);

// create <p class="shows-card__detail">Mon Sept 06 2021</p>
const showsCardDetail = document.createElement('p');
showsCardDetail.classList.add('shows-card__detail');
showsCardContent.appendChild(showsCardDetail);

// Start here
generateCardList(cardInfo);