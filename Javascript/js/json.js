document.querySelector("#klik").addEventListener("click", tampil);

function tampil(params) {
    let url = "js/tblmenu.json";
    fetch(url)
  .then(function (res) {
      return res.json();
  })

  .then(function (data) {
      let output = "<h1>DATA MENU</h1> <table><th>Menu</th><th>Harga</th><th>Warna</th>";
      data.forEach(element => {
          output += `<tr>
                <td>${element.menu}</td>
                <td>${element.harga}</td>
                <td>${element.warna[0]}</td>
          </tr>`;
      });
      output += "</table>";
      document.querySelector("#isi").innerHTML = output;
  })
   
}

// let tblmenu = [
//     {
//     "idmenu" : 5,
//     "idkategori" : 16,
//     "menu" : "jeruk manis 1", 
//     "harga" : 8000,
//     "warna" : ["merah", "kuning", "hijau"],
//     "stok" : true,
//     "keterangan" : null
// },
// {
//     "idmenu" : 6,
//     "idkategori" : 16,
//     "menu" : "jeruk manis 2", 
//     "harga" : 3000,
//     "warna" : ["merah", "kuning"],
//     "stok" : false,
//     "keterangan" : null
// }

// ]

// console.log(tblmenu[0]);