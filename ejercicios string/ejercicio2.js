//Escribir un programa que permita obtener el numero de piso de un edificio de oficinas donde el 
//formato de numeración de las oficinas  es: “01.24” lo que significa piso 1 oficina 24.

function getFloorFromOfficeNumber(officeNumber) {
    let floor = officeNumber.match(/^\d+/);
    return floor ? floor[0] : "";
  }
  
  let officeNumber = "06.14";
  let floor = getFloorFromOfficeNumber(officeNumber);
  console.log(floor); 
  