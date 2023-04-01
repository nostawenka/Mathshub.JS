// ИГРА
// Нажатием на кнопку "Начать" игра запускается, генерируется задача, 
// пользователь может ввести ответ, должна появиться кнопка "Проверить"

// Нажав кнопку "Проверить", мы сравниваем ввод пользователя с ответом
// Вывести результат и правильное значение, сменить кнопку на "Начать заново"





const getRandomNumInRange = (min, max) => {
    const randomNum = (Math.random() * (max - min) + min).toFixed(0)
    return randomNum
}

const getTask = () => {
   
    const symbol = (Math.random() > 0.5 ? "+" : "-")
    const task = `${getRandomNumInRange(0, 100)} ${symbol} ${getRandomNumInRange(0, 100)}`
    gameState.rightAnswer = eval(task)
    return task
}

const toggleGameState = () => {
    gameState.taskInProcess = !gameState.taskInProcess
}


const randomNNum1 = getRandomNumInRange(0, 100)
const randomNum2 = getRandomNumInRange(0, 100)


const gameElements = document.getElementById("My_game").children
//console.log(gameElements)
const title = gameElements[0]
const userTask = gameElements[1]
const userAnswer = gameElements[2]
const btnGame = gameElements[3]


const gameState = {
    taskInProcess: false,
    rightAnswer: null,
}
const startGameFunc = () => {
   if (!gameState.taskInProcess){
    title.innerText = "Game started!"
    userAnswer.value = null
    userTask.innerText = getTask()
    userAnswer.hidden = false
    toggleGameState()
   }else {
    const isRight = gameState.rightAnswer == userAnswer.value
    userTask.innerText = userTask.innerText + " = " + gameState.rightAnswer
    title.innerText = (isRight) ? "You won!" : "You lose!"
    btnGame.innerText = "Start over"
    toggleGameState()
    btnGame.innerText = "Check!"
   }

}
btnGame.addEventListener("mousedown", startGameFunc)
userAnswer.addEventListener("keydown", (e) => {
    //console.log(e)
    if (e.key === "Enter") {
        startGameFunc()
    }else if (e.key === "Escape") {
        userAnswer.blur()
    }
})







//console.dir(document)
const chosenEl = document.querySelectorAll(".chosen_block-container > div")
const counterEl = document.querySelector(".chosen_block span")

// const chosenState = {
//    countElements: 0, 
// }
// const changeCount = (value) => {
//     chosenState.countElements += value 
//     counterEl.innerText = chosenState.countElements
// }
const chosenState = {
    countElements: 0,
    setCountValue(value) {
        this.countElements += value 
        counterEl.innerText = this.countElements
    }
}

const eventFunc = (e) => {
    if (
        e.target.className === "") {
        e.target.className = "chosen_element"
        chosenState.setCountValue(1)
        } else {
            e.target.className = ""
            chosenState.setCountValue(-1)
        }
}


for (let i = 0; i < chosenEl.length; i++) {
    chosenEl[i].addEventListener("click", eventFunc)
    }
chosenEl[2].removeEventListener("click", eventFunc)


