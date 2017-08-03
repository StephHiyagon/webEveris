const Navbar = (update) =>{
  const nav = $("<div class='blue'></div>");
    const navWrapper = $("<div class='row'></div>");
    const aLogo = $("<a href='#' class='color-white brand-logo col s6'>Everis</a>");
    const aMenu = $("<a href='#' data-activates='mobile-demo' class='color-white button-collapse col s6 right-align'></a>");
    const iconMenu = $("<i class='material-icons'>menu</i>");
    const navMobile = $("<ul class='right hide-on-med-and-down'></ul>");
    const liPerfil2 = $("<li><a href='#'>Perfil</a></li>");
    const liBeneficios2 = $("<li><a href='#'>Beneficios</a></li>");
    const liBuscar2 = $("<li><a href='#'>Buscar</a></li>");
    const sideNav = $("<ul class='side-nav' id='mobile-demo'></ul>");

    aMenu.append(iconMenu);
    sideNav.append(liPerfil2, liBeneficios2, liBuscar2);
    navWrapper.append(aLogo);
    navWrapper.append(aMenu);

    nav.append(navWrapper);
    nav.append(sideNav);

    liBuscar2.on('click', function(){
      state.page= Buscar;
      update();
    });

    $(_=>{
      $(".button-collapse").sideNav({
              menuWidth: 300,
              edge: 'right'
            });
    });

    return nav;
}
