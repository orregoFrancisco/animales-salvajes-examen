import Animal from "./Animales.js"



export default class Oso extends Animal {
    constructor(nombre, edad, Img, comentarios, sonido) {
        super(nombre, edad, Img, comentarios, sonido)
    }

        grunir() {
       
            let audio = document.getElementById("player")
            audio.setAttribute("src", `assets/sounds/${this.sonido}`);
            audio.play()
            let atrivutos = document.getElementById("atrivutos");
             atrivutos.innerHTML = `
            <img id="Oso" class = "rounded mx-auto  d-block" src="../assets/imgs/${this.Img}">
            <p class="text-white text-center">especie: ${this.nombre}</p>
            <p class="text-white text-center">edad: ${this.edad}</p>
            <p class="text-white text-center">descripcion: ${this.comentarios} </p>`

       
    }
}