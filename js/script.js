const inputText = document.querySelector(".inputText");
const ouputText = document.querySelector('.outputText');
const moveBtn = document.querySelector('.move-btn');
const copyBtn = document.querySelector('.copy-btn');
const output = document.querySelector('.output');

//Adding eventListeners to the buttons

moveBtn.addEventListener('click',moveText);
copyBtn.addEventListener('click',copyText);

function moveText(){
    let temp = inputText.value;
    ouputText.value = temp;
}

function copyText(){
    let temp = inputText.value;
   
    copyToClipBoard(temp);
}

function copyToClipBoard(str){
    let textArea = document.createElement('textarea');
    textArea.value = str;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    output.innerHTML = "<h3>Copied content : </h3> " + textArea.value;
}

