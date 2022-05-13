// 토글 버튼을 가져오는 객체
const toggleBtn = document.querySelector(".navbar_toggleBtn");
// 메뉴를 가져오는 객체
const menu = document.querySelector(".navbar_menu");
// 아이콘을 가져오는 객체
const icons = document.querySelector(".navbar_icons");

// 이벤트를 사용하려면 객체를 만들고 객체에 이벤트 리스너를 붙여야한다.
toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  icons.classList.toggle("active");
});
