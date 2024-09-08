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
