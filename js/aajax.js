AOS.init();


// function getRandom(cnt, start = 1) {
//     return Math.floor(Math.random() * cnt + start)
// }
// $(document).ready(function () {
//     setInterval( function chengeImg() {
//     $('.chenge').prop('src',`./img/右邊貓窩圖-${getRandom(4, 1)}.png` )
// },1000)
// })





$(document).ready(function(){
  $('.close').click(function(){
      $('.loginCon').fadeToggle();
  })

  $('.fa-sign-in').click(function(){
      $('.loginCon').fadeToggle();
  })


  $('.myclose').click(function(){
      $('#mySearch').fadeToggle();
  })
  $('.myclose').click(function(){
      $('.myclose').fadeToggle();
  })

  $('.fa-search').click(function(){
      $('#mySearch').fadeToggle();
  })
  $('.fa-search').click(function(){
      $('.myclose').fadeToggle();
  })


  // 人氣分類滾動視差

  var fooReveal = {
      delay    : 600,
      distance : '90px',
      easing   : 'ease-in-out',
      rotate   : { z: 90 },
      scale    : 1.1
  };

              



  // 向上鍵
  $(function(){
      var $win = $(window);
      var $backToTop = $('.myTop');

      $win.scroll(function(){
          // 當滾動大於視窗高度100時，顯示向上鍵
          if($win.scrollTop() > 100){
              $backToTop.fadeIn();
          }else{
              $backToTop.hide();
          }
      })
  })

  // 點擊時返回頂部

  $('.clickTop').click(function () {

      $('html, body').animate({scrollTop: 0}, 400);

  });
  
})



const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)

  if(toggle && nav){
      toggle.addEventListener('click', () => {
          nav.classList.toggle('show')
          console.log('ok');
      })
  }
}
showMenu('nav-toggle', 'navCenter')
                      
                      //回傳陣列
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
                 //n為參數，而參數只有一個時可省略「（）」 
  navLink.forEach(n => n.classList.remove('active'))
  //此this指被點擊到的那個navLink
  this.classList.add('active')
  console.log(this);

  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}




$('.inneritem2 a').on('click', function(e) {      
    e.preventDefault();                   
    var url = this.href;                    
  
    $('.inneritem2 a.current').removeClass('current');  
    $(this).addClass('current');             
  
    $('#container').remove();                           
    $('#content').load(url + ' #content').hide().fadeIn('slow');  
  });

  $('#eyseOpen-2').click(function(){
      $('#eyseOpen-2').hide()
      $('#eyseOpen').show()
      $('#userPassword').attr('type', 'text')
  })
  $('#eyseOpen').click(function(){
      $('#eyseOpen').hide()
      $('#eyseOpen-2').show()
      $('#userPassword').attr('type', 'password')
  })