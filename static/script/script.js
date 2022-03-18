const form = document.querySelector('form');
const verwijderRequired = () => {
    document.getElementById('akkoord').removeAttribute("required");
}

verwijderRequired(); 

form.addEventListener('submit', (event) => {
	
	event.preventDefault(); 
	
	const akkoord = document.getElementById('akkoord');
	
	if(akkoord.checked==true){
		console.log("correct")
        location.href = '/submit-form';

        // hierdoor wordt de pagina submit-form gerenderd 
	}
	
	else{
		console.log("incorrect")
		akkoord.classList.add("invalid"); 

	
}}) 

