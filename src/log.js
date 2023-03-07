import parseLogs from "./utilts/parseLogs.js";

const startLog = () => {
    parseLogs().then((data) => {
        const {round, win} = JSON.parse(data)
        console.log(`общее количество партий: ${round}`)
        console.log(`количество выигранных/проигранных партий: ${win}/${round - win}`)
        console.log(`процентное соотношение выигранных партий: ${win * 100 / round}%`)
    })
}

export default startLog