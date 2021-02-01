let tblmenu = [
    {idmenu:5, idkategori:16, menu:"jeruk manis1", gambar:"jeruk.jpg", harga:8000},
    {idmenu:6, idkategori:16, menu:"Nangka", gambar:"nangka.jpg", harga:4000},
    {idmenu:12, idkategori:12, menu:"dawet enak jos", gambar:"dawet.jpg", harga:2500},
    {idmenu:13, idkategori:15, menu:"Jus mangga enak", gambar:"mangga.jpg", harga:2500},
    {idmenu:14, idkategori:15, menu:"Durian", gambar:"durian.jpg", harga:2500},
    {idmenu:15, idkategori:15, menu:"sawo", gambar:"sawo.jpg", harga:2500},
   
];

let tampil = tblmenu.map(function (kolom) {
    return ` <div class="produk-content">
    <div class="image">
      <img src="images/${kolom.gambar}" alt="" />
    </div>
    <div class="titel">
      <h2>${kolom.menu}</h2>
    </div>
   
    <div class="harga">
      <h2>Rp.${kolom.harga}</h2>
    </div>
    <div class="btn-beli">
                <button data-idmenu="${kolom.idmenu}">Beli</button>
             </div>
  </div> `;
});

let isi = document.querySelector(".produk");
isi.innerHTML = tampil;

let btnbeli = document.querySelectorAll(".btn-beli > button");

let cart = [];

for (let index = 0; index < btnbeli.length; index++) {
    btnbeli[index].onclick = function () {
       // console.log(btnbeli[index].dataset["idmenu"]);
        //cart.push(btnbeli[index].dataset["idmenu"]);

        tblmenu.filter(function (a) {
            if (a.idmenu == btnbeli[index].dataset["idmenu"]) {
                cart.push(a);
                console.log(cart);
            }
        })
    };
    
}

// console.log(cart);



