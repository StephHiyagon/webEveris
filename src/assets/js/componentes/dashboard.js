const Dashboard =(update)=>{
  const fecha = state.user.fechaIngreso.split('-');
  console.log(fecha);
  var mes, tiempo;
  console.log(fecha[1]);
  switch (fecha[1]) {
    case '01':
      mes='enero'
      break;
    case '02':
      mes='febrero'
      break;
    case '03':
      mes='marzo'
      break;
    case '08':
      mes='agosto'
      break;
  }
  var hoy = new Date();
  var diaA = hoy.getDate();
  var mesA = hoy.getMonth()+1; //hoy es 0!
  var anioA = hoy.getFullYear()
  console.log(anioA);
  if(fecha[0]<anioA){
    tiempo=anioA - fecha[0];
    console.log(tiempo);
  }
  const div=$('<div class="container-fluid"></div>');
  const row=$('<div class="row"></div>');
  const div2=$(`<div class="col s12 felicidad valign-wrapper"><h3 class="center-align white-text">Feliz Aniversario!!!</h3><h4 class="center-align white-text">Un ${fecha[2]} de ${mes} de ${fecha[0]} uniste tu camino al nuestro, hoy cumplimos ${tiempo} año juntos y por tu compromiso te mereces este ascenso</h4></div>`);
  const col8=$('<div class="board"></div>');
  const news=$('<h4 class="news col s12 center-align">Noticias</h4>');
  var noticias= (state.news).forEach((news)=>{
        news.attachments.data[0].title;
        // console.log(news.attachments.data[0].title);

        const panel=$('<div class="item__stack"></div>');
        const anchor=$('<a href="'+news.shareURL+'"></a>')
        const title=$('<div class="item black-text"></div>');
        if(news.description!=undefined && news.imgURL!=undefined){
        anchor.append(title);
        title.append(panel);
        panel.append('<img class="item__stack--image" src="'+news.imgURL+'" alt='+news.description+'/>');
        panel.append(`<h6 class="titleNews">${news.attachments.data[0].title}</h6>`);
        panel.append(`<p>${news.description}</p>`);
        col8.append(anchor);
        }


  });
  div.append(row);
  row.append(div2);
  row.append(news)
  row.append(col8);



  return div;
}
