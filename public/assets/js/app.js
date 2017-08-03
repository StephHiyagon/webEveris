"use strict";function fondoRandon(a){var e=["fondo-1.jpg","fondo-2.jpg","fondo-3.jpg"],i=e[Math.floor(Math.random()*e.length)];a.css("background-image","url(assets/img/"+i+")"),console.log(i)}function initMap(a){buscame(a);var e={lat:-12,lng:-77};map=new google.maps.Map(document.getElementById("mapa"),{zoom:8,center:e})}function buscame(a){console.log(a.stores[0]),navigator.geolocation.getCurrentPosition(function(e){var i=e.coords;state.lat=i.latitude,state.log=i.longitude;new google.maps.Marker({position:{lat:a.stores[0].latitud,lng:a.stores[0].longitud},map:map});map.setZoom(18),map.setCenter({lat:a.stores[0].latitud,lng:a.stores[0].longitud});new google.maps.Marker({position:{lat:i.latitude,lng:i.longitude},map:map})},function(a){console.warn("ERROR("+a.code+"): "+a.message)})}var filtroContacto=function(a,e){return state.personal.filter(function(e){return e.Apellido.toLowerCase().indexOf(a)>-1||e.Apellido2.toLowerCase().indexOf(a)>-1||e.Nombre.toLowerCase().indexOf(a)>-1||e.DatosEmpleado.EMPLOYEE_NUMBER.toLowerCase().indexOf(a)>-1})},reRender=function(a,e,i){e.empty(),a.forEach(function(a){e.append(showItem(a,e,i))})},showItem=function(a,e,i){var s=$('<div class="row"></div>'),n=$('<span class="item-place__title col s9">'+a.Nombre+"   "+a.Apellido+"   "+a.Apellido2+"</span>"),t=$('<span class="col s3">'+a.DatosEmpleado.EMPLOYEE_NUMBER+"</span>"),o=$("<div></div>"),d=$('<div class="col m5 s12"><img src=""></div>'),l=$('<div class="col m7 s12"></div>'),c=$("<h5>"+a.Nombre+"  "+a.Apellido+"   "+a.Apellido2+"</h5> <br>"),r=$('<p><span class="strong"> Correo: </span>'+a.DatosEmpleado.EMAIL+"</p>"),p=$('<p><span class="strong"> N° Empleado: </span>'+a.DatosEmpleado.EMPLOYEE_NUMBER+"</p>");return s.append(n),s.append(t),l.append(c),l.append(p),l.append(r),o.append(d),o.append(l),s.on("click",function(a){a.preventDefault(),e.empty(),e.hide(),i.empty(),i.append(o)}),e.show(),s},getCategories=function(){$.get("https://hackathon-ef798.firebaseio.com/categories.json",function(a){if(!a)return alert("no hay data");state.category=a})},showBenef=function(a,e){var i=$('<div class="col s12 m6"></div>'),s=$('<div class="card horizontal height"></div>'),n=$('<div class="img-promocion valign-wrapper card-image"></div>'),t=$('<img src="'+a.imgCompany+'">'),o=$('<div class="card-stacked"></div>'),d=$('<div class="promocion card-content"></div>'),l=$("<h4>"+a.nameCompany+"</h4>"),c=$("<p>"+a.title+"</p>"),r=$('<span class="float-right">'+a.discount+"</span>");return i.append(s),s.append(n,o),n.append(t),o.append(d),d.append(l,c,r),i.on("click",function(i){i.preventDefault(),state.beneficio=a,$(document).ready(function(){console.log(a),initMap(a)}),$(".overlay1").css("display","block"),Modal(a,e)}),i},filterBenefit=function(a){return state.benefits.filter(function(e){return e.links.categories.indexOf(a.toString())>-1})},render=function(a){a.empty();var e=$('<div class="wrapper"></div>');null==state.page?e.append(Login(function(e){return render(a)})):(e.append(Navbar(function(){render(a)})),e.append(state.page(function(e){return render(a)}))),a.append(e)},state={page:null,user:null,news:null,benefits:null,id2:null};$(function(a){$.get("https://hackathon-ef798.firebaseio.com/getemployee.json",function(a){if(!a)return alert("no hay data gg");state.user=a.persona,$.get("https://hackathon-ef798.firebaseio.com/news.json",function(a){if(!a)return alert("no hay data gg");state.news=a.data}),$.get("https://hackathon-ef798.firebaseio.com/benefits.json",function(a){if(!a)return alert("no hay data gg");state.benefits=a});var e=$("#root");render(e)})});var validarLetra=function(a){a.which>47&&a.which<58&&a.preventDefault()},Beneficios=function(a){var e=$('<div class="container-fluid"><h4 class="news">Beneficios</h4></div>'),i=$('<div class="row"></div>'),s=$('<div class="col m2 hide-on-small-only"></div>'),n=$('<ul class="collection"><li class="collection-item dismissable"><div>Más buscados<a href="#!" class="secondary-content link-categoria" data-categoria="44"><i class="material-icons">send</i></a></div></li><li class="collection-item dismissable"><div>Diversión y Ocio<a href="#!" class="secondary-content link-categoria" data-categoria="123"><i class="material-icons">send</i></a></div></li><li class="collection-item dismissable"><div>Educación<a href="#!" class="secondary-content link-categoria" data-categoria="139"><i class="material-icons">send</i></a></div></li><li class="collection-item dismissable"><div>Salud y Deporte<a href="#!" class="secondary-content link-categoria" data-categoria="48"><i class="material-icons">send</i></a></div></li><li class="collection-item dismissable"><div>Bebés y Niños<a href="#!" class="secondary-content link-categoria" data-categoria="16"><i class="material-icons">send</i></a></div></li><li class="collection-item dismissable"><div>Autos y Motos<a href="#!" class="secondary-content link-categoria" data-categoria="107"><i class="material-icons">send</i></a></div></li></ul>'),t=$('<div class="col s12 m10"></div>');return e.append(i),s.append(n),state.benefits.forEach(function(a,i){i<10&&t.append(showBenef(a,e))}),i.append(s,t),$(function(a){$(".link-categoria").on("click",function(a){a.preventDefault();var i=filterBenefit($(this).data("categoria"));t.empty(),i.forEach(function(a){t.append(showBenef(a,e))})})}),e},Modal=function(a,e){var i=$('<div class="overlay1"></div>'),s=$('<div class="container modal-ejemplo"></div>'),n=$('<span class="close">X</span>'),t=$('<div class="row"></div>'),o=$('<div class="col s12 m6"></div>'),d=$('<img src="'+a.imgCompany+'">'),l=$("<h5>"+a.nameCompany+"</h5>"),c=$("<p>"+a.description+"</p>"),r=$('<div class="col s12 m6"></div>'),p=$('<div id="mapa" class="mapa"></div>');e.append(i,s),s.append(t,n),t.append(o,r),o.append(d,l,c),r.append(p),n.on("click",function(){$(".overlay1").css("display","none"),s.hide(),s.empty()})},Buscar=function(a){var e=$('<div class="collage"></div>'),i=$('<div class=" row"></div>'),s=$('<form class="col s12 m8 l6 offset-l3 offset-m2" autocomplete="off"></form>'),n=$('<div class="row"></div>'),t=$('<div class="input-field col s12"><i class="material-icons prefix">search</i></div>'),o=$('<input id="icon_prefix" type="text" class="white-text search">'),d=$('<label for="icon_prefix">Buscar</label>'),l=$('<div class="autocompleted"></div>'),c=$('<div class="resultado row"></div>'),r=$('<div class="col s12 m8 l6 offset-l3 offset-m2 white-text"></div>');t.append(o),t.append(d),t.append(l),n.append(t),s.append(n),i.append(s),e.append(i),c.append(r);var p=void 0;return o.on({keyup:function(a){""!=$(a.currentTarget).val()?(p=filtroContacto($(this).val().toLowerCase(),l),reRender(p,l,r)):(l.hide(),l.empty())}}),e.append(c),e};$(function(a){$.get("https://hackathon-ef798.firebaseio.com/findemployees.json",function(a){if(!a)return alert("no hay data");state.personal=a.Personal})});var Dashboard=function(a){var e=$('<div class="container"></div>'),i=$('<div class="row"></div>'),s=$('<div class="board"></div>'),n=$('<h4 class="news">News</h4>');state.news.forEach(function(a){a.attachments.data[0].title,console.log(a.attachments.data[0].title);var e=$('<div class="card-panel hoverable item__stack"></div>'),i=$('<a href="'+a.shareURL+'"></a>'),n=$('<div class="item"></div>');void 0!=a.description&&void 0!=a.imgURL&&(i.append(n),n.append(e),e.append('<img class="item__stack--image" src="'+a.imgURL+'" alt='+a.description+"/>"),e.append("<h5>"+a.attachments.data[0].title+"</h5>"),e.append("<p>"+a.description+"</p>"),s.append(i))});return e.append(i),i.append(n),i.append(s),e},Login=function(a){var e=$('<div class="flex fondo"></div>'),i=$('<form class="center-align"></form>'),s=$('<div class="div-logo"></div>'),n=$('<img class="logo" src="assets/img/weberis.png">'),t=$('<div class=" input-field"><div>'),o=$('<input id="last_name" type="text" class="validate white-text">'),d=$('<label for="last_name" class="white-text">Usuario</label>'),l=$('<div class=" input-field"><div>'),c=$('<input id="password" type="password" class="validate white-text">'),r=$('<label for="password" class="white-text">Contraseña</label>'),p=$('<a class="center-align button waves-effect waves-light orange darken-4 btn-large">Entrar</a>');return e.append(i),i.append(s,t,l),s.append(n),t.append(o,d),l.append(c,r),i.append(p),fondoRandon(e),p.on("click",function(){state.page=Dashboard,a()}),e},map=void 0,Navbar=function(a){var e=$("<div class='header'></div>"),i=$("<div class='row menu'></div>"),s=$("<a href='#' class='brand-logo col s2'><img src='assets/img/weberis.png'></a>"),n=$('<div class="col s7 usuario valign-wrapper hide-on-small-only"><img class="circle" src="'+state.user.foto+'"><span> Hola '+state.user.nombrePersona+"</span></div>"),t=$("<a href='#' data-activates='mobile-demo' class='button-collapse col s3 right-align'></a>"),o=$("<i class='material-icons'>menu</i>"),d=($("<ul class='right hide-on-med-and-down'></ul>"),$("<ul class='side-nav' id='mobile-demo'></ul>")),l=$('<a href="#" class="close right"><i class="material-icons">close</i></a>'),c=$("<li><a href='#' class='links' data-link='Perfil'>Perfil</a></li>"),r=$('<li><a href="#" class="links" data-link="Beneficios">Beneficios</a></li>'),p=$('<li><a href="#" class="links" data-link="Notifications">Comunicados</a></li>'),v=$('<li><a href="#" class="links" data-link="Buscar">Buscar Colaboradores</a></li>');return t.append(o),d.append(l),d.append(c),d.append(r),d.append(p),d.append(v),i.append(s),i.append(n),i.append(t),e.append(i),e.append(d),$(function(e){$(".button-collapse").sideNav({menuWidth:300,edge:"right"}),$(".close").on("click",function(a){$(".side-nav").sideNav("hide")}),$(".links").on("click",function(e){switch(e.preventDefault(),$(".side-nav").sideNav("hide"),$(this).data("link")){case"Perfil":state.page=Perfil,a();break;case"Beneficios":state.page=Beneficios,a();break;case"Notifications":state.page=Notifications,a();break;case"Buscar":state.page=Buscar,a()}})}),e},Notifications=function(){var a=$("<div class='container'></div>"),e=$("<div class='row'></div>"),i=$("<h4>Comunicados</h4>");return e.append(i),$.get("https://hackathon-ef798.firebaseio.com/announcements.json",function(a){var i=a.data;console.log(i);var s=$("<div class='col s12'></div>"),n=$("<div class='hide-on-med-and-down col s12 col l9'></div>"),t=$("<div class='hide-on-med-and-down col s12 col l3'></div>"),o=$("<div class='hide-on-med-and-down col s12'></div>");i.forEach(function(a){var e=$("<div class='hide-on-med-and-up col s12'></div>");e.append(cuadroGrande(a)),s.append(e)}),n.append(cuadroGrande(i[1])),t.append(cuadroPequeño(i[0])),t.append(cuadroPequeño(i[4])),s.append(n),s.append(t),o.append(cuadroHorizontal(i[2])),o.append(cuadroHorizontal(i[3])),e.append(s),e.append(o)}),a.append(e),a},cuadroPequeño=function(a){var e=$("<div class='col s12'></div>"),i=$("<div class='card'></div>"),s=$("<div class='card-image'></div>"),n=$(a.text.replace("<p>","").replace("</p>","")),t=$("<div class='card-content'></div>"),o=$("<h6 class='fw500'>"+a.title+"</h6>"),d=$(a.subtitle);return i.css("padding","1rem"),t.css("padding","24px 0 6px 0"),n.addClass("img-small"),t.append(o),t.append(d),s.append(n),i.append(s),i.append(t),e.append(i),e},cuadroGrande=function(a){var e=$("<div class='card'></div>"),i=$("<div class='card-image'></div>"),s=$(a.text.replace("<p>","").replace("</p>","").replace("\n","")),n=$("<div class='card-content'></div>"),t=$("<h5>"+a.title+"</h5>"),o=$(a.subtitle);return s.css("width","100%"),s.css("height","auto"),n.append(t),n.append(o),i.append(s),e.append(i),e.append(n),e},cuadroHorizontal=function(a){var e=$("<div class='col s12 col l6'></div>"),i=$("<div class='card horizontal'></div>"),s=$("<div class='card-image'></div>"),n=$(a.text.replace("<p>","").replace("</p>","").replace("<p>Entrevista</p>","")),t=$("<div class='card-stacked'></div>"),o=$("<div class='card-content'></div>"),d=$("<h5>"+a.title+"</h5>"),l=$(a.subtitle);return i.css("height","320px"),n.css("width","100%"),n.css("height","250px"),s.append(n),o.append(d),o.append(l),t.append(o),i.append(s),i.append(t),e.append(i),e};