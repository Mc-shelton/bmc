const refresh = () => {
  const incid = document.getElementsByClassName("trimTable");
  const button = document.getElementById("WIN_0_304352241");
  alert("auto refresh mounted :)");
  var toggle = 1;
  var interv;
  incid[15].addEventListener("click", () => {
    if (toggle == 1) {
      toggle = 0;
      alert("Auto refresh started");
      incid[15].style.backgroundColor = 'green'
      interv = setInterval(() => {
        button.click();
        console.log('refreshed')
      }, 1500);

      var bodyElement = document.getElementsByTagName("div");
      var linkElement = document.getElementsByTagName("a");
      
      bodyElement[1].addEventListener('dblclick', () => {
        clearInterval(interv)
        incid[15].style.backgroundColor = 'inherit'
        toggle = 1
      })
      for (value of linkElement) {
        if (value.id != 'WIN_0_304352241') {
          value.addEventListener('click', () => {
            clearInterval(interv)
            incid[15].style.backgroundColor = 'inherit'
            toggle = 1
          })
        }
      }
    } else {
      toggle = 1;
      clearInterval(interv);
      incid[15].style.backgroundColor = 'inherit'
      alert("Auto refresh closed");
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
