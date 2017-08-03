const Navbar = (update) =>{
  const nav = $("<div class='header'></div>");
    const navWrapper = $("<div class='row menu'></div>");
    const aLogo = $("<a href='#' class='brand-logo col s2'>Everis</a>");
    const usuario = $('<div class="col s7 usuario"><img src="'+ state.user.foto +'">Hola <span>'+ state.user.nombrePersona +'</span></div>');
    const aMenu = $("<a href='#' data-activates='mobile-demo' class='button-collapse col s3 right-align'></a>");
    const iconMenu = $("<i class='material-icons'>menu</i>");
    const navMobile = $("<ul class='right hide-on-med-and-down'></ul>");
    const sideNav = $("<ul class='side-nav' id='mobile-demo'></ul>");
    const cerrar = $('<a href="#" class="close right"><i class="material-icons">close</i></a>');
    const liPerfil = $("<li><a href='#' class='links' data-link='perfil'>Perfil</a></li>");
    const liBeneficios = $('<li><a href="#" class="links" data-link="beneficios">Beneficios</a></li>');
    const liComunicados = $('<li><a href="#" class="links" data-link="comunicados">Comunicados</a></li>');
    const liBusqueda = $('<li><a href="#" class="links" data-link="buscar">Buscar Colaboradores</a></li>');

    aMenu.append(iconMenu);
    sideNav.append(cerrar);
    sideNav.append(liPerfil);
    sideNav.append(liBeneficios);
    sideNav.append(liComunicados);
    sideNav.append(liBusqueda);
    navWrapper.append(aLogo);
    navWrapper.append(aMenu);
    nav.append(navWrapper);
    nav.append(sideNav);


    $(_=>{
      $(".button-collapse").sideNav({
              menuWidth: 300,
              edge: 'right'
      });
      $('.close').on('click',(e)=>{
        $('.side-nav').sideNav('hide');
      });
      $('.links').on('click', function(e) {
        e.preventDefault();
        $('.side-nav').sideNav('hide');
        switch ($(this).data("link")) {
          case "perfil":
                        state.page = "perfil";
                        update();
            break;
          case "beneficios":
                        state.page = "beneficios";
                        update();
            break;
          case "comunicados":
                        state.page = "comunicados";
                        update();
            break;
          case "buscar":
                        state.page = "buscar";
                        update();
            break;
          default:

        }

      });
    });

    return nav;
}
