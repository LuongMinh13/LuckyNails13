
/*==================== NAV  ====================*/
//Create function to select elements
const selectElemnt = (element) => document.querySelector(element);

//Open and close nav on click
selectElemnt('.menu-icons').addEventListener('click', () => {
    selectElemnt('nav').classList.toggle('active');
});

selectElemnt('.nav-list').addEventListener('click', () => {
    selectElemnt('nav').classList.toggle('active');
});


/*==================== SCROLL  ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*==================== SKICKY NAV  ====================*/


window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

/*==================== PHOTO SWIPER  ====================*/
var swiperPortfolio = new Swiper('.photo__container', {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
});


