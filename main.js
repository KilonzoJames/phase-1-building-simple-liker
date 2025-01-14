// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal=document.getElementById("modal");
modal.classList.add("hidden");
const heart=document.querySelectorAll(".like-glyph");
console.log(heart);
heart.forEach(element=>element.addEventListener("click", likeFunction))

function likeFunction(e){
  const heart=e.target
  console.log(heart);
  heart.innerText=FULL_HEART;
  heart.classList.add('activated-heart')
  heart.removeEventListener("click", likeFunction)
  heart.addEventListener("click", removeRed)
}
function removeRed(e){
  const heart=e.target;
  heart.innerText=EMPTY_HEART;
  heart.classList.remove('activated-heart')
  heart.removeEventListener("click", removeRed)
  heart.addEventListener("click", likeFunction)
}


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
