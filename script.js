// menu active
let navigation = document.getElementById("nav-top");
let link = navigation.getElementsByTagName('a');

for (let i = 0; i < link.length; i++) {
    link[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "");
        this.className += "active";
    });
}


// navigation product category with scroll horizontal
function rightScroll() {
    const right = document.querySelector(".scroll-horizontal-menu");
    right.scrollBy(150, 0);
}

function leftScroll() {
    const left = document.querySelector(".scroll-horizontal-menu");
    left.scrollBy(-150, 0);
}

document.querySelector('.scroll-horizontal-menu').addEventListener("scroll", (e) => {
    let horizontal = e.currentTarget.scrollLeft;
    let maxWidth = e.currentTarget.scrollWidth - e.currentTarget.clientWidth;
    if (horizontal === maxWidth || horizontal + 1 === maxWidth) {
        document.getElementsByClassName('btn-right')[0].setAttribute('id', 'hide-btn');
        document.getElementsByClassName('btn-left')[0].removeAttribute('id', 'hide-btn');
        document.getElementsByClassName('category-product')[0].classList.add('mt-6-2');
        document.getElementsByClassName('category-product')[0].classList.remove('mt-5-8');
    } else if (horizontal === 0) {
        document.getElementsByClassName('btn-left')[0].setAttribute('id', 'hide-btn');
        document.getElementsByClassName('btn-right')[0].removeAttribute('id', 'hide-btn');
        document.getElementsByClassName('category-product')[0].classList.remove('mt-6-2');
        document.getElementsByClassName('category-product')[0].classList.add('mt-5-8');
    }
});

// reviews product with scroll horizontal or mouse touch
const slider = document.querySelector('.scroll-horizontal-reviews');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 0.5; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
});

// button show more text
function showMoreOrLess1() {
    let dots = document.getElementById("dots1");
    let moreText = document.getElementById("more1");
    let btnText = document.getElementById("btn-show1");

    if (dots.style.display === "none") {
        btnText.innerHTML = "show more";
        dots.style.display = "inline";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "show less";
        moreText.style.display = "inline";
    }
}

function showMoreOrLess2() {
    let dots = document.getElementById("dots2");
    let moreText = document.getElementById("more2");
    let btnText = document.getElementById("btn-show2");

    if (dots.style.display === "none") {
        btnText.innerHTML = "show more";
        dots.style.display = "inline";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "show less";
        moreText.style.display = "inline";
    }
}

function showMoreOrLess3() {
    let dots = document.getElementById("dots3");
    let moreText = document.getElementById("more3");
    let btnText = document.getElementById("btn-show3");

    if (dots.style.display === "none") {
        btnText.innerHTML = "show more";
        dots.style.display = "inline";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "show less";
        moreText.style.display = "inline";
    }
}

function showMoreOrLess4() {
    let dots = document.getElementById("dots4");
    let moreText = document.getElementById("more4");
    let btnText = document.getElementById("btn-show4");

    if (dots.style.display === "none") {
        btnText.innerHTML = "show more";
        dots.style.display = "inline";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "show less";
        moreText.style.display = "inline";
    }
}

function showMoreOrLess5() {
    let dots = document.getElementById("dots5");
    let moreText = document.getElementById("more5");
    let btnText = document.getElementById("btn-show5");

    if (dots.style.display === "none") {
        btnText.innerHTML = "show more";
        dots.style.display = "inline";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "show less";
        moreText.style.display = "inline";
    }
}

// like product
function myLike1() {
    let x = document.getElementById("count-1");
    if (x.innerHTML === "924") {
        document.getElementById("like-1").src = "assets/icons/love-solid.svg";
        x.innerHTML = "925";
    } else {
        document.getElementById("like-1").src = "assets/icons/love.svg";
        x.innerHTML = "924";
    }
}

function myLike2() {
    let x = document.getElementById("count-2");
    if (x.innerHTML === "735") {
        document.getElementById("like-2").src = "assets/icons/love-solid.svg";
        x.innerHTML = "736";
    } else {
        document.getElementById("like-2").src = "assets/icons/love.svg";
        x.innerHTML = "735";
    }
}

function myLike3() {
    let x = document.getElementById("count-3");
    if (x.innerHTML === "1246") {
        document.getElementById("like-3").src = "assets/icons/love-solid.svg";
        x.innerHTML = "1247";
    } else {
        document.getElementById("like-3").src = "assets/icons/love.svg";
        x.innerHTML = "1246";
    }
}

function myLike4() {
    let x = document.getElementById("count-4");
    if (x.innerHTML === "369") {
        document.getElementById("like-4").src = "assets/icons/love-solid.svg";
        x.innerHTML = "370";
    } else {
        document.getElementById("like-4").src = "assets/icons/love.svg";
        x.innerHTML = "369";
    }
}

function myLike5() {
    let x = document.getElementById("count-5");
    if (x.innerHTML === "126") {
        document.getElementById("like-5").src = "assets/icons/love-solid.svg";
        x.innerHTML = "127";
    } else {
        document.getElementById("like-5").src = "assets/icons/love.svg";
        x.innerHTML = "126";
    }
}

// get cart value when user click the button 'add to cart' or 'cancel' 
let count = document.getElementsByClassName('remove-cart');

// add to cart
function clickAddToCart1() {
    let element = document.getElementById("addtocart-1");
    let y = document.getElementsByClassName('cart');
    if (element.innerHTML === "add to cart") {
        element.classList.remove("add-cart");
        element.classList.add("remove-cart");
        element.setAttribute('status', 'add-product');
        element.innerHTML = "cancel";
        y[0].innerHTML = count.length;
    } else {
        element.classList.add("add-cart");
        element.classList.remove("remove-cart");
        element.setAttribute('status', 'remove-product');
        element.innerHTML = "add to cart";
        y[0].innerHTML = count.length;
    }
}

function clickAddToCart2() {
    let element = document.getElementById("addtocart-2");
    let y = document.getElementsByClassName('cart');
    if (element.innerHTML === "add to cart") {
        element.classList.remove("add-cart");
        element.classList.add("remove-cart");
        element.innerHTML = "cancel";
        y[0].innerHTML = count.length;
    } else {
        element.classList.add("add-cart");
        element.classList.remove("remove-cart");
        element.innerHTML = "add to cart";
        y[0].innerHTML = count.length;
    }
}

function clickAddToCart3() {
    let element = document.getElementById("addtocart-3");
    let y = document.getElementsByClassName('cart');
    if (element.innerHTML === "add to cart") {
        element.classList.remove("add-cart");
        element.classList.add("remove-cart");
        element.innerHTML = "cancel";
        y[0].innerHTML = count.length;

    } else {
        element.classList.add("add-cart");
        element.classList.remove("remove-cart");
        element.innerHTML = "add to cart";
        y[0].innerHTML = count.length;
    }
}

function clickAddToCart4() {
    let element = document.getElementById("addtocart-4");
    let y = document.getElementsByClassName('cart');
    if (element.innerHTML === "add to cart") {
        element.classList.remove("add-cart");
        element.classList.add("remove-cart");
        element.innerHTML = "cancel";
        y[0].innerHTML = count.length;
    } else {
        element.classList.add("add-cart");
        element.classList.remove("remove-cart");
        element.innerHTML = "add to cart";
        y[0].innerHTML = count.length;
    }
}

function clickAddToCart5() {
    let element = document.getElementById("addtocart-5");
    let y = document.getElementsByClassName('cart');
    if (element.innerHTML === "add to cart") {
        element.classList.remove("add-cart");
        element.classList.add("remove-cart");
        element.innerHTML = "cancel";
        y[0].innerHTML = count.length;
    } else {
        element.classList.add("add-cart");
        element.classList.remove("remove-cart");
        element.innerHTML = "add to cart";
        y[0].innerHTML = count.length;
    }
}

