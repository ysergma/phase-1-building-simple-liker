// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!




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

const likeBtns=document.querySelectorAll(".like")
const modal=document.getElementById('modal')
const message=document.getElementById('modal-message')
likeBtns.forEach((btn)=>{
  btn.addEventListener("click",()=>{
    mimicServerCall()
    .then((response)=>{
      //console.log(response)
      console.log(response)
      const heart = document.querySelector(".like-glyph")
      heart.addEventListener('click',()=>{
        if(heart.innerText==FULL_HEART){
          heart.innerText=EMPTY_HEART
          heart.classList.remove('activated-heart')
        }else {
          heart.innerText=FULL_HEART
          heart.classList.add('activated-heart')
        }
      })
      

    }
    )
    .catch((err)=>{
      message.innerText=err
      modal.classList.remove("hidden")
      setTimeout(()=>{modal.classList.add("hidden")}, "3000" )
      console.log(err)
    }
    )

  })

})





