// Seleciona os elementos da página com base nas classes
const $startGameButton = document.querySelector(".start-quiz");  // Botão para iniciar o quiz
const $nextQuestionButton = document.querySelector(".next-question");  // Botão para ir para a próxima pergunta
const $questionsContainer = document.querySelector(".questions-container");  // Contêiner das perguntas
const $questionText = document.querySelector(".question");  // Texto da pergunta
const $answersContainer = document.querySelector(".answers-container");  // Contêiner das respostas
const $answers = document.querySelectorAll(".answer");  // Todas as respostas (botões)

// Variáveis para controlar o estado do quiz
let currentQuestionIndex = 0;  // Índice da pergunta atual
let totalCorrect = 0;  // Contador de respostas corretas

// Adiciona eventos aos botões de iniciar o quiz e para ir para a próxima pergunta
$startGameButton.addEventListener("click", startGame);
$nextQuestionButton.addEventListener("click", displayNextQuestion);

// Função que inicia o jogo
function startGame() {
  $startGameButton.classList.add("hide");  // Esconde o botão de iniciar
  $questionsContainer.classList.remove("hide");  // Mostra o contêiner das perguntas
  displayNextQuestion();  // Exibe a primeira pergunta
}

// Função que exibe a próxima pergunta
function displayNextQuestion() {
  resetState();  // Reseta o estado (limpa as respostas anteriores)

  // Verifica se o quiz chegou ao fim
  if (questions.length === currentQuestionIndex) {
    return finishGame();  // Se chegou ao fim, chama a função para finalizar o jogo
  }

  // Exibe a pergunta atual
  $questionText.textContent = questions[currentQuestionIndex].question;

  // Exibe as opções de resposta
  questions[currentQuestionIndex].answers.forEach(answer => {
    const newAnswer = document.createElement("button");  // Cria um novo botão de resposta
    newAnswer.classList.add("button", "answer");  // Adiciona classes para estilo
    newAnswer.textContent = answer.text;  // Coloca o texto da resposta no botão

    if (answer.correct) {
      newAnswer.dataset.correct = answer.correct;  // Marca a resposta correta
    }

    // Adiciona o botão de resposta ao contêiner
    $answersContainer.appendChild(newAnswer);

    // Adiciona um evento para verificar a resposta quando o botão for clicado
    newAnswer.addEventListener("click", selectAnswer);
  });
}

// Função que reseta o estado entre as perguntas
function resetState() {
  // Limpa todas as respostas anteriores
  while ($answersContainer.firstChild) {
    $answersContainer.removeChild($answersContainer.firstChild);
  }

  // Remove classes do corpo da página
  document.body.removeAttribute("class");

  // Esconde o botão de próxima pergunta
  $nextQuestionButton.classList.add("hide");
}

// Função chamada quando uma resposta é selecionada
function selectAnswer(event) {
  const answerClicked = event.target;

  // Verifica se a resposta está correta
  if (answerClicked.dataset.correct) {
    document.body.classList.add("correct");  // Adiciona a classe "correct" para indicar resposta correta
    totalCorrect++;  // Incrementa o contador de respostas corretas
  } else {
    document.body.classList.add("incorrect");  // Adiciona a classe "incorrect" para indicar resposta errada
  }

  // Desabilita todas as respostas após uma seleção
  document.querySelectorAll(".answer").forEach(button => {
    button.disabled = true;

    // Marca as respostas corretas e erradas visualmente
    if (button.dataset.correct) {
      button.classList.add("correct");
    } else {
      button.classList.add("incorrect");
    }
  });

  // Exibe o botão de próxima pergunta
  $nextQuestionButton.classList.remove("hide");

  // Avança para a próxima pergunta
  currentQuestionIndex++;
}

// Função chamada quando o quiz termina
function finishGame() {
  const totalQuestions = questions.length;  // Total de perguntas
  const performance = Math.floor(totalCorrect * 100 / totalQuestions);  // Calcula a performance em porcentagem

  let message = "";  // Variável para armazenar a mensagem final

  // Define a mensagem com base na performance do usuário
  switch (true) {
    case (performance >= 90):
      message = "Excelente :)";
      break;
    case (performance >= 70):
      message = "Muito bom :)";
      break;
    case (performance >= 50):
      message = "Bom";
      break;
    default:
      message = "Pode melhorar :(";
  }

  // Exibe a mensagem final e as opções de refazer o teste ou prosseguir
  $questionsContainer.innerHTML = `
    <p class="final-message">
      Você acertou ${totalCorrect} de ${totalQuestions} questões!
      <span>Resultado: ${message}</span>
    </p>
    <button onclick="window.location.reload()" class="button">
      REFAZER TESTE
    </button>
    <a href="final.html">
      <button class="button">
        PROSSEGUIR
      </button>
    </a>
  `;

  // Chama a função de confetes após a conclusão do quiz
  confetes();
}

// Função para exibir os confetes
function confetes() {
  const confete = document.createElement("img");
  confete.id = "confetes-gif";
  confete.src = "assets/confetti (1).gif"; // Link para o arquivo GIF de confetes
  confete.style.position = "absolute"; // Defina a posição como absoluta ou fixa se necessário
  confete.style.top = "50%"; // Ajuste a posição para onde você quer
  confete.style.left = "50%"; // Ajuste a posição
  confete.style.transform = "translate(-50%, -50%)"; // Centralize a imagem
  confete.style.zIndex = "1000"; // Garantir que o gif fique visível acima de outros elementos
  document.body.appendChild(confete);

  // Remove os confetes após 3 segundos (3000 milissegundos)
  setTimeout(() => {
    confete.remove(); // Remove o elemento dos confetes após o tempo
  }, 3000);
}

// Array com todas as perguntas e respostas
const questions = [
  {
    question: "Qual característica do Barroco é mais evidente nas obras de arte desse período?",
    answers: [
      { text: "Simplicidade e clareza", correct: false },
      { text: "Uso excessivo de cores suaves e pastéis", correct: false },
      { text: "Contraste entre luz e sombra", correct: true },
      { text: "Figuras geométricas e retas", correct: false }
    ]
  },
  {
    question: "Qual é uma característica da literatura barroca brasileira?",
    answers: [
      { text: "Preocupação com a transitoriedade da vida e o pecado", correct: true },
      { text: "Exaltação da razão e da lógica", correct: false },
      { text: "Estilo minimalista e simples", correct: false },
      { text: "Reflexões sobre o progresso e a modernidade", correct: false }
    ]
  },
  {
    question: 'Com qual intuito o barroco veio ao Brasil?',
    answers: [
      { text: 'Para fortalecer a influência da Igreja Católica e auxiliar na catequização dos indígenas.', correct: true },
      { text: 'Para promover a liberdade religiosa e o rompimento com a Igreja Católica.', correct: false },
      { text: 'Para incentivar a independência cultural do Brasil em relação a Portugal.', correct: false },
      { text: "Para introduzir um estilo artístico voltado exclusivamente à nobreza e à elite europeia.", correct: false }
    ]
  },
  {
    question: 'O principal arquiteto responsável pela construção de igrejas barrocas em Minas Gerais, como a de São Francisco de Assis em ouro preto foi Alejadinho',
    answers: [
      { text: "Falso", correct: false },
      { text: "Verdadeiro", correct: true }
    ]
  },
  {
    question: 'O ciclo do Ouro foi um fator importante para o desenvolvimento do Barroco no Brasil. Qual alternativa não está INCORRETA?',
    answers: [
      { text: 'O ouro levou à criação de novas universidades e ao desenvolvimento da ciência no Brasil.', correct: false },
      { text: 'A produção de ouro permitiu o financiamento de reformas nas igrejas e a construção de obras de arte exuberantes', correct: true },
      { text: 'A riqueza gerada pelo ouro estimulou o crescimento da literatura clássica no Brasil,o que acabou influenciando também outros períodos literários a serem desenvolvidos', correct: false },
      { text: 'O ciclo do ouro resultou em uma revolução política que favoreceu as artes.', correct: false }
    ]
  },
  {
    question: 'O Barroco no Brasil é especialmente associado ao período colonial. Qual desses eventos históricos influenciou esse estilo?',
    answers: [
      { text: 'A Independência do Brasil', correct: false },
      { text: 'O Ciclo do Ouro', correct: true },
      { text: 'A Proclamação da República', correct: false },
      { text: 'A Revolução Industrial', correct: false }
    ]
  },
  {
    question: 'Quem é considerado o(a) principal autor(a) do Barroco brasileiro?',
    answers: [
      { text: 'José de Alencar', correct: false },
      { text: 'Giovanna Ewbank', correct: false },
      { text: 'Raul Pompeia', correct: false },
      { text: 'Gregório de Matos', correct: true },
    ]
  },
]
