const Navbar = (update) =>{
  const nav = $("<div class='lime'></div>");
    const navWrapper = $("<div class='row'></div>");
    const aLogo = $("<a href='#' class='brand-logo col s6'>Everis</a>");
    const aMenu = $("<a href='#' data-activates='mobile-demo' class='button-collapse col s6 right-align'></a>");
    const iconMenu = $("<i class='material-icons'>menu</i>");
    const navMobile = $("<ul class='right hide-on-med-and-down'></ul>");
    const liPerfil2 = $("<li><a href='#'>Perfil</a></li>");
    const sideNav = $("<ul class='side-nav' id='mobile-demo'></ul>");

    aMenu.append(iconMenu);
    sideNav.append(liPerfil2);
    navWrapper.append(aLogo);
    navWrapper.append(aMenu);
    nav.append(navWrapper);
    nav.append(sideNav);


    $(_=>{
      $(".button-collapse").sideNav({
              menuWidth: 300,
              edge: 'right'
            });
    });

    return nav;
}
