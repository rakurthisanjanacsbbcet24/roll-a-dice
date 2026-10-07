function rollDice() {

    // Generate a random number between 1 and 6
    let number = Math.floor(Math.random() * 6) + 1;

    // Dice symbols
    let diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

    // Display the dice face
    document.getElementById("dice").textContent = diceFaces[number - 1];

    // Display the result
    document.getElementById("result").textContent =
        "You rolled: " + number;
}