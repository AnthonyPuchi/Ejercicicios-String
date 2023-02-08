//Escribir un programa de extraiga las parte numérica de una placa de un auto.

function extractNumberFromPlate(plate) {
    let number = plate.match(/\d+/g);
    return number ? number.join("") : "";
  }
  
  let plate = "HJT-7383";
  let number = extractNumberFromPlate(plate);
  console.log(number); 
  