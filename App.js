const opciones = ["piedra", "papel", "tijera"];


let contador = 0

while (contador <= 5){

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
    }
    else if (ChoiceHuman === 'piedra' && ChoiceComputer === 1){
        console.log('Usted pierde la computadora saco: papel ');
    }
    else if(ChoiceHuman === "papel" && ChoiceComputer === 0){
        console.log('Usted gana la computadora saco piedra');
    }
    else if (ChoiceHuman === 'papel' && ChoiceComputer === 2){
        console.log('Usted pierde la computadora saco: tijera');
    }
    else if(ChoiceHuman === "tijera" && ChoiceComputer === 1){
        console.log('Usted gana la computadora saco: papel');
    }
    else if (ChoiceHuman === 'tijera' && ChoiceComputer === 0){
        console.log('Usted pierde la computadora saco piedra');
    }
    else if(ChoiceHuman === ChoiceComputer){
        console.log('Empate, los 2 sacaron el mismo resultado.');
    }
    ++contador;
}