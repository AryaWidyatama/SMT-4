import { useState } from 'react';
import Tabel from './Tabel';

function Menu() {
    const titel = "Daftar Menu Restoran";
    const [menus, setMenu]=useState(
        [
            {idmenu:5, idkategori:16, menu:"jeruk manis1", gambar:"jeruk.jpg", harga:8000},
            {idmenu:6, idkategori:16, menu:"Nangka", gambar:"nangka.jpg", harga:4000},
            {idmenu:12, idkategori:12, menu:"dawet enak jos", gambar:"dawet.jpg", harga:2500},
            {idmenu:13, idkategori:15, menu:"Jus mangga enak", gambar:"mangga.jpg", harga:2500},
            {idmenu:14, idkategori:15, menu:"Durian", gambar:"durian.jpg", harga:2500},
            {idmenu:15, idkategori:15, menu:"sawo", gambar:"sawo.jpg", harga:2500},
        ]
    )
    return (
      <div className="App">
      
       <Tabel menu={menus} titel={titel}/>
      </div>
    );
  }
  
  export default Menu;