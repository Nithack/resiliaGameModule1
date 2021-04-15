
function lucasAf1(){
    var vidaHumano = 50

    alert('O filho chamado Lucas A.possui uma grande furtividade e possui um pet que o assistência durante os combate, Lucas pode controlar qualquer humanos apos tranformalo em zumbi.')
    alert('Você entrou na primeira sala, para percorrer o caminho até a sainda, neste momento você olha em volta e avista um humano que está correndo em sua direção.')
    
    for (;vidaZumbie >= 1 && vidaHumano >= 1;) {
        var acao = prompt('Você esta na primeira sala, você desaja:\n1- Fugir e se recuperar \n2- Atacar o humano\n3- Ataque com PET')
        if(acao == 1){
            alert('Na primeira fase não se pode fugir, não tem para onde correr!!!')
        }else if(acao == 2){
           vidaHumano = battleStage(vidaHumano, 50,50)
        }else if(acao == 3){
           if(zumbieEspecial > 0) {
            vidaHumano = battleStage(vidaHumano, 80,50)
            zumbieEspecial--
           }else{
               alert('Seu pet morreu =(')
           }
        }
        else{
            alert('Ação invalida')
        }
    }if(vidaZumbie <= 0){
        gameOver()
        
    }else{
        alert('Voce venceu o humano e seguira para proxima fase')
        trocarFase(1,1)
    }

}
function lucasAf2(){
    var vidaHumano = 50
    var fulga = 1
    alert('Você entrou na segunda fase, neste momento você olha em volta e avista um humano que está o espreitando.')
    
    for (;vidaZumbie >= 1 && vidaHumano >= 1;) {
        var acao = prompt('Você esta na segunda fase, você desaja:\n1- Fugir e se recuperar \n2- Atacar o humano\n3- Ataque com PET')
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
               alert('Seu pet morreu =(')
           }
        }
        else{
            alert('Ação invalida')
        }
    }if(vidaZumbie <= 0){
        gameOver()
        
    }else{
        alert('Voce venceu o humano e seguira para proxima fase')
        trocarFase(1,2)
    }

}

function lucasAf3(){
    var vidaHumano = 100
    alert('Que vida dura em Lucas, mas fique tranquilo já está chegando no final para se encontrar com sua familia')
    alert('Você entrou na terceira fase, no momento que abre a porta um humano logo o ataca, você consegue desviar do primeiro ataque, mas o humano logo parte para o proximo ataque.')
    
    for (;vidaZumbie >= 1 && vidaHumano >= 1;) {
        var acao = prompt('Você esta na terceira fase, você desaja:\n1- Fugir e se recuperar \n2- Atacar o humano\n3- Ataque com PET')
        if(acao == 1){
            recuperaVida()
        }else if(acao == 2){
           vidaHumano = battleStage(vidaHumano, 50,50)
        }else if(acao == 3){
           if(zumbieEspecial > 0) {
            vidaHumano = battleStage(vidaHumano, 80,50)
            zumbieEspecial--
           }else{
               alert('Seu pet morreu =(')
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

