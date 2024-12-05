const img = document.querySelector("img");
const myHead = document.querySelector("h1");
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (myName == null) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHead.textContent = `Hello,${myName}`;
  }
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHead.textContent = `Hello,${storedName}`;
}
img.addEventListener("click", () => {
  const mySrc = img.getAttribute("src");
  if (mySrc == "image/suzuki.png") {
    img.setAttribute("src", "image/sd_model.png");
  } else {
    img.setAttribute("src", "image/suzuki.png");
  }
  alert("Change!");
});
const myButtun = document.querySelector("button");
myButtun.onclick = () => {
    setUserName();
};
