const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/j1.png") {
        myImage.setAttribute("src", "images/j2.png");
    } else {
        myImage.setAttribute("src", "images/j3.png");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myNmae = prompt("PLease enter your name");
    localStorage.setItem("name, myName");
    myHeading.textContent = `Mozila is cool, ${myName}`;
}
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool  ${storedName}`;
}
myButton.onclick = () => {
    setUserName();
};