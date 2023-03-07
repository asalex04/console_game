import * as fs from 'fs/promises'
import path from "path";
import {fileURLToPath} from 'url';
import {newLineChar} from "../helpers/getNewLineChar.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

const parseLogs = async () => {
    try {
        const file = process.argv[2]

        const logPath = path.join(__dirname, '..', `${file}`)
        const data = await fs.readFile(logPath, 'utf-8')
        const logArr = data.split(newLineChar)

        return logArr[logArr.length - 1]
    } catch (err) {
        console.error('there was an error:', err.message)
    }
}

export default parseLogs