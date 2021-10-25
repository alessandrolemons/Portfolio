
// MENU HAMBURGUER
const lines = document.querySelector(".lines");
lines.addEventListener("click", () => {
    document.querySelector(".container").classList.toggle("show-menu");
});

// DEBOUNCE DO SCROLL - ANIMAÇÃO DAS SESSÕES
const debounce = function (func, wait, immediate) {
    let timeout;
    return function (...args) {
        const context = this;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

// ANIMAÇÃO DAS SESSÕES
const anime = document.querySelectorAll('[data-anime]');

function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight) * 0, 75);
    anime.forEach((element) => {
        if ((windowTop) > element.offsetTop) {
            element.classList.remove('efeito');
        }
        else {
            element.classList.add('efeito');
        }
    });
};

animeScroll();

window.addEventListener("scroll", debounce(() => {
    animeScroll();
}));

// BACKGROUND AUDIO

const audio = document.querySelector('audio')
audio.volume = '0.03'
audio.currentTime = '49.5'

const volumeBtn = document.querySelector('#unmute-btn')
const muteBtn = document.querySelector('#mute-btn')

volumeBtn.addEventListener('click', () => {
    volumeBtn.style.display = 'none'
    muteBtn.style.display = 'revert'
    audio.volume = '0'

    muteBtn.addEventListener('click', () => {
        muteBtn.style.display = 'none'
        volumeBtn.style.display = 'revert'
        audio.volume = '0.03'
    })
})
