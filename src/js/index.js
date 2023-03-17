const butCar = document.querySelectorAll('.but');
const img = document.querySelectorAll('.img')

butCar.forEach((but, index) => {
    but.addEventListener('click', () => {
        
        RemoverBotãoSelecionado();
        
        AdicionarNovoBotãoSelecionado(but);
    
        RemoverBackgroundImg();
        
        AddNewImg(index); 
    }) 
})


function AddNewImg(index) {
    img[index].classList.add('act');
}

function RemoverBackgroundImg() {
    const imgAct = document.querySelector('.act');
    imgAct.classList.remove('act');
}

function AdicionarNovoBotãoSelecionado(but) {
    but.classList.add('selec');
}

function RemoverBotãoSelecionado() {
    const butSelec = document.querySelector('.selec');
    butSelec.classList.remove('selec');
}

