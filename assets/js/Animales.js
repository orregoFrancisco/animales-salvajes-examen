export default class Animal {
    #nombre
    #edad
    #Img
    #comentarios
    #sonido
    constructor(nombre, edad, Img, comentarios, sonido) {
        this.#nombre = nombre;
        this.#edad = edad;
        this.#Img = Img;
        this.#comentarios = comentarios;
        this.#sonido = sonido;
    }

    get nombre() {
        return this.#nombre;
    }

    get edad() {
        return this.#edad;
    }

    get Img() {
        return this.#Img;
    }

    get comentarios() {
        return this.#comentarios
    }

    set comentarios(newComentarios) {
        this.#comentarios = newComentarios;
    }


    get sonido() {
        return this.#sonido
    }
}