"use strict";function fondoRandon(e){var a=["fondo-1.jpg","fondo-2.jpg","fondo-3.jpg"],t=a[Math.floor(Math.random()*a.length)];e.css("background-image","url(assets/img/"+t+")"),console.log(t)}var filtroContacto=function(e,a){return state.personal.filter(function(a){return a.Apellido.toLowerCase().indexOf(e)>-1||a.Apellido2.toLowerCase().indexOf(e)>-1||a.Nombre.toLowerCase().indexOf(e)>-1||a.DatosEmpleado.EMPLOYEE_NUMBER.toLowerCase().indexOf(e)>-1})},reRender=function(e,a){a.empty(),state.personal.forEach(function(e){a.append(placeItem(e,a))})},render=function(e){e.empty();var a=$('<div class="wrapper"></div>'),t=function(){render(e)};null==state.page?a.append(Login(function(a){return render(e)})):state.page==Dashboard?(console.log("Hola"),a.append(Navbar(t)),a.append(state.page(function(a){return render(e)}))):state.page==Buscar&&(a.append(Navbar(t)),a.append(state.page(function(a){return render(e)}))),e.append(a)},state={page:null,user:null,news:null};$(function(e){$.get("https://hackathon-ef798.firebaseio.com/getemployee.json",function(e){if(!e)return alert("no hay data gg");state.user=e.persona,console.log(e.persona),$.get("https://hackathon-ef798.firebaseio.com/news.json",function(e){if(!e)return alert("no hay data gg");state.news=e.data,console.log(state.news)});var a=$("#root");render(a)})});var validarLetra=function(e){e.which>47&&e.which<58&&e.preventDefault()},Buscar=function(e){var a=$('<div class="row"></div>'),t=$('<form class="col s12 m8 l6 offset-l3 offset-m2 autocomplete="off""></form>'),n=$('<div class="row"></div>'),o=$('<div class="input-field col s12"><i class="material-icons prefix">search</i></div>'),s=$('<input id="icon_prefix" type="text" class="validate">'),i=$('<label for="icon_prefix">Buscar</label>'),r=$('<div class="autocomplete"></div>');o.append(s),o.append(i),o.append(r),n.append(o),t.append(n),a.append(t);var l=void 0;return s.on({keyup:function(e){""!=$(e.currentTarget).val()?(l=filtroContacto($(this).val().toLowerCase(),r),console.log(state.personal)):(r.hide(),r.empty())}}),a};$(function(e){$.get("https://hackathon-ef798.firebaseio.com/findemployees.json",function(e){if(!e)return alert("no hay data");state.personal=e.Personal})});var Dashboard=function(e){var a=$('<div class="container"></div>'),t=$('<div class="row"></div>'),n=($('<div class="col s12 col m4 center-align"></div>'),$('<img src="'+state.user.foto+'" alt="foto de perfil"/>'),$('<p class="blue-text">'+state.user.nombrePersona+" "+state.user.apellidoPersona+"</p>"),$('<div class="col s12"><h4>News</h4></div>')),o=$('<div class="board"></div>');state.news.forEach(function(e){e.attachments.data[0].title,console.log(e.attachments.data[0].title);var a=$('<div class="card-panel hoverable"></div>');void 0!=e.description&&void 0!=e.imgURL&&(o.append(a),a.append('<img class="img-responsive" src="'+e.imgURL+'" alt='+e.description+"/>"),a.append("<h5>"+e.attachments.data[0].title+"</h5>"),a.append("<p>"+e.description+"</p>"))});return a.append(t),t.append(n),n.append(o),a},Login=function(e){var a=$('<div class="flex fondo row"></div>'),t=$('<form class="col l4 offset-l4 flex"></form>'),n=$('<div class="div-logo"></div>'),o=$('<img class="logo" src="assets/img/everis.png">'),s=$('<div class=" input-field"><div>'),i=$('<input id="last_name" type="text" class="validate white-text">'),r=$('<label for="last_name">Usuario</label>'),l=$('<div class=" input-field"><div>'),d=$('<input id="password" type="password" class="validate white-text">'),p=$('<label for="password">Contraseña</label>'),c=$('<a class="center-align button waves-effect waves-light btn-large">Entrar</a>');return a.append(t),t.append(n,s,l),n.append(o),s.append(i,r),l.append(d,p),t.append(c),fondoRandon(a),c.on("click",function(){state.page=Dashboard,e()}),a},Navbar=function(e){var a=$("<div class='lime'></div>"),t=$("<div class='row'></div>"),n=$("<a href='#' class='color-white brand-logo col s6'>Everis</a>"),o=$("<a href='#' data-activates='mobile-demo' class='color-white button-collapse col s6 right-align'></a>"),s=$("<i class='material-icons'>menu</i>"),i=($("<ul class='right hide-on-med-and-down'></ul>"),$("<li><a href='#'>Perfil</a></li>")),r=$("<li><a href='#'>Beneficios</a></li>"),l=$("<li><a href='#'>Buscar</a></li>"),d=$("<ul class='side-nav' id='mobile-demo'></ul>");return o.append(s),d.append(i,r,l),t.append(n),t.append(o),a.append(t),a.append(d),l.on("click",function(){state.page=Buscar,e()}),$(function(e){$(".button-collapse").sideNav({menuWidth:300,edge:"right"})}),a};