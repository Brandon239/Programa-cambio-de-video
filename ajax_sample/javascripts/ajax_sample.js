let number = 0;
let data = []; 
const button = document.getElementById('btn');
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const videoArea = document.getElementById("video");

function getData() {
  if (data.length === 0) { 
    const request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState == 4) {
        if (request.status == 200) {
          data = request.response; 
          updateUI(); 
        }
      }
    }
    request.open("GET", "ajax.json");
    request.responseType = "json";
    request.send(null);
  } else {
    updateUI(); 
  }
}

function updateUI() {
  titleArea.innerHTML = data[number].title;
  contentArea.innerHTML = data[number].content;
  videoArea.setAttribute("src", data[number].url);
  number = (number + 1) % data.length;
}

function changeVideo() {
  getData(); 
}

button.addEventListener('click', changeVideo);
window.onload = getData; 