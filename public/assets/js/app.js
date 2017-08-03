"use strict";function fondoRandon(a){var e=["fondo-1.jpg","fondo-2.jpg","fondo-3.jpg"],s=e[Math.floor(Math.random()*e.length)];a.css("background-image","url(assets/img/"+s+")"),console.log(s)}function initMap(a){buscame(a);var e={lat:-12,lng:-77};map=new google.maps.Map(document.getElementById("mapa"),{zoom:8,center:e})}function buscame(a){console.log(a.stores[0]),navigator.geolocation.getCurrentPosition(function(e){var s=e.coords;state.lat=s.latitude,state.log=s.longitude;new google.maps.Marker({position:{lat:a.stores[0].latitud,lng:a.stores[0].longitud},map:map});map.setZoom(18),map.setCenter({lat:a.stores[0].latitud,lng:a.stores[0].longitud});new google.maps.Marker({position:{lat:s.latitude,lng:s.longitude},map:map})},function(a){console.warn("ERROR("+a.code+"): "+a.message)})}var filtroContacto=function(a,e){return state.personal.filter(function(e){return e.Apellido.toLowerCase().indexOf(a)>-1||e.Apellido2.toLowerCase().indexOf(a)>-1||e.Nombre.toLowerCase().indexOf(a)>-1||e.DatosEmpleado.EMPLOYEE_NUMBER.toLowerCase().indexOf(a)>-1})},reRender=function(a,e,s){e.empty(),a.forEach(function(a){e.append(showItem(a,e,s))})},showItem=function(a,e,s){a.foto.split("/").pop();var i=$('<div class="row"></div>'),n=$('<span class="item-place__title col s9">'+a.Nombre+"   "+a.Apellido+"   "+a.Apellido2+"</span>"),t=$('<span class="col s3">'+a.DatosEmpleado.EMPLOYEE_NUMBER+"</span>"),o=$("<div></div>"),l=$('<div class="col m5 s12 center-align"><img class="circle filtro" src="assets/img/julio.png"/></div>'),d=$('<div class="col m7 s12"></div>'),c=$("<h5>"+a.Nombre+"  "+a.Apellido+"   "+a.Apellido2+"</h5> <br>"),r=$('<p><spanclass="strong"> Correo: </span><a href="mailto:'+a.DatosEmpleado.EMAIL+'">'+a.DatosEmpleado.EMAIL+"</a></p>"),p=$('<p><span class="strong"> N° Empleado: </span>'+a.DatosEmpleado.EMPLOYEE_NUMBER+"</p>");return i.append(n),i.append(t),d.append(c),d.append(p),d.append(r),o.append(l),o.append(d),i.on("click",function(a){a.preventDefault(),e.empty(),e.hide(),s.empty(),s.append(o)}),e.show(),i},getCategories=function(){$.get("https://hackathon-ef798.firebaseio.com/categories.json",function(a){if(!a)return alert("no hay data");state.category=a})},showBenef=function(a,e){var s=$('<div class="col s12 m6"></div>'),i=$('<div class="card horizontal height"></div>'),n=$('<div class="img-promocion valign-wrapper card-image"></div>'),t=$('<img src="'+a.imgCompany+'">'),o=$('<div class="card-stacked"></div>'),l=$('<div class="promocion card-content"></div>'),d=$("<h4>"+a.nameCompany+"</h4>"),c=$("<p>"+a.title+"</p>"),r=$('<span class="float-right">'+a.discount+"</span>");return s.append(i),i.append(n,o),n.append(t),o.append(l),l.append(d,c,r),s.on("click",function(s){s.preventDefault(),state.beneficio=a,$(document).ready(function(){console.log(a),initMap(a)}),$(".overlay1").css("display","block"),Modal(a,e)}),s},filterBenefit=function(a){return state.benefits.filter(function(e){return e.links.categories.indexOf(a.toString())>-1})},render=function(a){a.empty();var e=$('<div class="wrapper"></div>');null==state.page?e.append(Login(function(e){return render(a)})):(e.append(Navbar(function(){render(a)})),e.append(state.page(function(e){return render(a)}))),a.append(e)},state={page:null,user:null,news:null,benefits:null,id2:null};$(function(a){$.get("https://hackathon-ef798.firebaseio.com/getemployee.json",function(a){if(!a)return alert("no hay data gg");state.user=a.persona,$.get("https://hackathon-ef798.firebaseio.com/news.json",function(a){if(!a)return alert("no hay data gg");state.news=a.data}),$.get("https://hackathon-ef798.firebaseio.com/benefits.json",function(a){if(!a)return alert("no hay data gg");state.benefits=a});var e=$("#root");render(e)})});var soloLetras=function(a){var e=a.which;return e>=97&&e<=122||e>=65&&e<=90||39==e||32==e||241==e||209==e},Beneficios=function(a){var e=$('<div class="container-fluid"><h4 class="news">Beneficios</h4></div>'),s=$('<div class="row"></div>'),i=$('<div class="col m2 hide-on-small-only"></div>'),n=$('<ul class="collection"><li class="collection-item dismissable"><div>Más buscados<a href="#!" class="secondary-content link-categoria" data-categoria="44"><i class="material-icons">send</i></a></div></li><li class="collection-item dismissable"><div>Diversión y Ocio<a href="#!" class="secondary-content link-categoria" data-categoria="123"><i class="material-icons">send</i></a></div></li><li class="collection-item dismissable"><div>Educación<a href="#!" class="secondary-content link-categoria" data-categoria="139"><i class="material-icons">send</i></a></div></li><li class="collection-item dismissable"><div>Salud y Deporte<a href="#!" class="secondary-content link-categoria" data-categoria="48"><i class="material-icons">send</i></a></div></li><li class="collection-item dismissable"><div>Bebés y Niños<a href="#!" class="secondary-content link-categoria" data-categoria="16"><i class="material-icons">send</i></a></div></li><li class="collection-item dismissable"><div>Autos y Motos<a href="#!" class="secondary-content link-categoria" data-categoria="107"><i class="material-icons">send</i></a></div></li></ul>'),t=$('<div class="col s12 m10"></div>');return e.append(s),i.append(n),state.benefits.forEach(function(a,s){s<10&&t.append(showBenef(a,e))}),s.append(i,t),$(function(a){$(".link-categoria").on("click",function(a){a.preventDefault();var s=filterBenefit($(this).data("categoria"));t.empty(),s.forEach(function(a){t.append(showBenef(a,e))})})}),e},Modal=function(a,e){var s=$('<div class="overlay1"></div>'),i=$('<div class="container modal-ejemplo"></div>'),n=$('<span class="close">X</span>'),t=$('<div class="row"></div>'),o=$('<div class="col s12 m6"></div>'),l=$('<img src="'+a.imgCompany+'">'),d=$("<h5>"+a.nameCompany+"</h5>"),c=$("<p>"+a.description+"</p>"),r=$('<div class="col s12 m6"></div>'),p=$('<div id="mapa" class="mapa"></div>');e.append(s,i),i.append(t,n),t.append(o,r),o.append(l,d,c),r.append(p),n.on("click",function(){$(".overlay1").css("display","none"),i.hide(),i.empty()})},Buscar=function(a){var e=$('<div class="collage"></div>'),s=$('<div class=" row"></div>'),i=$('<form class="col s12 m8 l6 offset-l3 offset-m2 search" autocomplete="off"></form>'),n=$('<div class="row"></div>'),t=$('<div class="input-field col s12"><i class="material-icons prefix white-text">search</i></div>'),o=$('<input id="icon_prefix" type="text" class="white-text search">'),l=$('<label for="icon_prefix">Ingresa el nombre o código de un compañero</label>'),d=$('<div class="autocompleted"></div>'),c=$('<div class="resultado row"></div>'),r=$('<div class="col s12 m8 l6 offset-l3 offset-m2 white-text"></div>');t.append(o),t.append(l),t.append(d),n.append(t),i.append(n),s.append(i),e.append(s),c.append(r);var p=void 0;return o.on({keyup:function(a){""!=$(a.currentTarget).val()?(p=filtroContacto($(this).val().toLowerCase(),d),reRender(p,d,r)):(d.hide(),d.empty())}}),e.append(c),e};$(function(a){$.get("https://hackathon-ef798.firebaseio.com/findemployees.json",function(a){if(!a)return alert("no hay data");state.personal=a.Personal})});var Dashboard=function(a){var e=state.user.fechaIngreso.split("-");console.log(e);var s,i;switch(console.log(e[1]),e[1]){case"01":s="enero";break;case"02":s="febrero";break;case"03":s="marzo";break;case"08":s="agosto"}var n=new Date,t=(n.getDate(),n.getMonth(),n.getFullYear());console.log(t),e[0]<t&&(i=t-e[0],console.log(i));var o=$('<div class="container-fluid"></div>'),l=$('<div class="row"></div>'),d=$('<div class="col s12 felicidad valign-wrapper"><h3 class="center-align white-text">Feliz Aniversario!!!</h3><h4 class="center-align white-text">Un '+e[2]+" de "+s+" de "+e[0]+" uniste tu camino al nuestro, hoy cumplimos "+i+" año juntos y por tu compromiso te mereces este ascenso</h4></div>"),c=$('<div class="board"></div>'),r=$('<h4 class="news col s12 center-align">Noticias</h4>');state.news.forEach(function(a){a.attachments.data[0].title;var e=$('<div class="item__stack"></div>'),s=$('<a href="'+a.shareURL+'"></a>'),i=$('<div class="item black-text"></div>');void 0!=a.description&&void 0!=a.imgURL&&(s.append(i),i.append(e),e.append('<img class="item__stack--image" src="'+a.imgURL+'" alt='+a.description+"/>"),e.append('<h6 class="titleNews">'+a.attachments.data[0].title+"</h6>"),e.append("<p>"+a.description+"</p>"),c.append(s))});return o.append(l),l.append(d),l.append(r),l.append(c),o},Login=function(a){var e=$('<div class="flex fondo"></div>'),s=$('<form class="center-align"></form>'),i=$('<div class="div-logo"></div>'),n=$('<img class="logo" src="assets/img/weberis.png">'),t=$('<div class=" input-field"><div>'),o=$('<input id="last_name" type="text" class="validate white-text">'),l=$('<label for="last_name" class="white-text">Usuario</label>'),d=$('<div class=" input-field"><div>'),c=$('<input id="password" type="password" class="validate white-text">'),r=$('<label for="password" class="white-text">Contraseña</label>'),p=$('<a href="#" class="underline">¿Olvide mi contraseña?</a>'),v=$('<a class="center-align button waves-effect waves-light orange darken-4 btn-large">Entrar</a>'),u=$('<p class="red-text center-align">Usuario y Password incorrectos</p>');u.hide(),v.attr("disabled","true");var f=void 0,m=void 0,g=function(){f&&m?v.attr("disabled",!1):v.attr("disabled",!0)};return o.on({keypress:soloLetras,keyup:function(a){$(a.target).val().length>1?(f=!0,g()):(f=!1,g())}}),c.on("keyup",function(a){$(a.target).val().length>=4?(m=!0,g()):(m=!1,g())}),e.append(s),s.append(i,t,d),i.append(n),t.append(o,l),d.append(c,r),s.append(p),s.append(v),s.append(u),fondoRandon(e),v.on("click",function(){"jorge juan"==o.val().toLowerCase()&&"1234"==c.val()?(state.page=Dashboard,a()):u.show()}),e},map=void 0,Navbar=function(a){var e=$("<div class='header'></div>"),s=$("<div class='row menu'></div>"),i=$("<a href='#' class='brand-logo col s2'><img src='assets/img/weberis.png'></a>"),n=$('<div class="col s7 usuario valign-wrapper hide-on-small-only"><img class="circle" src="'+state.user.foto+'"><span> Hola, '+state.user.nombrePersona+"</span></div>"),t=$("<a href='#' data-activates='mobile-demo' class='button-collapse col s3 right-align'></a>"),o=$("<i class='material-icons'>menu</i>"),l=($("<ul class='right hide-on-med-and-down'></ul>"),$("<ul class='side-nav center-align' id='mobile-demo'></ul>")),d=$('<a href="#" class="close right"><i class="material-icons black-text">close</i></a>'),c=$("<li><a href='#' class='links' data-link='Home'>Home</a></li>"),r=$('<li><a href="#" class="links" data-link="Beneficios">Beneficios</a></li>'),p=$('<li><a href="#" class="links" data-link="Notifications">Comunicados</a></li>'),v=$('<li><a href="#" class="links" data-link="Buscar">Buscar Colaboradores</a></li>'),u=$('<li><a href="#" class="links" data-link="Cerrar">Cerrar</a></li>');return i.on("click",function(){state.page=Dashboard,a()}),t.append(o),l.append(d),l.append(c),l.append(r),l.append(p),l.append(v),l.append(u),s.append(i),s.append(n),s.append(t),e.append(s),e.append(l),$(function(e){$(".button-collapse").sideNav({menuWidth:300,edge:"right"}),$(".close").on("click",function(a){$(".side-nav").sideNav("hide")}),$(".links").on("click",function(e){switch(e.preventDefault(),$(".side-nav").sideNav("hide"),$(this).data("link")){case"Home":state.page=Dashboard,a();break;case"Beneficios":state.page=Beneficios,a();break;case"Notifications":state.page=Notifications,a();break;case"Buscar":state.page=Buscar,a();break;case"Cerrar":state.page=null,a()}})}),e},Notifications=function(){var a=$("<div class='container'></div>"),e=$("<div class='row'></div>"),s=$("<h4>Comunicados</h4>");return e.append(s),$.get("https://hackathon-ef798.firebaseio.com/announcements.json",function(a){var s=a.data;console.log(s);var i=$("<div class='col s12'></div>"),n=$("<div class='hide-on-med-and-down col s12 col l9'></div>"),t=$("<div class='hide-on-med-and-down col s12 col l3'></div>"),o=$("<div class='hide-on-med-and-down col s12'></div>");s.forEach(function(a){var e=$("<div class='hide-on-med-and-up col s12'></div>");e.append(cuadroGrande(a)),i.append(e)}),n.append(cuadroGrande(s[1])),t.append(cuadroPequeño(s[0])),t.append(cuadroPequeño(s[4])),i.append(n),i.append(t),o.append(cuadroHorizontal(s[2])),o.append(cuadroHorizontal(s[3])),e.append(i),e.append(o)}),a.append(e),a},cuadroPequeño=function(a){var e=$("<div class='col s12'></div>"),s=$("<div class='card'></div>"),i=$("<div class='card-image'></div>"),n=$(a.text.replace("<p>","").replace("</p>","")),t=$("<div class='card-content'></div>"),o=$("<h6 class='fw500'>"+a.title+"</h6>"),l=$(a.subtitle);return s.css("padding","1rem"),t.css("padding","24px 0 6px 0"),n.addClass("img-small"),t.append(o),t.append(l),i.append(n),s.append(i),s.append(t),e.append(s),e},cuadroGrande=function(a){var e=$("<div class='card'></div>"),s=$("<div class='card-image'></div>"),i=$(a.text.replace("<p>","").replace("</p>","").replace("\n","")),n=$("<div class='card-content'></div>"),t=$("<h5>"+a.title+"</h5>"),o=$(a.subtitle);return i.css("width","100%"),i.css("height","auto"),n.append(t),n.append(o),s.append(i),e.append(s),e.append(n),e},cuadroHorizontal=function(a){var e=$("<div class='col s12 col l6'></div>"),s=$("<div class='card horizontal'></div>"),i=$("<div class='card-image'></div>"),n=$(a.text.replace("<p>","").replace("</p>","").replace("<p>Entrevista</p>","")),t=$("<div class='card-stacked'></div>"),o=$("<div class='card-content'></div>"),l=$("<h5>"+a.title+"</h5>"),d=$(a.subtitle);return s.css("height","320px"),n.css("width","100%"),n.css("height","250px"),i.append(n),o.append(l),o.append(d),t.append(o),s.append(i),s.append(t),e.append(s),e};