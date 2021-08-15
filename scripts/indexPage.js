const dates = [
  {
    year: 2021,
    month: 2,
    day: 17,
  },
  {
    year: 2021,
    month: 01,
    day: 09,
  },
  {
    year: 2021,
    month: 12,
    day: 20,
  },
];

const commentSection = document.querySelector(
  ".comment-section__list-container"
);

//API key and API url
const BAND_API_URL = "https://project-1-api.herokuapp.com";
const BAND_API_KEY = "7e86765a-d022-4e1e-9a42-4ade64d55a39";

//create <ul class="comment-section__list">
const commentList = document.createElement("ul");
commentList.classList.add("comment-section__list");
commentSection.appendChild(commentList);

//a funciton for creating comment content
const generateCommentContent = (commentData) => {
  // create <li class="comment-section__item">
  const commentItem = document.createElement("li");
  commentItem.classList.add("comment-section__item");
  commentList.appendChild(commentItem);

  //create <div class="comment__avi-container">
  const commentAviContainer = document.createElement("div");
  commentAviContainer.classList.add("comment-section__avi-container");
  commentItem.appendChild(commentAviContainer);

  //create <div class="comment-section__comment"> inside commentItem
  const commentContainer = document.createElement("div");
  commentContainer.classList.add("comment-section__comment");
  commentItem.appendChild(commentContainer);

  //create <div class="comment-section__comment--date-time"> inside commentContainer
  const dateTimeContainer = document.createElement("div");
  dateTimeContainer.classList.add("comment-section__comment--date-time");
  commentContainer.appendChild(dateTimeContainer);

  //create <h3 class="comment-section__name"> Connor Walton</h3> inside dateTimeContainer
  const commentName = document.createElement("h3");
  commentName.classList.add("comment-section__name");
  commentName.innerText = commentData.name;
  dateTimeContainer.appendChild(commentName);

  // create <p class="comment-section__date">01/09/2021</p> inside dateTimeContainer
  const commentDate = document.createElement("p");
  commentDate.classList.add("comment-section__date");
  commentDate.innerText =
    commentData.month + "/" + commentData.day + "/" + commentData.year;
  dateTimeContainer.appendChild(commentDate);

  //create <p class="comment-section__comment-text"> inside commentContainer
  const commentText = document.createElement("p");
  commentText.classList.add("comment-section__txt");
  commentText.innerText = commentData.comment;
  commentContainer.appendChild(commentText);

  return commentList;
};

//a function that generates and appends comments to the comment list
const displayComment = (comments) => {
  comments.forEach((item) => {
    const commentData = item;
    const commentList = generateCommentContent(commentData);
    commentSection.appendChild(commentList);
  });
};

let commentArray = [];

//displaying the comments
function getComments() {
  return axios
    .get(`${BAND_API_URL}/comments?api_key=${BAND_API_KEY}`)
    .then((res) => {
      const newArr = res.data.map((item) => {
        return {
          ...item,
          day: `${new Date(item.timestamp).getUTCDate()}`,
          month: `${new Date(item.timestamp).getMonth() + 1}`,
          year: `${new Date(item.timestamp).getFullYear()}`,
        };
      });
      console.log(newArr);
      displayComment(newArr);
    }).catch((error) =>
    console.log(error)
    );
}


getComments();
function postComment(comment) {
  return axios
    .post(`${BAND_API_URL}/comments?api_key=${BAND_API_KEY}`, comment)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}


//comment form functionality
const commentForm = document.querySelector("#form");

commentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let commentDate = new Date();
  const commentList = document.querySelector(".comment-section__list");
  const newComment = {
    name: event.target.formName.value,
    comment: event.target.formComment.value,
  };
  postComment(newComment);
  commentList.innerHTML = "";
  commentForm.reset();
  getComments();
});
