const Navbar = () =>{

  const nav = $("<div class='lime'></div>");
    const navWrapper = $("<div class=''></div>");
    const aLogo = $("<a href='#!' class='brand-logo'>Everis</a>");
    const aMenu = $("<a href='#' data-activates='mobile-demo' class='button-collapse'></a>");
    const iconMenu = $("<i class='material-icons'>menu</i>");
    const navMobile = $("<ul class='right hide-on-med-and-down'></ul>");
    const liPerfil1 = $("<li><a href='#'>Perfil</a></li>");
    const liPerfil2 = $("<li><a href='#'>Perfil</a></li>");
    const sideNav = $("<ul class='side-nav' id='mobile-demo'></ul>");

    aMenu.append(iconMenu);
    navMobile.append(liPerfil1);
    sideNav.append(liPerfil2);
    navWrapper.append(aLogo);
    navWrapper.append(aMenu);

    // navWrapper.append(navMobile);
    nav.append(navWrapper);
    nav.append(sideNav);


    $(_=>{
      $(".button-collapse").sideNav({
              menuWidth: 300,
              edge: 'right'
            });
    });
    // aMenu.sideNav();


    return nav;
}
