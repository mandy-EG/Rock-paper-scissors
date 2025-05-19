const opciones = ["piedra", "papel", "tijera"];

let ContadorComputer = 0
let ContadorHuman = 0

let contador = 0


while (contador < 5){

    const GetHumanChoice = () => {
        const jugador = prompt("Tus opciones\npiedra\npapel\ntijera\nQue eliges: ");
        return jugador.toLowerCase();
    }
    
    const ChoiceHuman = GetHumanChoice()
    
    const GetComputerChoice = () => {
        return Math.floor(Math.random() * opciones.length);
    }
    const ChoiceComputer = GetComputerChoice()
    
    if (ChoiceHuman === "piedra" && ChoiceComputer === 2){
        console.log('Usted gana la computadora saco: tijera');
        ++ContadorHuman;
    }
    else if (ChoiceHuman === 'piedra' && ChoiceComputer === 1){
        console.log('Usted pierde la computadora saco: papel ');
        ++ContadorComputer;
    }
    else if(ChoiceHuman === "papel" && ChoiceComputer === 0){
        console.log('Usted gana la computadora saco piedra');
        ++ContadorHuman;
    }
    else if (ChoiceHuman === 'papel' && ChoiceComputer === 2){
        console.log('Usted pierde la computadora saco: tijera');
        ++ContadorComputer;
    }
    else if(ChoiceHuman === "tijera" && ChoiceComputer === 1){
        console.log('Usted gana la computadora saco: papel');
        ++ContadorHuman;
    }
    else if (ChoiceHuman === 'tijera' && ChoiceComputer === 0){
        console.log('Usted pierde la computadora saco piedra');
        ++ContadorComputer;
    }
    else if(ChoiceHuman === ChoiceComputer){
        console.log('Empate, los 2 sacaron el mismo resultado.');
    }

    contador++;
}

if (ContadorHuman >= ContadorComputer){
    console.log("Usted gano con " + ContadorHuman + " WINS")
}
else{
    console.log("La computadora gano con " + ContadorHuman + " WINS")
}