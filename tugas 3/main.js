let nilai = prompt("Masukkan nilai (0-100):");

nilai = parseFloat(nilai);

let grade;

if (nilai >= 90) {
  grade = "A";
} else if (nilai >= 80) {
  grade = "B";
} else if (nilai >= 70) {
  grade = "C";
} else if (nilai >= 60) {
  grade = "D";
} else {
  grade = "E";
}

alert("Grade Anda adalah: " + grade);