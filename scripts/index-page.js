/* <ul class="comment-section__list">
<li class="comment-section__item">
    <div class="comment__avi">
        <img src="" alt="">
    </div>

    <div class="comment-section__comment">
        <div class="comment-section__comment--date-time">
            <h3 class="comment-section__name"> Connor Walton</h3>
            <p class="comment-section__date">02/17/2021</p>
        </div>

        <p class="comment-section__comment-text">
            This is art. This is inexplicable magic
            expressed in the purest way, everything
            that makes up this majestic work
            deserves reverence. Let us appreciate
            this for what it is and what it contains.
        </p>
    </div>
</li>

<li class="comment-section__item">
    <div class="comment__avi">
        <img src="" alt="">
    </div>

    <div class="comment-section__comment">
        <div class="comment-section__comment--date-time">
            <h3 class="comment-section__name">Emilie Beach</h3>
            <p class="comment-section__date">01/09/2021</p>
        </div>

        <p class="comment-section__comment-text">
            I feel blessed to have seen them in
            person. What a show! They were just
            perfection. If there was one day of my
            life I could relive, this would be it. What
            an incredible day.
        </p>
    </div>
</li>

<div class="comment-section__comment">
    <div class="comment-section__comment--date-time">
        <h3 class="comment-section__name">Miles Acosta</h3>
        <p class="comment-section__date">12/20/2021</p>
    </div>

    <p class="comment-section__comment-text">
        I can t stop listening. Every time I hear
        one of their songs the vocals it gives
        me goosebumps. Shivers straight down
        my spine. What a beautiful expression of
        creativity. Can't get enough.
    </p>
</div>
</li>  
</ul> */

let commentInfo = [
    {
        name: "Connor Walton",
        date: "02/17/2021",
        txt: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
    },
    {
        name: "Emilie Beach",
        date: "01/09/2021",
        txt: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
    },
    {
        name: "Miles Acosta",
        date: "12/20/2020",
        txt: "I cant stop listening. Every time I hear one of their songs the vocals it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
    }
];


const commentSection = document.querySelector('.comment-section__list-container');

//create <ul class="comment-section__list">
    const commentList = document.createElement("ul");
    commentList.classList.add('comment-section__list');
    commentSection.appendChild(commentList);

//a funciton for creating comment content 
const generateCommentContent = (commentData) => {

    // create <li class="comment-section__item">
    const commentItem = document.createElement("li");
    commentItem.classList.add('comment-section__item');
    commentList.appendChild(commentItem);

    //create <div class="comment__avi-container">
    const commentAviContainer = document.createElement("div");
    commentAviContainer.classList.add('comment__avi-container');
    commentItem.appendChild(commentAviContainer);

    //create <div class="comment-section__comment"> inside commentItem
    const commentContainer = document.createElement("div");
    commentContainer.classList.add('comment-section__comment');
    commentItem.appendChild(commentContainer);

    //create <div class="comment-section__comment--date-time"> inside commentContainer
    const dateTimeContainer = document.createElement("div");
    dateTimeContainer.classList.add('comment-section__comment--date-time');
    commentContainer.appendChild(dateTimeContainer);

    //create <h3 class="comment-section__name"> Connor Walton</h3> inside dateTimeContainer
    const commentName = document.createElement("h3");
    commentName.classList.add('comment-section__name');
    commentName.innerText = commentData.name;
    dateTimeContainer.appendChild(commentName);

    // create <p class="comment-section__date">01/09/2021</p> inside dateTimeContainer
    const commentDate = document.createElement("p");
    commentDate.classList.add('comment-section__date');
    commentDate.innerText = commentData.date;
    dateTimeContainer.appendChild(commentDate);

    //create <p class="comment-section__comment-text"> inside commentContainer
    const commentText = document.createElement("p");
    commentText.classList.add('comment-section__name');
    commentText.innerText = commentData.txt;
    commentContainer.appendChild(commentText);


    return commentList;
}

//a function that generates and appends comments to the comment list
const displayComment = (comments) => {
    comments.forEach((item)=> {
        const commentData = item;
        const commentList = generateCommentContent(commentData);
        commentSection.appendChild(commentList);
    })
}

//start here

displayComment(commentInfo);

//html comment form functionality 

const commentForm = document.querySelector('#form');

commentForm.addEventListener('submit', function(event) {
    event.preventDefault();
   
    
    const newComment = {
        name: event.target.formName.value,
        date: new Date(Date.now()),
        txt: event.target.formComment.value
    }
    commentInfo.unshift(newComment);
    commentList.innerHTML = '';
    displayComment(commentInfo);
    commentForm.reset();
});
