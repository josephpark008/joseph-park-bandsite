const apiKey = "c62b0fd4-eb02-460b-865a-8c24013d6a2e";
//Create instances for each type of data

const api = new BandSiteApi(apiKey);

//Get COMMENTS data (name and comments)
async function getComments() {
  let commentData = await api.getComments();
  console.log(commentData);
  renderComments(commentData);
}

https: getComments();

const form = document.getElementById("comments");
const nameField = document.getElementById("name");
const commentField = document.getElementById("comment");
form.addEventListener("submit", handleComment);

async function handleComment(e) {
  e.preventDefault();

  const fullName = nameField.value;
  console.log(fullName);
  const fullText = commentField.value;
  console.log(fullText);

  // Validate text inputW
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

  await api.postComment(fullName, fullText);
  const updatedComments = await api.getComments();
  renderComments(updatedComments);
  console.log(updatedComments);

  e.target.reset();
}
//call the function passing in the array of already posted comments

//change
function renderComments(comments) {
  const commentsList = document.getElementById("posted");
  commentsList.innerHTML = "";

  comments.forEach((comment, index) => {
    const item = document.createElement("div");
    item.classList.add("comment-box");

    if (index === comments.length - 1) {
      item.classList.add("last-comment");
    }

    commentsList.append(item);

    const itemAvatar = document.createElement("div");
    itemAvatar.classList.add("comment-box__avatar");
    item.append(itemAvatar);

    const itemInput = document.createElement("div");
    itemInput.classList.add("comment-info__name-date");
    item.append(itemInput);

    const itemName = document.createElement("p");
    itemName.classList.add("comment-name");
    itemName.innerText = `${comment.name}`;
    itemInput.append(itemName);

    const itemDate = document.createElement("p");
    itemDate.classList.add("comment-date");

    const today = new Date(comment.timestamp);
    let d = today.getDate();
    let m = today.getMonth() + 1;
    const y = today.getFullYear();
    d = String(today.getDate()).padStart(2, "0");
    m = String(today.getMonth() + 1).padStart(2, "0");
    const date = `${d}/${m}/${y}`;
    itemDate.innerText = date;

    itemInput.append(itemDate);

    const itemText = document.createElement("p");
    itemText.classList.add("comment-info__text");
    itemText.innerText = `${comment.comment}`;

    const commentInfo = document.createElement("div");
    commentInfo.classList.add("comment-info");
    commentInfo.append(itemInput);
    commentInfo.append(itemText);

    item.append(commentInfo);

    const deleteButton = document.createElement("button");
    commentInfo.appendChild(deleteButton);
    deleteButton.innerText = "DELETE";

    deleteButton.dataset.commentId = comment.id;

    // Delete comment
    deleteButton.addEventListener("click", async function (deletePost) {
      const commentIdToDelete = deletePost.target.dataset.commentId;
      const delPostResponse = api.deleteComment(commentIdToDelete);
    });
  });
}

function text(className, textInput) {
  const textAdd = document.querySelector(className);
  textAdd.innerText = textInput;
}

text(".input__name-label", "NAME");
text(".input__comment-label", "COMMENT");
text(".comments-header", "Join the Conversation");
text(".input__button", "COMMENT");
