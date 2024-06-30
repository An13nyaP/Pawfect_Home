import { findMEle, wishList } from "./wishList.js";

let listhtml = ``;

wishList.forEach((list) => {
    let matchingele = findMEle(list);

    listhtml += `<div class="card text-center mb-3 ">
                <div class="img-container"><img src="${matchingele.image}" class="card-img-top" alt="dog image"></div>
                <div class="card-body">
                  <h5 class="card-title mt-2">${matchingele.name}</h5>
                    <div class="heart m-3 h-5 w-5">
                      <p class="one hsty" id="${matchingele.id}">&#10084;</p>
                    </div>
                    <div class="overlay">
                      <p class="card-text lh-1">Age : ${matchingele.age}</p>
                      <p class="card-text lh-1">Gender : ${matchingele.gender}</p>
                      <p class="card-text lh-1">Temperament : ${matchingele.Temperament}</p>
                      <a href="#" class="btn btn-primary bg-#F1BC19">Adopt now</a>
                    </div>
                </div>
            </div>`;
});

document.querySelector('.wishlist-container').innerHTML = listhtml;

let overlay = document.querySelectorAll(".overlay");
let arr = [];
for (let i = 0; i < overlay.length; i++) {
    arr[i] = "hide";
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

let heart = document.querySelectorAll(".one");

heart.forEach((element) => {
    element.addEventListener("click", () => {
        wishList.forEach((wishL, ind) => {
            if (wishL == element.id) {
                wishList.splice(ind, 1);
                localStorage.setItem('list', JSON.stringify(wishList));
            }
        });
        let heartElement = document.querySelector(`#${element.id}`);
        if (heartElement) {
            heartElement.innerHTML = '&#x1F5A4;';
        }
        location.reload();
    });
});
