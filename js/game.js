var vidaZumbie = 150
var zumbieEspecial = 1
function startGamer() {

    while (true) {
        var qualPersonagem = prompt('Escolha um personagem: \n1- Lucas A.\n2- Ana B.\n3- Luiz H.')
        if (qualPersonagem == 1) {
            alert('Lucas A. escolhido')
            boxSelect()
            boxBattle()
            selecZumbie(qualPersonagem)
            trocarFase(1,0)
            break;
        } else if (qualPersonagem == 2) {
            alert('Ana B. escolhido')
            boxSelect()
            boxBattle()
            selecZumbie(qualPersonagem)
            trocarFase(2 ,0)
            break;
        } else if (qualPersonagem == 3) {
            alert('Luiz H. escolhido')
            boxSelect()
            boxBattle()
            selecZumbie(qualPersonagem)
            trocarFase(3,0)
            break;
        } else {
            alert('Personagem invalido')
        }
    }
}

function gameOver(){
    alert("Você foi morto por um humano, agora sua familia ficara com saudades =(")
    vidaZumbie = 150;
    zumbieEspecial = 1
    boxSelect()
    boxBattle()
}

function battleStage(vidaHumano, dZumbie, dHumano){
    var danoZumbie = Math.floor(Math.random() * dZumbie);
    var danoHumano = Math.floor(Math.random() * dHumano);
    vidaZumbie =  vidaZumbie - danoHumano
    vidaHumano = vidaHumano - danoZumbie
    alert(`Voce atacou o humano e o humano efetuou um ataque:\nDano Zumbie: ${danoZumbie}\nDano Humano: ${danoHumano}\nVocê está com ${vidaZumbie} de vida e o Humano está com: ${vidaHumano} de vida.`)
    return vidaHumano
}
function trocarFase(zumbie, num){
    fase= [[],[["Fase 1","lucasAf1()","stage1","enemi1"],['Fase 2',"lucasAf2()","stage2","enemi2"],['Fase 3',"lucasAf3()","stage3","enemi3"]],[["Fase 1","anaBf1()","stage4","enemi1"],['Fase 2',"anaBf2()","stage5","enemi2"],['Fase 3',"anaBf3()","stage6","enemi3"]],[["Fase 1","luizHf1()","stage2","enemi1"],['Fase 2',"luizHf2()","stage7","enemi2"],['Fase 3',"luizHf3()","stage8","enemi3"]]]
    document.getElementById('stageName').innerHTML = fase[zumbie][num][0]
    document.getElementById('faseButton').innerHTML = `<button onclick=${fase[zumbie][num][1]}>Iniciar Fase</button>`
    document.getElementById('stageImage').innerHTML = `<img src="assents/stages/${fase[zumbie][num][2]}.jpeg" alt="">`
    document.getElementById('stageHumano').innerHTML = `<img src="assents/enemis/${fase[zumbie][num][3]}.jpg" alt="">`
}
function recuperaVida(){
    vidaRecuperar = Math.floor(Math.random() * 30);
    vidaZumbie = vidaZumbie + vidaRecuperar
    alert(`Você está voltando para recupera forças sua vida ira recuperar em: ${vidaRecuperar}`)
    alert('Voce voltou para sala anterior para recuperar um pouco de sua força, estará seguindo novamente para proxima sala!!!')
}


function endGame(){
    alert("BY NITHACK")
    vidaZumbie = 150;
    zumbieEspecial = 1
    boxSelect()
    boxBattle()
}
function selecZumbie(num){
    const listaPersonagens = ['',['lucas','Lucas A.'],['ana','Ana B.'],['luiz','Luiz H.']]
    document.getElementById('newZumbiee').innerHTML = `<img src="assents/character/${listaPersonagens[num][0]}.png" alt="">`
    document.getElementById('nameCharacter').innerHTML = `${listaPersonagens[num][1]}`
}