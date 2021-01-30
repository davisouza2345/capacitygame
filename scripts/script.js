let timer = 0
let contRounds = 1
const listOfNames = []

const initBtn = document.querySelector('.initBtn')

initBtn.style.display = "none"
const roundTitle = document.querySelector('.roundTitle')
roundTitle.textContent = `Round ${contRounds}`
const rounds = document.getElementById('rounds')
const battle = document.getElementById('battle')

rounds.style.display = "none"

function appendList(){

}
function random(max) {
    return Math.floor(Math.random() * max + 1)

}

function shuffle(array) {
    let newPos, temp

    for(let i = array.length - 1; i > 0; i--){
        newPos = Math.floor(Math.random() * (i+1))
        temp = array[i]
        array[i] = array[newPos]
        array[newPos] = temp

        return array;
    }
  }


if (document.getElementById('qntPlayers').value == "") {
    document.querySelector('.nameslabel').style.display = "none"
}
document.querySelector('.nextOpt').addEventListener('click', (ev)=>{
    if (document.getElementById('qntPlayers').value == "") {
        console.log(document.getElementById('qntPlayers').value);
        alert('preencha todos os campos')

    }else if(document.getElementById('qntPlayers').value % 2 != 0){
        alert('apenas números par, por favor')
        location.reload()
    }else{
        document.querySelector('.qntLabel').style.display = "none"
        document.getElementById('qntPlayers').style.display ="none"
        document.querySelector('.nameslabel').style.display = ""
        ev.currentTarget.style.display = "none"

        
        for (let i = 0; i < document.getElementById('qntPlayers').value; i++) {
            const inputs = document.createElement('input')
            inputs.classList.add('namesQnt')
            inputs.setAttribute('type', 'text')
            document.getElementById('options').appendChild(inputs)
        }
        initBtn.style.display = "block"
        const namesQnt = document.querySelectorAll('.namesQnt') 
       

        initBtn.addEventListener('click', ()=>{
            namesQnt.forEach(element => {
                listOfNames.push(element.value)
            })

            for (let i = 0; i < listOfNames.length; i++) {
                
                const div = document.createElement("div")
                const span = document.createElement("span")
                const players = document.createTextNode(listOfNames[i])
                const point = document.createTextNode(random(10))
                span.appendChild(point)
                div.appendChild(players)
                div.appendChild(span)
                battle.appendChild(div)   
            }

            console.log(listOfNames);
            document.getElementById('container').style.display = "none"
            document.getElementById('load').style.display = "flex"
            let loadTimer = setInterval(()=>{
                timer+=1
                if (timer==10) {
                    clearInterval(loadTimer)
                    document.getElementById('load').style.display = "none"
                    
                    rounds.style.display = "block"
                    appendList()
                   

                    const roundsSystem = document.createElement('button')
                    roundsSystem.classList.add('moreRounds')
                    roundsSystem.textContent = "jogar +1"
                    rounds.appendChild(roundsSystem)

                    roundsSystem.addEventListener('click', ()=>{
                        shuffle(listOfNames)
                        contRounds++
                        battle.style.animation = "none"
                        roundTitle.style.animation = "none"
                        roundTitle.textContent = `Round ${contRounds}`
                        setTimeout(()=>{
                            battle.style.animation = "roundAnimation 1s linear"
                            roundTitle.style.animation = "roundAnimation 1s linear"
                        },5)
                        
                        while(battle.firstChild){
                            battle.removeChild(battle.firstChild)
                            if(!battle.firstChild){
                                break
                            }
                        }

                        shuffle(listOfNames)

                        for (let i = 0; i < listOfNames.length; i++) {
                                
                            const div = document.createElement("div")
                            const span = document.createElement("span")
                            const players = document.createTextNode(listOfNames[i])
                            const point = document.createTextNode(random(10))
                            span.appendChild(point)
                            div.appendChild(players)
                            div.appendChild(span)
                            battle.appendChild(div)
                             
                        }
                    })
                }
            }, 300)
            

            
        })
    }
})

