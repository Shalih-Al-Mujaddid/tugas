const angka = prompt("Masukkan sebuah angka:");


const angkaInt = parseInt(angka);

if (angkaInt % 2 === 0) {
  alert("Angka ini adalah bilangan genap.");
} else {
  alert("Angka ini adalah bilangan ganjil.");
}