"use strict";var render=function(a){a.empty();var e=$('<div class="wrapper"></div>');null==state.page?e.append(Login(function(e){return render(a)})):(e.append(Navbar(function(e){return render(a)})),e.append(state.page(function(e){return render(a)}))),a.append(e)},state={page:null,user:null,news:null};$(function(a){$.get("https://hackathon-ef798.firebaseio.com/getemployee.json",function(a){if(!a)return alert("no hay data gg");state.user=a.persona,console.log(a.persona),$.get("https://hackathon-ef798.firebaseio.com/news.json",function(a){if(!a)return alert("no hay data gg");state.news=a.data,console.log(state.news)});var e=$("#root");render(e)})});var Dashboard=function(a){var e=$('<div class="container"></div>'),n=$('<div class="row"></div>'),s=$('<div class="col s12 col m4 center-align"></div>'),d=$('<img src="'+state.user.foto+'" alt="foto de perfil"/>'),t=$('<p class="blue-text">'+state.user.nombrePersona+" "+state.user.apellidoPersona+"</p>"),i=$('<div class="col s12 col m8"></div>'),p=$("<div><h4>News</h4></div>");state.news.forEach(function(a){a.attachments.data[0].title,console.log(a.attachments.data[0].title),p.append("<h5>"+a.attachments.data[0].title+"</h5>")});return e.append(n),n.append(s),s.append(d),s.append(t),n.append(i),i.append(p),e},Login=function(a){var e=$('<div class="flex row"></div>'),n=$('<form class="col s6 offset-s3 flex"></form>'),s=$('<div class=" input-field"><div>'),d=$('<input id="last_name" type="text" class="validate">'),t=$('<label for="last_name">Usuario</label>'),i=$('<div class=" input-field"><div>'),p=$('<input id="password" type="password" class="validate">'),l=$('<label for="password">Contraseña</label>'),c=$('<a class="center-align waves-effect waves-light btn-large">Entrar</a>');return e.append(n),n.append(s,i),s.append(d,t),i.append(p,l),n.append(c),c.on("click",function(){state.page=Notifications,a()}),e},Navbar=function(){var a=$("<div class='lime'></div>"),e=$("<div class=''></div>"),n=$("<a href='#!' class='brand-logo'>Everis</a>"),s=$("<a href='#' data-activates='mobile-demo' class='button-collapse'></a>"),d=$("<i class='material-icons'>menu</i>"),t=$("<ul class='right hide-on-med-and-down'></ul>"),i=$("<li><a href='#'>Perfil</a></li>"),p=$("<li><a href='#'>Perfil</a></li>"),l=$("<ul class='side-nav' id='mobile-demo'></ul>");return s.append(d),t.append(i),l.append(p),e.append(n),e.append(s),a.append(e),a.append(l),$(function(a){$(".button-collapse").sideNav({menuWidth:300,edge:"right"})}),a},Notifications=function(){var a=$("<div class='container'></div>"),e=$("<div class='row'></div>"),n=$("<h4>Comunicados</h4>");return e.append(n),$.get("https://hackathon-ef798.firebaseio.com/announcements.json",function(a){var n=a.data;console.log(n);var s=$("<div class='col s12'></div>"),d=$("<div class='col s12 col l9'></div>"),t=$("<div class='col s12 col l3'></div>"),i=$("<div class='col s12'></div>");d.append(cuadroGrande(n[1])),t.append(cuadroPequeño(n[0])),t.append(cuadroPequeño(n[4])),s.append(d),s.append(t),i.append(cuadroHorizontal(n[2])),i.append(cuadroHorizontal(n[3])),e.append(s),e.append(i)}),a.append(e),a},cuadroPequeño=function(a){var e=$("<div class='col s12'></div>"),n=$("<div class='card'></div>"),s=$("<div class='card-image'></div>"),d=$(a.text.replace("<p>","").replace("</p>","")),t=$("<div class='card-content'></div>"),i=$("<h6 class='fw500'>"+a.title+"</h6>"),p=$(a.subtitle);return n.css("padding","1rem"),t.css("padding","24px 0 6px 0"),d.addClass("img-small"),t.append(i),t.append(p),s.append(d),n.append(s),n.append(t),e.append(n),e},cuadroGrande=function(a){var e=$("<div class='card'></div>"),n=$("<div class='card-image'></div>"),s=$(a.text.replace("<p>","").replace("</p>","").replace("\n","")),d=$("<div class='card-content'></div>"),t=$("<h5>"+a.title+"</h5>"),i=$(a.subtitle);return s.css("width","100%"),s.css("height","auto"),d.append(t),d.append(i),n.append(s),e.append(n),e.append(d),e},cuadroHorizontal=function(a){var e=$("<div class='col s12 col l6'></div>"),n=$("<div class='card horizontal'></div>"),s=$("<div class='card-image'></div>"),d=$(a.text.replace("<p>","").replace("</p>","").replace("<p>Entrevista</p>","")),t=$("<div class='card-stacked'></div>"),i=$("<div class='card-content'></div>"),p=$("<h5>"+a.title+"</h5>"),l=$(a.subtitle);return n.css("height","320px"),d.css("width","100%"),d.css("height","250px"),s.append(d),i.append(p),i.append(l),t.append(i),n.append(s),n.append(t),e.append(n),e};