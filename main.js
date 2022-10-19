const audio1 = ()=>{
  const audioObject = new Audio('http://commondatastorage.googleapis.com/codeskulptor-assets/week7-bounce.m4a')

  audioObject.play()
}
const audio2 = ()=>{
  const audioObject = new Audio('http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/pause.wav')

  audioObject.play()
}

const audio3 = ()=>{
  const audioObject = new Audio('http://codeskulptor-demos.commondatastorage.googleapis.com/pang/pop.mp3')

  audioObject.play()
}

const refresh = () => {
  const incid = document.getElementsByClassName("trimTable");
  const button = document.getElementById("WIN_0_304352241");

  alert("auto refresh mounted :)");
  var toggle = 1;
  var interv;
  incid[15].addEventListener("click", () => {
    if (toggle == 1) {
      toggle = 0;
      audio1()

      const td = document.getElementsByClassName('TableHdrL')
      var string = td[7].innerHTML
      var stringArray = string.split(" ")
      // alert("Auto refresh started");
      var trace = parseInt(stringArray[5]);
      incid[15].style.backgroundColor = 'green'
      interv = setInterval(() => {
        button.click();
        string = td[7].innerHTML
        stringArray = string.split(" ")

        if(parseInt(stringArray[5]) > trace ){
          audio3();
          trace = parseInt(stringArray[5])
        }else{
          trace = parseInt(stringArray[5])

        }
        console.log(parseInt(stringArray[5]))
      }, 1500);

      var bodyElement = document.getElementsByTagName("div");
      var linkElement = document.getElementsByTagName("a");

      bodyElement[1].addEventListener('dblclick', () => {
        if(toggle == 0){
        clearInterval(interv)
        incid[15].style.backgroundColor = 'inherit'
        toggle = 1
        audio2()}
      })
      for (value of linkElement) {
        if (value.id != 'WIN_0_304352241') {
          value.addEventListener('click', () => {
            if(toggle == 0){
            clearInterval(interv)
            incid[15].style.backgroundColor = 'inherit'
            toggle = 1
            audio2()
            }
          })
        }
      }
    } else {
      toggle = 1;
      audio2()
      clearInterval(interv);
      incid[15].style.backgroundColor = 'inherit'
      // alert("Auto refresh closed");
    }
  });
};

var incidChecker;
const loopInterval = setInterval(() => {
  if (incidChecker == undefined) {
    incidChecker = document.getElementById("WIN_3_301409000");
    console.log("checking");
  } else {
    clearInterval(loopInterval);
    refresh();
  }
}, 500);
