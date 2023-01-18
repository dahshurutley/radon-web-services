

const userAction = async () => {
  const response = await fetch('https://api.thecatapi.com/v1/images/search');
  const myJson = await response.json(); //extract JSON from the http response
  return myJson[0]['url'] 
  // do something with myJson
}


userAction().then(value => console.log(value));


  
function myFunction() {
    
  document.getElementById("imageid").src=`${value}`
  console.log(value)
}

console.log(image())
