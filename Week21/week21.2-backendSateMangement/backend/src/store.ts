export interface Game {
    id: string;
    whitePlayerName: string;
    blackPlayerName: string;
    moves: string[];
}

// Singlton pattern => Only single instance of GameManager can be created through out the codebase
// sol => Make constructor private (no one can make any instance) and create getInstance method
// 
// getInstance insures that only single instance is create and maintain
// This logic of maintaing single instance is called `Singleton pattern`
// 
// static variables and method => Global methond for all gameManeger instance -> can be called on Class
// not on the instance

export class GameManager {
    games: Game[] = [];
    private static instance: GameManager;  // static attributes `instance` of type Gamemanager
    private constructor() {
        this.games = [];
    }
    static getInstance() {
        // Create a single instance of game manager and return it   
        if (!GameManager.instance) {
            GameManager.instance = new GameManager;
        }
        return GameManager.instance;
        // Or
        // if(this.instance) this.instance = new GameManager;;
        // return this.instance;
    }
    addMove(gameId: string, move: string) {
        console.log(`Addding move ${move} to gameId ${gameId}`);
        const game = this.games.find(game => game.id === gameId);
        game?.moves.push(move);
    }

    addGame(gameId: string) {
        const game = this.games.find(game => game.id === gameId);
        if (game) {
            return new Error("Game with that game id exist");
        }
        this.games.push({
            id: gameId,
            blackPlayerName: "black" + String(Math.floor(Math.random() * 10)),
            whitePlayerName: "white" + String(Math.floor(Math.random() * 10)),
            moves: [],
        })
    }

    log() {
        console.log(this.games);
    }
}

export const gameManager = GameManager.getInstance();