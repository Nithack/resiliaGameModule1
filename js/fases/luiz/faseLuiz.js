
function luizHf1(){
    var vidaHumano = 50

    alert('O pai chamado Luis H. Altas habilidade técnicas que o ajudam a produzir armas que o assistência durante o combate, pode gerar clones para lutar enquanto ele foge.')
    alert('Você entrou na primeira fase, apos se separa de sua familia se ve em uma situação complicada onde terá que enfrentar um novo desafio para pode re-velos')
    
    for (;vidaZumbie >= 1 && vidaHumano >= 1;) {
        var acao = prompt('Você esta na primeira fase, você desaja:\n1- Fugir e se recuperar \n2- Atacar o humano\n3- Utilizar sua arma')
        if(acao == 1){
            alert('Na primeira fase não se pode fugir, não tem para onde correr!!!')
        }else if(acao == 2){
           vidaHumano = battleStage(vidaHumano, 50,50)
        }else if(acao == 3){
           if(zumbieEspecial > 0) {
            vidaHumano = battleStage(vidaHumano, 80,50)
            zumbieEspecial--
           }else{
               alert('Luiz H. não possui mais força para usar sua habilidade =(')
           }
        }
        else{
            alert('Ação invalida')
        }
    }if(vidaZumbie <= 0){
        gameOver()
        
    }else{
        alert('Voce venceu o humano e seguira para proxima fase')
        trocarFase(3,1)
    }

}
function luizHf2(){
    var vidaHumano = 50
    var fulga = 1
    alert('Você entrou na segunda fase, neste momento você olha em volta e avista um humano que está o espreitando.')
    
    for (;vidaZumbie >= 1 && vidaHumano >= 1;) {
        var acao = prompt('Você esta na segunda fase, você desaja:\n1- Fugir e se recuperar \n2- Atacar o humano\n3- Utilizar sua arma')
        if(acao == 1){
            if(fulga > 0){
                recuperaVida()
                fulga--
            }else{
                alert('Você não tem mais como fugir, terá que continuar sua luta')
            }
        }else if(acao == 2){
           vidaHumano = battleStage(vidaHumano, 50,50)
        }else if(acao == 3){
           if(zumbieEspecial > 0) {
            vidaHumano = battleStage(vidaHumano, 80,50)
            zumbieEspecial--
           }else{
               alert('Luiz H. não possui mais força para usar sua habilidade =(')
           }
        }
        else{
            alert('Ação invalida')
        }
    }if(vidaZumbie <= 0){
        gameOver()
        
    }else{
        alert('Voce venceu o humano e seguira para proxima fase')
        trocarFase(3,2)
    }

}

function luizHf3(){
    var vidaHumano = 100
    alert('Que vida dura em Luiz H., mas fique tranquilo já está chegando no final para se encontrar com sua familia')
    alert('Você entrou na terceira fase, no momento que abre a porta um humano logo o ataca, você consegue desviar do primeiro ataque, mas o humano logo parte para o proximo ataque.')
    
    for (;vidaZumbie >= 1 && vidaHumano >= 1;) {
        var acao = prompt('Você esta na terceira fase, você desaja:\n1- Fugir e se recuperar \n2- Atacar o humano\n3- Utilizar sua arma')
        if(acao == 1){
            recuperaVida()
        }else if(acao == 2){
           vidaHumano = battleStage(vidaHumano, 50,50)
        }else if(acao == 3){
           if(zumbieEspecial > 0) {
            vidaHumano = battleStage(vidaHumano, 80,50)
            zumbieEspecial--
           }else{
               alert('Luiz H. não possui mais força para usar sua habilidade =(')
           }
        }
        else{
            alert('Ação invalida')
        }
    }if(vidaZumbie <= 0){
        gameOver()
        
    }else{
        alert('Finalmente chegou no final, Encontrou sua familia que o tanto esperava, parabéns por concluir o jogo')
        endGame()
    }

}

