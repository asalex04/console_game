import fs from 'fs'
import path from 'path'
import {fileURLToPath} from 'url';
import {newLineChar} from "./getNewLineChar.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)


const makeLogFile = (logPath, logInfo) => {
    const log = path.join(__dirname, '..', `${logPath}.txt`)

    if (!fs.existsSync(log)) {
        fs.writeFile(log, logInfo, (err) => {
            if (err) throw Error(err)
        })
    } else {
        fs.appendFile(log, `${newLineChar}${logInfo}`, (err) => {
            if (err) throw Error(err)
        })
    }

}

export default makeLogFile