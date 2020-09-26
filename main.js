let calculateBtn = document.querySelector(".calculateBtn");
let amountOwed = document.getElementById("amountOwed");
let payBtn = document.querySelector(".payBtn");
let imageContainer = document.querySelector('.imageContainer')
let container = document.querySelector('.container')
let currentCatTax = 0;



// TODO: calcButtonClick function
// Function should handle the following items:
// 1) Generate a random, whole number between 0 and 20.
// 2) If the random number is not 0, update the amountOwed div to display "You owe {random number} cat tax! Pay up!"
// 3) If the random number is not 0, update the pay button text to display "Pay Cat Tax"
// 4) If the random number is not 0, update the pay button so that it is no longer hidden
// 5) If the random number is 0, update the amountOwed div to display "You owe {random number} cat tax! You've escaped this time!"
// 6) If the random number is 0, update the pay button so that it is hidden.
// 7) Both the amountOwed and pay amount button should be updated every time the calculate cat tax button is clicked.

function calcButtonClick() {
  currentCatTax = Math.floor(Math.random() * Math.floor(20));
  if (currentCatTax != 0) {
    amountOwed.innerText = `You owe ${currentCatTax} cat tax! Pay up!`;
    payBtn.removeAttribute('hidden')
    payBtn.innerText = "Pay Cat Tax";
  } else {
    amountOwed.innerText = `You owe ${currentCatTax} cat tax! You've escaped this time!`;
  }
}

// TODO: payButton function
// Function should handle the following items:
// 1) Decrement the currentCatTax amount by 1
// 2) If the remaining cat tax is greater than zero, update the amountOwed div to display "You still owe {remaining amount} cat tax! Pay up!"
// 3) If the remaining cat tax is zero or fewer, update the amountOwed div to display "Your debts are paid..."
// 4) If the cat tax was payable (amount was greater than 0) when the button was clicked, make a call to the cat api to get a cat image (https://api.thecatapi.com/v1/images/search)
// 5) Once the cat image is retrieved, append the image to the image container
// 6) If the cat wax was not payable (amount was less than or equal to 0) when the button was clicked, replace the entire contents of the container with the gif found here (https://gfycat.com/snivelingbeautifuljoey-cat)
async function catImg() {
  const response = await axios.get('https://api.thecatapi.com/v1/images/search')
  const data = response.data[0].url
  const img = document.createElement("img");
  img.src = data
  imageContainer.appendChild(img)
}

function payButton() {
  currentCatTax -= 1;
  if (currentCatTax > -1) {
    if (currentCatTax > 0) {
      catImg()
      amountOwed.innerText = `You still owe ${currentCatTax} cat tax! Pay up!`;
      console.log(currentCatTax);
    } else {
      catImg()
      amountOwed.innerText = "Your debts are paid...";
    }
  } else {
    container.innerHTML = "<iframe src='https://gfycat.com/ifr/SnivelingBeautifulJoey' frameborder='0' scrolling='no' allowfullscreen width='640' height='753'></iframe>"
  }

}
