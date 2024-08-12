const wrapper = document.querySelector(".wrapper"),
    carousel = document.querySelector(".carousel"),
    images = document.querySelectorAll(".carousel img"),
    prevButton = document.getElementById("prev"),
    nextButton = document.getElementById("next");

let imageIndex = 0,
    intervalId;

const slideImage = () => {
    const imageWidth = images[0].clientWidth; 
    carousel.style.transform = `translateX(-${imageIndex * imageWidth}px)`;
};

const autoSlide = () => {
    intervalId = setInterval(() => {
        imageIndex++;
        if (imageIndex >= images.length) {
            imageIndex = 0;
        }
        slideImage();
    }, 3000);
};

const handleButtonClick = (direction) => {
    clearInterval(intervalId); 
    if (direction === "next") {
        imageIndex++;
        if (imageIndex >= images.length) {
            imageIndex = 0;
        }
    } else if (direction === "prev") {
        imageIndex--;
        if (imageIndex < 0) {
            imageIndex = images.length - 1;
        }
    }
    slideImage();
    autoSlide(); 
};

nextButton.addEventListener("click", () => handleButtonClick("next"));
prevButton.addEventListener("click", () => handleButtonClick("prev"));

wrapper.addEventListener("mouseover", () => clearInterval(intervalId));

wrapper.addEventListener("mouseleave", autoSlide);

autoSlide();
