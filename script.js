const words = ["damn son","gyatt crusader","cheeks","ballvinder","deepinder","hardick","richard hiscock","sujeet","kuljeet","balljeet","harry bolz","roti should be round","hello from microsoft support","touch some grass","go shower","mango chutney","chai masala"];

const wordDisplay = document.getElementById("word-display");
const inputField = document.getElementById("input-field");
const result = document.getElementById("result");


const startGame = () => {

    targetword = words[Math.floor(Math.random()*words.length)];
    wordDisplay.textContent = `" ${targetword}"` ;
    inputField.value="";
    inputField.className ="";
    result.textContent="";
    startTime = Date.now();
};

inputField.addEventListener("input",()=>{
    if (inputField.value ===targetword){
        let elapsedTime=((Date.now()-startTime)/1000).toFixed(2);
        result.textContent=`You took ${elapsedTime} seconds, you 🤡`;
        inputField.classList.add("correct");
        setTimeout(startGame,1500);
    }else if  (!targetword.startsWith(inputField.value)){
        inputField.classList.add("wrong");
    } else {
        inputField.classList.remove("wrong");
    }
    });

startGame();


