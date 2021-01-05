let fungsi = function (nama) {
    console.log("belajar" + nama);
}

fungsi(" jono");

let contoh = (nama) => {
    console.log("belajar function" + nama);
}

contoh(" budi");

let tambah = function (a,b) {
    return a + b;
}

console.log(tambah(2,5));

let plus = (a,b) => a+b;
console.log(plus(2,6));

let hasil = a => a * 3;
console.log(hasil(4));

let lagi = ()=>console.log("coba lagi");
lagi();

let belajar =()=>{
    console.log("baris satu");
    console.log("baris dua");
    console.log("baris tiga");
}

belajar();

let nilai = 1;
let uji = (nilai < 7) ? ()=>predikat="gagal":()=>predikat="lulus";
console.log(uji());
