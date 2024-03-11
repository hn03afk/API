import { getNotes } from "./fetch.js";

getNotes()

// pitie()

// async function addNote(){
//     const { data, error } = await supabase
//       .from('control')
//       .insert({  nom: 'dans', prenom:'back', score: 4 , triche: false})
//       .select()
    
//       return { data, error }
//     }
    
// addNote()

async function testPost(){  
fetch("http://localhost:3000/", {
  method: "POST",
  body: JSON.stringify({
    nom: 'test',
    prenom: 'front',
    score:6,
    triche: true
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
})
.then((response) => response.json())
  .then((json) => console.log(json));;
}

const quizData = [
    {
        question: "Quelle commande SQL est utilisée pour insérer des données dans une table?",
        choices: ["ADD DATA INTO table_name", "INSERT INTO table_name", "INSERT DATA table_name"],
        correctAnswer: "INSERT INTO table_name"
    },
    {
        question: "Quelle est la clause SQL utilisée pour filtrer le résultat?",
        choices: ["FILTER BY", "HAVING", "WHERE"],
        correctAnswer: "WHERE"
    },
    {
        question: "Quelle est la commande SQL pour créer une nouvelle table?",
        choices: ["CREATE TABLE", "ADD TABLE", "NEW TABLE"],
        correctAnswer: "CREATE TABLE"
    },
    {
        question: "Quel type d'API permet aux applications de communiquer avec des serveurs Web?",
        choices: ["API REST", "API SOAP", "API GraphQL"],
        correctAnswer: "API REST"
    },
    {
        question: "Quel langage est souvent utilisé pour décrire la structure des données dans les API REST?",
        choices: ["JSON", "XML", "HTML"],
        correctAnswer: "JSON"
    },
    {
        question: "Quelle méthode HTTP est généralement utilisée pour récupérer des données à partir d'une API?",
        choices: ["GET", "POST", "PUT"],
        correctAnswer: "GET"
    },
    {
        question: "Quelle méthode HTTP est généralement utilisée pour envoyer des données à une API pour création ou mise à jour?",
        choices: ["POST", "PUT", "DELETE"],
        correctAnswer: "POST"
    },
    {
        question: "Qu'est-ce que Docker?",
        choices: ["Une plateforme de virtualisation", "Un outil de gestion de containers", "Un système d'exploitation"],
        correctAnswer: "Un outil de gestion de containers"
    },
    {
        question: "Qu'est-ce qu'un conteneur Docker?",
        choices: ["Une machine virtuelle", "Un environnement isolé pour exécuter des applications", "Un système de fichiers"],
        correctAnswer: "Un environnement isolé pour exécuter des applications"
    },
    {
        question: "Quel est le fichier de configuration principal utilisé par Docker pour construire des images?",
        choices: ["Dockerfile", "docker-compose.yml", "docker.json"],
        correctAnswer: "Dockerfile"
    },
    {
        question: "Quelle commande Docker est utilisée pour construire une image à partir d'un Dockerfile?",
        choices: ["docker build", "docker create", "docker start"],
        correctAnswer: "docker build"
    },
    {
        question: "Quelle commande Docker est utilisée pour démarrer un conteneur?",
        choices: ["docker run", "docker start", "docker create"],
        correctAnswer: "docker run"
    },
    {
        question: "Quelle commande Docker est utilisée pour supprimer un conteneur?",
        choices: ["docker rm", "docker delete", "docker remove"],
        correctAnswer: "docker rm"
    },
];

const quiz = document.getElementById('quiz');
const question = document.getElementById('question');
const choices = document.getElementById('choix');
// const skip = document.getElementById('passer');
const startTest = document.getElementById('submit');
var nameInput = document.getElementById('nom');
var fNameInput = document.getElementById('prenom');
const userInfo = document.getElementById('nomprenom');
const displayScore = document.getElementById('score');
const joker = document.getElementById('joker')
// let triche = false
let currentQuestion = 0;
let score = 0;
// let departSecondes = 30; // 30 secondes
// let temps = departSecondes;

const timerElement = document.getElementById("timer");

function startCountdown() {
  let temps = quizData.length * 20;
  if (temps !== 0) {
    timerElement.innerText = "il te reste 300 secondes"
   ;
    const interval = setInterval(() => {
    //   console.log(temps)
      temps--;
      timerElement.innerText = "il te reste " + (temps < 10 ? "0" + temps : temps)+ " secondes" ; // Mise à jour de l'affichage du temps restant
      if (temps === 0) {
        clearInterval(interval);
        testPost() // addNote()
        afficherScore()
        finDuQuiz() 
      }
    //   if (temps % 20 === 0){
    //     finDuQuiz()
    //   }
    }, 1000);
  } 
}
console.log("quizdata length = " + quizData.length);

// startCountdown();

      
  function finDuQuiz() {
    // currentQuestion++;
    if (currentQuestion = quizData.length) {
        // addNote();
        // testPost() // pitie();
        // insertARow()
        //  window.location.href = "bravo.html";
        afficherScore()
         
    } 
  }
   
function afficherScore() {
    joker.style.display = "block"
    displayScore.innerText = `Tu as ${score}/${quizData.length}`
}


function test() {
    
    
    
    // startCountdown();
    
  
    const currentQuizData = quizData[currentQuestion];
    question.innerText = currentQuizData.question;
    choices.innerHTML = "";
    currentQuizData.choices.forEach(choice => {
        const choiceElement = document.createElement("button");
        choiceElement.innerText = choice;
        choiceElement.addEventListener("click", () => checkAnswer(choice));
        choices.appendChild(choiceElement);
        quiz.style.display = "block";
    });
}

function checkAnswer(answer) {
    const currentQuizData = quizData[currentQuestion];
    if ( answer === currentQuizData.correctAnswer) {
        score++;
        console.log(`${score}/${quizData.length}`)
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        test();
     } 
    
    else {
        // pitie()
        // faggot() // addNote()
        // poster()
        // insertARow()
            // window.location.href = "bravo.html";
            afficherScore()
            console.log("fin du quiz");
            
         
          
       
    }
}

startTest.addEventListener("click", () => {
    if (nameInput.value.trim() !== "" && fNameInput.value.trim() !== "") {
        userInfo.innerText = "Bonne chance, " + fNameInput.value.trim();
        test();
        startCountdown()
        window.addEventListener('blur', blurEventHandler);
    } else {
        alert("Please enter your name.");
    }
});

function flash() {
    const originalColor = document.body.style.backgroundColor;
    let count = 0;
    const flasher = setInterval(() => {
        document.body.style.backgroundColor = (count % 2 === 0) ? "red" : "yellow";
        count++;
    }, 200);
}

function blurEventHandler() {
    setTimeout(() => {
        const gifElement = document.createElement("img");
        gifElement.src = "./img/ishowspeed-speed.gif";
        document.body.appendChild(gifElement);
    }, 2000);
    flash();
    // const triche = true

    userInfo.innerText = "Fallait pas tricher " + fNameInput.value.trim();
    // alert("Fallait pas quitter la page, bouffon. Tu as 0.");
    console.log("Quitter la page");
}
window.addEventListener('paste', () => {
    console.log('colleur');
});
