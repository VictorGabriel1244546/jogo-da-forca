// Lista de frutas e suas dicas
const fruits = [
    { name: "limão", hint: "É uma fruta que começa com a letra 'L'", additionalHint: "E uma fruta acida" },
    { name: "Maçã", hint: "É uma fruta que começa com a letra 'M'", additionalHint: "Branca de neve comeu" },
    { name: "coco", hint: "É uma fruta que começa com a letra 'C'", additionalHint: "E uma fruta que tem agua dentro" },
    { name: "jaca", hint: "É uma fruta que começa com a letra 'j'", additionalHint: "e uma fruta grande e espinhosa" },
    { name: "melão", hint: "É uma fruta que começa com a letra 'M'", additionalHint: "e uma fruta doce e amarelo por fora " }
  ];
  
  let currentFruitIndex = 0;
  let attempts = 3;
  let score = 0;
  
  // Função para escolher uma fruta aleatória e exibir sua dica
  function chooseFruit() {
    if (currentFruitIndex < fruits.length) {
      document.querySelector("p").textContent = `Dica: ${fruits[currentFruitIndex].hint}`;
      // Limpar a dica adicional quando uma nova fruta for escolhida
      document.getElementById("additionalHint").textContent = "";
    } else {
      endGame();
    }
  }
  
  // Função para verificar a resposta do jogador
  function guess() {
    const guessInput = document.getElementById("guessInput");
    const guess = guessInput.value.toLowerCase();
    if (guess === fruits[currentFruitIndex].name.toLowerCase()) {
      document.getElementById("result").textContent = "Parabéns! Você acertou!";
      score += attempts * 10;
      document.getElementById("score").textContent = score;
      currentFruitIndex++;
      chooseFruit();
      attempts = 3;
      document.getElementById("attempts").textContent = attempts;
      guessInput.value = "";
    } else {
      attempts--;
      document.getElementById("attempts").textContent = attempts;
      if (attempts === 0) {
        document.getElementById("result").textContent = `Suas tentativas acabaram! A resposta correta era: ${fruits[currentFruitIndex].name}`;
        currentFruitIndex++;
        chooseFruit();
        attempts = 3;
        document.getElementById("attempts").textContent = attempts;
        guessInput.value = "";
      } else {
        document.getElementById("result").textContent = "Tente novamente!";
      }
    }
  }
  
  // Função para exibir dica adicional
  function showAdditionalHint() {
    if (currentFruitIndex < fruits.length) {
      const additionalHint = fruits[currentFruitIndex].additionalHint;
      if (additionalHint) {
        document.getElementById("additionalHint").textContent = additionalHint;
      } else {
        document.getElementById("additionalHint").textContent = "Não há dica adicional disponível para esta fruta.";
      }
    }
  }
  
  // Função para encerrar o jogo e mostrar a pontuação final
  function endGame() {
    document.getElementById("result").textContent = `Jogo encerrado! Sua pontuação final é: ${score}`;
    document.getElementById("guessInput").style.display = "none";
    document.querySelector("button").style.display = "none";
  }

  // Função para reiniciar o jogo
  function restartGame() {
    currentFruitIndex = 0;
    score = 0;
    attempts = 3;
    chooseFruit(); // Chamando a função para escolher a primeira fruta
    document.getElementById("score").textContent = score;
    document.getElementById("attempts").textContent = attempts;
    document.getElementById("result").textContent = ""; // Limpa o resultado anterior
    document.getElementById("guessInput").value = ""; // Limpa o campo de entrada
    document.getElementById("guessInput").style.display = "inline-block"; // Mostra o campo de entrada
    document.querySelector("button").style.display = "inline-block"; // Mostra o botão de adivinhar
  }

  // Iniciar o jogo ao carregar a página
  window.onload = chooseFruit;
