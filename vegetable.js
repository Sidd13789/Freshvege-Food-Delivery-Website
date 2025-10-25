
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () => {
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');
let signUpForm = document.querySelector('.signUp-form');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    signUpForm.classList.remove('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

document.querySelector('#Signup-btn').onclick = () => {
    signUpForm.classList.toggle('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}


let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    signUpForm.classList.remove('active');
}

function signup() {
    let username = document.querySelector('#signup-username').value;
    let email = document.querySelector('#signup-email').value;
    let password = document.querySelector('#signup-password').value;

    axios.post('http://127.0.0.1:5000/signup', {

        username,
        email,
        password
    })
        .then(response => {
            console.log(response.data);
            alert("signup successfully");
        })
        .catch(error => {
            console.error('Signup failed:', error.response.data);
        });
}

function login() {
    let email = document.querySelector('#login-email').value;
    let password = document.querySelector('#login-password').value;

    axios.post('http://127.0.0.1:5000/login', {
        email,
        password
    })
        .then(response => {
            console.log(response.data);
            alert("login successfully");// JWT Token
        })
        .catch(error => {
            console.error('Login failed:', error.response.data);
        });
}
document.querySelector('.signup1').onclick = () => {
    signUpForm.classList.remove('active');
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

document.querySelector('.login1').onclick = () => {
    signUpForm.classList.remove('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}


window.onscroll = () => {
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    signUpForm.classList.remove('active');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
});

