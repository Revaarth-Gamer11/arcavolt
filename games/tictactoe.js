function startTicTacToe(){
    alert("Tic Tac Toe started");

    const app = document.getElementById("app");

    let board = ["","","","","","","","",""];
    let gameOver = false;

    let difficulty = "easy"; // easy / medium / hard

    function checkWin(p){
        const winPatterns = [
            [0,1,2],[3,4,5],[6,7,8],
            [0,3,6],[1,4,7],[2,5,8],
            [0,4,8],[2,4,6]
        ];

        return winPatterns.some(([a,b,c]) =>
            board[a] === p &&
            board[b] === p &&
            board[c] === p
        );
    }

    function empty(){
        return board.map((v,i)=>v===""?i:null).filter(v=>v!==null);
    }

    function render(){

        let html = `
            <h2>❌ Tic Tac Toe</h2>

            <p>AI Difficulty:
                <button onclick="setDiff('easy')">Easy</button>
                <button onclick="setDiff('medium')">Medium</button>
                <button onclick="setDiff('hard')">Hard</button>
            </p>

            <div class="grid ttt">
        `;

        for(let i=0;i<9;i++){
            html += `
                <div class="card" onclick="move(${i})">
                    ${board[i]}
                </div>
            `;
        }

        html += `
            </div>
            <br>
            <button onclick="showMenu()">⬅ Exit</button>
        `;

        app.innerHTML = html;
    }

    function aiMove(){

        if(gameOver) return;

        let moves = empty();
        let move;

        // EASY = random
        if(difficulty === "easy"){
            move = moves[Math.floor(Math.random() * moves.length)];
        }

        // MEDIUM = block + win sometimes
        else if(difficulty === "medium"){

            move = findWinningMove("⭕")
                || findWinningMove("❌")
                || moves[Math.floor(Math.random() * moves.length)];
        }

        // HARD = strong human-like AI (not perfect)
        else{

            move =
                findWinningMove("⭕") ||
                findWinningMove("❌") ||
                centerOrCorner() ||
                moves[Math.floor(Math.random() * moves.length)];
        }

        board[move] = "⭕";

        if(checkWin("⭕")){
            gameOver = true;
            alert("AI Wins 🤖");
            return;
        }

        render();
    }

    function findWinningMove(player){

        for(let i of empty()){
            board[i] = player;
            let win = checkWin(player);
            board[i] = "";

            if(win) return i;
        }

        return null;
    }

    function centerOrCorner(){

        if(board[4] === "") return 4;

        let corners = [0,2,6,8].filter(i => board[i] === "");
        if(corners.length){
            return corners[Math.floor(Math.random() * corners.length)];
        }

        return null;
    }

    window.setDiff = function(d){
        difficulty = d;
        render();
    }

    window.move = function(i){

        if(gameOver) return;
        if(board[i] !== "") return;

        board[i] = "❌";

        if(checkWin("❌")){
            gameOver = true;
            addWin();
            alert("You Win 🎉");
            return;
        }

        render();

        setTimeout(aiMove, 300);
    }

    render();
}