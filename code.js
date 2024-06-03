function disableCSS(){
    estilos.href = '';
    btnDisabled.style.backgroundColor = "#900";
    btnActivated.style.backgroundColor = "#000";
    btnActivated.style.borderColor = "#000";
    btnDisabled.style.borderColor = "#000";
}
function activeCSS(){
    estilos.href = "style.css";
    btnActivated.style.backgroundColor = "#090";
    btnDisabled.style.backgroundColor = "#000";
    btnActivated.style.borderColor = "#fff";
    btnDisabled.style.borderColor = "#fff";
}

let estilos = document.getElementById('estilos');
let btnDisabled = document.getElementById('btnDisabled');
let btnActivated = document.getElementById('btnActivated');