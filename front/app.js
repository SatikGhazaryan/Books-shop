let iconClassName = ["fa fa-shopping-bag", "fa fa-heart-o"];
fetch("./books.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let header=document.createElement('header')
    let title = document.createElement("h1");
    title.append("Books shop");
    let rowIcon = document.createElement("div");
      rowIcon.className = "row";
      for (let j = 0; j < 2; j++) {
        let shop = document.createElement("div");
        shop.className = "shop-col";
        let i = document.createElement("i");
        i.className = iconClassName[j];
        shop.append(i);
        rowIcon.append(shop);
      }
      header.append(title)
      header.append(rowIcon)
    document.querySelector("div").append(header);
    let main=document.createElement('main')
    data.forEach((element) => {
      let div = document.createElement("div");
      div.className = "col";
      let img = document.createElement("img");
      img.src = element.imageLink;
      div.append(img);
      let h = document.createElement("h3");
      h.append(element.title);
      div.append(h);
      let p = document.createElement("p");
      p.append(element.author);
      div.append(p);
      let b = document.createElement("h4");
      b.append(element.price + " $");
      div.append(b);
      let row = document.createElement("div");
      row.className = "row";
      for (let j = 0; j < 2; j++) {
        let shop = document.createElement("div");
        shop.className = "shop-col";
        let i = document.createElement("i");
        if(j==0){
        i.className = iconClassName[j] +" bg";
        }else{ i.className = iconClassName[j]}

        shop.append(i);
        row.append(shop);
      }
      div.append(row);
      main.append(div)
      document.querySelector("div").append(main);
    });
  });
