if (false) {
    console.log("dijalankan jika benar");
}else {
    console.log("dijalankan jika bernilai salah");
}

let nilai = 100;
let standar = 60;
let statusb = "lulus";
let gagal = "coba lagi";
let batasatas = 100;
let batasbawah = 0;
let notifikasi = "nilai salah";


if (nilai <= batasatas && nilai >=batasbawah) {
    if (nilai >= standar){
        console.log(statusb);
    }else{
        console.log(gagal);
    }
}else {
    console.log(notifikasi);
}

