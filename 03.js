class Mahasiswa {
  constructor(nama, nim, jurusan) {
    this.nama = nama;
    this.nim = nim;
    this.jurusan = jurusan;
  }

  perkenalan() {
    console.log(`Saya ${this.nama}, NIM ${this.nim}, dari jurusan ${this.jurusan} sedang belajar`);
  }


}

// contoh penggunaan
let m1 = new Mahasiswa("Arnold Berkat Gea", "202401110101", "Informatika");
m1.perkenalan(); 

