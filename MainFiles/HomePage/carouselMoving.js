function nextSlide() {
    const nextButton = document.querySelector("#carouselExample .carousel-control-next");
    nextButton.click();
}
setInterval(nextSlide, 10000);
