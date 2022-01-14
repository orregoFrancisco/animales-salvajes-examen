
import AnimalesG from "./elementsAnimal.js"
import Leon from "./claseLeon.js"
import Aguila from "./claseAguila.js"
import Serpiente from "./claseSerpiente.js"
import Oso from "./claseOso.js"
import Lobo from "./claseLobo.js"



let llamada = await AnimalesG.getData();

window.playSound = function (indice) {
    let animal = animalesTodos[indice];
    if (animal.nombre == "Aguila") {
        animal.chillar();
        (function () {
            $(function () {

                $('#exampleModal').on('click').modal()
            })
        }());
    } if (animal.nombre == "Leon") {
        animal.rugir();
        (function () {
            $(function () {

                $('#exampleModal').on('click').modal()
            })
        }());
    } if (animal.nombre == "Lobo") {
        animal.aullar();
        (function () {
            $(function () {

                $('#exampleModal').on('click').modal()
            })
        }());
    } if (animal.nombre == "Oso") {
        animal.grunir();
        (function () {
            $(function () {

                $('#exampleModal').on('click').modal()
            })
        }());
    } if (animal.nombre == "Serpiente") {
        animal.sisear();
        (function () {
            $(function () {

                $('#exampleModal').on('click').modal()
            })
        }());
    }

}


let seleccionarAnimal = document.getElementById("animal")

seleccionarAnimal.addEventListener('change', (event) => {

    const resultado = document.getElementById('preview');
    let animalLlamando = llamada.animales.find(animal => animal.name === seleccionarAnimal.value)
    console.log(animalLlamando)
    resultado.style.backgroundImage = `url(../assets/imgs/${animalLlamando.imagen})`

});




let animalesTodos = []
let boton = document.getElementById("btnRegistrar")

boton.addEventListener("click", (cambio) => {

    let edad = document.getElementById("edad");
    let num1 = 1;

    let comentar = document.getElementById("comentarios");

    if (edad.value == "") {
        alert("agrega edad ")
        return num1 = 2
    } if (comentar.value == "") {
        alert("agrega comentario")
        return num1 = 2
    }



    if (seleccionarAnimal.value == "Leon") {
        num1;
        let animalLlamando = llamada.animales.find(animal => animal.name === seleccionarAnimal.value)
        let leon = new Leon(seleccionarAnimal.value, edad.value, animalLlamando.imagen, comentar.value, animalLlamando.sonido)
        let mostrarImagenDeClase = document.getElementById("Animales");

        let divI = document.createElement("container");
        let LeonPng = `<button id="sonidoLeon" type="button" class="btn btn-primary" onclick="playSound(${animalesTodos.length})" >sonido Leon</button>
                           <img id="${animalLlamando.name}"  class = "ml-3 d-block" src="../assets/imgs/${animalLlamando.imagen}">`
        divI.innerHTML = ` ${LeonPng}`
        mostrarImagenDeClase.appendChild(divI)
        animalesTodos.push(leon)
        console.log(leon)
        console.log(animalesTodos)
        seleccionarAnimal.value = "";
        edad.value = "";
        comentar.value = "";
        const resultado = document.getElementById('preview');
        resultado.style.backgroundImage = `url(../assets/imgs/lion.svg)`

    }


    if (seleccionarAnimal.value == "Aguila") {
        let animalLlamando = llamada.animales.find(animal => animal.name === seleccionarAnimal.value)
        let aguila = new Aguila(seleccionarAnimal.value, edad.value, animalLlamando.imagen, comentar.value, animalLlamando.sonido)

        let mostrarImagenDeClase = document.getElementById("Animales");
        let divI = document.createElement("container");
        let AguilaPng = `<button  type="button" class="btn btn-primary" onclick="playSound(${animalesTodos.length})" >sonido Aguila</button>  
                                 <img id="Aguila" class = "d-block"  src="../assets/imgs/${animalLlamando.imagen}">`
        divI.innerHTML = ` ${AguilaPng}`

        mostrarImagenDeClase.appendChild(divI)

        animalesTodos.push(aguila)
        console.log(aguila)
        console.log(animalesTodos)
        seleccionarAnimal.value = "";
        edad.value = "";
        comentar.value = "";
        const resultado = document.getElementById('preview');
        resultado.style.backgroundImage = `url(../assets/imgs/lion.svg)`


    }

    if (seleccionarAnimal.value == "Lobo") {
        let animalLlamando = llamada.animales.find(animal => animal.name === seleccionarAnimal.value)
        let lobo = new Lobo(seleccionarAnimal.value, edad.value, animalLlamando.imagen, comentar.value, animalLlamando.sonido)
        let mostrarImagenDeClase = document.getElementById("Animales");
        let divI = document.createElement("container");
        let loboPng = `<button id="sonidoLeon" type="button" class="btn btn-primary" onclick="playSound(${animalesTodos.length})" >sonido Lobo</button>
                      <img id="${animalLlamando.name}" class = "ml-3 d-block" onclick="playSound()" src="../assets/imgs/${animalLlamando.imagen}">`
        divI.innerHTML = ` ${loboPng}`

        mostrarImagenDeClase.appendChild(divI)
        animalesTodos.push(lobo)
        console.log(lobo)
        console.log(animalesTodos)
        seleccionarAnimal.value = "";
        edad.value = "";
        comentar.value = "";
        const resultado = document.getElementById('preview');
        resultado.style.backgroundImage = `url(../assets/imgs/lion.svg)`



    } if (seleccionarAnimal.value == "Oso") {
        let animalLlamando = llamada.animales.find(animal => animal.name === seleccionarAnimal.value)
        let oso = new Oso(seleccionarAnimal.value, edad.value, animalLlamando.imagen, comentar.value, animalLlamando.sonido)
        let mostrarImagenDeClase = document.getElementById("Animales");
        let divI = document.createElement("container");
        let osoPng = `<button id="OsoBoton" type="button" class=" btn btn-primary" onclick="playSound(${animalesTodos.length})" >sonido Oso</button>
                        <img id="Oso" class = "ml-3 d-block" src="../assets/imgs/${animalLlamando.imagen}">`
        divI.innerHTML = ` ${osoPng}`
        mostrarImagenDeClase.appendChild(divI)


        animalesTodos.push(oso)
        console.log(oso)
        console.log(animalesTodos)
        seleccionarAnimal.value = "";
        edad.value = "";
        comentar.value = "";
        const resultado = document.getElementById('preview');
        resultado.style.backgroundImage = `url(../assets/imgs/lion.svg)`




    } if (seleccionarAnimal.value == "Serpiente") {
        let animalLlamando = llamada.animales.find(animal => animal.name === seleccionarAnimal.value)
        let serpiente = new Serpiente(seleccionarAnimal.value, edad.value, animalLlamando.imagen, comentar.value, animalLlamando.sonido)
        let mostrarImagenDeClase = document.getElementById("Animales");
        let divI = document.createElement("container");
        let serpientePng = `<button id="serpienteBoton" type="button" class="btn btn-primary" onclick="playSound(${animalesTodos.length})" >sonido Serpiente</button>
                               <img id="Serpiente" class = "d-block" src="../assets/imgs/${animalLlamando.imagen}">`
        divI.innerHTML = ` ${serpientePng}`

        mostrarImagenDeClase.appendChild(divI)



        animalesTodos.push(serpiente)
        console.log(serpiente)
        console.log(animalesTodos)
        const resultado = document.getElementById('preview');
        resultado.style.backgroundImage = `url(../assets/imgs/lion.svg)`
        seleccionarAnimal.value = "";
        edad.value = "";
        comentar.value = "";



    }



})






















// let imagenClse = document.getElementById("imagenJava")



