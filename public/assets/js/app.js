"use strict";var filtroContacto=function(e,a){return state.personal.filter(function(a){return a.Apellido.toLowerCase().indexOf(e)>-1||a.Apellido2.toLowerCase().indexOf(e)>-1||a.Nombre.toLowerCase().indexOf(e)>-1||a.DatosEmpleado.EMPLOYEE_NUMBER.toLowerCase().indexOf(e)>-1})},reRender=function(e,a,t){a.empty(),e.forEach(function(e){a.append(showItem(e,a,t))})},showItem=function(e,a,t){var s=$('<div class="row"></div>'),n=$('<span class="item-place__title col s9">'+e.Nombre+"   "+e.Apellido+"   "+e.Apellido2+"</span>"),o=$('<span class="col s3">'+e.DatosEmpleado.EMPLOYEE_NUMBER+"</span>"),i=$("<div></div>"),l=$("<h5>"+e.Nombre+"  "+e.Apellido+"</h5> <br>"),r=$("<p> "+e.DatosEmpleado.EMAIL+"</p>"),d=$("<p> "+e.DatosEmpleado.EMPLOYEE_NUMBER+"</p>");return s.append(n),s.append(o),i.append(l),i.append(r),i.append(d),s.on("click",function(e){e.preventDefault(),a.empty(),a.hide(),t.empty(),t.append(i)}),a.show(),s},render=function(e){e.empty();var a=$('<div class="wrapper"></div>'),t=function(){render(e)};switch(a.append(Navbar(t)),state.page){case"buscar":a.append(Buscar(t))}e.append(a)},state={page:"buscar",user:null,news:null};$(function(e){$.get("https://hackathon-ef798.firebaseio.com/getemployee.json",function(e){if(!e)return alert("no hay data gg");state.user=e.persona,console.log(e.persona),$.get("https://hackathon-ef798.firebaseio.com/news.json",function(e){if(!e)return alert("no hay data gg");state.news=e.data,console.log(state.news)});var a=$("#root");render(a)})});var validarLetra=function(e){e.which>47&&e.which<58&&e.preventDefault()},Buscar=function(e){var a=$('<div class=""></div>'),t=$('<div class="row"></div>'),s=$('<form class="col s12 m8 l6 offset-l3 offset-m2" autocomplete="off"></form>'),n=$('<div class="row"></div>'),o=$('<div class="input-field col s12"><i class="material-icons prefix">search</i></div>'),i=$('<input id="icon_prefix" type="text" class="search">'),l=$('<label for="icon_prefix">Buscar</label>'),r=$('<div class="autocompleted"></div>'),d=$('<div class="resultado row"></div>'),p=$('<div class="col s12 m8 l6 offset-l3 offset-m2"></div>');o.append(i),o.append(l),o.append(r),n.append(o),s.append(n),t.append(s),a.append(t),d.append(p);var c=void 0;return i.on({keyup:function(e){""!=$(e.currentTarget).val()?(c=filtroContacto($(this).val().toLowerCase(),r),reRender(c,r,p)):(r.hide(),r.empty())}}),a.append(d),a};$(function(e){$.get("https://hackathon-ef798.firebaseio.com/findemployees.json",function(e){if(!e)return alert("no hay data");state.personal=e.Personal})});var Dashboard=function(e){var a=$('<div class="container"></div>'),t=$('<div class="row"></div>'),s=$('<div class="col s12 col m4 center-align"></div>'),n=$('<img src="'+state.user.foto+'" alt="foto de perfil"/>'),o=$('<p class="blue-text">'+state.user.nombrePersona+" "+state.user.apellidoPersona+"</p>"),i=$('<div class="col s12 col m8"></div>'),l=$("<div><h4>News</h4></div>");state.news.forEach(function(e){e.attachments.data[0].title,console.log(e.attachments.data[0].title),l.append("<h5>"+e.attachments.data[0].title+"</h5>")});return a.append(t),t.append(s),s.append(n),s.append(o),t.append(i),i.append(l),a},Login=function(e){var a=$('<div class="flex row"></div>'),t=$('<form class="col s6 offset-s3 flex"></form>'),s=$('<div class=" input-field"><div>'),n=$('<input id="last_name" type="text" class="validate">'),o=$('<label for="last_name">Usuario</label>'),i=$('<div class=" input-field"><div>'),l=$('<input id="password" type="password" class="validate">'),r=$('<label for="password">Contraseña</label>'),d=$('<a class="center-align waves-effect waves-light btn-large">Entrar</a>');return a.append(t),t.append(s,i),s.append(n,o),i.append(l,r),t.append(d),d.on("click",function(){state.page=Dashboard,e()}),a},Navbar=function(e){var a=$("<div class='lime'></div>"),t=$("<div class='row'></div>"),s=$("<a href='#' class='brand-logo col s6'>Everis</a>"),n=$("<a href='#' data-activates='mobile-demo' class='button-collapse col s6 right-align'></a>"),o=$("<i class='material-icons'>menu</i>"),i=($("<ul class='right hide-on-med-and-down'></ul>"),$("<li><a href='#'>Perfil</a></li>")),l=$("<ul class='side-nav' id='mobile-demo'></ul>");return n.append(o),l.append(i),t.append(s),t.append(n),a.append(t),a.append(l),$(function(e){$(".button-collapse").sideNav({menuWidth:300,edge:"right"})}),a};