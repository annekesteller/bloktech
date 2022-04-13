const form = document.querySelector('form');
const verwijderRequired = () => {
    document.getElementById('akkoord').removeAttribute("required");
}

verwijderRequired(); 

form.addEventListener('submit', (event) => {
	
	// event.preventDefault(); 
	
	const voorwaarden = document.getElementById('voorwaarden');
	const akkoord = document.getElementById('akkoord'); 
	const pElement = document.querySelector('p'); 

	
	if(akkoord.checked==true){
		console.log("correct")
        // location.href = '/account';

        // // hierdoor wordt de pagina submit-form gerenderd 
	}
	
	else{
		console.log("incorrect")
		voorwaarden.classList.add("invalid"); 
		pElement.innerHTML = "Het is verplicht om akkoord te gaan met de algemene voorwaarden." ; 


	
}}) 

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=52.3717204&lon=4.9020727&appid=44abe3804d948f07d6f07a1052a632b8&units=metric`;

async function getApi(url) {
  const response = await fetch(url);
  const data = await response.json();

//   geeft de url mee 
  if (response) {

	//  selecteert de beinodigde html elementen om de api te implementeren 
    const weerIcon = document.querySelector(`header > section > img`);
    const huidigeTemperatuur = document.querySelector(`header > section > p`);
   
    //  stopt alle data van de api in een variabelen 
    const huidigeWeer = data;

	// stopt het juiste icoontje van alle data in een variabelen 
    const icoontje = data.weather[0].icon;

	// stopt de temperatuur van alle data in een variabelen 
    const temperatuur = data.main.temp;

	// geeft de juiste afbeelding mee aan de src van de img 
    weerIcon.src = `http://openweathermap.org/img/w/` + icoontje + `.png`;

	//  geeft de temperatuur mee met een celcius teken 
    huidigeTemperatuur.innerHTML = temperatuur + " °C";
  }
}

//  voert de functie en geeft de url mee aan de functie 
getApi(apiUrl);

