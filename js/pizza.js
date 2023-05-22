const flour = '400 Harina de fuerza';
const water = '200 ml de agua tibia';
const oil = '2 cucharadas de aceite de oliva';
const freshYeast = '15 gramos de levadura fresca';
const salt = 'una pizca de sal';
const extraFlour = 'Un poco más de harina para la encimera';


const extraIngredients = ['TomatoeSouce', 'Mozzarrella', 'Anchovies', 'BlackOlives', 'Pineapple', 'RoastChicken', 'BlueCheese']; 
let bakeTime = 15;

function start(){
    putFlourInBol();
    base();
    mix()
    restMixandRest();
    flattenTheDough();
    firtsCooking();
    addTheExtraIngredients();
    secondCookingandServer();
    bounappetit();
}

function doDought(){
    
    
}

function putFlourInBol(){
    console.log('Anade la harina en el bol');
}

function put_salt(){
    console.log('Mezclar la harina con la sal');
}

function  mix_water(){
    console.log('Añadir el agua con la levadura');
}

function add_oil(){
    console.log('Añade el aceite')
}

function base(){
    put_salt();
    mix_water();
    add_oil();
}

function mix(){
    console.log('Mezcla todos los ingredientes hasta obtener una masa homogenea');
}

function restMixandRest(){
    console.log('Deja reposar la masa 30 minutos', 'pasado este tiempo la amasamos 5 minutos', 'y volvemos a dejar reposar otros 30 minutos');
}

function flattenTheDough(){
    console.log('Una vez pasado el tiempo de reposo, aplanamos la masa con un rodillo');
}

function firtsCooking(){
    console.log('Una vez aplanada la masa, la ponemos a cocer al horno unos 4 minutos a 200 grados');
}

function addTheExtraIngredients(){
    console.log('Pasado el tiempo de primera cocción añadimos el tomate, la mozzarella, las olivas, las anchoas, la piña, el pollo y el queso azul');
}

function secondCookingandServer(){
    console.log('Cuando ya hayamos añadido el resto de ingredientes, la ponemos en el horno unos 15 minutos, pasado este tiempo, sacamos la pizza y servimos');
}

function bounappetit(){
    console.log('Boun Appetite')
}

start()




