const Login = (update) => {

	const container = $('<div class="flex fondo"></div>');
	const form = $('<form class="center-align"></form>');
	const divLogo = $('<div class="div-logo"></div>');
	const logo = $('<img class="logo" src="assets/img/weberis.png">');
	const divUser = $('<div class=" input-field"><div>');
	const inputUser = $('<input id="last_name" type="text" class="validate white-text">');
	const labelUser = $('<label for="last_name" class="white-text">Usuario</label>');
	const divPassword = $('<div class=" input-field"><div>');
	const inputPassword = $('<input id="password" type="password" class="validate white-text">');
	const labelPassword = $('<label for="password" class="white-text">Contraseña</label>');
	const button = $('<a class="center-align button waves-effect waves-light orange darken-4 btn-large">Entrar</a>');
	const span = $('<p class="red-text center-align">Usuario y Password incorrectos</p>');
	span.hide();

	button.attr("disabled", "true");

	let validateNombre,validatePassword;

	const activeBoton = ()=>{

		if(validateNombre &&  validatePassword){
			button.attr('disabled', false);
		}else{
			button.attr('disabled', true);
		}
	}

	inputUser.on({
		keypress: soloLetras,
		keyup: (e)=>{
			if($(e.target).val().length > 1 ){
				validateNombre = true;
				activeBoton();
			}else{
				validateNombre = false;
				activeBoton();
			}
		}		
	});

	inputPassword.on("keyup", (e)=>{
		if($(e.target).val().length >= 4){
			validatePassword = true;
			activeBoton();
		}else{
			validatePassword = false;
			activeBoton();
		}
	});

	container.append(form);
	form.append(divLogo, divUser, divPassword);
	divLogo.append(logo);
	divUser.append(inputUser, labelUser);
	divPassword.append(inputPassword, labelPassword);
	form.append(button);
	form.append(span);

	fondoRandon(container);

	button.on('click', function(){
		if(inputUser.val().toLowerCase() == "jorge juan" && inputPassword.val()=="1234"){
			state.page= Dashboard;
			update();	
		}else{
			span.show();
		}
		
	});
	return container;
};


function fondoRandon(container){
  var array = ["fondo-1.jpg","fondo-2.jpg", "fondo-3.jpg" ];
  const  randno = array[Math.floor( Math.random() * array.length )];
  container.css("background-image", "url(assets/img/"+randno+")");
  console.log(randno);
}
