const marsCost = 5000;
const moonCost = 10000;
// travel cost calculate
function handleQuintity(operator, planet, planetCost, totalCost) {
  // input value
  const inputValue = document.getElementById(planet);
  // convert planets value
  let convertInput = parseFloat(inputValue.value);
  
      // increment decrement operators
    const operators = document.getElementById(operator);

    if (operator === "plus") {
      convertInput = convertInput + 1;
      inputValue.value = convertInput;
      
    }else{
      // Error handeling
      if(convertInput < 1){
        return;
      }
      convertInput = convertInput - 1;
      inputValue.value = convertInput;
    }
  journeyTotalCost(planet, convertInput, planetCost, totalCost);
}

let marsTotalCost = 0;
let moonTotalCost = 0;
function journeyTotalCost(planet, convertInput, planetCost, totalCost) {
  const planetValueUpdate = document.getElementById(planetCost);

  if(planet === "mars") {
    marsTotalCost = convertInput * marsCost;
    planetValueUpdate.innerText = marsTotalCost;
  } else {
    moonTotalCost = convertInput * moonCost;
    planetValueUpdate.innerText = moonTotalCost;
  }

  // update total cost UI
  const currentTotalCost = document.getElementById(totalCost);
  const convertTotalCost = parseFloat(currentTotalCost.innerText);
  const updateTotalCost = marsTotalCost + moonTotalCost;
  currentTotalCost.innerText = updateTotalCost;
}