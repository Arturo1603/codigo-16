// forEach

// 


const products = [
    {
      name: "Laptop HP",
      price: 1300,
      brand: "HP",
    },
    {
      name: "Laptop Gamer",
      price: 2100,
      brand: "Lenovo",
    },
    {
      name: "Laptop Super Poderosa",
      price: 5300,
      brand: "Alien Ware",
    },
    {
      name: "Laptop/Tablet",
      price: 2400,
      brand: "ASUS",
    },
];

// users.forEach(user)
// movies.forEach(movie)

// products.forEach((product, index) => {});

// * forEach

const productsIterForEach = products.forEach((product) => {
    // Recurden que product es cada elemento de mi array
    // console.log(product.name);
    return product.price - 100;
  });
  
  //* map
  // queremos agregar un nuevo campo al array de objetos
  // ese campo se llamara descuente que sera el precio - 100 soles
  
  // En este caso estamos calculado el campo discount y lo estamos
  // guardando en productsIterMap
  
  // Los valores que esta capturando nuestro map los esta guardando en
  // la varable productsIterMap y esto sera un arreglo de los
  // resultados
  const productsIterMap = products.map((product) => {
    // 1200
    // 2000
    // 5200
    // 2300
    return product.price - 100;
  });
  
  // Resument: Siempre el map retorna un array de elementos
  
  console.log("forEach", productsIterForEach);
  console.log("map", productsIterMap);
  // Cuando decimos que forEach no retorna nada quiere decir que no se
  // puede guardar dentro de una variable
  const edades = [23, 21, 34, 45, 28, 30];
  const edadesAlCuadrado = edades.map((edad) => Math.pow(edad, 2));
  console.log(edadesAlCuadrado);


  // reto 1 
  // Crear un array de edades
  // const edades = [23, 21, 34, 45, 28, 30];
  // y usando for o forEach hagan que una variable guarde el cuadrado de las edades



const EdadesNuevas = [];

edades.forEach(edad =>{
  EdadesNuevas.push(Math.pow(edad, 2));
})
console.log(EdadesNuevas);


const clothes = [
  {
    brand: "Mango",
    type: "T-shirt",
    price: 200,
    store: "Falabella",
    rating: 4.3,
    features: {
      color: "green",
      size: "small",

    }
  },
  {
    brand: "Zara",
    type: "Pants",
    price: 300,
    store: "Zara",
    rating: 3.9,
    features: {
      color: "black",
      size: "small",
      
    }
  },{
    brand: "Tommy",
    type: "Shirt",
    price: 120,
    store: "Tommy",
    rating: 4.3,
    features: {
      color: "blue",
      size: "M",
      
    }
  }
]

// Filter

// Filter es el hermano de map
// tambien retorna un array de elementos, sin embargo filter sirve para poder crear filtros, en base a una condicion

// queremos que solo los productos que tengan como precio > 150
// si el elemento es > 100 entonces guardalo en la variable filtro
// filtro de 1 elemento
const filtro = clothes.filter((clothe) => clothe.price > 150);

// filtro de mas de 1 condicion
const filtro2 = clothes.filter((clothe) => clothe.price > 200 && clothe.rating < 4);

console.log(filtro);
console.log(filtro2);

const filtro3 = clothes.map(clothe => {
  if (clothe.price > 150 && clothe.rating > 5){
    return clothe;
  }
});
console.log("filtro 3",filtro3);

// Quiero que en el string clothe.type busques al "shirt" existe
// un truco para evitarnos el tema de las mayusculas y minusculas
// es convertir el texto a mayuscula o minuscula
// T-shirt > t-shirt
// Shirt > shirt

// includes basicamente sirve para buscar algo en un texto, es textsensitive osea, sensible a las mayusculas y minusculas
// ejemplo
const frase = "Hola me llamo Carlos";
// Basicamente includes recibe un parametro string y lo busca en el texto
// si lo encuentra retorna true si no lo encuentra retorna false

console.log(frase.includes("Hola"));

const filtroShirt = clothes.filter((clothe) => clothe.type.toLowerCase().includes("shirt"));

console.log("filtroshirt",filtroShirt);

// Find
// A diferencia de filter, find solo retorna un elemento, es decir nos da una busqueda de solamente 1 elemento 
// osea no retorna un array
// El elemento que retorna find sera el primero que encuentre
const numbers = [10, 20, 30, 40, 50, 60];

const numeroMayoresFind = numbers.find((number) => number > 30 );

console.log("numero mayores find", numeroMayoresFind);


const cars = [
  {
    model : "A-200",
    price : 34000,
    brand : "Mercedez",
  },
  {
    model : "GLA 200",
    price : 14000,
    brand : "Mercedez",
  },
  {
    model : "A-200",
    price : 34000,
    brand : "bmw",
  },
]

const MercedezFind = cars.find( (car) => car.brand === "Mercedez");
console.log("find Mercedez", MercedezFind);


// Find tiene un hermanito findIndex que retorna el indice
// es lo mismo que find pero retorna el indice

const filtroIndice = cars.findIndex((car) => car.brand === "Mercedez");
console.log("filtroIndice", filtroIndice);