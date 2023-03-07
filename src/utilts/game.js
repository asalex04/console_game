import readlineSync from "readline-sync";

import randomNumber from "../helpers/getRandomNumber.js";
import makeLogFile from "../helpers/makeLogFile.js";
import {newLineChar} from "../helpers/getNewLineChar.js";

const logInfo = {
    round: 1,
    win: 0
}

export const game = (logPath) => {
    const choice = readlineSync.question(`Какое число загадано: 1 или 2? ${newLineChar}`)
    const question = randomNumber(1, 2).toString()
    if (choice === question) {
        console.log('Угадал!')
        logInfo.win += 1
    } else { console.log('Не угадал') }

    makeLogFile(logPath, JSON.stringify(logInfo))

    const answer = readlineSync.question(`Сыграем еще? 'да'/'нет' ${newLineChar}`)
    if (answer === 'да') {
        logInfo.round += 1
        game(logPath)
    }
}