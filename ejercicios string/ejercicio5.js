//Escribir un programa para obtener el nombre de usuario de un correo electrónico

function getUsernameFromEmail(email) {
    let username = email.match(/^[^@]+/);
    return username ? username[0] : "";
  }
  
  let email = "alex@sudamericano.edu.ec";
  let username = getUsernameFromEmail(email);
  console.log(username); 
  