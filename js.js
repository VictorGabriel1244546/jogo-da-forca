const fruits = [
  { name: "limão", hint: "É uma fruta que começa com a letra 'L'"},
  { name: "Maçã", hint: "É uma fruta que começa com a letra 'M'"},
  { name: "coco", hint: "É uma fruta que começa com a letra 'C'"},
  { name: "jaca", hint: "É uma fruta que começa com a letra 'J'"},
  { name: "melão", hint: "É uma fruta que começa com a letra 'M'" },
  { name: "manga", hint: "É uma fruta que começa com a letra 'M'" },
  { name: "caju", hint: "É uma fruta que começa com a letra 'C'" },
  { name: "kiwi", hint: "É uma fruta que começa com a letra 'M'" },
  { name: "mamão", hint: "É uma fruta que começa com a letra 'M'" },
  { name: "amora", hint: "É uma fruta que começa com a letra 'A'" }
];

let currentFruitIndex = 0;
let attempts = 3;
let score = 0;

function chooseFruit() {
  if (currentFruitIndex < fruits.length) {
      const currentFruit = fruits[currentFruitIndex];
      const firstLetter = currentFruit.name.charAt(0).toUpperCase();
      document.getElementById("currentWord").textContent = currentFruit.name; 
      document.getElementById("hintText").textContent = currentFruit.hint;
      document.getElementById("firstLetter").textContent = firstLetter;
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
