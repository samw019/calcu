let a;
let b;
let op;

while(true) {
    a = parseFloat(prompt("ingrese primer valor: "));
    b = parseFloat(prompt("ingrese segundo valor: "));
    op = prompt("ingrese operación a realizar: ");
    
    if(op == "salir") {
        break;
    }
    
    let result = calcu(a, b, op);

    function calcu(a, b, op) {
        if(op == "suma") {
            return a + b;
        }
        else if(op == "resta") {
            return a - b;
        }
        else if(op == "multi") {
            return a * b;
        }
        else if(op == "div" && b != 0) {
            return a / b;
        }
        else {
            console.log("error en la operación");
        }
    }
    
    console.log("el resultado es: ", result);
    
    let continuar = prompt("¿Quieres realizar otra operación? si/no: ");
    
    if(continuar != "no" && continuar != "si") {
        console.log("error");
        break;
    }
    else if(continuar == "si") {
        console.log("realizar nueva operación.");
    }
    else if(continuar == "no") {
        console.log("Fin del programa...");
        break;
    }
}
