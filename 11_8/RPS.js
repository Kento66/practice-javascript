function RPS(){
    const choices = ["gu","choki","pa","muteki"];
    //この書き方は、配列。C言語参照

    // let select = document.createElement("select");
    // let option1 = document.createElement("option");
    // let option2 = document.createElement("option");
    // let option3 = document.createElement("option");
    // const gu = "gu"
    // option1.value = gu;
    // option1.textContent = gu;
    // select.appendChild(option);
    // option2.value = "choki";
    // option2.textContent = "choki";
    // select.appendChild(option2);
    // option3.value = "pa";
    // option3.textContent = "pa";
    // select.appendChild(option3);
    // gameContainer.appendChild(select);
    let select = document.createElement("select");
    choices.forEach(choice => {;
        let option = document.createElement("option");
        option.value = choice;
        option.textContent = choice;
        select.appendChild(option);
    });
    gameContainer.appendChild(select);

    let image=document.createElement("img");
    image.alt = "Choice";
    image.style.widoth = "200px";
    image.style.height = "200px";
    image.src = "https://pbs.twimg.com/media/GHLJ3WLbwAA67l6.png"

    gameContainer.appendChild(image);

    //forEach 配列など複数のデータがあるものに使える。全部やる関数。
    //配列.forEach(配列の中身 => {命令})
}