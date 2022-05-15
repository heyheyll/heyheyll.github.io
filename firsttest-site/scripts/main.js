let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/sycallsmile.png'){
        myImage.setAttribute('src','images/sycallsmile2.png');
    } else {
        myImage.setAttribute('src','images/sycallsmile.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName(){
    let myName = prompt('please input your name.');
    if(!myName || myName === null){
        setUserName();
    } else
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'hi,' + myName;
}
if(!localStorage.getItem('name')){
    setUserName();
} else{
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'hi,' + storedName;
}
myButton.onclick = function() {
    setUserName();
}