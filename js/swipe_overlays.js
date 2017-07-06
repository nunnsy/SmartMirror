$(document).ready(function(){
  updateTime();
  var t=setInterval(update,1000);

  $(window).keyup(function (e) {
    var key = e.which;
    if(key == 13 || key == 39) { // the enter key code or right arrow
      //$('.next').click();
      console.log('right');
      nextOverlay();
    } else if(key == 37) { // left arrow
      //$('.prev').click();
      console.log('left');
      prevOverlay();
    }
  });
})

var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var dayNames = ["Sun","Mon", "Tues", "Wed", "Thurs","Fri","Sat"];

function nextOverlay(){
  currentOverlay = $('#chosenOverlay');
  $("#chosenOverlay").removeAttr('id');
  if ($(currentOverlay).next().length){
    $(currentOverlay).next().attr('id','chosenOverlay');
  } else {
    $('.overlay:first-of-type').attr('id','chosenOverlay');
  }
}

function prevOverlay(){
  currentOverlay = $('#chosenOverlay');
  $("#chosenOverlay").removeAttr('id');
  if ($(currentOverlay).prev().length){
    $(currentOverlay).prev().attr('id','chosenOverlay');
  } else {
    $('.overlay:last-of-type').attr('id','chosenOverlay');
  }
}

function update(){
  updateTime();
}

function updateTime(){
  today = new Date();
  day = dayNames[today.getDay()];
  d = today.getDate();
  m = monthNames[today.getMonth()];
  y = today.getFullYear();
  hour = today.getHours();
  min = today.getMinutes();
  sec = today.getSeconds();
  time = convert2Digit(hour)+":"+convert2Digit(min);
  dateString = convert2Digit(d)+" / "+m+" "+y+" "+day;
  $("#date").text(dateString);
  $("#time").text(time)
}

function convert2Digit(num){
  if (num.toString().length == 1){
    return '0'+num;
  } else {
    return num;
  }
}
