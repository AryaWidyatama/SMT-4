import {link} from './link.js';

export function ubah() {
    let id = 9;
    let data = {
        pelanggan : 'UPDATE pelanggan axios done yes',
        alamat : 'update alamat axios done yes to',
        telp : 163727

    };

    link.put('/pelanggan/'+id,data).then(res=>{
        console.log(res);
        let tampil = `<h1>${res.data.pesan}</h1>`;
       document.querySelector('#out').innerHTML = tampil;
    });
 }
