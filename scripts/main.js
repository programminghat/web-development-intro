let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/my-image.png') {
    myImage.setAttribute('src','images/yeti-gaming.jpeg');
  } else {
    myImage.setAttribute('src','images/my-image.png');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');

function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Cool Yeti is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Cool Yeti is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
