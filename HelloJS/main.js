let hTextInput = document.getElementById("textInput");
let hDivOutput = document.getElementById("divOutput");
let hBtnRun = document.getElementById("btnRun");
let hBtnClear = document.getElementById("btnClear");

hBtnRun.addEventListener('click',  (event) => {
    var crtOutput = hDivOutput.textContent;
    var crtInput = hTextInput.value;
    if(crtInput!=''){
        hDivOutput.textContent = `${crtOutput}\r\n${crtInput}`;
    }
    
    
});

hBtnClear.addEventListener('click', (event) => {
    
    hDivOutput.textContent = '';
    
});