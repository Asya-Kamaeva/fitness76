const body = document.body;
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const script = document.getElementById("map");
const widthBr = window.innerWidth;
const btn = document.querySelectorAll(".team__btn");
const text = document.querySelectorAll(".team__text");
const date1 = document.getElementById("date1");
const date2 = document.getElementById("date2");
const month1 = document.getElementById("month1");
const month2 = document.getElementById("month2");


// change point on yandex.map

function changeCentrOfMap(){
  try{
    if (widthBr <= 480){
      let mapBg = document.getElementsByClassName('ymaps-2-1-77-ground-pane');
      let mapPoint = document.getElementsByClassName('ymaps-2-1-77-places-pane');

      mapBg[0].style.transform="translate3d(-70px, 0px, 0px) scale(1, 1)";
      mapPoint[0].style.transform="translate3d(-70px, 0px, 0px) scale(1, 1)";
    }
  } catch(e){
    setTimeout(changeCentrOfMap, 100)
  }
}
setTimeout(changeCentrOfMap, 100);

//hamburger menu

hamburger.addEventListener('click', function () {
    nav.classList.toggle("nav_active");
    hamburger.classList.toggle("hamburger_active");
    if(nav.classList.contains('nav_active')){
      body.style.overflow="hidden";
    }else{
      body.style.overflow="auto";
    }
    
  });

//team, full information

btn.forEach(function(item, index){
  item.addEventListener('click', function() {
    let display = document.querySelectorAll('.team__display');
    if(display.length != 0){
      display[0].classList.remove("team__display")
    }
    text[index].classList.toggle("team__display")
  });
})


document.addEventListener('click', function(e){
  if (e.target.id == ''){
    text.forEach(function(elem){
      elem.classList.remove("team__display")
    })
  }
});

//выод даты

  let today = new Date();
  date1.innerText = today.getDate();

  let monthes =['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

  let thisMonth = today.getMonth();
  
  let futureDate = new Date();
  futureDate.setDate(today.getDate() + 6);
  date2.innerText = futureDate.getDate();
  let futureMonth = futureDate.getMonth();

  if (thisMonth != futureMonth){
    month1.innerText = monthes[thisMonth];
  }

  month2.innerText = monthes[futureMonth];

  
  



