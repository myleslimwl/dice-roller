function rollDice() {

  const diceCount = document.getElementById("diceCount").value;
  const diceResult = document.getElementById("diceResult");
  const diceImage = document.getElementById("diceImage");
  const values = [];
  const images = [];

  for (let i = 0; i < diceCount; i++) {
    const randomValue = Math.floor(Math.random() * 6) + 1;
    values.push(randomValue);
    images.push(`images/dice${randomValue}.png`);
  }

  diceResult.textContent = `dice: ${values.join(", ")}`;
  diceImage.innerHTML = values.join("");
}