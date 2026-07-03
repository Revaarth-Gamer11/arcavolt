const games = [
    { name: "Tic Tac Toe", icon: "❌" },
    { name: "Rock Paper Scissors", icon: "✊" },
    { name: "Snake", icon: "🐍" },
    { name: "Memory", icon: "🧠" },
    { name: "Reaction", icon: "⚡" },
    { name: "Click Speed", icon: "🎯" },
    { name: "Whack A Mole", icon: "🔨" },
    { name: "Connect Four", icon: "🟡" },
    { name: "Pong", icon: "🏓" },
    { name: "Breakout", icon: "🧱" },
    { name: "2048", icon: "🔢" },
    { name: "Minesweeper", icon: "💣" },
    { name: "Simon Says", icon: "🎵" },
    { name: "Hangman", icon: "🪢" },
    { name: "Dots & Boxes", icon: "🔷" },
    { name: "Space Shooter", icon: "🚀" },
    { name: "Flappy Bird", icon: "🐦" },
    { name: "Platform Runner", icon: "🏃" },
    { name: "Maze Escape", icon: "🌀" },
    { name: "Colour Match", icon: "🎨" }
];

let unlockedGames = 5;

/* SHOW MENU */
function showMenu(){
    const app = document.getElementById("app");

    let html = `<h2>🎮 Game Menu</h2><p>Select a game</p><br>`;

    for(let i = 0; i < games.length; i++){

        if(i < unlockedGames){
            html += `
                <button class="gameButton" onclick="openGame(${i})">
                    ${games[i].icon} ${games[i].name}
                </button><br>
            `;
        } else {
            html += `
                <button class="gameButton" disabled>
                    🔒 ${games[i].name}
                </button><br>
            `;
        }
    }

    app.innerHTML = html;
}