
function openGame(i){

    const game = games[i];
    const name = game.name;

    switch(name){

        case "Tic Tac Toe":
            startTicTacToe();
            break;

        case "Rock Paper Scissors":
            startRPS();
            break;

        case "Snake":
            startSnake();
            break;

        case "Memory":
            startMemory();
            break;

        case "Reaction":
            startReaction();
            break;

        case "Click Speed":
            startClick();
            break;

        case "Whack A Mole":
            startWhackAMole();
            break;

        case "Connect Four":
            startConnectFour();
            break;

        case "Pong":
            startPong();
            break;

        case "Breakout":
            startBreakout();
            break;

        case "2048":
            start2048();
            break;

        case "Minesweeper":
            startMinesweeper();
            break;

        case "Simon Says":
            startSimonSays();
            break;

        case "Hangman":
            startHangman();
            break;

        case "Dots & Boxes":
            startDotsBoxes();
            break;

        case "Space Shooter":
            startSpaceShooter();
            break;

        case "Flappy Bird":
            startFlappyBird();
            break;

        case "Platform Runner":
            startPlatformRunner();
            break;

        case "Maze Escape":
            startMazeEscape();
            break;

        case "Colour Match":
            startColourMatch();
            break;

        default:
            alert("🚧 Game not ready yet!");
    }
}