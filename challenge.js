// User Story

// As a user, I should see the timer increment every second once the page has loaded.

document.addEventListener("DOMContentLoaded", startCounter);

function startCounter() {
  setInterval(incCounter, 1000);
  incCounter();
}

// As a user, I can manually increment and decrement the counter using the plus and minus buttons.

const counter = document.getElementById("counter");
let counterNumber = parseInt(counter.innerText, 10);

const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");

function incCounter() {
  counterNumber++;
  counter.innerText = counterNumber.toString();
}

function decCounter() {
  counterNumber--;
  counter.innerText = counterNumber.toString();
}

// As a user, I can 'like' an individual number of the counter. I should see count of the number of 'likes' associated with that number.
  // Listen for like button click
  // Grab counter number on "click"
  // See if the counterNumber has already been liked
  // If no:
    // Create new list item that reads "${counterNumber} has been liked ${frequency} time", frequency being 1
  // If yes:
    // Update list item to read "${counterNumber} has been liked ${frequency} times", frequency being > 1

const likeButton = document.getElementById("heart");
const likeList = document.getElementById("list");

let likeListItem = document.createElement("li");
const likedNumbers = {};

function newLike() {
  likedNumbers.push(counterNumber);
  likedNumbers.forEach(function(likedNum) {

  });
}

document.addEventListener("click", function(event) {
  if (event.target == plusButton) {
    incCounter();
  } else if (event.target == minusButton) {
    decCounter();
  } else if (event.target == likeButton) {
    // like function
  } else if (event.target == pauseButton) {
    // pause function
  }
});

// As a user, I can pause the counter, which should:
  // Pause the counter
  // Disable all buttons except the pause button
  // Display the text "resume" on the pause button

const pauseButton = document.getElementById("pause");


// When 'resume' is clicked, it should restart the counter and re-enable the buttons.
// As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."

