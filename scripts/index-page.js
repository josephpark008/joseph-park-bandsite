const submissions = [
  {
    name: "Victor Pinto",
    date: "11/02/2023",
    text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Christina Cabrera",
    date: "10/28/2023",
    text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Isaac Tadesse",
    date: "10/20/2023",
    text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
  },
];


renderComments(submissions);
const form = document.getElementById("comments");
form.addEventListener("submit", handleComment);

function handleComment(e) {
  e.preventDefault();
  const fullName = e.target.name.value;
  const fullText = e.target.comment.value;

  // Validate text input
  if (!fullName.trim()) {
    const nError = document.getElementById("name");
    nError.style.borderColor = "#D22D2D";
    nError.style.borderWidth = "1px";
    return;
  }

  if (!fullText.trim()) {
    const cError = document.getElementById("comment");
    cError.style.borderColor = "#D22D2D";
    cError.style.borderWidth = "1px";
    return;

  }

  //COMMENT DATE WITH '0' ADDED
  const today = new Date();
  let d = today.getDate();
  let m = today.getMonth() + 1;
  const y = today.getFullYear();
  d = String(today.getDate()).padStart(2, "0");
  m = String(today.getMonth() + 1).padStart(2, "0");
  const date = `${d}/${m}/${y}`;


  const newEntry = {
    name: fullName,
    text: fullText,
    date: date,
  };

  submissions.unshift(newEntry);


  renderComments(submissions);
  adjustContainerHeight();

  e.target.reset();
}

function adjustContainerHeight() {
  const commentsContainer = document.getElementById("posted");
  const containerHeight = commentsContainer.scrollHeight;
  commentsContainer.style.height = containerHeight + "px";
}

function renderComments(comments) {

  const commentsList = document.getElementById("posted");
  commentsList.innerHTML = "";

  comments.forEach((comm, index) => {
    const item = document.createElement("div");
    item.classList.add("comment-box");

    if (index === comments.length - 1) {
      item.classList.add("last-comment");
    }

    commentsList.append(item);

    const itemAvatar = document.createElement("div");
    itemAvatar.classList.add("comment-box__avatar");
    item.append(itemAvatar);

    const itemInput = document.createElement("div")
    itemInput.classList.add("comment-info__name-date");
    item.append(itemInput);

    const itemName = document.createElement("p");
    itemName.classList.add("comment-name");
    itemName.innerText = `${comm.name}`;
    itemInput.append(itemName);

    const itemDate = document.createElement("p");
    itemDate.classList.add("comment-date");
    itemDate.innerText = `${comm.date}`;
    itemInput.append(itemDate);

    const itemText = document.createElement("p");
    itemText.classList.add("comment-info__text");
    itemText.innerText = `${comm.text}`;

    const commentInfo = document.createElement("div");
    commentInfo.classList.add("comment-info");
    commentInfo.append(itemInput);
    commentInfo.append(itemText);

    item.append(commentInfo);

  });
}

