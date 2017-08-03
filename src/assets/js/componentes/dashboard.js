const Dashboard =(update)=>{
  const div=$('<div class="container"></div>');
  const row=$('<div class="row"></div>');
  const col8=$('<div class="board"></div>');
  const news=$('<h4 class="">News</h4>');
  col8.append(news);
  var noticias= (state.news).forEach((news)=>{
        news.attachments.data[0].title;
        console.log(news.attachments.data[0].title);

        const panel=$('<div class="card-panel hoverable item__stack"></div>');
        const anchor=$('<a href="'+news.shareURL+'"></a>')
        const title=$('<div class="item"></div>');
        if(news.description!=undefined && news.imgURL!=undefined){
        anchor.append(title);
        title.append(panel);
        panel.append('<img class="item__stack--image" src="'+news.imgURL+'" alt='+news.description+'/>');
        panel.append(`<h5>${news.attachments.data[0].title}</h5>`);
        panel.append(`<p>${news.description}</p>`);
        col8.append(anchor);
        }


  });
  div.append(row);
  row.append(col8);



  return div;
}
