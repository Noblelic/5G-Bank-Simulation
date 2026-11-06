'use strict'

const sendbtn = document.querySelector('.transferbtn')
const pop = document.querySelector('.transfer-container')
const overlays = document.querySelector('.overlay')
const closebtn = document.querySelector('.cancelbtn')



sendbtn.addEventListener('click', function(){

 Addpop();
})

closebtn.addEventListener('click', function(){

    Removepop()
})


const Addpop = function(){
    pop.classList.remove('hidden')
    overlays.classList.remove('hidden')
}

const Removepop = function(){
pop.classList.add('hidden')
    overlays.classList.add('hidden')
}


