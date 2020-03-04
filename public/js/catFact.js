console.log('Client side javascript has been loaded!')

//Setting handlers
const catFactForm = document.querySelector('#factForm')
const catFactMessage = document.querySelector('#catFact')
const notificationForm = document.querySelector('#notificationForm')

//Initial loading of page will get first cat fact
fetch('http://localhost:3000/fact').then((response) => {
  response.json().then((data) =>{
    if(data.error){
      catFactMessage.textContent = data.error
    } else {
      catFactMessage.textContent = data.message
    }
  })
})

//Pressing New Cat Fact button will fetch new cat fact
catFactForm.addEventListener('submit', (e) => {
  e.preventDefault()

  fetch('http://localhost:3000/fact').then((response) => {
    response.json().then((data) =>{
      if(data.error){
        catFactMessage.textContent = data.error
      } else {
        catFactMessage.textContent = data.message
      }
    })
  })
})

//Clicking Send Cat Fact button will trigger Twilio API
notificationForm.addEventListener('submit', (e) => {
  e.preventDefault()

  console.log('Sending Fact')
})
