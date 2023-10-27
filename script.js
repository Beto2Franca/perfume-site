function ClickMenu(){
    if(menu.style.display == 'block'){
        menu.style.display = 'none'
    } else{
        menu.style.display = 'block'
    }
   
}

function MudouT(){
    if(window.innerWidth >= 790){
        menu.style.display = 'none'
    }
}

function carrinho(){
    if(carvazio.style.display == 'block'){
        carvazio.style.display = 'none'
    }else{
        carvazio.style.display = 'block'
    }
}

// function entrar(){

//     if(iboxmodel.style.display == 'block'){
//         iboxmodel.style.display = 'none'
//     } else{
//         iboxmodel.style.display = 'block'
//     }
// }

function entrar() {
    var iboxmodel = document.getElementById('iboxmodel');

    if (iboxmodel.style.display == 'block') {
        iboxmodel.style.display = 'none';
        iboxmodel.style.zIndex = '-1'; // Define um z-index negativo para esconder o modal
    } else {
        iboxmodel.style.display = 'block';
        iboxmodel.style.zIndex = '888'; // Define o z-index desejado para exibir o modal sobre a página
    }
}
