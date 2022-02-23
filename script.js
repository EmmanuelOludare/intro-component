const firstName= document.getElementById("fName");
const lastName= document.getElementById("lName");
const email= document.getElementById("email");
const password= document.getElementById("password");
const firstNameError= document.getElementById("fName-error");
const lastNameError= document.getElementById("lName-error");
const emailError= document.getElementById("email-error");
const passwordError= document.getElementById("password-error");
const form = document.getElementById("form");
const  images=document.querySelectorAll("img");
const inputs=document.querySelectorAll("input");
var pattern =  /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

function validate() {
event.preventDefault();
	if(firstName.value==="") {
		firstNameError.innerHTML="First Name cannot be empty";
		images[0].style.display="inline";
		inputs[0].style.border="solid hsl(0, 100%, 74%) 1px ";
	}else{
				firstNameError.innerHTML="";
		images[0].style.display="none";	
		inputs[0].style.border="solid hsl(249, 10%, 26%) 1px";
	};
	
	if (lastName.value==="") {
					lastNameError.innerHTML="Last Name cannot be empty";
		images[1].style.display="inline";
		inputs[1].style.border="solid hsl(0, 100%, 74%) 1px";
	}else{
					lastNameError.innerHTML="";
		images[1].style.display="none";	
		inputs[1].style.border="solid hsl(249, 10%, 26%) 1px";
	};
	
	if(email.value.match(pattern)) {
					emailError.innerHTML="";
					images[2].style.display="none";	
					inputs[2].style.border="solid hsl(249, 10%, 26%) 1px";
	}else{
					emailError.innerHTML="Looks like this is not an email";
					email.placeholder="email@example.com";
					email.classList.add('me');
					images[2].style.display="inline";	
					inputs[2].style.border="solid hsl(0, 100%, 74%) 1px";
	};
	
	if(password.value==="") {
				passwordError.innerHTML="Password cannot be empty"
				images[3].style.display="inline";	
				inputs[3].style.border="solid hsl(0, 100%, 74%) 1px";
	}else if(password.value.length<6) {
	      passwordError.innerHTML="Password must be more than 6 characters"
				images[3].style.display="inline";	
				inputs[3].style.border="solid hsl(0, 100%, 74%) 1px";
	}else{
					passwordError.innerHTML="";
				images[3].style.display="none";	
				inputs[3].style.border="solid hsl(249, 10%, 26%) 1px";
	};
	
};
