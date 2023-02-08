//Escribir un programa que obtenga el nombre de usuario de facebook desde la url.

function getUsernameFromFacebookURL(facebookURL) {
    let username = facebookURL.match(/facebook\.com\/([^\/]+)/);
    return username ? username[1] : "";
  }
  
  let facebookURL = "https://www.facebook.com/andre";
  let usernamee = getUsernameFromFacebookURL(facebookURL);
  console.log(usernamee); 
  