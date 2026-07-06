window.startTicTacToe = function(){

    const app = document.getElementById("app");

    let board = ["","","","","","","","",""];
    let gameOver = false;

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

    function render(){
        let html = `<h2>Tic Tac Toe</h2><div>`;

        for(let i=0;i<9;i++){
            html += `<button onclick="move(${i})">${board[i]}</button>`;
        }

        html += `</div><br><button onclick="showMenu()">Exit</button>`;
        app.innerHTML = html;
    }

    window.move = function(i){

        if(gameOver || board[i] !== "") return;

        board[i] = "❌";

        if(checkWin("❌")){
            gameOver = true;
            alert("You Win!");
            return;
        }

        render();
    };

    render();
};