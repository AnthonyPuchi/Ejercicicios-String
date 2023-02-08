//Escribir un programa que obtenga el mes de la siguiente fecha: “2022-10-31”


function getMonthFromDate(dateString) {
    let date = new Date(dateString);
    let month = date.getMonth();
    return month + 1;
  }
  
  let dateString = "2002-10-14";
  let month = getMonthFromDate(dateString);
  console.log(month); 
  