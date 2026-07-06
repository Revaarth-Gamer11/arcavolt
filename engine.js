// ========================
// Arcavolt Engine v3 (Clean Core)
// ========================

// Go back to menu
function goHome(){
    showMenu();
}

// ========================
// WIN SYSTEM
// ========================
function addWin(){

    let wins = parseInt(localStorage.getItem("wins")) || 0;
    wins++;

    localStorage.setItem("wins", wins);

    const el = document.getElementById("wins");
    if(el){
        el.innerText = wins;
    }
}

// ========================
// RESET / INIT SYSTEM
// ========================
function initEngine(){

    let wins = localStorage.getItem("wins") || 0;

    const el = document.getElementById("wins");
    if(el){
        el.innerText = wins;
    }
}

// ========================
// SAFETY WRAPPER
// ========================
window.addEventListener("load", function(){
    initEngine();
});