function RPS(){
    const choices = ["gu","choki","pa"];
    let select = document.createElement("select");
    select.id = "choices"
    choices.forEach(choice => {;
        let option = document.createElement("option");
        option.value = choice;
        option.textContent = choice;
        option.id = choice;
        select.appendChild(option);
    });
    gameContainer.appendChild(select);

    let choiceButton = document.createElement("button")
    choiceButton.textContent = "決定"

    gameContainer.appendChild(choiceButton);

    let image = document.createElement("img");
    image.alt = "Choice";
    image.style.widoth = "200px";
    image.style.height = "200px";
 
    let enemyHand = choices[Math.floor(Math.random()*choices.length)];
    let enemyImage = document.createElement("img");
    enemyImage.alt = "choice";
    enemyImage.style.width = "200px";
    enemyImage.style.height = "200px";

    choiceButton.addEventListener("click",function(){
        switch(select.value){
            case"gu":
            image.src = "https://pbs.twimg.com/media/DA59iQ6VwAEHwFY.jpg"
                break;
            case"choki":
            image.src = "https://pbs.twimg.com/media/F8ePUwma8AA1acb.jpg"
                break;
            case"pa":
            image.src = "https://pbs.twimg.com/media/EZ5rHKOUMAEofTi.jpg"
                break;
            default:
                break;
        }

        let enemyHand = choices[Math.floor(Math.random()*choices.length)];

    switch(enemyHand){
        case"gu":
        enemyImage.src = "https://pbs.twimg.com/media/DA59iQ6VwAEHwFY.jpg"
            break;
        case"choki":
        enemyImage.src = "https://pbs.twimg.com/media/F8ePUwma8AA1acb.jpg"
            break;
        case"pa":
        enemyImage.src = "https://pbs.twimg.com/media/EZ5rHKOUMAEofTi.jpg"
            break;
        default:
            break;
    }

});



    gameContainer.appendChild(image);
    gameContainer.appendChild(enemyImage);

    //forEach 配列など複数のデータがあるものに使える。全部やる関数。
    //配列.forEach(配列の中身 => {命令})
}