"use strict";function fondoRandon(a){var e=["fondo-1.jpg","fondo-2.jpg","fondo-3.jpg"],s=e[Math.floor(Math.random()*e.length)];a.css("background-image","url(assets/img/"+s+")"),console.log(s)}var filtroContacto=function(a,e){return state.personal.filter(function(e){return e.Apellido.toLowerCase().indexOf(a)>-1||e.Apellido2.toLowerCase().indexOf(a)>-1||e.Nombre.toLowerCase().indexOf(a)>-1||e.DatosEmpleado.EMPLOYEE_NUMBER.toLowerCase().indexOf(a)>-1})},reRender=function(a,e,s){e.empty(),a.forEach(function(a){e.append(showItem(a,e,s))})},showItem=function(a,e,s){var i=$('<div class="row"></div>'),n=$('<span class="item-place__title col s9">'+a.Nombre+"   "+a.Apellido+"   "+a.Apellido2+"</span>"),t=$('<span class="col s3">'+a.DatosEmpleado.EMPLOYEE_NUMBER+"</span>"),o=$("<div></div>"),l=$('<div class="col m5 s12"><img src=""></div>'),d=$('<div class="col m7 s12"></div>'),c=$("<h5>"+a.Nombre+"  "+a.Apellido+"   "+a.Apellido2+"</h5> <br>"),r=$('<p><span class="strong"> Correo: </span>'+a.DatosEmpleado.EMAIL+"</p>"),p=$('<p><span class="strong"> N° Empleado: </span>'+a.DatosEmpleado.EMPLOYEE_NUMBER+"</p>");return i.append(n),i.append(t),d.append(c),d.append(p),d.append(r),o.append(l),o.append(d),i.on("click",function(a){a.preventDefault(),e.empty(),e.hide(),s.empty(),s.append(o)}),e.show(),i},render=function(a){a.empty();var e=$('<div class="wrapper"></div>'),s=function(){render(a)};null==state.page?e.append(Login(function(e){return render(a)})):state.page==Dashboard?(console.log("Hola"),e.append(Navbar(s)),e.append(state.page(function(e){return render(a)}))):state.page==Buscar?(e.append(Navbar(s)),e.append(state.page(function(e){return render(a)}))):state.page==Beneficios&&(e.append(Navbar(s)),e.append(state.page(function(e){return render(a)}))),a.append(e)},state={page:null,user:null,news:null,benefits:null};$(function(a){$.get("https://hackathon-ef798.firebaseio.com/getemployee.json",function(a){if(!a)return alert("no hay data gg");state.user=a.persona,console.log(a.persona),$.get("https://hackathon-ef798.firebaseio.com/news.json",function(a){if(!a)return alert("no hay data gg");state.news=a.data,console.log(state.news)}),$.get("https://hackathon-ef798.firebaseio.com/benefits.json",function(a){if(!a)return alert("no hay data gg");state.benefits=a,console.log(a[1])});var e=$("#root");render(e)})});var validarLetra=function(a){a.which>47&&a.which<58&&a.preventDefault()},Beneficios=function(){var a=$('<div class="container-fluid">Beneficios</div>'),e=$('<div class="row"></div>'),s=$('<div class="col m2 hide-on-small-only"></div>'),i=$('<ul class="collection"><li class="collection-item dismissable"><div>Alvin<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li><li class="collection-item dismissable"><div>Alvin<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li><li class="collection-item dismissable"><div>Alvin<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li><li class="collection-item dismissable"><div>Alvin<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li><li class="collection-item dismissable"><div>Alvin<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li><li class="collection-item dismissable"><div>Alvin<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li></ul>'),n=$('<div class="col s12 m10"></div>');a.append(e),e.append(s,n),s.append(i);for(var t=0;t<10;t++){var o=$('<div class="col s12 m6"></div>'),l=$('<div class="card horizontal height"></div>'),d=$('<div class="img-promocion valign-wrapper card-image"></div>'),c=$('<img src="'+state.benefits[t].imgCompany+'">'),r=$('<div class="card-stacked"></div>'),p=$('<div class="promocion card-content"></div>'),v=$("<h4>"+state.benefits[t].nameCompany+"</h4>"),f=$("<p>"+state.benefits[t].title+"</p>"),u=$('<span class="float-right">'+state.benefits[t].discount+"</span>");n.append(o),o.append(l),l.append(d,r),d.append(c),r.append(p),p.append(p,v,f,u)}return a},Buscar=function(a){var e=$('<div class=""></div>'),s=$('<div class="row"></div>'),i=$('<form class="col s12 m8 l6 offset-l3 offset-m2" autocomplete="off"></form>'),n=$('<div class="row"></div>'),t=$('<div class="input-field col s12"><i class="material-icons prefix">search</i></div>'),o=$('<input id="icon_prefix" type="text" class="search">'),l=$('<label for="icon_prefix">Buscar</label>'),d=$('<div class="autocompleted"></div>'),c=$('<div class="resultado row"></div>'),r=$('<div class="col s12 m8 l6 offset-l3 offset-m2"></div>');t.append(o),t.append(l),t.append(d),n.append(t),i.append(n),s.append(i),e.append(s),c.append(r);var p=void 0;return o.on({keyup:function(a){""!=$(a.currentTarget).val()?(p=filtroContacto($(this).val().toLowerCase(),d),reRender(p,d,r)):(d.hide(),d.empty())}}),e.append(c),e};$(function(a){$.get("https://hackathon-ef798.firebaseio.com/findemployees.json",function(a){if(!a)return alert("no hay data");state.personal=a.Personal})});var Dashboard=function(a){var e=$('<div class="container"></div>'),s=$('<div class="row"></div>'),i=$('<div class="board"></div>'),n=$('<h4 class="">News</h4>');state.news.forEach(function(a){a.attachments.data[0].title,console.log(a.attachments.data[0].title);var e=$('<div class="card-panel hoverable item__stack"></div>'),s=$('<a href="'+a.shareURL+'"></a>'),n=$('<div class="item"></div>');void 0!=a.description&&void 0!=a.imgURL&&(s.append(n),n.append(e),e.append('<img class="item__stack--image" src="'+a.imgURL+'" alt='+a.description+"/>"),e.append("<h5>"+a.attachments.data[0].title+"</h5>"),e.append("<p>"+a.description+"</p>"),i.append(s))});return e.append(s),s.append(n),s.append(i),e},Login=function(a){var e=$('<div class="flex fondo"></div>'),s=$('<form class="center-align"></form>'),i=$('<div class="div-logo"></div>'),n=$('<img class="logo" src="assets/img/weberis.png">'),t=$('<div class=" input-field"><div>'),o=$('<input id="last_name" type="text" class="validate white-text">'),l=$('<label for="last_name" class="white-text">Usuario</label>'),d=$('<div class=" input-field"><div>'),c=$('<input id="password" type="password" class="validate white-text">'),r=$('<label for="password" class="white-text">Contraseña</label>'),p=$('<a class="center-align button waves-effect waves-light orange darken-4 btn-large">Entrar</a>');return e.append(s),s.append(i,t,d),i.append(n),t.append(o,l),d.append(c,r),s.append(p),fondoRandon(e),p.on("click",function(){state.page=Dashboard,a()}),e},Navbar=function(a){var e=$("<div class='header'></div>"),s=$("<div class='row menu'></div>"),i=$("<a href='#' class='brand-logo col s2'>Everis</a>"),n=$('<div class="col s7 usuario"><img class="circle" src="'+state.user.foto+'">Hola <span>'+state.user.nombrePersona+"</span></div>"),t=$("<a href='#' data-activates='mobile-demo' class='button-collapse col s3 right-align'></a>"),o=$("<i class='material-icons'>menu</i>"),l=($("<ul class='right hide-on-med-and-down'></ul>"),$("<ul class='side-nav' id='mobile-demo'></ul>")),d=$('<a href="#" class="close right"><i class="material-icons">close</i></a>'),c=$("<li><a href='#' class='links' data-link='Perfil'>Perfil</a></li>"),r=$('<li><a href="#" class="links" data-link="Beneficios">Beneficios</a></li>'),p=$('<li><a href="#" class="links" data-link="Comunicados">Comunicados</a></li>'),v=$('<li><a href="#" class="links" data-link="Buscar">Buscar Colaboradores</a></li>');return t.append(o),l.append(d),l.append(c),l.append(r),l.append(p),l.append(v),s.append(i),s.append(n),s.append(t),e.append(s),e.append(l),$(function(e){$(".button-collapse").sideNav({menuWidth:300,edge:"right"}),$(".close").on("click",function(a){$(".side-nav").sideNav("hide")}),$(".links").on("click",function(e){switch(e.preventDefault(),$(".side-nav").sideNav("hide"),$(this).data("link")){case"Perfil":state.page=Perfil,a();break;case"Beneficios":state.page=Beneficios,a();break;case"Comunicados":state.page=Comunicados,a();break;case"Buscar":state.page=Buscar,a()}})}),e};