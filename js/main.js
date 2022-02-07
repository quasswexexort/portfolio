

$("#portfolio-flters div").click ( function() {
    $("#portfolio-flters div").removeClass('filter-active');
    $(this).addClass('filter-active');
});

$(document).ready(function() {
  // Показати або приховати кнопку go to top
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('.go-top').fadeIn(200);
    } else {
      $('.go-top').fadeOut(200);
    }
  });
  
  // анімація скролу вверх
  $('.go-top').click(function(event) {
    event.preventDefault();
    
    $('html, body').animate({scrollTop: 0}, 300);
  })
});

//Анімація появи блоків на сайті і при переході на іншу сторінку
$(document).ready(function() {
  $("body").css("display", "none");

  $("body").fadeIn(2000);

$("button.transition").click(function(event){
  event.preventDefault();
  linkLocation = this.href;
  $("body").fadeOut(2000, redirectPage);
});

function redirectPage() {
  window.location = linkLocation;
}
});





  //перемикає темну тему
  var darkBtn = document.getElementById("dark-btn");
  darkBtn.onclick  = function(){
  darkBtn.classList.toggle("dark-btn-on")
  document.body.classList.toggle("dark-theme");
  
  if(localStorage.getItem("theme") == "light") {
      localStorage.setItem("theme", "dark");
  }
  else{
      localStorage.setItem("theme", "light");
  }
  }
  
  // remembers the theme of the site
  // запам'ятовує яка тема на сайті 17.08.2021
  if(localStorage.getItem("theme") == "light") {
  darkBtn.classList.remove("dark-btn-on");
  document.body.classList.remove("dark-theme");
  }
  else if(localStorage.getItem("theme") == "dark") {
  darkBtn.classList.add("dark-btn-on");
  document.body.classList.add("dark-theme");
  }
  else{
  localStorage.setItem("theme", "light");
  }





//Change image onclick, toggle button
function imagefun() {
  var Image_Id = document.getElementById('getImage');
  if (Image_Id.src.match("./img/memoji/memoji_8.png")) {
      Image_Id.src = "./img/memoji/memoji_15.png";
  }
  else {
      Image_Id.src = "./img/memoji/memoji_8.png";
  }
  // $('#getImage').addClass('animation');
}



const dist = document.querySelector('.bio-memoji');

document.querySelector('.bio-button').addEventListener('click', () => {
  dist.classList.remove('animation');

  setTimeout(function(){
    dist.classList.add('animation');
  },10);
});




$('.modal-btn').click(function() {
  $('.modal').addClass('slide-out-right');
  // $('.modal ').removeClass('slide-out-right');
});




//Анімація для зсуву фото-албому

function changeItem() {
  document.getElementById('photo-album-wrapper').style.transform = 'translateY(20px)';
}// функция, которая сработает при наведении.
//она означает - выбрать элемент к Id у которого надо что-то изменить.
// когда в скобки где написано one-two добавите Id своего элемента
function rechangeItem() {
  document.getElementById('photo-album-wrapper').style.transform = 'translateY(0)';
}// тут всё также. но наобарот. протсес происходящий про отводе курсора.



var containerEl = document.querySelector('.container');
var mixer;

if (containerEl) {
    mixer = mixitup(containerEl, {
        selectors: {
        target: '.card-demo'
    },
    layout: { 
        containerClassName: 'grid' 
    },
    animation: {
        duration: 400,
        effects: 'fade scale(0.5)',
    }
    });
}

// var mixer = mixitup('.container');
// var mixer = mixitup({
//     selectors: {
//         target: '.card-demo'
//     },
//     animation: {
//         duration: 200,
//         effects: 'fade scale(0.5)'
//     }
// });