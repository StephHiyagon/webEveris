const Login = (update) => {
 const container = $('<div class="flex row"></div>');
 const form = $('<form class="col s6 offset-s3 flex"></form>');
 const divUser = $('<div class=" input-field"><div>');
  const inputUser = $('<input id="last_name" type="text" class="validate">');
  const labelUser = $('<label for="last_name">Usuario</label>');
const divPassword = $('<div class=" input-field"><div>');
 const inputPassword = $('<input id="password" type="password" class="validate">');
 const labelPassword = $('<label for="password">Contraseña</label>');
const button = $('<a class="center-align waves-effect waves-light btn-large">Entrar</a>');
 container.append(form);
 form.append(divUser, divPassword);
 divUser.append(inputUser, labelUser);
 divPassword.append(inputPassword, labelPassword);
 form.append(button);

button.on('click', function(){
  state.page=1;
  update();
});
 return container;
};

const Dashboard = () => {
 const container = $('<div class="row"></div>');
 return container;
}
