//slider1
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: "#buttonRight",
        prevEl: "#buttonLeft",
    },
});

//slider2
const swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 2.5,
    centerSlides: true,
    spaceBetween: 0,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// slider3
const swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: "#buttonRight2",
        prevEl: "#buttonLeft2",
    },
});

// slider4
const swiper4 = new Swiper(".mySwiper4", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
});


//booklist slide
const swiper5 = new Swiper(".mySwiper5", {
    slidesPerView: 4,
    spaceBetween: 10,
    loop : true,
    navigation: {
        nextEl: "#buttonRight3",
        prevEl: "#buttonLeft3",
    },
});

// 북리스트 버튼
const buttons = document.querySelectorAll('.color-button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // 모든 버튼에서 active 클래스 제거
        buttons.forEach(btn => btn.classList.remove('active'));
        // 클릭한 버튼에 active 클래스 추가
        button.classList.add('active');
    });
});


//북리스트 탭전환
const tabMenu = document.querySelectorAll('.tab-menu button');
const tabContent = document.querySelectorAll('#tab-content > div');
tabMenu.forEach(function (item, idx) {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        showContent(idx);
    });
});
function showContent(num) {
    tabContent.forEach(function (item) {
        item.style.display = 'none';
    });
    tabContent[num].style.display = 'block';
};

