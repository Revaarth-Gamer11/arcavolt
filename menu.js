const games = [
    { id: "tictactoe", icon: "❌", name: "Tic Tac Toe" },
    { id: "rps", icon: "✊", name: "Rock Paper Scissors" },
    { id: "snake", icon: "🐍", name: "Snake" },
    { id: "memory", icon: "🧠", name: "Memory" },
    { id: "reaction", icon: "⚡", name: "Reaction" }
];

let unlockedGames = 5;

// ========================
// MENU
// ========================
function showMenu(){

    const app = document.getElementById("app");

    let html = `
        <h2>🎮 Arcavolt</h2>
        <p>Unlocked ${unlockedGames}/${games.length}</p>
        <br>
    `;

    for(let i = 0; i < games.length; i++){

        const g = games[i];

        if(i < unlockedGames){
            html += `
                <button class="gameButton" onclick="openGame('${g.id}')">
                    ${g.icon} ${g.name}
                </button>
                <br>
            `;
        } else {
            html += `
                <button class="gameButton" disabled>
                    🔒 Locked
                </button>
                <br>
            `;
        }
    }

    app.innerHTML = html;
}

// ========================
// OPEN GAME (FIXED GLOBAL)
// ========================
window.openGame = function(id){

    console.log("openGame clicked:", id);

    if(id === "tictactoe"){
        if(typeof startTicTacToe === "function"){
            startTicTacToe();
        } else {
            alert("❌ Tic Tac Toe not loaded");
        }
    }

    else if(id === "rps"){
        if(typeof startRPS === "function"){
            startRPS();
        } else {
            alert("❌ RPS not loaded");
        }
    }

    else if(id === "snake"){
        if(typeof startSnake === "function"){
            startSnake();
        } else {
            alert("❌ Snake not loaded");
        }
    }

    else if(id === "memory"){
        if(typeof startMemory === "function"){
            startMemory();
        } else {
            alert("❌ Memory not loaded");
        }
    }

    else if(id === "reaction"){
        if(typeof startReaction === "function"){
            startReaction();
        } else {
            alert("❌ Reaction not loaded");
        }
    }

    else {
        alert("🚧 Game not ready");
    }
};