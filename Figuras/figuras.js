//C odigo del cuadrado
console.group("Cuadrado");
// const ladoCudrado = 5;
// console.log("Los lados del cuadrado miden: "+ ladoCudrado+ " cm ");


function Perimetrocuadrado(lado){
    return lado * 4;
} 

// console.log("El perimetro del cuadrado mide: "+ Perimetrocuadrado +" cm ");

function AreaCuadrado(lado){
    return lado * lado
}

// console.log("El area del cuadrado mide: "+ AreaCuadrado+ " cm^2");
console.groupEnd();

//Codigo del triangulo
console.group("Triangulo");
// const ladoTriangulo=6;

// const ladoTriangulo1=6;

// const baseTriangulo=4;

// const alturaTriangulo=5.5;



// console.log("Los lados del triangulo miden: " 
// + ladoTriangulo 
// + " cm "+ "y la base mide : "+baseTriangulo+ " cm. ");

// console.log("La altura del Triangulo mide: "+ alturaTriangulo +" cm ");

function PerimetroTriangulo(lado1,lado2, base){
    return lado1+lado2+base
}

// console.log("El perimetro del triangulo mide: "+ PerimetroTriangulo+ " cm ");

function AreaTriangulo(altura,base){
    return (base*altura)/2
}

// console.log("El area del triangulo mide: "+ AreaTriangulo +" cm^2");


console.groupEnd();

//Codigo circulo

console.group("Circulo");

// const RadioCirculo= 4;

// const Diametrocirculo= RadioCirculo * 2;

const PI =Math.PI;


function DiametroCirculo(radio){
    return radio * 2;
} 
function PerimetroCirculo(radio){
    const diametro= DiametroCirculo(radio);
    return diametro*PI;

}
function areaCirculo(radio){
    return (radio * radio)*PI
}

// console.log("El perimetro del circulo mide: "+ PerimetroCirculo);


// const AreaCirculo= (RadioCirculo*RadioCirculo)*PI;

// console.log("La area del circulo es: "+ AreaCirculo +" cm^2");

console.groupEnd();


//Aqui interactuamos con HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = Perimetrocuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = AreaCuadrado(value);
    alert(area);
}


function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTrianguloL1");
    const value1 = parseInt(input1.value);

    const input2 = document.getElementById("InputTrianguloL2");
    const value2 = parseInt(input2.value);
    
    const input3 = document.getElementById("InputTrianguloL3");
    const value3 =  parseInt(input3.value);


    const perimetro = PerimetroTriangulo(value1,value2,value3);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const input1 = document.getElementById("InputTrianguloAltura");
    const altura = parseInt(input1.value);


    const input2 = document.getElementById("InputTrianguloBase");
    const base = parseInt(input2.value);

    const area = AreaTriangulo(base,altura);
    alert(area);
}


function calcularTodoCirculo(){
    
    const input = document.getElementById("InputCirculoRadio");
    const value = input.value;

    const diametro =parseFloat(DiametroCirculo(value)).toFixed(2);
    const perimetro=parseFloat(PerimetroCirculo(value)).toFixed(2);
    const area =parseFloat(areaCirculo(value)).toFixed(2);

    alert("Tu circulo tiene un diametro de " + diametro + " cm " + " un perimetro de " + perimetro+  " cm " + " y un area de " + area +  " cm ")
}

function AlturaTrianguloIsoceles(lado1,lado2,ladobase){
    if (lado1!=lado2){
        alert("Los lados no son iguales vuelva a ingresar los numeros")
    }
    if (lado1==lado2) {
        const interno=(lado1**2)-((ladobase**2)/4);
        const height=Math.sqrt(interno); 
        alert("La altura de tu triangulo isoceles es: "+ parseFloat(height).toFixed(2) + " cm ")

    }
}

function CalcularIsoceles(){
    const lado1=document.getElementById("InputIsocelesL1");
    const vlado1=parseInt(lado1.value);

    const lado2=document.getElementById("InputIsocelesL2");
    const vlado2=parseInt(lado2.value);

    const ladobase=document.getElementById("InputIsocelesLB");
    const vladobase=parseInt(ladobase.value);

    const Altura=AlturaTrianguloIsoceles(vlado1,vlado2,vladobase);

}