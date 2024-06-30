let wishList = JSON.parse(localStorage.getItem('list')) || [];

export function findMEle(dog) {
    let matchingele = '';
    goldenDoodle.forEach((doodle) => {
        if (doodle.id == dog)
            matchingele = doodle;
    })
    pomeranian.forEach((pomeranian) => {
        if (pomeranian.id == dog)
            matchingele = pomeranian;
    })

    lab.forEach((l) => {
        if (l.id == dog)
            matchingele = l;
    })
    Husky.forEach((Hus) => {
        if (Hus.id == dog)
            matchingele = Hus;
    })
    poodle.forEach((poo) => {
        if (poo.id == dog)
            matchingele = poo;
    })
    germanshepherd.forEach((gmsp) => {
        if (gmsp.id == dog)
            matchingele = gmsp;
    })
    return matchingele;
}
let heart = document.querySelectorAll(".one");

heart.forEach((element) => {
    element.addEventListener("click", () => {
        let matchingele = '';
        wishList.forEach((wishL) => {
            console.log('${ wishL } and ${ element.id }');
            if (wishL == element.id) {
                matchingele = element;
                console.log('${ wishL } and ${ element.id } inside if ');
            }
        })
        if (matchingele === '') {
            wishList.push('${ element.id }');
            document.querySelector('#${ element.id }').innerHTML = '&#10084;';
            localStorage.setItem('list', JSON.stringify(wishList));
        }
        else {
            wishList.forEach((wishL, ind) => {
                if (wishL == element.id) {
                    wishList.splice(ind, 1);
                }
            })
            document.querySelector('#${ matchingele.id }').innerHTML = '&#x1F5A4;';
            localStorage.setItem('list', JSON.stringify(wishList));
        }
        // wishlistrender();
    })
})
export { wishList };