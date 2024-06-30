import { findMEle, wishList } from "./wishList.js";

let doodlehtml = '';
goldenDoodle.forEach((doodle) => {
  doodlehtml += `<div class="card text-center mb-3 ">
        <div class="img-container"><img src="${doodle.image}" class="card-img-top" alt="dog image"></div>
        <div class="card-body">
          <h5 class="card-title mt-2">${doodle.name}</h5>
            <div class="heart m-3 h-5 w-5">
              <p class="one hsty" id="${doodle.id}">&#x1F5A4;</p>
            </div>
            <div class="overlay">
              <p class="card-text lh-1">Age : ${doodle.age}</p>
              <p class="card-text lh-1">Gender : ${doodle.gender}</p>
              <p class="card-text lh-1">Temperament : ${doodle.Temperament}</p>
              <a href="#" class="btn btn-primary bg-#F1BC19">Adopt now</a>
            </div>
        </div>
    </div>`;
});

document.querySelector('.doodle').innerHTML = doodlehtml;

let labhtml = '';
lab.forEach((lab) => {
  labhtml += `<div class="card text-center mb-3 ">
        <div class="img-container"><img src="${lab.image}" class="card-img-top" alt="dog image"></div>
        <div class="card-body">
          <h5 class="card-title mt-2">${lab.name}</h5>
            <div class="heart m-3 h-5 w-5">
              <p class="one hsty" id="${lab.id}">&#x1F5A4;</p>
            </div>
            <div class="overlay">
              <p class="card-text lh-1">Age : ${lab.age}</p>
              <p class="card-text lh-1">Gender : ${lab.gender}</p>
              <p class="card-text lh-1">Temperament : ${lab.Temperament}</p>
              <a href="#" class="btn btn-primary bg-#F1BC19">Adopt now</a>
            </div>
        </div>
    </div>`;
});

document.querySelector('.lab').innerHTML = labhtml;

let pomeranianhtml = '';
pomeranian.forEach((pomeranian) => {
  pomeranianhtml += `<div class="card text-center mb-3 ">
        <div class="img-container"><img src="${pomeranian.image}" class="card-img-top" alt="dog image"></div>
        <div class="card-body">
          <h5 class="card-title mt-2">${pomeranian.name}</h5>
            <div class="heart m-3 h-5 w-5">
              <p class="one hsty" id="${pomeranian.id}">&#x1F5A4;</p>
            </div>
            <div class="overlay">
              <p class="card-text lh-1">Age : ${pomeranian.age}</p>
              <p class="card-text lh-1">Gender : ${pomeranian.gender}</p>
              <p class="card-text lh-1">Temperament : ${pomeranian.Temperament}</p>
              <a href="#" class="btn btn-primary bg-#F1BC19">Adopt now</a>
            </div>
        </div>
    </div>`;
});

document.querySelector('.pomeranian').innerHTML = pomeranianhtml;

let Huskyhtml = '';
Husky.forEach((Husky) => {
  Huskyhtml += `<div class="card text-center mb-3 ">
        <div class="img-container"><img src="${Husky.image}" class="card-img-top" alt="dog image"></div>
        <div class="card-body">
          <h5 class="card-title mt-2">${Husky.name}</h5>
            <div class="heart m-3 h-5 w-5">
              <p class="one hsty" id="${Husky.id}">&#x1F5A4;</p>
            </div>
            <div class="overlay">
              <p class="card-text lh-1">Age : ${Husky.age}</p>
              <p class="card-text lh-1">Gender : ${Husky.gender}</p>
              <p class="card-text lh-1">Temperament : ${Husky.Temperament}</p>
              <a href="#" class="btn btn-primary bg-#F1BC19">Adopt now</a>
            </div>
        </div>
    </div>`;
});

document.querySelector('.Husky').innerHTML = Huskyhtml;

let poodlehtml = '';
poodle.forEach((poodle) => {
  poodlehtml += `<div class="card text-center mb-3 ">
        <div class="img-container"><img src="${poodle.image}" class="card-img-top" alt="dog image"></div>
        <div class="card-body">
          <h5 class="card-title mt-2">${poodle.name}</h5>
            <div class="heart m-3 h-5 w-5">
              <p class="one hsty" id="${poodle.id}">&#x1F5A4;</p>
            </div>
            <div class="overlay">
              <p class="card-text lh-1">Age : ${poodle.age}</p>
              <p class="card-text lh-1">Gender : ${poodle.gender}</p>
              <p class="card-text lh-1">Temperament : ${poodle.Temperament}</p>
              <a href="#" class="btn btn-primary bg-#F1BC19">Adopt now</a>
            </div>
        </div>
    </div>`;
});

document.querySelector('.poodle').innerHTML = poodlehtml;

let shepherdhtml = '';
germanshepherd.forEach((shepherd) => {
  shepherdhtml += `<div class="card text-center mb-3 ">
        <div class="img-container"><img src="${shepherd.image}" class="card-img-top" alt="dog image"></div>
        <div class="card-body">
          <h5 class="card-title mt-2">${shepherd.name}</h5>
            <div class="heart m-3 h-5 w-5">
              <p class="one hsty" id="${shepherd.id}">&#x1F5A4;</p>
            </div>
            <div class="overlay">
              <p class="card-text lh-1">Age : ${shepherd.age}</p>
              <p class="card-text lh-1">Gender : ${shepherd.gender}</p>
              <p class="card-text lh-1">Temperament : ${shepherd.Temperament}</p>
              <a href="#" class="btn btn-primary bg-#F1BC19">Adopt now</a>
            </div>
        </div>
    </div>`;
});

document.querySelector('.shepherd').innerHTML = shepherdhtml;

let ham = document.querySelector(".ham-btn");
let clo = document.querySelector(".close-btn");
let navlinks = document.querySelectorAll('.nav-link');
ham.addEventListener("click", () => {
  document.querySelector(".ham-btn").style.display = "none";
  document.querySelector(".close-btn").style.display = "inline";
  document.querySelector(".col-4").style.display = "inline";
});

clo.addEventListener("click", () => {
  document.querySelector(".ham-btn").style.display = "inline";
  document.querySelector(".close-btn").style.display = "none";
  document.querySelector(".col-4").style.display = "none";
});

navlinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".ham-btn").style.display = "inline";
    document.querySelector(".close-btn").style.display = "none";
    document.querySelector(".col-4").style.display = "none";
  });
});

let overlay = document.querySelectorAll(".overlay");
let arr = [];
for (let i = 0; i < overlay.length; i++) {
  arr.push("hide");
}

let card = document.querySelectorAll(".overlay");
let btn = document.querySelectorAll(".btn");

card.forEach((element, index) => {
  element.addEventListener("click", () => {
    let i = index;
    if (arr[index] === "hide") {
      arr[index] = "show";
      overlay[index].style.opacity = 0.65;
      btn[i].style.display = "inline";
    } else {
      arr[index] = "hide";
      overlay[index].style.opacity = 0;
      btn[i].style.display = "none";
    }
  });
});

wishList.forEach((contai) => {
  let matchingele = findMEle(contai);
  document.querySelector(`#${matchingele.id}`).innerHTML = '&#10084;';
});

let heart = document.querySelectorAll(".one");

heart.forEach((element) => {
  element.addEventListener("click", () => {
    let matchingele = '';
    wishList.forEach((wishL) => {
      console.log(`${wishL} and ${element.id}`);
      if (wishL == element.id) {
        matchingele = element;
        console.log(`${wishL} and ${element.id} inside if`);
      }
    });
    if (matchingele === '') {
      wishList.push(element.id);
      document.querySelector(`#${element.id}`).innerHTML = '&#10084;';
      localStorage.setItem('list', JSON.stringify(wishList));
    } else {
      wishList.forEach((wishL, ind) => {
        if (wishL == element.id) {
          wishList.splice(ind, 1);
        }
      });
      document.querySelector(`#${matchingele.id}`).innerHTML = '&#x1F5A4;';
      localStorage.setItem('list', JSON.stringify(wishList));
    }
    // wishlistrender();
  });
});
