"use strict";function fondoRandon(a){var e=["fondo-1.jpg","fondo-2.jpg","fondo-3.jpg"],s=e[Math.floor(Math.random()*e.length)];a.css("background-image","url(assets/img/"+s+")"),console.log(s)}var filtroContacto=function(a,e){return state.personal.filter(function(e){return e.Apellido.toLowerCase().indexOf(a)>-1||e.Apellido2.toLowerCase().indexOf(a)>-1||e.Nombre.toLowerCase().indexOf(a)>-1||e.DatosEmpleado.EMPLOYEE_NUMBER.toLowerCase().indexOf(a)>-1})},reRender=function(a,e,s){e.empty(),a.forEach(function(a){e.append(showItem(a,e,s))})},showItem=function(a,e,s){var i=$('<div class="row"></div>'),n=$('<span class="item-place__title col s9">'+a.Nombre+"   "+a.Apellido+"   "+a.Apellido2+"</span>"),d=$('<span class="col s3">'+a.DatosEmpleado.EMPLOYEE_NUMBER+"</span>"),t=$("<div></div>"),l=$('<div class="col m5 s12"><img src=""></div>'),o=$('<div class="col m7 s12"></div>'),c=$("<h5>"+a.Nombre+"  "+a.Apellido+"   "+a.Apellido2+"</h5> <br>"),p=$('<p><span class="strong"> Correo: </span>'+a.DatosEmpleado.EMAIL+"</p>"),r=$('<p><span class="strong"> N° Empleado: </span>'+a.DatosEmpleado.EMPLOYEE_NUMBER+"</p>");return i.append(n),i.append(d),o.append(c),o.append(r),o.append(p),t.append(l),t.append(o),i.on("click",function(a){a.preventDefault(),e.empty(),e.hide(),s.empty(),s.append(t)}),e.show(),i},render=function(a){a.empty();var e=$('<div class="wrapper"></div>');null==state.page?e.append(Login(function(e){return render(a)})):(console.log("Hola"),e.append(Navbar(function(){render(a)})),e.append(state.page(function(e){return render(a)}))),a.append(e)},state={page:null,user:null,news:null,benefits:null};$(function(a){$.get("https://hackathon-ef798.firebaseio.com/getemployee.json",function(a){if(!a)return alert("no hay data gg");state.user=a.persona,console.log(a.persona),$.get("https://hackathon-ef798.firebaseio.com/news.json",function(a){if(!a)return alert("no hay data gg");state.news=a.data,console.log(state.news)}),$.get("https://hackathon-ef798.firebaseio.com/benefits.json",function(a){if(!a)return alert("no hay data gg");state.benefits=a,console.log(a[1])});var e=$("#root");render(e)})});var validarLetra=function(a){a.which>47&&a.which<58&&a.preventDefault()},Beneficios=function(){var a=$('<div class="container-fluid"><h4 class="news">Beneficios</h4></div>'),e=$('<div class="row"></div>'),s=$('<div class="col m2 hide-on-small-only"></div>'),i=$('<ul class="collection"><li class="collection-item dismissable"><div>Alvin<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li><li class="collection-item dismissable"><div>Alvin<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li><li class="collection-item dismissable"><div>Alvin<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li><li class="collection-item dismissable"><div>Alvin<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li><li class="collection-item dismissable"><div>Alvin<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li><li class="collection-item dismissable"><div>Alvin<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li></ul>'),n=$('<div class="col s12 m10"></div>');a.append(e),e.append(s,n),s.append(i);for(var d=0;d<10;d++){var t=$('<div class="col s12 m6 modal-trigger" id="'+state.benefits[d].id+'""><a href="#modal1"></a></div>'),l=$('<div class="card horizontal height"></div>'),o=$('<div class="img-promocion valign-wrapper card-image"></div>'),c=$('<img src="'+state.benefits[d].imgCompany+'">'),p=$('<div class="card-stacked"></div>'),r=$('<div class="promocion card-content"></div>'),v=$("<h4>"+state.benefits[d].nameCompany+"</h4>"),f=$("<p>"+state.benefits[d].title+"</p>"),m=$('<span class="float-right">'+state.benefits[d].discount+"</span>");n.append(t),t.append(l),l.append(o,p),o.append(c),p.append(r),r.append(r,v,f,m)}return a.append(detalleBeneficios()),a},detalleBeneficios=function(){var a=$('<div id="modal1" class="modal"></div>'),e=$('<a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">X</a>'),s=$('<div class="modal-content"></div>'),i=$('<div class="col s12 m6">ljlihugftdsegfghjjkjlk</div>'),n=$('<div class="col s12 m6">kjhgfdsdfcgvhbjnkm</div>'),d=$('<div id="mapa"></div>');return a.append(e,s),s.append(i,n),n.append(d),$(document).ready(function(){$(".modal").modal()}),a},Buscar=function(a){var e=$('<div class="collage"></div>'),s=$('<div class=" row"></div>'),i=$('<form class="col s12 m8 l6 offset-l3 offset-m2" autocomplete="off"></form>'),n=$('<div class="row"></div>'),d=$('<div class="input-field col s12"><i class="material-icons prefix">search</i></div>'),t=$('<input id="icon_prefix" type="text" class="white-text search">'),l=$('<label for="icon_prefix">Buscar</label>'),o=$('<div class="autocompleted"></div>'),c=$('<div class="resultado row"></div>'),p=$('<div class="col s12 m8 l6 offset-l3 offset-m2 white-text"></div>');d.append(t),d.append(l),d.append(o),n.append(d),i.append(n),s.append(i),e.append(s),c.append(p);var r=void 0;return t.on({keyup:function(a){""!=$(a.currentTarget).val()?(r=filtroContacto($(this).val().toLowerCase(),o),reRender(r,o,p)):(o.hide(),o.empty())}}),e.append(c),e};$(function(a){$.get("https://hackathon-ef798.firebaseio.com/findemployees.json",function(a){if(!a)return alert("no hay data");state.personal=a.Personal})});var Dashboard=function(a){var e=$('<div class="container"></div>'),s=$('<div class="row"></div>'),i=$('<div class="board"></div>'),n=$('<h4 class="news">News</h4>');state.news.forEach(function(a){a.attachments.data[0].title,console.log(a.attachments.data[0].title);var e=$('<div class="card-panel hoverable item__stack"></div>'),s=$('<a href="'+a.shareURL+'"></a>'),n=$('<div class="item"></div>');void 0!=a.description&&void 0!=a.imgURL&&(s.append(n),n.append(e),e.append('<img class="item__stack--image" src="'+a.imgURL+'" alt='+a.description+"/>"),e.append("<h5>"+a.attachments.data[0].title+"</h5>"),e.append("<p>"+a.description+"</p>"),i.append(s))});return e.append(s),s.append(n),s.append(i),e},Login=function(a){var e=$('<div class="flex fondo"></div>'),s=$('<form class="center-align"></form>'),i=$('<div class="div-logo"></div>'),n=$('<img class="logo" src="assets/img/weberis.png">'),d=$('<div class=" input-field"><div>'),t=$('<input id="last_name" type="text" class="validate white-text">'),l=$('<label for="last_name" class="white-text">Usuario</label>'),o=$('<div class=" input-field"><div>'),c=$('<input id="password" type="password" class="validate white-text">'),p=$('<label for="password" class="white-text">Contraseña</label>'),r=$('<a class="center-align button waves-effect waves-light orange darken-4 btn-large">Entrar</a>');return e.append(s),s.append(i,d,o),i.append(n),d.append(t,l),o.append(c,p),s.append(r),fondoRandon(e),r.on("click",function(){state.page=Dashboard,a()}),e},Navbar=function(a){var e=$("<div class='header'></div>"),s=$("<div class='row menu'></div>"),i=$("<a href='#' class='brand-logo col s2'><img src='assets/img/weberis.png'></a>"),n=$('<div class="col s7 usuario valign-wrapper hide-on-small-only"><img class="circle" src="'+state.user.foto+'"><span> Hola '+state.user.nombrePersona+"</span></div>"),d=$("<a href='#' data-activates='mobile-demo' class='button-collapse col s3 right-align'></a>"),t=$("<i class='material-icons'>menu</i>"),l=($("<ul class='right hide-on-med-and-down'></ul>"),$("<ul class='side-nav' id='mobile-demo'></ul>")),o=$('<a href="#" class="close right"><i class="material-icons">close</i></a>'),c=$("<li><a href='#' class='links' data-link='Perfil'>Perfil</a></li>"),p=$('<li><a href="#" class="links" data-link="Beneficios">Beneficios</a></li>'),r=$('<li><a href="#" class="links" data-link="Notifications">Comunicados</a></li>'),v=$('<li><a href="#" class="links" data-link="Buscar">Buscar Colaboradores</a></li>');return d.append(t),l.append(o),l.append(c),l.append(p),l.append(r),l.append(v),s.append(i),s.append(n),s.append(d),e.append(s),e.append(l),$(function(e){$(".button-collapse").sideNav({menuWidth:300,edge:"right"}),$(".close").on("click",function(a){$(".side-nav").sideNav("hide")}),$(".links").on("click",function(e){switch(e.preventDefault(),$(".side-nav").sideNav("hide"),$(this).data("link")){case"Perfil":state.page=Perfil,a();break;case"Beneficios":state.page=Beneficios,a();break;case"Notifications":state.page=Notifications,a();break;case"Buscar":state.page=Buscar,a()}})}),e},Notifications=function(){var a=$("<div class='container'></div>"),e=$("<div class='row'></div>"),s=$("<h4>Comunicados</h4>");return e.append(s),$.get("https://hackathon-ef798.firebaseio.com/announcements.json",function(a){var s=a.data;console.log(s);var i=$("<div class='col s12'></div>"),n=$("<div class='hide-on-med-and-down col s12 col l9'></div>"),d=$("<div class='hide-on-med-and-down col s12 col l3'></div>"),t=$("<div class='hide-on-med-and-down col s12'></div>");s.forEach(function(a){var e=$("<div class='hide-on-med-and-up col s12'></div>");e.append(cuadroGrande(a)),i.append(e)}),n.append(cuadroGrande(s[1])),d.append(cuadroPequeño(s[0])),d.append(cuadroPequeño(s[4])),i.append(n),i.append(d),t.append(cuadroHorizontal(s[2])),t.append(cuadroHorizontal(s[3])),e.append(i),e.append(t)}),a.append(e),a},cuadroPequeño=function(a){var e=$("<div class='col s12'></div>"),s=$("<div class='card'></div>"),i=$("<div class='card-image'></div>"),n=$(a.text.replace("<p>","").replace("</p>","")),d=$("<div class='card-content'></div>"),t=$("<h6 class='fw500'>"+a.title+"</h6>"),l=$(a.subtitle);return s.css("padding","1rem"),d.css("padding","24px 0 6px 0"),n.addClass("img-small"),d.append(t),d.append(l),i.append(n),s.append(i),s.append(d),e.append(s),e},cuadroGrande=function(a){var e=$("<div class='card'></div>"),s=$("<div class='card-image'></div>"),i=$(a.text.replace("<p>","").replace("</p>","").replace("\n","")),n=$("<div class='card-content'></div>"),d=$("<h5>"+a.title+"</h5>"),t=$(a.subtitle);return i.css("width","100%"),i.css("height","auto"),n.append(d),n.append(t),s.append(i),e.append(s),e.append(n),e},cuadroHorizontal=function(a){var e=$("<div class='col s12 col l6'></div>"),s=$("<div class='card horizontal'></div>"),i=$("<div class='card-image'></div>"),n=$(a.text.replace("<p>","").replace("</p>","").replace("<p>Entrevista</p>","")),d=$("<div class='card-stacked'></div>"),t=$("<div class='card-content'></div>"),l=$("<h5>"+a.title+"</h5>"),o=$(a.subtitle);return s.css("height","320px"),n.css("width","100%"),n.css("height","250px"),i.append(n),t.append(l),t.append(o),d.append(t),s.append(i),s.append(d),e.append(s),e};