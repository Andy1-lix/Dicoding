//Tugas Akhir


/*
1. Promp untuk mengetahui saldo akhir dari apa yang diinputkan oleh user
2. Menentukan hari dari tanggal yang ada saat ini di pc
**/

const day = new Date().getDay();
const namaHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
const hariIni = namaHari[day];
console.log(hariIni);