<<<<<<< HEAD
const Beneficios = ()=>{
=======
const Beneficios = (update)=>{
>>>>>>> a72ecc82bbd941101c010754ba6ba48bce24d52f
  const div = $('<div class="container-fluid"><h4 class="news">Beneficios</h4></div>');
  const row = $('<div class="row"></div>');
  const categorias = $('<div class="col m2 hide-on-small-only"></div>');
  const listaCategoria = $('<ul class="collection">'+
                      '<li class="collection-item dismissable"><div>Más buscados<a href="#!" class="secondary-content link-categoria" data-categoria="44"><i class="material-icons">send</i></a></div></li>'+
                      '<li class="collection-item dismissable"><div>Diversión y Ocio<a href="#!" class="secondary-content link-categoria" data-categoria="123"><i class="material-icons">send</i></a></div></li>'+
                      '<li class="collection-item dismissable"><div>Educación<a href="#!" class="secondary-content link-categoria" data-categoria="139"><i class="material-icons">send</i></a></div></li>'+
                      '<li class="collection-item dismissable"><div>Salud y Deporte<a href="#!" class="secondary-content link-categoria" data-categoria="48"><i class="material-icons">send</i></a></div></li>'+
                      '<li class="collection-item dismissable"><div>Bebés y Niños<a href="#!" class="secondary-content link-categoria" data-categoria="16"><i class="material-icons">send</i></a></div></li>'+
                      '<li class="collection-item dismissable"><div>Autos y Motos<a href="#!" class="secondary-content link-categoria" data-categoria="107"><i class="material-icons">send</i></a></div></li></ul>');
  const promociones = $('<div class="col s12 m10"></div>');


  div.append(row);
  categorias.append(listaCategoria);
  state.benefits.forEach(function(index, item){
    if(item < 10){
      promociones.append(showBenef(index, div));
    }
  });
  row.append(categorias, promociones);

  $(_=>{

    $('.link-categoria').on("click", function(e){
      e.preventDefault();
      let arrayFiltrado = filterBenefit($(this).data("categoria"));
      promociones.empty();
      arrayFiltrado.forEach(function(item){

        promociones.append(showBenef(item, div));
      });
    });
  });
  return div;
}

const Modal = (item, div)=>{
const plomo= $('<div class="overlay1"></div>');
const modal=$('<div class="container modal-ejemplo"></div>');
const close = $('<span class="close">X</span>');
const row = $('<div class="row"></div>');
const colum1 = $('<div class="col s12 m6"></div>');
  const imagen = $('<img src="'+item.imgCompany+'">');
  const tienda = $('<h5>'+item.nameCompany+'</h5>');
  const condiciones = $('<p>'+item.description+'</p>');
const colum2 = $('<div class="col s12 m6"></div>');
const mapa = $('<div id="mapa" class="mapa"></div>');

div.append(plomo, modal);
modal.append(row, close);
row.append(colum1, colum2);
colum1.append(imagen, tienda,condiciones)
colum2.append(mapa);

  close.on('click', function(){
    // $('.overlay1').hide();
    $('.overlay1').css("display", "none");

    modal.hide();
    modal.empty();
  });
}
