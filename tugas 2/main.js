let umur = prompt("Masukkan umur Anda:");

umur = parseInt(umur);

if (umur < 12) {
  alert("Anak-anak");
} else if (umur >= 13 && umur <= 18) {
  alert("Remaja");
} else if (umur >= 19 && umur <= 59) {
  alert("Dewasa");
} else if (umur >= 60) {
  alert("Lansia");
} else {
  alert("Umur tidak valid");
}