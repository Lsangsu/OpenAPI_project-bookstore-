//sub booklist slide
const sub_swiper1 = new Swiper(".mySwiper6", {
    slidesPerView: 4,
    spaceBetween: 25,
    loop : true,
    navigation: {
        nextEl: "#sub_buttonright",
        prevEl: "#sub_buttonLeft",
    },
});

//서브 북리스트 버튼
const buttons2 = document.querySelectorAll('.sub-button');
buttons2.forEach(button => {
    button.addEventListener('click', () => {
        // 모든 버튼에서 active 클래스 제거
        buttons2.forEach(btn => btn.classList.remove('active2'));
        // 클릭한 버튼에 active 클래스 추가
        button.classList.add('active2');
    });
});

//서브 북리스트 탭전환
const tabMenu2 = document.querySelectorAll('.sub_bookList_box > button');
const tabContent2 = document.querySelectorAll('.sub_main_img > div');
const tabContent3 = document.querySelectorAll('.sub_main_text > div');
tabMenu2.forEach(function (item, idx) {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        showContent2(idx);
    });
});
function showContent2(num) {
    tabContent2.forEach(function (item) {
        item.style.display = 'none';
    });
    tabContent3.forEach(function (item) {
        item.style.display = 'none';
    });
    tabContent2[num].style.display = 'block';
    tabContent3[num].style.display = 'block';
};