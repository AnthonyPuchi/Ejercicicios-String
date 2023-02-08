//Escribir un programa que obtenga las iniciales de un jugador de futbol, 
//sabiendo que se usa iniciales y numero. Ejemplo CR-7, LM-10, LFS-10, AV-25

function getInitialsFromPlayer(playerString) {
    let initials = playerString.match(/^\D+/);
    return initials ? initials[0] : "";
  }
  
  let playerString = "CR-7";
  let initials = getInitialsFromPlayer(playerString);
  console.log(initials); 
  