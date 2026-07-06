const games = [
    { id: "tictactoe", icon: "❌" },
    { id: "rps", icon: "✊" },
    { id: "snake", icon: "🐍" },
    { id: "memory", icon: "🧠" },
    { id: "reaction", icon: "⚡" }
];

let unlockedGames = 5;

function showMenu(){

    const app = document.getElementById("app");

    let html = `
        <h2>🎮 Arcavolt</h2>
        <p>Unlocked ${unlockedGames}/${games.length}</p>
        <br>
    `;

    for(let i = 0; i < games.length; i++){

        if(i < unlockedGames){
            html += `
                <button onclick="openGame('${games[i].id}')">
                    ${games[i].icon} Game ${i+1}
                </button><br>
            `;
        } else {
            html += `<button disabled>🔒 Locked</button><br>`;
        }
    }

    app.innerHTML = html;
}

// IMPORTANT: force global access
window.openGame = function(id){

    console.log("Clicked game:", id);

    switch(id){

        case "tictactoe":
            if(typeof startTicTacToe === "function"){
                startTicTacToe();
            } else {
                alert("Tic Tac Toe not loaded");
            }
            break;

        case "rps":
            if(typeof startRPS === "function"){
                startRPS();
            } else {
                alert("RPS not loaded");
            }
            break;

        default:
            alert("Game not ready yet");
    }
};