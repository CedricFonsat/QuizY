let tabQuestions = ["Qui est le catcheur le plus titre de la WWE ?", "Quelle pays a le plus de ballon d'Or ?", "Combien il y a t-il habitant en Martinique ?", "Qui est le premier footballeur milliardaire ?"]
let question = document.querySelector("#question")
let score = document.querySelector("#score")
let choice = document.querySelectorAll(".choice")
let tabChoices = [["Jhon Cena", "Edge", "Triple H", "Undertaker"], ["Brésil", "Pays Bas", "Argentine", "France"], ["+ de 1 million", "- de 100 000 ", "- de 500 000", "+- 2 million"], ["Christiano Ronaldo", "Lionel Messi", "Neymar", "Faiq Bolkiah"]]
let goodAnswer = [tabChoices[0][1], tabChoices[1][2], tabChoices[2][2], tabChoices[3][3]]
let round = 0;
let scoreNumber = 0;
let time = 10
let reboure =  document.querySelector("#rebour")
let rand = 0
let randArray = []


function displayQuestion() {
    
   while (randArray.indexOf(rand) != -1) {
    rand = aleatoire(0, tabQuestions.length - 1)
   }
   console.log(rand);
    randArray.push(rand)
    console.log(rand);
    question.innerText = tabQuestions[rand]
}

function displayChoice() {
    for (let i = 0; i < choice.length; i++) {
        choice[i].innerText = tabChoices[rand][i]
    }
}
function checked(element) {

    if (element.innerText == goodAnswer[rand]) {
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
        score.innerText = "Your score is : " + scoreNumber+"/4"
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
function aleatoire(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

displayQuestion()
displayChoice()
updateTime()