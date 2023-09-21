const notescontainer = document.querySelector(".notes-container");
const createbtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".inputbox");

function shownotes() {
  notescontainer.innerHTML = localStorage.getItem("notes");
}

shownotes();

function updatestorage() {
  localStorage.setItem("notes", notescontainer.innerHTML);
}

createbtn.addEventListener("click", () => {
  let inputbox = document.createElement("p");
  let img = document.createElement("img");
  inputbox.className = "inputbox";
  inputbox.setAttribute("contenteditable", "true");
  img.src = "images/delete.png";
  notescontainer.appendChild(inputbox).appendChild(img);
});

notescontainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updatestorage();
  } else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".inputbox");
    notes.forEach((nt) => {
      nt.onkeyup = function () {
        updatestorage();
      };
    });
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});
