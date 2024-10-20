const minuman = {
    1: { name: "Air Mineral", price: 10000 },
    2: { name: "Kopi", price: 15000 },
    3: { name: "Teh", price: 9500 },
    4: { name: "sus", price: 20000 },
};

function vendingMachine() {
    let uang = parseInt(prompt("Masukkan jumlah uang Anda:"));

    let pilihan = parseInt(prompt("Pilih produk:\n1. Air Mineral (Rp 10000)\n2. Kopi (Rp 15000)\n3. Teh (Rp 9500)\n4. susu (Rp 20000)"));

    if (!minuman[pilihan]) {
        alert("Pilihan produk tidak valid!");
        return;
    }

    let minum = minuman[pilihan].name;
    let harga = minuman[pilihan].price;

    if (uang >= harga) {
        alert("Anda membeli ${minum}. Kembalian Anda: Rp ${uang - harga}");
    } else {
        alert("Uang Anda tidak cukup!");
    }
}

vendingMachine();