const counter = document.getElementById('contadorVisitas');
const button = document.getElementById('btnReestablecer');
let visitCounter = 0;

document.addEventListener("readystatechange", (event) => {
    
    if(event.target.readyState === 'complete') {
        visitCounter = localStorage.getItem('contador');
        visitCounter++;
        //console.log(visitCounter);
        localStorage.setItem('contador', visitCounter);
        counter.textContent = localStorage.getItem('contador');
    }
    
})


button.addEventListener('click' , () => {
    counter.textContent = 0
    localStorage.clear();
})
