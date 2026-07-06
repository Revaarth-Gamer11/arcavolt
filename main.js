window.addEventListener("load", function(){

    let wins = localStorage.getItem("wins") || 0;

    const winEl = document.getElementById("wins");
    if(winEl){
        winEl.innerText = wins;
    }

    // HARD CHECK (wait until everything is ready)
    function tryStart(){
        if(typeof showMenu === "function"){
            showMenu();
        } else {
            setTimeout(tryStart, 50);
        }
    }

    tryStart();
});