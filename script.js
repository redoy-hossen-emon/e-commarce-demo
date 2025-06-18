// slick slide

$('.autoplay').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});

// end slide


const backTop = document.querySelector('.backTop');
const headSearch = document.querySelector('.headSearch');

const slidBtn = document.querySelectorAll('.slidBtnCo');
const banner = document.querySelectorAll('.banner');


document.addEventListener('scroll', function () {
  if (document.documentElement.scrollTop > 600) {
    backTop.style.opacity = "1";
    headSearch.classList.add('fixed')
  } else {
    backTop.style.opacity = "0";
    headSearch.classList.remove('fixed')
  }
})
backTop.addEventListener('click', function () {
  document.documentElement.scrollTop = 0;
})

slidBtn.forEach(sBtn =>
  sBtn.addEventListener('click', function () {
    let getKey = sBtn.getAttribute('data-key')
    slidBtn.forEach(uSbtn => uSbtn.classList.remove('width20'));
    banner.forEach(uSbann => uSbann.classList.remove('disBlock'));
    this.classList.add('width20')
    document.querySelector('.slide' + getKey).classList.add('disBlock')
  })
)



// document.querySelector(".ctSelect ").addEventListener("click", function(){
//   document.querySelector(".selectItems").classList.toggle("noTransform")


// })

// document.querySelector(".menuIcon ").addEventListener("click", function(){
//   this.classList.toggle("rotate")
//   document.querySelector(".menuWrapper").classList.toggle("noTransform")


// })


// Handle both menu and toggle
function setupMenu(toggleId, menuId) {
  const toggle = document.querySelector(toggleId);
  const menu = document.querySelector(menuId);

  // Toggle menu on button click
  toggle.addEventListener('click', function (e) {
    e.stopPropagation(); // prevent closing
    menu.classList.toggle('noTransform');

  });

  // Prevent clicks inside menu from closing it
  menu.addEventListener('click', function (e) {
    e.stopPropagation();
  });

  // Hide when clicking elsewhere
  document.addEventListener('click', function () {
    menu.classList.remove('noTransform');
  });
}

// Initialize both menus
setupMenu('.ctSelect', '.selectItems');
setupMenu('.menuIcon', '.menuWrapper');
