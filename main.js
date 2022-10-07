const refresh = ()=>{
    const incid = document.getElementsByClassName('trimTable')
    const button = document.getElementById('WIN_0_304352241')

    var toggle = 1;
    var interv;
    incid[15].addEventListener('click', ()=>{
        if(toggle == 1){
            toggle = 0
            alert("Auto refresh started")
    interv = setInterval(()=>{
        button.click();
    },1500)
        }else{
            toggle = 1;
            alert("Auto refresh closed")
            clearInterval(interv)
        }})}
            
