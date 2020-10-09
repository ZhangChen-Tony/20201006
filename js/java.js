const theSetOfWords = ["You've been eyeing me all day and waiting for your move like a lion stalking a gazelle in a savannah.","Mary plays the piano.", "He was willing to find the depths of the rabbit hole in order to be with her.","Nancy was proud that she ran a tight shipwreck.", "Having no hair made him look even hairier."];
const theTypedWords = document.getElementById("typedtext");
const butto = document.getElementById("go_button");
let startTime,FinishTime;
const msg = document.getElementById("assignment_text");
const Play = () =>{
    let randomNumber = Math.floor(Math.random()*theSetOfWords.length);
    msg.innerText = theSetOfWords[randomNumber];
    let date = new Date;
    startTime = date.getTime();
    butto.innerText = "submit";
};
const endPlay = () =>{
    let date = new Date;
    endTime = date.getTime();
    let totalTime = ((endTime - startTime)/1000);
    let totalstr = theTypedWords.value;
    let wordCount = counter(totalstr);
    let speed = Math.round((wordCount/totalTime)*60);
    let finalMsg = "you've typed at the rate of "+speed+" wpm";
    msg.innerText = finalMsg;
};
const counter = (str) =>{
    let rsp = str.split(" ").length;
    return rsp;
}
butto.addEventListener('click',function(){
    if(this.innerText == "go"){
        assignment_text.disabled = false;
        Play();
    }
    else if(this.innerText == "submit"){
        assignment_text.disabled = true;
        endPlay();
        butto.innerText = "go";
    }
    else{
        alert("else");
    }
})
function rel(){
    location.reload();
}