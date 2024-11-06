const emojiler =["😊", "😂", "🤣", "😍", "😒", "😘", "😁", "😢","😊", "😂", "🤣", "😍", "😒", "😘", "😁", "😢"] ;
let clickedEmoji = [];
let score = 0;
let hamle = 0;

function shuffleArray(){
    return emojiler.sort(() => Math.random() - 0.5);
}

// const shuffledArray = shuffleArray();
// console.log(shuffledArray);

function getStart(){
    const shuffledArray = shuffleArray();
    const memoryGameContainer = document.querySelector(".memory-game-container")
    for (const emoji of shuffledArray) {
        memoryGameContainer.innerHTML += `
        <div class="box">${emoji}</div>
        `
    }
    const boxes = document.querySelectorAll(".box");
    for (const box of boxes) {
        box.addEventListener("click", clickedbox);
    }
}

function clickedbox(){
    if(this.classList.contains("active")) return;
    hamle++;
    hamleTxt.innerText = "Moves: " + hamle; 
    this.classList.add("active");
    clickedEmoji.push(this.innerText);
    if(clickedEmoji.length === 2){
        if(clickedEmoji[0] == clickedEmoji[1]){
            const activeBoxes = document.querySelectorAll(".box.active");
            for (const box of activeBoxes) {
                box.classList.add("matched");
            }
            score++;
            skorTxt.innerHTML = `Score: ${score}`

            if(score === 8){
                console.log("oyun bitti")
            }
        }
        const activeBoxes = document.querySelectorAll(".active");

        setTimeout(() => {
            for (const box of activeBoxes) {
                box.classList.remove("active");
            }
        }, 1000)

        clickedEmoji = [];
    }
}



getStart();