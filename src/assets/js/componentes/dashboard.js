const Dashboard =(update)=>{
  const div=$('<div class="container"></div>');
  const row=$('<div class="row"></div>');
  const col4=$('<div class="col s12 col m4 center-align"></div>');
  const photo=$('<img src="'+state.user.foto+'" alt="foto de perfil"/>');
  const name=$(`<p class="blue-text">${state.user.nombrePersona} ${state.user.apellidoPersona}</p>`);
  const col8=$('<div class="col s12"><h4>News</h4></div>');
  const title=$('<div class="board"></div>');
  var noticias= (state.news).forEach((news)=>{
        news.attachments.data[0].title;
        console.log(news.attachments.data[0].title);
        const panel=$('<div class="card-panel hoverable"></div>');



        if(news.description!=undefined && news.imgURL!=undefined){
        title.append(panel);
        panel.append('<img class="img-responsive" src="'+news.imgURL+'" alt='+news.description+'/>');
        panel.append(`<h5>${news.attachments.data[0].title}</h5>`);
        panel.append(`<p>${news.description}</p>`);
        }

        // `<h3>${station.name}</h3>`
  });
  div.append(row);
  // row.append(col4);
  // col4.append(photo);
  // col4.append(name);
  row.append(col8);
  col8.append(title);


  return div;
}
