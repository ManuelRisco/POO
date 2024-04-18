class persona {
    constructor(nombre,edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
}
const persona1 = new persona('juan', 30);
const persona2 = new persona('pedro', 23);

persona1.saludar();
persona2.saludar();
/*-------------------------------------------------------*/



class empleado extends persona {
    constructor(nombre,edad,cargo){
        super(nombre,edad);
        this.cargo = cargo;
    }
    presentarse(){
        console.log(`Hola, soy ${this.nombre}, tengo ${this.edad} años y soy ${this.cargo}.`);
    }
}
const empleado1 = new empleado('pedro', 35, 'desarrollador');
empleado1.saludar();
empleado1.presentarse();



/*--------------------------------------------------------*/
class prueba {
    constructor(dato1, dato2){
        this.dato1 = dato1;
        this.dato2 = dato2;
    }
    ejecucion(){
        console.log(`El ${this.dato1} es ${this.dato2}`);
    }
}

const almacen1 = new prueba('doc', 2);
const almacen2 = new prueba('risco', 3);

almacen1.ejecucion();
almacen2.ejecucion();




class coche {
    constructor(marca, modelo, year){
        this.marca = marca;
        this.modelo = modelo;
        this.year = year;
    }
        acelerar() {
            console.log('el coche esta acelerando.');
        }
        frenar () {
            console.log('El coche esta frenando.');
        }
        obtenerInformacion() {
            return `marca: ${this.marca}, modelo: ${this.modelo}, year: ${this.year}`;
        }
}

const informacion = new coche('asus', 'g15', '2020');

informacion.acelerar();
informacion.frenar();
console.log(informacion.obtenerInformacion());



/*---------------------------------------------*/

// Definición de la superclase Animal
class Animal {
    constructor(nombre) {
    this.nombre = nombre;
    }
    hacerSonido() {
    return "Haciendo sonidos genéricos";
    }
}


// Definición de la subclase Perro que extiende Animal
class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre); // Llamamos al constructor de superclase 
        this.raza = raza;
}
hacerSonido() {
    return "Guau, guau!";
}
moverCola() {
    return "Moviendo la cola felizmente";
}
}
// Creación de una instancia de la subclase Perro
const miPerro = new Perro("Firulais", "Labrador");
// Llamando a los métodos de la subclase y superclase
console.log(miPerro.nombre); // Salida: "Firulais"
console.log(miPerro.raza); // Salida: "Labrador"
console.log(miPerro.hacerSonido()); // Salida: "Guau, guau!"
console.log(miPerro.moverCola()); // Salida: "Moviendo la cola felizmente"




class animal {
    constructor(nombre){
        this.nombre = nombre;
    }
    hacersonido(){
        return "Haciendo sonidos genericos";
    }
}

class perro extends animal {
    constructor(nombre, raza){
        super(nombre);
        this.raza = raza;
    }

    hacersonido() {
        return "Guau, guau!";
    }
    movercola() {
        return "Moviendo la cola felizmente";
    }
}

// creacion de una instancia de la subclase perro

const miperro = new perro("Firulais" , "labrador");

// llamando a los metodos de la subclase y superclase

console.log(miperro.nombre);// firulais
console.log(miperro.raza);// labrador
console.log(miperro.hacersonido()); // guau, guau!
console.log(miperro.movercola()); // moviendo la cola felizmente

/*----------------------------------------------------------------*/

// Metodo estatico ---> Static

// ES UN TIPO ESPECIAL DE METODO QUE SE PUEDE LLAMAR DIRECTAMENTE DESDE LA CLASE MISA
// SIN LA NECESITADAD DE CREAR UN OBJETO O INSTANCIA DE LA CLASE,  POR EJEMPLO
// LOS CONSTRUCTORES, .this

// PARA DEFINIRLOS SE DEBE UTILIZAR LA PALABRA CLAVE "STATIC" ANTES DEL NOMBRE DEL METODO



class mathutils { //dentro una el metodo especial static
    static sumar(a,b){
        return a+b;
    }
    static restar(a,b){
        return a-b;
    }
 }

 console.log(mathutils.sumar(5,3)); //8
 console.log(mathutils.restar(10,4)); // 6


 /*--------------------------------------------------------------------*/

function reemplazarpalabraconregex(cadena, palabraAbuscar, palabraReemplazo) {
    const regex = new RegExp(palabraAbuscar, 'gi');

    const nuevaCadena = cadena.replace(regex,palabraReemplazo);

    return nuevaCadena;
}
const original = "La casa es bonita, la casa es grande.";
const nuevaCadena = reemplazarpalabraconregex(original, "casa", "hogar");

console.log("Orignal: ", original);
console.log("Reemplazada: ", nuevaCadena);