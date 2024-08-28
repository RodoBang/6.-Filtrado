// Creamos un arreglo de numeros.
let numeros = [5, 3, 8, 1, 2, 7, 4, 6];

// Valor dado por el usuario
let valor = 5;

// Filtramos el arreglo
let numerosFiltrados = numeros.filter(function(numero){
    return numero > valor;
});

// Imprimimos el arreglo filtrado
console.log("Numeros mayores que "+valor+": "+numerosFiltrados);

// La salida en consola es: Numeros mayores que 5: 8,7,6