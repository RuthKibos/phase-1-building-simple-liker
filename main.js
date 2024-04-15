// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", function() {
  const errorModal = document.getElementById("modal");
  errorModal.classList.add("hidden"); // Add the .hidden class to hide the error modal initially

  const hearts = document.querySelectorAll(".like-glyph");

  hearts.forEach(heart => {
    heart.addEventListener("click", function() {
      mimicServerCall()
        .then(response => {
          if (response === "Pretend remote server notified of action!") {
            heart.classList.add("activated-heart");
            if (heart.innerText === EMPTY_HEART) {
              heart.innerText = FULL_HEART;
            } else {
              heart.innerText = EMPTY_HEART;
            }
          } else {
            errorModal.innerText = response; // Display the server error message in the modal
            errorModal.classList.remove("hidden"); // Remove the .hidden class to display the error modal
            setTimeout(() => {
              errorModal.classList.add("hidden"); // Hide the modal after 3 seconds
            }, 3000);
          }
        })
        })
      })
    })
  
  

        


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
