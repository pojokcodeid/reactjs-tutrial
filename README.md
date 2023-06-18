# ReactJS
![cover!](cover.jpg)
## DAFTAR ISI

- [Sejarah React](#SEJARAH-REACT)
- [Kenapa Memilih React](#KENAPA-MEMILIH-REACT)
- [Lifesicle React](#LIFECYCLE-RAEACT)
- [Memulai dengan CDN](#MEMULAI-REACT-DENGAN-CDN)
- [Memulai React dengan NodeJS](#MEMULAI-REACT-DENGAN-NODEJS)
- [Mengenal ES6](#ES6)
  - [Apa itu ES6](#APA-ITU-ES6)
  - [ES6 Class](#ES6-CLASS)
  - [ES6 Arrow Function](#ES6-ARROW-FUNCTION)
  - [ES6 Variable](#ES6-VARIABLE)
  - [ES6 Array Method](#ES6-ARRAY-METHOD)
  - [ES6 Destructuring](#ES6-DESTRUCTURING)
  - [ES6 Spread Operator](#ES6-SPREAD-OPERATOR)
  - [ES6 Modules](#ES6-MODULES)

## SEJARAH REACT
React JS adalah sebuah **library JavaScript** untuk membangun antarmuka pengguna. React JS digunakan untuk membuat aplikasi satu halaman. React JS memungkinkan kita untuk membuat komponen UI yang dapat digunakan kembali. React JS juga mendukung sintaks JSX, yang merupakan ekstensi sintaks JavaScript yang memudahkan kita untuk menulis kode dan markup dalam satu file¹.

React JS adalah sebuah library, bukan sebuah framework. Ini berarti React JS tidak menentukan bagaimana kita melakukan routing dan pengambilan data. Untuk membuat aplikasi lengkap dengan React JS, kita bisa menggunakan framework full-stack seperti Next.js atau Remix.

React JS dibuat oleh **Jordan Walke** yang merupakan seorang programmer di Facebook. Ia mengembangkan prototype pertama React JS dengan nama **FaxJS** pada tahun 2011 dan menerapkannya pada fitur pencarian milik Facebook. Pada tahun 2012, FaxJS disempurnakan menjadi React JS dan diimplementasikan pada fitur periklanan Facebook dan Instagram¹. React JS kemudian dirilis secara open source pada tahun 2013².

Daftar versi release React JS bisa dilihat di [ReactJS](https://reactjs.org/versions). Berikut ini adalah beberapa versi terbaru dari React JS beserta changelog-nya:

- **React 18.2.0**: Menambahkan fitur `useSyncExternalStore` dan `useId`.
- **React 18.1.0**: Menambahkan fitur `useDeferredValue` dan `useTransition`.
- **React 18.0.0**: Menambahkan fitur automatic batching, streaming server-side rendering, dan concurrent rendering.
- **React 17.0.2**: Memperbaiki beberapa bug dan masalah kompatibilitas.
- **React 17.0.1**: Memperbaiki beberapa bug dan masalah kompatibilitas.
- **React 17.0.0**: Menambahkan fitur event delegation, no event pooling, dan gradual adoption strategy.

## KENAPA MEMILIH REACT
Ada banyak alasan mengapa harus memilih React untuk membuat aplikasi web, di antaranya adalah:

- **Mudah digunakan**. Developer yang sudah memahami JavaScript bisa mempelajari cara menggunakan React dengan cepat karena library ini bergantung sepenuhnya pada JavaScript dan metode berbasis komponen.
- **Mendukung komponen yang reusable**. Dengan React, Anda bisa menggunakan lagi komponen yang sudah dikembangkan menjadi aplikasi. Ini bisa menghemat waktu dan biaya pengembangan.
- **Mudah untuk menulis komponen**. React mendukung sintaks JSX, yang merupakan ekstensi sintaks JavaScript yang memudahkan kita untuk menulis kode dan markup dalam satu file.
- **Performa tinggi**. React menggunakan Virtual DOM, yang merupakan representasi ringan dari DOM asli. Virtual DOM memungkinkan React untuk melakukan perubahan UI secara efisien dan cepat.
- **SEO-friendly**. React dapat melakukan server-side rendering, yang berarti UI dapat dirender di sisi server sebelum dikirim ke browser. Ini bisa meningkatkan performa dan SEO aplikasi web.
- **Learn once, write anywhere**. React dapat digunakan untuk membuat aplikasi web maupun mobile dengan menggunakan React Native. Ini bisa memberikan fleksibilitas dan konsistensi bagi developer.
- **Dibangun dan dikembangkan oleh Facebook**. React merupakan library yang populer dan banyak digunakan oleh perusahaan-perusahaan teknologi ternama, seperti Netflix, Airbnb, WhatsApp, dan lain-lain. Ini menunjukkan bahwa React memiliki komunitas yang besar dan dukungan yang kuat.
- **Terus berkembang dan berinovasi**. React selalu menghadirkan fitur-fitur baru dan menarik di setiap versi rilisnya, seperti automatic batching, startTransition, streaming server-side rendering, concurrent rendering, dan lain-lain. Ini membuat React selalu up-to-date dengan kebutuhan developer dan pengguna.

## LIFECYCLE RAEACT
![cover!](cicle.png)

State dan lifecycle adalah dua konsep penting dalam React JS yang berhubungan dengan data dan perilaku komponen. Berikut adalah penjelasannya:

- **State** adalah objek yang menentukan bagaimana komponen bereaksi terhadap perubahan data. State bersifat pribadi dan sepenuhnya dikendalikan oleh komponen. State bisa diubah dengan menggunakan fungsi setState(), yang akan memicu perubahan UI sesuai dengan state terbaru.
- **Lifecycle** adalah siklus hidup dari komponen, yang terdiri dari tiga fase: mounting, updating, dan unmounting. Setiap fase memiliki metode khusus yang bisa digunakan untuk mengatur logika komponen. Misalnya, metode componentDidMount() akan dipanggil ketika komponen berhasil dimount ke DOM, dan metode componentWillUnmount() akan dipanggil ketika komponen akan dihapus dari DOM.

State dan lifecycle saling berhubungan karena perubahan state bisa memicu pemanggilan metode lifecycle. Misalnya, ketika kita memanggil setState(), React akan membandingkan state sebelum dan sesudah perubahan, dan memanggil metode render() untuk merender ulang UI. Kemudian, React juga akan memanggil metode componentDidUpdate() untuk memberitahu kita bahwa komponen sudah diperbarui.

## MEMULAI REACT DENGAN CDN
Untuk memulai React dengan CDN, ada beberapa jal yang harus dilakukan:

- Pertama, Anda perlu menambahkan skrip CDN untuk React, React DOM, dan Babel di bagian `<head>` file HTML Anda. Ini akan memuat pustaka-pustaka yang diperlukan untuk menjalankan React di browser Anda.
- Kedua, Anda perlu membuat sebuah komponen React yang akan menampilkan UI Anda. Anda dapat menggunakan sintaks JSX untuk menulis elemen HTML di dalam kode JavaScript. Anda juga dapat menggunakan kelas atau fungsi untuk membuat komponen React.
- Ketiga, Anda perlu me-render komponen React ke dalam elemen HTML tertentu di halaman Anda. Anda dapat menggunakan `ReactDOM.render()` untuk melakukan ini. Anda perlu memberikan dua argumen: komponen React yang ingin Anda tampilkan, dan elemen HTML yang ingin Anda gunakan sebagai kontainer.
- Keempat, Anda dapat menambahkan gaya dan fungsionalitas tambahan ke aplikasi React Anda dengan menggunakan pustaka-pustaka lain seperti Bootstrap, Axios, Redux, dll. Anda dapat menautkan skrip CDN untuk pustaka-pustaka ini di bagian `<head>` file HTML Anda juga.

Berikut adalah contoh kode sederhana untuk membuat aplikasi React dengan CDN:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Belajar Reactjs</title>
  <!-- Skrip CDN untuk React, React DOM, dan Babel -->
  <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
  <!-- Elemen HTML yang akan digunakan sebagai kontainer untuk komponen React -->
  <div id="app"></div>
  <!-- Skrip JSX yang akan dikompilasi oleh Babel menjadi JavaScript biasa -->
  <script type="text/babel">
    // Membuat komponen React dengan kelas
    class Hello extends React.Component {
      // Metode render yang akan mengembalikan elemen JSX
      render() {
        return <h1>Halo Dunia Reactjs!</h1>
      }
    }

    // Me-render komponen Hello ke dalam elemen dengan id "app"
    ReactDOM.render(<Hello/>, document.getElementById("app"));
  </script>
</body>
</html>
```

## MEMULAI REACT DENGAN NODEJS
Untuk memulainya ada beberapa langkah yang perlu Anda lakukan:

- Pertama, Anda perlu menginstal Node.js dan npm di komputer Anda. Node.js adalah lingkungan runtime JavaScript yang memungkinkan Anda menjalankan kode JavaScript di sisi server. Npm adalah manajer paket untuk Node.js yang memudahkan Anda menginstal dan mengelola pustaka-pustaka yang dibutuhkan oleh aplikasi React Anda.
- Kedua, Anda perlu menginstal create-react-app, sebuah alat yang memudahkan Anda membuat dan menjalankan proyek React. Anda dapat menginstal create-react-app secara global dengan menggunakan perintah `npm install -g create-react-app` di terminal atau command prompt Anda.
- Ketiga, Anda perlu membuat proyek React baru dengan menggunakan create-react-app. Anda dapat melakukannya dengan menggunakan perintah `npx create-react-app nama-proyek` di terminal atau command prompt Anda, di mana `nama-proyek` adalah nama yang Anda inginkan untuk proyek Anda. Perintah ini akan membuat folder baru dengan nama proyek Anda dan mengisi folder tersebut dengan file-file yang diperlukan untuk aplikasi React Anda.
- Keempat, Anda perlu menjalankan aplikasi React Anda dengan menggunakan perintah `npm start` di terminal atau command prompt Anda. Perintah ini akan menjalankan server pengembangan lokal yang akan membuka browser Anda dan menampilkan aplikasi React Anda. Anda dapat mengedit file-file di folder proyek Anda dan melihat perubahan secara langsung di browser.

Berikut adalah contoh output dari perintah-perintah di atas¹:

```bash
$ npm install -g create-react-app
+ create-react-app@4.0.3
added 67 packages from 23 contributors in 5.782s

$ npx create-react-app belajar-react
npx: installed 67 in 6.223s

Creating a new React app in D:\belajar-react.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template...

added 1906 packages from 704 contributors and audited 1910 packages in 138.057s

170 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities


Initialized a git repository.

Success! Created belajar-react at D:\belajar-react
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd belajar-react
  npm start

Happy hacking!

$ cd belajar-react
$ npm start

> belajar-react@0.1.0 start D:\belajar-react
> react-scripts start

Starting the development server...

Compiled successfully!

You can now view belajar-react in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.1.100:3000

Note that the development build is not optimized.
To create a production build, use npm run build.
```

## ES6
### APA ITU ES6
ES6 adalah singkatan dari ECMAScript 6, sebuah versi baru dari JavaScript yang diperkenalkan pada tahun 2015. ECMAScript adalah sebuah spesifikasi bahasa skrip yang mengatur bahasa-bahasa seperti JavaScript, ActionScript, dan Jscript. ES6 mendukung banyak fitur baru dan penting karena menandai awal dari restandardisasi JavaScript. Beberapa fitur kunci yang diperkenalkan di ES6 antara lain:

- **const** dan **let**, dua kata kunci baru untuk mendeklarasikan variabel dengan cakupan blok, yang berbeda dari **var** yang memiliki cakupan fungsi.
- **Arrow functions**, sebuah sintaks pendek untuk menulis ekspresi fungsi tanpa perlu kata kunci **function**, **return**, dan kurung kurawal.
- **Template literals**, sebuah cara untuk membuat string yang dapat menyisipkan ekspresi dan memiliki baris baru secara implisit.
- **Default parameters**, sebuah cara untuk memberikan nilai bawaan untuk parameter fungsi jika tidak ada argumen yang dilewatkan.
- **The spread (...) operator**, sebuah operator yang dapat memperluas sebuah objek iterasi (seperti array) menjadi lebih banyak elemen.
- **For/of loop**, sebuah pernyataan yang dapat mengulangi nilai-nilai dari sebuah objek iterasi (seperti array, string, map, set, dll).
- **Map** dan **Set** objects, dua struktur data baru yang dapat menyimpan pasangan kunci-nilai dan nilai unik secara berurutan.
- **Classes**, sebuah cara untuk mendefinisikan konstruktor dan metode objek dengan sintaks yang lebih sederhana dan elegan.
- **Promises**, sebuah objek yang merepresentasikan hasil akhir dari operasi asinkron, yang dapat digunakan untuk menangani callback dengan lebih mudah.
- **Symbol**, sebuah tipe data primitif baru yang dapat digunakan untuk membuat pengenal unik untuk properti objek.
- **Modules**, sebuah cara untuk mengorganisir kode dalam file-file terpisah dan mengimpor atau mengekspor fungsi, kelas, atau variabel antar file.

Berikut adalah contoh kode sederhana yang menggunakan beberapa fitur ES6:

```javascript
// Mendeklarasikan variabel dengan const dan let
const PI = 3.14; // Nilai PI tidak dapat diubah
let radius = 5; // Nilai radius dapat diubah

// Membuat fungsi panah untuk menghitung luas lingkaran
const area = (r) => PI * r * r;

// Membuat template literal untuk menampilkan hasil
console.log(`Luas lingkaran dengan radius ${radius} adalah ${area(radius)}`);

// Membuat array dengan nilai-nilai acak
const numbers = [23, 55, 21, 87, 56];

// Menggunakan operator spread untuk mencari nilai maksimum
let maxValue = Math.max(...numbers);

// Menggunakan for/of loop untuk mencetak setiap nilai
for (let num of numbers) {
  console.log(num);
}

// Membuat map untuk menyimpan data mahasiswa
const students = new Map();

// Menambahkan data mahasiswa dengan menggunakan metode set
students.set("101", {name: "Ali", major: "Computer Science"});
students.set("102", {name: "Budi", major: "Mathematics"});
students.set("103", {name: "Cici", major: "Biology"});

// Mengakses data mahasiswa dengan menggunakan metode get
console.log(students.get("102")); // {name: "Budi", major: "Mathematics"}

// Menggunakan for/of loop untuk mengulangi pasangan kunci-nilai
for (let [id, student] of students) {
  console.log(`${id}: ${student.name}, ${student.major}`);
}

// Membuat kelas untuk merepresentasikan buku
class Book {
  // Konstruktor untuk menginisialisasi properti
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  // Metode untuk mengembalikan deskripsi buku
  getDescription() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
}

// Membuat objek buku dengan menggunakan kelas
let book1 = new Book("The Catcher in the Rye", "J.D. Salinger", 1951);

// Memanggil metode getDescription
console.log(book1.getDescription()); // The Catcher in the Rye was written by J.D. Salinger in 1951
```
### ES6 CLASS
Class di ES6 adalah sebuah fitur baru yang memungkinkan Anda membuat template untuk objek JavaScript dengan sintaks yang lebih sederhana dan elegan. Class di ES6 adalah jenis fungsi khusus, tetapi alih-alih menggunakan kata kunci **function** untuk memulainya, kita menggunakan kata kunci **class**, dan properti ditetapkan di dalam metode **constructor()**³. Class di ES6 juga mendukung pewarisan, yaitu kemampuan untuk membuat class turunan dari class lain dengan menggunakan kata kunci **extends** dan **super()**⁴.

Berikut adalah contoh kode sederhana yang menggunakan class di ES6:

```javascript
// Membuat class untuk merepresentasikan buku
class Book {
  // Konstruktor untuk menginisialisasi properti
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  // Metode untuk mengembalikan deskripsi buku
  getDescription() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
}

// Membuat objek buku dengan menggunakan class
let book1 = new Book("The Catcher in the Rye", "J.D. Salinger", 1951);

// Memanggil metode getDescription
console.log(book1.getDescription()); // The Catcher in the Rye was written by J.D. Salinger in 1951

// Membuat class turunan dari Book untuk merepresentasikan novel
class Novel extends Book {
  // Konstruktor untuk menginisialisasi properti tambahan
  constructor(title, author, year, genre) {
    // Memanggil konstruktor dari class induk
    super(title, author, year);
    this.genre = genre;
  }

  // Metode untuk mengembalikan deskripsi novel dengan genre
  getDescription() {
    // Memanggil metode dari class induk
    return super.getDescription() + ` It is a ${this.genre} novel.`;
  }
}

// Membuat objek novel dengan menggunakan class Novel
let novel1 = new Novel("Nineteen Eighty-Four", "George Orwell", 1949, "dystopian");

// Memanggil metode getDescription
console.log(novel1.getDescription()); // Nineteen Eighty-Four was written by George Orwell in 1949. It is a dystopian novel.
```
### ES6 ARROW FUNCTION
ES6 arrow function adalah sebuah ekspresi fungsi yang lebih ringkas dan mudah dibaca daripada fungsi tradisional, dengan beberapa perbedaan semantik dan keterbatasan penggunaan:

- Arrow function tidak memiliki binding sendiri untuk `this`, `arguments`, atau `super`, dan tidak boleh digunakan sebagai metode.
- Arrow function tidak bisa digunakan sebagai konstruktor. Memanggilnya dengan `new` akan melempar sebuah `TypeError`.
- Mereka juga tidak memiliki akses ke kata kunci `new.target`.
- Arrow function tidak bisa menggunakan `yield` dalam tubuhnya dan tidak bisa dibuat sebagai fungsi generator.

Contoh ES6 arrow function:

```javascript
// Fungsi tradisional
function tambah(a, b) {
  return a + b;
}

// Arrow function
let tambah = (a, b) => a + b;

// Arrow function dengan parameter default
let tambah = (a = 1, b = 2) => a + b;

// Arrow function dengan parameter rest
let tambah = (...angka) => angka.reduce((a, b) => a + b);

// Arrow function dengan parameter destrukturisasi
let tambah = ({a, b}) => a + b;
```
### ES6 VARIABLE
ES6 variable adalah sebuah ruang bernama di dalam memori yang menyimpan nilai. Nama dari variable disebut sebagai identifier. Ada beberapa aturan yang harus dipatuhi saat memberi nama sebuah identifier:

- Identifier tidak boleh menggunakan kata kunci.
- Identifier bisa mengandung huruf dan angka.
- Identifier tidak boleh mengandung spasi dan karakter spesial, kecuali garis bawah (_) dan tanda dolar ($).
- Nama variable tidak boleh diawali dengan angka.

Sebuah variable harus dideklarasikan sebelum digunakan. Sintaks ES5 menggunakan kata kunci `var` untuk mencapai hal yang sama. Sintaks ES5 untuk mendeklarasikan sebuah variable adalah sebagai berikut.

```javascript
// Deklarasi menggunakan kata kunci var
var nama_variable
```

ES6 memperkenalkan sintaks deklarasi variable berikut:

- Menggunakan `let`.
- Menggunakan `const`.

Inisialisasi variable adalah proses menyimpan nilai ke dalam variable. Sebuah variable bisa diinisialisasi pada saat deklarasi atau pada waktu yang lain. Sintaks tradisional ES5 untuk mendeklarasikan dan menginisialisasi sebuah variable adalah sebagai berikut.

```javascript
// Deklarasi menggunakan kata kunci var
var nama_variable = nilai
```

Contoh: Menggunakan Variable

```javascript
var nama = "Budi"
console.log("Nilai dalam variable adalah: "+nama)
```

Contoh di atas mendeklarasikan sebuah variable dan mencetak nilainya. Output berikut ditampilkan saat dieksekusi.

```
Nilai dalam variable adalah: Budi
```

JavaScript dan Dynamic Typing

JavaScript adalah bahasa yang tidak bertipe. Ini berarti bahwa sebuah variable JavaScript bisa menyimpan nilai dengan tipe data apapun. Tidak seperti bahasa lain, Anda tidak perlu memberitahu JavaScript saat deklarasi variable tentang tipe nilai yang akan disimpan oleh variable tersebut. Tipe nilai dari sebuah variable bisa berubah saat eksekusi program dan JavaScript menanganinya secara otomatis. Fitur ini disebut sebagai dynamic typing.

JavaScript Variable Scope

Scope dari sebuah variable adalah wilayah dari program Anda di mana variable tersebut didefinisikan. Secara tradisional, JavaScript hanya mendefinisikan dua scope - global dan lokal.

- Global Scope - Sebuah variable dengan scope global bisa diakses dari bagian manapun dari kode JavaScript.
- Local Scope - Sebuah variable dengan scope lokal hanya bisa diakses dari dalam fungsi di mana ia dideklarasikan.

Contoh: Global vs. Local Variable

Contoh berikut mendeklarasikan dua variable dengan nama `num` - satu di luar fungsi (global scope) dan satu lagi di dalam fungsi (local scope).

```javascript
var num = 10 // Di sini num adalah 10
function test() {
  var num = 100 // Di sini num adalah 100
  console.log("nilai num di dalam test() "+num)
}
console.log("nilai num di luar test() "+num)
test()
```

Variable tersebut ketika dirujuk di dalam fungsi menampilkan nilai dari variable dengan scope lokal. Namun, variable `num` ketika diakses di luar fungsi mengembalikan instance dengan scope global. Output berikut ditampilkan saat dieksekusi.

```
nilai num di luar test() 10
nilai num di dalam test() 100
```

ES6 mendefinisikan scope baru untuk variable - Block scope.

Let dan Block Scope

Block scope membatasi akses sebuah variable ke block tempat ia dideklarasikan. Kata kunci `let` menetapkan scope block ke sebuah variable.

### ES6 ARRAY METHOD
ES6 array method adalah metode-metode baru atau yang dimodifikasi untuk bekerja dengan array di JavaScript. Mereka termasuk metode untuk membuat, menyalin, mencari, mengisi, mengulangi, dan mengurutkan array. Setiap metode memiliki sintaks, fungsionalitas, dan fitur tersendiri¹.

Beberapa metode array yang diperkenalkan di ES6 adalah sebagai berikut:

- `Array.from()` - Mengubah nilai yang mirip array atau iterable menjadi array.
- `Array.of()` - Membuat sebuah instance dari sejumlah argumen yang variabel, bukan dari jumlah argumen atau tipe argumen.
- `Array.prototype.copyWithin()` - Menyalin bagian dari sebuah array ke lokasi yang berbeda dalam array yang sama.
- `Array.prototype.find()` - Menemukan sebuah nilai dari sebuah array, berdasarkan kriteria tertentu yang dilewatkan ke metode ini.
- `Array.prototype.findIndex()` - Mengembalikan indeks dari elemen pertama dari array yang memenuhi kondisi tertentu.
- `Array.prototype.entries()` - Mengembalikan sebuah objek iterator array, yang bisa digunakan untuk mengulangi kunci dan nilai dari array.
- `Array.prototype.keys()` - Mengembalikan sebuah objek iterator array bersama dengan kunci dari array.
- `Array.prototype.values()` - Mengembalikan nilai dari setiap kunci.
- `Array.prototype.fill()` - Mengisi elemen array yang ditentukan dengan nilai statis.

Contoh ES6 array method:

```javascript
// Membuat array dari string
let nama = Array.from("Budi");
console.log(nama); // [ 'B', 'u', 'd', 'i' ]

// Membuat array dari satu nilai numerik
let angka = Array.of(10);
console.log(angka); // [ 10 ]

// Menyalin bagian dari array
let arr = [1, 2, 3, 4, 5];
arr.copyWithin(0, 3); // Menyalin elemen dari indeks 3 ke indeks 0
console.log(arr); // [ 4, 5, 3, 4, 5 ]

// Menemukan elemen dalam array
let arr = [1, 4, 5, 6, 7];
let hasil = arr.find(x => x > 5); // Mencari elemen yang lebih besar dari 5
console.log(hasil); // 6

// Menemukan indeks elemen dalam array
let arr = [1, 4, 5, 6, 7];
let hasil = arr.findIndex(x => x > 5); // Mencari indeks elemen yang lebih besar dari 5
console.log(hasil); // 3

// Mengulangi kunci dan nilai dari array
let arr = ["a", "b", "c"];
let iterator = arr.entries(); // Mendapatkan iterator untuk kunci dan nilai
for (let [key, value] of iterator) {
    console.log(key + ": " + value);
}
// Output:
// 0: a
// 1: b
// 2: c

// Mengulangi kunci dari array
let arr = ["a", "b", "c"];
let iterator = arr.keys(); // Mendapatkan iterator untuk kunci
for (let key of iterator) {
    console.log(key);
}
// Output:
// 0
// 1
// 2

// Mengulangi nilai dari array
let arr = ["a", "b", "c"];
let iterator = arr.values(); // Mendapatkan iterator untuk nilai
for (let value of iterator) {
    console.log(value);
}
// Output:
// a
// b
// c

// Mengisi elemen array dengan nilai statis
let arr = [1, 2, 3, 4, 5];
arr.fill(0); // Mengisi semua elemen dengan angka nol
console.log(arr); // [0, 0, 0, 0 ,0]
```
### ES6 DESTRUCTURING
Destructuring adalah sintaks ekspresi JavaScript yang memungkinkan kita untuk membongkar nilai dari array atau properti dari objek ke dalam variabel yang berbeda.

Dengan destructuring, kita bisa mengekstrak hanya apa yang dibutuhkan dari array atau objek tanpa harus mengakses setiap elemen atau properti secara manual.

Contoh destructuring array:

```javascript
// Tanpa destructuring
let buah = ["apel", "jeruk", "pisang"];
let buah1 = buah[0];
let buah2 = buah[1];
let buah3 = buah[2];

// Dengan destructuring
let buah = ["apel", "jeruk", "pisang"];
let [buah1, buah2, buah3] = buah;
```

Contoh destructuring objek:

```javascript
// Tanpa destructuring
let mobil = { merk: "Toyota", warna: "hitam", tahun: 2020 };
let merk = mobil.merk;
let warna = mobil.warna;
let tahun = mobil.tahun;

// Dengan destructuring
let mobil = { merk: "Toyota", warna: "hitam", tahun: 2020 };
let { merk, warna, tahun } = mobil;
```

Destructuring juga bisa digunakan untuk memberi nama variabel yang berbeda dari nama properti objek, memberi nilai default jika properti tidak ada, atau mengambil sisa elemen atau properti menggunakan sintaks rest parameter.

Contoh destructuring objek dengan nama variabel berbeda:

```javascript
// Tanpa destructuring
let mobil = { merk: "Toyota", warna: "hitam", tahun: 2020 };
let namaMerk = mobil.merk;
let namaWarna = mobil.warna;
let namaTahun = mobil.tahun;

// Dengan destructuring
let mobil = { merk: "Toyota", warna: "hitam", tahun: 2020 };
let { merk: namaMerk, warna: namaWarna, tahun: namaTahun } = mobil;
```

Contoh destructuring objek dengan nilai default:

```javascript
// Tanpa destructuring
let mobil = { merk: "Toyota", warna: "hitam" };
let merk = mobil.merk;
let warna = mobil.warna;
let tahun = mobil.tahun || 2021; // Nilai default jika tidak ada

// Dengan destructuring
let mobil = { merk: "Toyota", warna: "hitam" };
let { merk, warna, tahun = 2021 } = mobil; // Nilai default jika tidak ada
```

Contoh destructuring array dengan rest parameter:

```javascript
// Tanpa destructuring
let buah = ["apel", "jeruk", "pisang", "mangga"];
let buah1 = buah[0];
let buah2 = buah[1];
let sisaBuah = buah.slice(2); // Mengambil sisa elemen

// Dengan destructuring
let buah = ["apel", "jeruk", "pisang", "mangga"];
let [buah1, buah2, ...sisaBuah] = buah; // Mengambil sisa elemen
```
### ES6 SPREAD OPERATOR
Spread operator adalah operator yang terdiri dari tiga titik (...). Operator ini memungkinkan kita untuk mengekspansi sebuah objek iterable, seperti array atau string, di tempat di mana nol atau lebih argumen (untuk pemanggilan fungsi) atau elemen (untuk literal array) diharapkan.

Dengan spread operator, kita bisa menyalin, menggabungkan, atau memasukkan elemen dari sebuah objek iterable ke dalam objek lain dengan mudah dan ringkas.

Contoh spread operator untuk pemanggilan fungsi:

```javascript
// Tanpa spread operator
function tambah(a, b, c) {
  return a + b + c;
}

let angka = [1, 2, 3];
let hasil = tambah.apply(null, angka); // Menggunakan apply untuk memasukkan array sebagai argumen
console.log(hasil); // 6

// Dengan spread operator
function tambah(a, b, c) {
  return a + b + c;
}

let angka = [1, 2, 3];
let hasil = tambah(...angka); // Menggunakan spread operator untuk memasukkan array sebagai argumen
console.log(hasil); // 6
```

Contoh spread operator untuk literal array:

```javascript
// Tanpa spread operator
let buah = ["apel", "jeruk", "pisang"];
let sayur = ["wortel", "bayam", "kangkung"];
let makanan = buah.concat(sayur); // Menggunakan concat untuk menggabungkan array
console.log(makanan); // [ 'apel', 'jeruk', 'pisang', 'wortel', 'bayam', 'kangkung' ]

// Dengan spread operator
let buah = ["apel", "jeruk", "pisang"];
let sayur = ["wortel", "bayam", "kangkung"];
let makanan = [...buah, ...sayur]; // Menggunakan spread operator untuk menggabungkan array
console.log(makanan); // [ 'apel', 'jeruk', 'pisang', 'wortel', 'bayam', 'kangkung' ]
```

Contoh spread operator untuk literal objek:

```javascript
// Tanpa spread operator
let mobil = { merk: "Toyota", warna: "hitam" };
let updateMobil = { tahun: 2020, warna: "merah" };
let mobilBaru = Object.assign({}, mobil, updateMobil); // Menggunakan Object.assign untuk menggabungkan objek
console.log(mobilBaru); // { merk: 'Toyota', warna: 'merah', tahun: 2020 }

// Dengan spread operator
let mobil = { merk: "Toyota", warna: "hitam" };
let updateMobil = { tahun: 2020, warna: "merah" };
let mobilBaru = { ...mobil, ...updateMobil }; // Menggunakan spread operator untuk menggabungkan objek
console.log(mobilBaru); // { merk: 'Toyota', warna: 'merah', tahun: 2020 }
```
### ES6 MODULES
ES6 modules adalah fitur yang memungkinkan kita untuk membagi program JavaScript menjadi beberapa file yang saling terhubung, atau modul, yang bisa diimpor dan diekspor satu sama lain.

Dengan ES6 modules, kita bisa mengatur kode menjadi unit-unit yang lebih kecil dan lebih mudah dipelihara, serta menghindari konflik nama variabel atau fungsi antara file yang berbeda.

Untuk menggunakan ES6 modules, kita perlu menggunakan kata kunci `import` dan `export` untuk menentukan apa yang ingin diimpor atau diekspor dari suatu modul.

Contoh ES6 modules:

Misalkan kita memiliki file `math.js` yang berisi beberapa fungsi matematika:

```javascript
// math.js
// Mendefinisikan fungsi-fungsi matematika
function tambah(a, b) {
  return a + b;
}

function kurang(a, b) {
  return a - b;
}

function kali(a, b) {
  return a * b;
}

function bagi(a, b) {
  return a / b;
}

// Mengekspor fungsi-fungsi yang ingin dibagikan ke modul lain
export { tambah, kurang, kali, bagi };
```

Kemudian kita memiliki file `app.js` yang ingin menggunakan fungsi-fungsi dari `math.js`:

```javascript
// app.js
// Mengimpor fungsi-fungsi dari math.js
import { tambah, kurang, kali, bagi } from "./math.js";

// Menggunakan fungsi-fungsi yang diimpor
console.log(tambah(1, 2)); // 3
console.log(kurang(5, 3)); // 2
console.log(kali(4, 6)); // 24
console.log(bagi(10, 2)); // 5
```

Perhatikan bahwa kita perlu menentukan path relatif dari file yang ingin diimpor dengan menggunakan `./` di depan nama file.

Kita juga bisa mengimpor semua fungsi yang diekspor dari suatu modul dengan menggunakan sintaks `* as nama`:

```javascript
// app.js
// Mengimpor semua fungsi dari math.js dengan nama Math
import * as Math from "./math.js";

// Menggunakan fungsi-fungsi dengan nama Math
console.log(Math.tambah(1, 2)); // 3
console.log(Math.kurang(5, 3)); // 2
console.log(Math.kali(4, 6)); // 24
console.log(Math.bagi(10, 2)); // 5
```

Kita juga bisa mengekspor nilai default dari suatu modul dengan menggunakan kata kunci `default`. Nilai default ini bisa diimpor tanpa menggunakan kurung kurawal:

```javascript
// math.js
// Mendefinisikan fungsi-fungsi matematika
function tambah(a, b) {
  return a + b;
}

function kurang(a, b) {
  return a - b;
}

function kali(a, b) {
  return a * b;
}

function bagi(a, b) {
  return a / b;
}

// Mengekspor fungsi tambah sebagai nilai default dan fungsi lainnya sebagai nama-nama tertentu
export default tambah;
export { kurang, kali, bagi };
```

```javascript
// app.js
// Mengimpor fungsi tambah sebagai nilai default dan fungsi lainnya dengan nama-nama tertentu
import tambah, { kurang, kali, bagi } from "./math.js";

// Menggunakan fungsi-fungsi yang diimpor
console.log(tambah(1, 2)); // 3
console.log(kurang(5, 3)); // 2
console.log(kali(4, 6)); // 24
console.log(bagi(10, 2)); // 5
```
