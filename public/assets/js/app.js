"use strict";var render=function(e){e.empty();var a=$('<div class="wrapper"></div>');null==state.page?a.append(Login(function(a){return render(e)})):(a.append(Navbar(function(a){return render(e)})),a.append(state.page(function(a){return render(e)}))),e.append(a)},state={page:null,user:null,news:null};$(function(e){$.get("https://hackathon-ef798.firebaseio.com/getemployee.json",function(e){if(!e)return alert("no hay data gg");state.user=e.persona,console.log(e.persona),$.get("https://hackathon-ef798.firebaseio.com/news.json",function(e){if(!e)return alert("no hay data gg");state.news=e.data,console.log(state.news)});var a=$("#root");render(a)})});var Dashboard=function(e){var a=$('<div class="container"></div>'),n=$('<div class="row"></div>'),t=$('<div class="col s12 col m4 center-align"></div>'),s=$('<img src="'+state.user.foto+'" alt="foto de perfil"/>'),i=$('<p class="blue-text">'+state.user.nombrePersona+" "+state.user.apellidoPersona+"</p>"),l=$('<div class="col s12 col m8"></div>'),o=$("<div><h4>News</h4></div>");state.news.forEach(function(e){e.attachments.data[0].title,console.log(e.attachments.data[0].title),o.append("<h5>"+e.attachments.data[0].title+"</h5>")});return a.append(n),n.append(t),t.append(s),t.append(i),n.append(l),l.append(o),a},Login=function(e){var a=$('<div class="flex row"></div>'),n=$('<form class="col s6 offset-s3 flex"></form>'),t=$('<div class=" input-field"><div>'),s=$('<input id="last_name" type="text" class="validate">'),i=$('<label for="last_name">Usuario</label>'),l=$('<div class=" input-field"><div>'),o=$('<input id="password" type="password" class="validate">'),d=$('<label for="password">Contraseña</label>'),r=$('<a class="center-align waves-effect waves-light btn-large">Entrar</a>');return a.append(n),n.append(t,l),t.append(s,i),l.append(o,d),n.append(r),r.on("click",function(){state.page=Notifications,e()}),a},Navbar=function(){var e=$("<div class='lime'></div>"),a=$("<div class=''></div>"),n=$("<a href='#!' class='brand-logo'>Everis</a>"),t=$("<a href='#' data-activates='mobile-demo' class='button-collapse'></a>"),s=$("<i class='material-icons'>menu</i>"),i=$("<ul class='right hide-on-med-and-down'></ul>"),l=$("<li><a href='#'>Perfil</a></li>"),o=$("<li><a href='#'>Perfil</a></li>"),d=$("<ul class='side-nav' id='mobile-demo'></ul>");return t.append(s),i.append(l),d.append(o),a.append(n),a.append(t),e.append(a),e.append(d),$(function(e){$(".button-collapse").sideNav({menuWidth:300,edge:"right"})}),e},Notifications=function(){var e=$("<div class='container'></div>"),a=$("<div class='row'></div>"),n=$("<h4>Comunicados</h4>");return a.append(n),$.get("https://hackathon-ef798.firebaseio.com/announcements.json",function(e){var n=e.data;console.log(n);var t=$("<div class='col s12 col l6 col xl6'></div>");n.forEach(function(e,a){console.log(a),a>0&&t.append(cuadroPequeño(e))}),a.append(cuadroGrande(n[0])),a.append(t)}),e.append(a),e},cuadroPequeño=function(e){var a=$("<div class='col s12 col l6 col xl6'></div>"),n=$(e.text.replace("<p>","").replace("</p>","").replace("\n","").replace("<p>Entrevista</p>"),""),t=$("<div></div>"),s=$("<p>"+e.title+"</div>");return n.css("width","100%"),n.css("height","150px"),t.append(s),a.append(n),a.append(t),a},cuadroGrande=function(e){var a=$("<div class='col s12 col l6 col xl6'></div>"),n=$(e.text.replace("<p>","").replace("</p>","").replace("\n","")),t=$("<div></div>"),s=$("<p>"+e.title+"</div>");return n.css("width","100%"),n.css("height","400px"),t.append(s),a.append(n),a.append(t),a};