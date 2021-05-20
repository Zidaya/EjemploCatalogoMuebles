class Diseño{
    
    constructor(color, material){
        this._color = color;
        this._material = material;
    }
    get color(){
        return this._color;
    }
    set color(color){
        this._color = color;
    }
    get material(){
        return this._material;
    }
    set material(material){
        this._material = material;
    }
}

class Mesa extends Diseño{
    static contadorMesas = 0;

    constructor(color, material){
        super(color, material);
        this._idMesa = ++Mesa.contadorMesas;
    }
    get idMesa(){
        return this._idMesa;
    }
    toString(){
        return `Mesa: [idMesa: ${this._idMesa}, color: ${this._color}, material: ${this._material}]`;
    }
}

class Sofa extends Diseño{
    static contadorSofas = 0;

    constructor(color, material){
        super(color, material);
        this._idSofa = ++Sofa.contadorSofas;
        
    }
    get idSofa(){
        return this._idSofa;
    }
    toString(){
        return `Sofa: [idSofa: ${this._idSofa}, color: ${this._color}, material: ${this._material}]`;
    }
}

class Habitacion{
    static contadorHabitaciones = 0;

    constructor(diseño, mesa, sofa){
        this._idHabitacion = ++Habitacion.contadorHabitaciones;
        this._diseño = diseño;
        this._mesa = mesa;
        this._sofa = sofa;
    }
    toString(){
        return `Habitacion: [idHabitacion: ${this._idHabitacion} ${this._diseño} \n ${this._mesa} \n ${this._sofa}]`;
    }
    
}

class Pedido{
    static contadorPedidos = 0;

    constructor(){
        this._idPedido = ++Pedido.contadorPedidos;
        this._habitaciones = [];
    }
    get idPedido(){
        return this._idPedido;
    }
    agregarHabitacion(habitacion){
        this._habitaciones.push(habitacion);
    }
    mostrarPedido(){
        let habitacionesPedido = '';
        for( let habitacion of this._habitaciones ){
            habitacionesPedido += `\n${habitacion}`;
        }

        console.log(`Pedido: ${this._idPedido}, Habitaciones: ${habitacionesPedido}`);
    }
}

let mesa1 = new Mesa('oscuro', 'madera');
console.log( mesa1.toString() );

let sofa1 = new Sofa('rojo', 'cuero');
console.log( sofa1.toString() );

let habitacion1 = new Habitacion('Victoriana', mesa1, sofa1);
console.log( `${habitacion1}`);

let pedido1 = new Pedido();
pedido1.agregarHabitacion(habitacion1);
pedido1.mostrarPedido();