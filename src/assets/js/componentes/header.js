const Login = (update) => {
 const container = $('<div class="flex fondo row"></div>');
 const form = $('<form class="col l4 offset-l4 flex"></form>');
 const divLogo = $('<div class="div-logo"></div>');
 const logo = $('<img class="logo" src="assets/img/everis.png">');
 const divUser = $('<div class=" input-field"><div>');
  const inputUser = $('<input id="last_name" type="text" class="validate">');
  const labelUser = $('<label for="last_name">Usuario</label>');
const divPassword = $('<div class=" input-field"><div>');
 const inputPassword = $('<input id="password" type="password" class="validate">');
 const labelPassword = $('<label for="password">Contraseña</label>');
const button = $('<a class="center-align button waves-effect waves-light btn-large">Entrar</a>');
 container.append(form);
 form.append(divLogo, divUser, divPassword);
 divLogo.append(logo);
 divUser.append(inputUser, labelUser);
 divPassword.append(inputPassword, labelPassword);
 form.append(button);

fondoRandon(container);

button.on('click', function(){
  state.page= Dashboard;
  update();
});
 return container;
};


function fondoRandon(container){
  var array = ["fondo-1.jpg","fondo-2.jpg", "fondo-3.jpg" ];
  const  randno = array[Math.floor( Math.random() * array.length )];
  container.css("background-image", "url(assets/img/"+randno+")");
  console.log(randno);
}
