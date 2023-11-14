import $ from "../core";

$.prototype.carousel = function () {
  let index = 0;

  for (let i = 0; i < this.length; i++) {
    const carouselInnerWidth = getComputedStyle(
      this[i].querySelector(".carousel-inner")
    ).width;
    const carouselItem = this[i].querySelectorAll(".carousel-item");
    const carouselSlides = this[i].querySelector(".carousel-slides");
    const carouselIndicators = this[i].querySelectorAll(
      ".carousel-indicators li"
    );
    let widthBias = +carouselInnerWidth.replace(/\D/g, "");

    carouselItem.forEach((item) => {
      item.style.width = carouselInnerWidth;
    });
    carouselSlides.style.width = 100 * carouselItem.length + "%";

    $(".carousel-next").on("click", (e) => {
      e.preventDefault();

      if (index == carouselItem.length - 1) {
        index = 0;
      } else {
        index++;
      }

      carouselSlides.style.transform = `translateX(${
        -index * widthBias + "px"
      })`;
      carouselIndicators.forEach((ind) => {
        ind.classList.remove("active");
      });
      carouselIndicators[index].classList.add("active");
    });

    $(".carousel-prev").on("click", (e) => {
      e.preventDefault();

      if (index == 0) {
        index = 0;
        index = carouselItem.length - 1;
      } else {
        index--;
      }

      carouselSlides.style.transform = `translateX(${
        -index * widthBias + "px"
      })`;
      carouselIndicators.forEach((ind) => {
        ind.classList.remove("active");
      });
      carouselIndicators[index].classList.add("active");
    });

    carouselIndicators.forEach((ind, i) => {
      ind.addEventListener("click", (e) => {
        index = i;
        carouselSlides.style.transform = `translateX(${
          -index * widthBias + "px"
        })`;
        carouselIndicators.forEach((ind) => {
          ind.classList.remove("active");
        });
        carouselIndicators[index].classList.add("active");
      });
    });
  }
};

$(".carousel").carousel();
