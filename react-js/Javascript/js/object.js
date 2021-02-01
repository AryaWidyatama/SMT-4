const objek = {

    nama : "smk revit",
    telp : 1234,
    buah : ['apel', 'jeruk', 'mangga'],

    coba : function () {
        return "coba function dalam object";
    },

    boleh : true,
    "tes" : 123,

};

console.log(objek.nama);
console.log(objek.telp);
console.log(objek.buah[1]);
console.log(objek.coba());
console.log(objek.boleh);
console.log(objek["tes"]);