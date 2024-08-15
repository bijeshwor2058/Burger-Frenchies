let burger = document.getElementById("burger");
let fries = document.getElementById("fries");
let drinks = document.getElementById("drinks");
let inform_user = document.querySelector('.inform');
let message = document.getElementById("message");
let Btn = document.getElementById("btn");
let orderNumber = document.getElementById("number");
let imageContainer = document.getElementById('imageContainer');

let randomTime = Math.floor(Math.random()*3000 + 1000);
let randomNumber = Math.floor(Math.random()*5000+ 1000);

function showMessage(){
  return new Promise(function(res){
    setTimeout(() => {
      message.innerHTML = "Your order has been placed. Enjoy your meal!";
      res()
    },randomTime);
  })
}

function takeOrder(food) {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(`Your order has been placed in a few minutes`);
      }, 2000);
  });
}

Btn.addEventListener("click",async function(e){
  e.preventDefault();
  message.innerText = "";
  imageContainer.style.display = 'none';

  // collected data

  let selectedItems = [];
  let images = [];
  if(burger.checked){
    selectedItems.push("Burger");
    images.push("./img/Burger.img.jpg");
  }
  if(fries.checked){
    selectedItems.push("Fries");
    images.push("./img/Fries.img.jpg");
  }
  if(drinks.checked){
    selectedItems.push("Drinks");
    images.push("./img/Drinks.img.jpg");
  } 

  if(selectedItems.length === 0){
    message.innerText = "Please select at least one item.";
    setTimeout(() => {
      message.style.display = 'none';
  }, 2000);
    return;
  }
  console.log(images)

  // Display order number and message
  orderNumber.innerText = "Order Id :"+randomNumber;


  let food = await takeOrder(selectedItems);
  inform_user.innerText = food;

  setTimeout(() => {
    displayImages(images);
  }, randomTime);

  setTimeout(() => {
    message.innerText = `Enjoy your ${selectedItems.join(' and ')}, Thank you for your order...`;
  },6000)

  setTimeout(() => {
    inform_user.style.display = 'none';
  }, 3000);

});


function displayImages(images){
  imageContainer.innerHTML = '';
  images.forEach( src => {
    let img = document.createElement('img');
    img.src = src;
    img.alt = src.split('.')[0];
    img.style.marginTop = '20px';
    img.style.width = '200px';
    img.style.height = '200px';
    imageContainer.appendChild(img);

    imageContainer.style.display = 'flex';
    imageContainer.style.justifyContent = 'center';
    imageContainer.style.alignItems = 'center';
    imageContainer.style.flexDirection = 'row';
    img.style.marginTop = '40px';
    img.style.padding = '20px';
    img.style.borderRadius = '10px';
    img.style.backgroundColor = '#f2f2f2';
    img.style.boxShadow = '0 0 10px rgba(0,0,0,0.2)';
    img.style.width = '200px';
    img.style.height = '200px';
    img.style.transition = 'opacity 0.2';
    
  });
}





