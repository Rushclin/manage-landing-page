const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar-list");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


const wrapper = document.querySelector('.wrapper')
const indicators = [...document.querySelectorAll('.indicators button')]

let currentTestimonial = 0

indicators.forEach((item, i) => {
    item.addEventListener('click', () => {
        indicators[currentTestimonial].classList.remove('active')
        wrapper.style.marginLeft = `-${25 * i}%`
        item.classList.add('active')
        currentTestimonial = i
        if (currentTestimonial == (indicators.length - 1)) {
            return

            console.log(i)
        }
    })
})

const mediaQuery = window.matchMedia('(max-width: 768px)')

if (mediaQuery.matches) {
    indicators.forEach((item, i) => {
        item.addEventListener('click', () => {
            indicators[currentTestimonial].classList.remove('active')
            wrapper.style.marginLeft = `-${100 * i}%`
            item.classList.add('active')
            currentTestimonial = i
            if (currentTestimonial == (indicators.length - 1)) {
                return

                console.log(i)
            }
        })
    })
}
/* setInterval(() => {
    indicators.forEach((item, i) => {
        console.log("I EST", i, "CIREN EST ", currentTestimonial)
        indicators[currentTestimonial].classList.remove('active')
        wrapper.style.marginLeft = `-${25 * i}%`
        item.classList.add('active')
        currentTestimonial = i
        if (currentTestimonial == (indicators.length - 1)) {

        }

    })
}, 1000)  */