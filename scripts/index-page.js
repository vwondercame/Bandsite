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
        txt: "I cant stop listening. Every time I hear one of their songs the vocals it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can t get enough."
    }
];


const commentSection = document.querySelector('.comment-section__list-container');

 const commentList = document.createElement("ul");
    commentList.classList.add('comment-section__list');
    commentSection.appendChild(commentList);
    console.log(commentList);
//a funciton for creating comment content 
const generateCommentContent = (commentData) => {
    //create <ul class="comment-section__list">
   

    // create <li class="comment-section__item">
    const commentItem = document.createElement("li");
    console.log(commentItem);
    commentItem.classList.add('comment-section__item');
    commentList.appendChild(commentItem);

    return commentList;

}

const generateCommentList = (commentInfo) => {
    for(let i = 0; i < commentInfo.length; i++) {   //how do I write this as a forEach loop???
    const commentData = commentInfo[i];
    const commentList = generateCommentContent(commentData);
    commentSection.appendChild(commentList);
    }
}

//start here

generateCommentList(commentInfo);

//const commentForm = document.querySelector('#form');