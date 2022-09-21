const arr = [
  {
    bigImg: "./images/image-product-1.jpg",
    thumbnail: "./images/image-product-1-thumbnail.jpg",
  },
  {
    bigImg: "./images/image-product-2.jpg",
    thumbnail: "./images/image-product-2-thumbnail.jpg",
  },
  {
    bigImg: "./images/image-product-3.jpg",
    thumbnail: "./images/image-product-3-thumbnail.jpg",
  },
  {
    bigImg: "./images/image-product-4.jpg",
    thumbnail: "./images/image-product-4-thumbnail.jpg",
  },
];

const imgjs = document.getElementById("imgjs");
const chang = document.getElementById("chang");
const thumbnail = document.querySelectorAll(".thumbnail");
const imggallbuttons = document.querySelectorAll(".img-gallery-btns");
const addToCart = document.querySelector(".add-cart");
const counterBtn = document.querySelector("#counter-btn");
const counterDecrementbtn = document.querySelector("#counter-decrement");
const counterIncrementbtn = document.querySelector("#counter-increment");

counterDecrementbtn.addEventListener("click", () => {
  if(counterBtn.value>1){
    counterBtn.value--;
  }

//   console.log(counterValue);
});

counterIncrementbtn.addEventListener("click", () => {
  counterBtn.value++;

//   console.log(counterValue);
});

let i = 0;
chang.src = arr[i].bigImg;
function prevFunc() {
  if (i > 0) {
    i--;
    chang.src = arr[i].bigImg;
  }
//   console.log(i);
}

function nextFunc() {
  if (i < arr.length - 1) {
    // chang.src=arr[i].bigImg;
    i++;
    chang.src = arr[i].bigImg;
  }
//   console.log(i);
}

imggallbuttons.forEach((buton) => {
  buton.addEventListener("click", () => {
    if (buton.dataset.state == "prev") {
      // console.log('prev')
      prevFunc();
      // console.log(i)
    } else if (buton.dataset.state == "next") {
      // console.log('next')
      nextFunc();
      // console.log(i)
    }
  });
});

thumbnail.forEach((thum) => {
  //    console.log(thum.src)
  thum.addEventListener("click", (e) => {
    // var newse = thum.src.replace('-thumbnail','');
    const trimIndex = thum.src.indexOf('images') 
    const trimmed = `./${thum.src.slice(trimIndex)}`;
//     console.log('this trimmed',trimmed);
    const th = arr.find((item) => {
      return item.thumbnail === trimmed;
    });
    i = arr.indexOf(th);
//     console.log("the one in array is", th);
    // chang.src = newse
    chang.src = arr[i].bigImg;
  });
});

function toggleCart() {
  document.querySelector(".popup-cart").classList.toggle("hidden");
  if (
    !document
      .querySelector(".popup-cart")
      .firstElementChild.classList.contains("conditional")
  ) {
    document.querySelector(".popup-cart").firstElementChild.innerHTML =
      "your cart is empty";
  }
}

function addProdToCart() {
  document.querySelector(".popup-cart").firstElementChild.classList.add("conditional");
  document.querySelector(
    ".popup-cart"
  ).firstElementChild.innerHTML = `  <div class="cart-item">
        <img width="50px" style="border-radius:7px;" src="./images/image-product-1-thumbnail.jpg" alt="">
        <div>
         <p>fall limited edition sneakers</p>
         <p>125$ x ${counterBtn.value}</p>
        </div>
         <a class='deletebtn' href="#"><img src="./images/icon-delete.svg" alt=""> </a>
     </div>
     <button  id="cart-btn">checkout</button>`;

  document.querySelector(".deletebtn").addEventListener("click", () => {
    console.log("delet");
    document.querySelector(".popup-cart").firstElementChild.innerHTML = "your cart is empty";
  });
}

document.querySelector(".nav-second-sec").addEventListener("click", toggleCart);
addToCart.addEventListener("click", addProdToCart);
