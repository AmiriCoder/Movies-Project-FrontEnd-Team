const elements = document.querySelectorAll(".plus-img");
elements.forEach((element) => {
  element.addEventListener("click", function() {
    const box = this.closest(".q-box");
    const answerContent = box.nextElementSibling; 

    if (!answerContent) {
      console.error("Answer content not found!");
      return;
    }

    if (box.classList.contains("new_back")) {
      box.classList.remove("new_back");
      answerContent.style.display = "none";
      this.src = "assets/plus.png";
    } else {
      box.classList.add("new_back");
      answerContent.style.display = "block";
      this.src = "assets/minus.png";
    }
  });
});

const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
});


function changeImageForMobile() {
    const playButtonImg = document.getElementById('play-button');
    const sl = document.getElementById('sl');
    
    if (window.innerWidth <= 768) {
        sl.style = "width: 600px; height: 600px; border-radius: 20px;"
        playButtonImg.src = 'assets/btn-mobile.png';  
        playButtonImg.style = 'height: 110px; width: 270px; background: transparent;'
    } else {
        sl.style = "width: 1208px; height: 600px; border-radius: 20px;"
        playButtonImg.src = 'assets/play.png'; 
        playButtonImg.style = 'height: 43px; width: 320px; background: transparent;'
    }
}

window.addEventListener('load', changeImageForMobile);
window.addEventListener('resize', changeImageForMobile);

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NWMyMTI5MzljZjAxNzg4NmI2N2Q3NTE0NGY0MzdhYiIsIm5iZiI6MTcyNTc4MzI5MS45MTkxMjksInN1YiI6IjY2ZGQ1N2FlMjc4ODRlMjFkYTM0NDM4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2GIWyNkv0b_fbmPPcWFosnCQZq4cp8ee95gE-qKEIcc'
    }
};

$(document).ready(async function(){
    const data = await getdata();
    
    const genreName = data.genres;
    console.log(genreName)
    // Initialize carousel
    const carousel = $(".owl-carousel");
    genreName.forEach(name => {
        
        // Append new item to the carousel
        carousel.append(`
            <div class="boxes">
                <div class="pics_of__Explorebox">
                    <img src="./assets/Container.png" alt="">
                </div>
                <div class="cenareham">
                    <h3>${name.name}</h3>
                    <i class="fa-solid fa-arrow-right"></i>
                </div>
            </div>
        `);
    });

    $('.owl-carousel').owlCarousel({
        
        loop:true,
        margin: 0,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })
});

async function getdata() {
    try {
        const response = await fetch("https://api.themoviedb.org/3/genre/movie/list?language=en", options);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}


// const apis = [{
//     url: 'https...',
//     containerEl: document.querySelector("...."),
//     keys: ["name", "id"]
// }, {
//     url: 'https...',
//     containerEl: document.querySelector("....")
// },{
//     url: 'https...',
//     containerEl: document.querySelector("....")
// },{
//     url: 'https...',
//     containerEl: document.querySelector("....")
// },{
//     url: 'https...',
//     containerEl: document.querySelector("....")
// },{
//     url: 'https...',
//     containerEl: document.querySelector("....")
// },]
// async function createMovies(url, containerEl, keys) {
//     const res = await fetch(url)
//     keys.forEach(item => {
//         item
//     })
//     containerEl.appencChild(..)
// }