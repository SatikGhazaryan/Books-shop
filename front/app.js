let iconClassName = ["fa fa-shopping-bag", "fa fa-heart-o"];
fetch("./books.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let n = 0;
    let header = document.createElement("header");
    let title = document.createElement("h1");
    title.append("Books shop");
    let rowIcon = document.createElement("div");
    rowIcon.className = "row";
    sup();
    function sup() {
      rowIcon.innerHTML = "";
      for (let j = 0; j < 1; j++) {
        let shop = document.createElement("div");
        shop.className = "shop-col";
        let i = document.createElement("i");
        i.className = iconClassName[j];

        shop.append(i);

        if (n > 0 && j == 0) {
          let sup = document.createElement("sup");
          sup.innerHTML = n;
          shop.append(sup);
        }

        rowIcon.append(shop);
      }
    }
    header.append(title);
    header.append(rowIcon);
    document.querySelector("div").append(header);
    let main = document.createElement("main");
    data.forEach((element, ind) => {
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
      let em=document.createElement('em')
      em.id='id'+ind
      em.innerHTML="Show more..."
      em.addEventListener('click',function(){
        let popup=document.createElement("div")
        popup.className="pop"
        let box=document.createElement('div')
        box.className="box"
        let clos=document.createElement('p')
        clos.innerHTML="X"
        clos.className="clos"
        
        let author=document.createElement('p')
        author.innerHTML=element.author
        author.className='author'
        author.append(clos)
        box.append(author)
        let des=document.createElement('p')
        des.innerHTML=element.description
        des.className='des'
        box.append(des)
        popup.append(box)
        document.body.append(popup)
        clos.addEventListener('click',function(){
          document.querySelector(".pop").remove()
        })
      })
      div.append(em)
      let b = document.createElement("h4");
      b.append(element.price + " $");
      div.append(b);
     
      let row = document.createElement("div");
      row.className = "row";
      for (let j = 0; j < 2; j++) {
        let shop = document.createElement("div");
        shop.className = "shop-col";

        let i = document.createElement("i");
        if (j == 0) {
          i.className = iconClassName[j] + " bg";
        } else {
          i.className = iconClassName[j];
        }
        /* add click function in shop bag */
        shop.addEventListener("click", function () {
          console.log(n);
          n++;
          sup();
        });
        shop.append(i);
        row.append(shop);
      }
      div.append(row);
      main.append(div);
      document.querySelector("div").append(main);
    });
  });
