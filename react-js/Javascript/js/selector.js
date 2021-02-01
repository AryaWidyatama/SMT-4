const hari = 5;
let hasil;
switch (hari) {
    case 1:
        hasil = "minggu";
        break;
        case 2:
        hasil = "senin";
        break;
        case 3:
        hasil = "selasa";
        break;
        case 4:
        hasil = "rabu";
        break;
        case 5:
        hasil = "kamis";
        break;
        case 6:
        hasil = "jum'at";
        break;
        case 7:
        hasil = "sabtu";
        break;

    default:
        hasil = "hari tidak ada";
        break;
}

console.log(hasil);

const bln = "april";
let bulan;

switch (bln) {
    case "januari":
        bulan = 1;
        break;
        case "februari":
            bulan = 2;
            break;

    default:
        bulan = "belum di buat";
        break;
}

console.log(bulan);