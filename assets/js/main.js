let tabQuestions = ["Quelle est votre choix ?", "Quelle est votre roi ?", "Quelle est votre droigt ?", "Quelle est votre tois ?"]
let question = document.querySelector("#question")
let score = document.querySelector("#score")
let choice = document.querySelectorAll(".choice")
let tabChoices = [["choix1", "choix2", "choix3", "choix4"], ["choix4", "choix5", "choix6", "choix7"], ["choix8", "choix9", "choix10", "choix11"], ["choix12", "choix13", "choix14", "choix15"]]
let goodAnswer = [tabChoices[0][0], tabChoices[1][1], tabChoices[2][2], tabChoices[3][3]]
let round = 0;
let scoreNumber = 0;
let time = 10
let reboure =  document.querySelector("#rebour")

displayQuestion()
displayChoice()
updateTime()

function displayQuestion() {
    question.innerText = tabQuestions[round]
}

function displayChoice() {
    for (let i = 0; i < choice.length; i++) {
        choice[i].innerText = tabChoices[round][i]
    }
}
function checked(element) {

    if (element.innerText == goodAnswer[round]) {
        console.log("good");
        scoreQuiz()
    }
    nextQuestion()

}
function nextQuestion() {
    time = 10
    round++
    if (round >= tabQuestions.length) {
        question.innerText = "le quizz est fini"
    }else{
        displayQuestion()
        displayChoice()
    }
}
function scoreQuiz() {
    scoreNumber++
    score.innerText = "Your score is : " + scoreNumber+"/4"
}
function displayTime(rebour) {
  reboure.innerText = rebour
}
function updateTime() {
    if (time > 0) {
        setTimeout(function () {
            time--
            displayTime(time)
            updateTime()
        }, 1000);
        if (round >= 4) {
            rebour.innerText = ""
        }
    }
    else{
        time = 10
        updateTime()
        nextQuestion()
    }
}