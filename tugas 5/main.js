const benar = Math.floor(Math.random() * 10) + 1;

const tebakan = parseInt(prompt("Tebak angka antara 1 sampai 10:"));

if (tebakan === benar) {
  alert("Tebakan Anda benar!");
} else {
  alert("Tebakan Anda salah! Angka yang benar adalah " + benar);
}