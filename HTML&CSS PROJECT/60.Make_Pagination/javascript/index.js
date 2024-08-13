document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.link');
    const firstButton = document.querySelector('.first');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const lastButton = document.querySelector('.last');
    let currentIndex = 0;

    function updateButtons() {
        prevButton.disabled = currentIndex === 0;
        firstButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === links.length - 1;
        lastButton.disabled = currentIndex === links.length - 1;
    }

    function updateActiveLink() {
        links.forEach(link => link.classList.remove('active'));
        links[currentIndex].classList.add('active');
        updateButtons();
    }

    firstButton.addEventListener('click', function () {
        currentIndex = 0;
        updateActiveLink();
    });

    prevButton.addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateActiveLink();
        }
    });

    nextButton.addEventListener('click', function () {
        if (currentIndex < links.length - 1) {
            currentIndex++;
            updateActiveLink();
        }
    });

    lastButton.addEventListener('click', function () {
        currentIndex = links.length - 1;
        updateActiveLink();
    });

    links.forEach((link, index) => {
        link.addEventListener('click', function () {
            currentIndex = index;
            updateActiveLink();
        });
    });

    updateButtons();
});
