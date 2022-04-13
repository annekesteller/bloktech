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



