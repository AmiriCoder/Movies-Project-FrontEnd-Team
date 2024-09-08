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
                    <h3>${genreName.name}</h3>
                    <i class="fa-solid fa-arrow-right"></i>
                </div>
            </div>
        `);
    });

    $('.owl-carousel').owlCarousel({
        
        margin:150,
       
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
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
