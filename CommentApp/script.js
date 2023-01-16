let form = document.getElementById("form");
let input = document.getElementById("input");
let message = document.getElementById("message");
let data = {};
let post = document.getElementById("post");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button clicked");
  formValidation();
});

let formValidation = () => {
  if (input.value === "") {
    message.innerHTML = "before posting,write a comment..";

    console.log("Failure");
  } else {
    message.innerHTML = "comment posted successfully!";
    console.log("Success");
    acceptData();
    postData();
  }
};

let acceptData = () => {
  data["comments"] = input.value;
  console.log("data accepted");
  console.log(data);
};

let postData = () => {
  post.innerHTML += `
    <div>
      <p>${data.comments}</p>
      <span class="option">
        <i onClick="editPost(this)" class="fa-regular fa-pen-to-square"></i>
        <i onClick="deletePost(this)" class="fa-regular fa-trash-can"></i>
      </span>
    </div>
  `;
  input.value = " ";
};

let deletePost = (e) => {
  e.parentElement.parentElement.remove();
  message.innerHTML = "post deleted successfully";
};

let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
  message.innerHTML = "Now you can edit Your comment";
};
