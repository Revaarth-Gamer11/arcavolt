function openGame(id){

    const app = document.getElementById("app");

    if(id === 0){
        startTicTacToe();
    }
    else if(id === 1){
        startRPS();
    }
    else{
        app.innerHTML = `
            <h2>${games[id]}</h2>
            <p>🚧 Coming next update</p>
            <button onclick="showMenu()">⬅ Back</button>
        `;
    }
}