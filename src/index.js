import readlineSync from 'readline-sync'
import {game} from "./utilts/game.js";

const gameEngine = () => {
    const logPath = process.argv.slice(2)
    const name = readlineSync.question('Как тебя зовут?\n')
    console.log(`Привет ${name}\n`)
    console.log('Давай сыграем в игру "Орёл или решка"\n')
    game(logPath[0])
};
export default gameEngine
