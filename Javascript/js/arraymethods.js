let nilai = [
    {nama:"budi", ipa:90, bahasa:70, matematika:80},
    {nama:"fahim", ipa:70, bahasa:60, matematika:20},
    {nama:"adi", ipa:80, bahasa:90, matematika:80},
    {nama:"tejo", ipa:90, bahasa:40, matematika:50},
];

let nama = ["budi", "fahim", "adi", "tejo"];
// nama.push("ani","roma");

//console.log(nama.shift());

// nama.unshift("bobi","rocky");

// console.log(nama.splice(5,2));

// console.log(nama.slice(0,3));

let mapel = ['ipa', 'bahasa', 'matematika'];

// console.log(nama.concat(['ips', 'pkn', 'sejarah']));

//console.log(nama.concat(mapel));

//console.log(nama.pop());

//console.log(nilai[0].nama);
// console.log(nama);

// nama.forEach(function (a) {
//     console.log(a)
// })

// nama.forEach(a => console.log(a));

// nilai.filter(function (a) {
//     if (a.ipa > 80) {
//         console.log(a);
//     }
// });

//console.log(nilai);

// nilai.filter(a => (a.ipa > 80 && a.matematika > 60 ? console.log(a.nama) : null));

// let siswa = nilai.map(function (a) {
//     return a.nama;
// });

// let siswa = nilai.map(a => [a.nama, a.ipa]);


// console.log(siswa);

// mapel.sort();
// console.log(mapel);

// let hasil = nilai.reduce(function (a, b) {
//     return a = a + b.ipa;
// }, 0);

let hasil = nilai.reduce((a, b) => (a=a+b.bahasa),0 );

console.log(hasil);