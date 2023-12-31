# ReactJS
![cover!](cover.jpg)
## DAFTAR ISI

- [Sejarah React](#SEJARAH-REACT)
- [Kenapa Memilih React](#KENAPA-MEMILIH-REACT)
- [Lifesicle React](#LIFECYCLE-RAEACT)
- [Memulai dengan CDN](#MEMULAI-REACT-DENGAN-CDN)
- [Memulai React dengan NodeJS](#MEMULAI-REACT-DENGAN-NODEJS)
- [Setup VSCode](#SETUP-VSCODE)
- [Mengenal ES6](#ES6)
  - [Apa itu ES6](#APA-ITU-ES6)
  - [ES6 Class](#ES6-CLASS)
  - [ES6 Arrow Function](#ES6-ARROW-FUNCTION)
  - [ES6 Variable](#ES6-VARIABLE)
  - [ES6 Array Method](#ES6-ARRAY-METHOD)
  - [ES6 Destructuring](#ES6-DESTRUCTURING)
  - [ES6 Spread Operator](#ES6-SPREAD-OPERATOR)
  - [ES6 Modules](#ES6-MODULES)
  - [ES6 Ternary Operator](#ES6-TERNARY-OPERATOR)
- [React Render HTML](#REACT-RENDER-HTML)
- [React JSX](#REACT-JSX)
- [React Components](#REACT-COMPONENTS)
- [React State](#REACT-STATE)
- [React Props](#REACT-PROPS)
- [State Vs. Props](#State-Vs-Props)
- [Constructor](#Constructor)
- [React API](#React-API)
- [React Form](#React-Form)
- [React Event](#REACT-EVENTS)
- [React Keys](#React-Keys)
- [React Refs](#React-Refs)
- [React Fragments](#React-Fragments)
- [React Router](#React-Router)
- [React CSS](#React-CSS)
- [React Hooks](#React-Hooks)
- [React Flux Concept](#React-Flux-Concept)

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
## SETUP VSCODE
Untuk install Visual Studio Code dan setup extension untuk React project, kita bisa mengikuti langkah-langkah berikut:

1. Download dan install Visual Studio Code dari situs resminya (https://code.visualstudio.com/). Pilih versi yang sesuai dengan sistem operasi kita.
2. Download dan install Node.js dari situs resminya (https://nodejs.org/). Node.js dibutuhkan untuk menjalankan aplikasi React dan npm (Node.js package manager) yang digunakan untuk menginstal paket-paket yang dibutuhkan oleh React.
3. Buka Visual Studio Code dan klik pada menu "Extensions" (Ctrl+Shift+X) di sisi kiri. Cari dan install beberapa ekstensi yang berguna untuk pengembangan React, seperti:

- ESLint: Untuk mendeteksi dan memperbaiki masalah sintaks atau gaya kode JavaScript.
- Prettier: Untuk memformat kode secara otomatis sesuai dengan aturan yang ditentukan.
- Bracket Pair Colorizer: Untuk memberi warna berbeda pada setiap pasangan kurung, sehingga lebih mudah dibaca.
- Auto Rename Tag: Untuk mengubah nama tag HTML secara otomatis ketika kita mengubah nama tag pembuka atau penutup.
- Simple React Snippets: Untuk menyediakan snippet kode yang sering digunakan saat membuat komponen React.
- Code Spell Checker : Untuk mempermudah menganalisa error code
- npm Intellisense : Untuk auto complate NPM
- ES7 React/Redux/GraphQL/React-Native snippets: Untuk menyediakan snipet kode yang sering digunakan

4. Selain itu, kita juga bisa menyesuaikan beberapa pengaturan Visual Studio Code untuk memudahkan pengembangan React, seperti:

- Mengubah font family dan font size sesuai dengan preferensi kita.
- Mengaktifkan format on save untuk menjalankan Prettier secara otomatis saat menyimpan file.
- Mengaktifkan emmet untuk mendapatkan fitur auto-complete untuk HTML dan JSX.
- Mengaktifkan auto import untuk mengimpor modul yang dibutuhkan secara otomatis.

Kita bisa mengubah pengaturan Visual Studio Code dengan membuka menu "Settings" (Ctrl+,) dan mencari pengaturan yang ingin kita ubah.

5. Untuk membuat aplikasi React, kita bisa menggunakan create-react-app yang merupakan alat bantu yang disediakan oleh tim React. Buka terminal di Visual Studio Code dengan klik pada menu "Terminal" dan pilih "New Terminal". Ketik perintah berikut untuk membuat aplikasi React:

```bash
npx create-react-app my-app
```

Di mana `my-app` adalah nama folder untuk aplikasi kita. Proses ini mungkin memakan waktu beberapa menit untuk membuat aplikasi React dan menginstal dependensinya.

6. Setelah aplikasi React dibuat, kita bisa membukanya di Visual Studio Code dengan mengetik perintah berikut di terminal:

```bash
cd my-app
code .
```

7. Untuk menjalankan aplikasi React, kita bisa mengetik perintah berikut di terminal:

```bash
npm start
```

Hal ini akan membuka aplikasi React di browser pada http://localhost:3000.

Dengan langkah-langkah di atas, kita sudah siap untuk mulai membuat aplikasi React dengan Visual Studio Code.

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
### ES6 TERNARY OPERATOR
Ternary operator adalah operator yang memungkinkan kita untuk menulis sebuah pernyataan kondisional dalam satu baris, sebagai alternatif dari if...else statement.

Ternary operator memiliki sintaks sebagai berikut:

```javascript
condition ? exprIfTrue : exprIfFalse
```

Di mana:

- `condition` adalah sebuah ekspresi yang bernilai truthy atau falsy.
- `exprIfTrue` adalah sebuah ekspresi yang dieksekusi jika `condition` bernilai truthy.
- `exprIfFalse` adalah sebuah ekspresi yang dieksekusi jika `condition` bernilai falsy.

Contoh ternary operator:

```javascript
// Tanpa ternary operator
let umur = 20;
let minuman;
if (umur >= 21) {
  minuman = "Bir";
} else {
  minuman = "Jus";
}
console.log(minuman); // Jus

// Dengan ternary operator
let umur = 20;
let minuman = umur >= 21 ? "Bir" : "Jus";
console.log(minuman); // Jus
```

Ternary operator juga bisa digunakan secara berantai, dengan cara menempatkan ternary operator lain sebagai salah satu ekspresi:

```javascript
// Tanpa ternary operator
let nilai = 80;
let grade;
if (nilai >= 90) {
  grade = "A";
} else if (nilai >= 80) {
  grade = "B";
} else if (nilai >= 70) {
  grade = "C";
} else {
  grade = "D";
}
console.log(grade); // B

// Dengan ternary operator
let nilai = 80;
let grade = nilai >= 90 ? "A" : nilai >= 80 ? "B" : nilai >= 70 ? "C" : "D";
console.log(grade); // B
```
## REACT RENDER HTML
React render HTML adalah proses menampilkan elemen-elemen HTML yang dibuat dengan menggunakan React ke dalam halaman web.

React menggunakan JSX, yaitu sebuah sintaks yang memungkinkan kita untuk menulis elemen HTML di dalam kode JavaScript. JSX memudahkan kita untuk membuat komponen React yang interaktif dan dinamis.

Untuk merender HTML dengan React, kita perlu menggunakan fungsi `ReactDOM.render()` yang disediakan oleh pustaka `react-dom`. Fungsi ini menerima dua argumen, yaitu elemen React yang ingin dirender dan elemen HTML yang menjadi tempat tujuan render.

Contoh React render HTML:

Misalkan kita memiliki file `index.html` yang berisi elemen `<div id="root"></div>` sebagai tempat tujuan render:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>React Render HTML</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="index.js"></script>
  </body>
</html>
```

Kemudian kita memiliki file `index.js` yang berisi kode React untuk membuat elemen HTML menggunakan JSX:

```javascript
// Mengimpor React dan ReactDOM
import React from "react";
import ReactDOM from "react-dom";

// Membuat elemen React menggunakan JSX
const element = (
  <h1>Hello, world!</h1>
);

// Menemukan elemen HTML dengan id "root"
const container = document.getElementById("root");

// Merender elemen React ke dalam elemen HTML
ReactDOM.render(element, container);
```

Hasilnya adalah elemen `<h1>Hello, world!</h1>` akan ditampilkan di dalam elemen `<div id="root"></div>` di halaman web.

React render HTML juga bisa digunakan untuk merender komponen React yang lebih kompleks, seperti kelas komponen atau fungsi komponen. Komponen React adalah fungsi atau kelas yang mengembalikan elemen React.

Contoh React render HTML dengan komponen:

Misalkan kita memiliki file `App.js` yang berisi kode untuk membuat sebuah kelas komponen bernama `App`:

```javascript
// Mengimpor React
import React from "react";

// Membuat kelas komponen App
class App extends React.Component {
  // Membuat metode render
  render() {
    // Mengembalikan elemen React menggunakan JSX
    return (
      <div>
        <h1>This is a class component</h1>
        <p>This is some text</p>
      </div>
    );
  }
}

// Mengekspor kelas komponen App
export default App;
```

Kemudian kita memiliki file `index.js` yang berisi kode untuk merender komponen `App` ke dalam elemen HTML:

```javascript
// Mengimpor React dan ReactDOM
import React from "react";
import ReactDOM from "react-dom";

// Mengimpor kelas komponen App dari file App.js
import App from "./App";

// Menemukan elemen HTML dengan id "root"
const container = document.getElementById("root");

// Merender komponen App ke dalam elemen HTML
ReactDOM.render(<App />, container);
```

Hasilnya adalah komponen `App` akan ditampilkan di dalam elemen `<div id="root"></div>` di halaman web.

## REACT JSX
React JSX adalah sebuah sintaks yang memungkinkan kita untuk menulis elemen HTML di dalam kode JavaScript¹. JSX membuatnya lebih mudah untuk membuat dan menambahkan HTML di React.

JSX mengubah tag HTML menjadi elemen React, yang kemudian dirender oleh React ke dalam halaman web. JSX juga mendukung ekspresi JavaScript, yang bisa kita masukkan di antara kurung kurawal.

Untuk menggunakan JSX, kita perlu mengimpor React dari pustaka `react`. JSX juga membutuhkan transpiler seperti Babel untuk mengubah sintaks JSX menjadi JavaScript biasa.

Contoh React JSX:

Misalkan kita memiliki file `App.js` yang berisi kode berikut:

```javascript
// Mengimpor React
import React from "react";

// Membuat elemen React menggunakan JSX
const element = (
  <h1>Hello, world!</h1>
);

// Mengekspor elemen React
export default element;
```

Kemudian kita memiliki file `index.js` yang berisi kode berikut:

```javascript
// Mengimpor React dan ReactDOM
import React from "react";
import ReactDOM from "react-dom";

// Mengimpor elemen React dari file App.js
import element from "./App";

// Menemukan elemen HTML dengan id "root"
const container = document.getElementById("root");

// Merender elemen React ke dalam elemen HTML
ReactDOM.render(element, container);
```

Hasilnya adalah elemen `<h1>Hello, world!</h1>` akan ditampilkan di dalam elemen `<div id="root"></div>` di halaman web.

Contoh React JSX dengan ekspresi JavaScript:

Misalkan kita memiliki file `App.js` yang berisi kode berikut:

```javascript
// Mengimpor React
import React from "react";

// Membuat variabel nama
const name = "Budi";

// Membuat elemen React menggunakan JSX dan ekspresi JavaScript
const element = (
  <h1>Hello, {name}!</h1>
);

// Mengekspor elemen React
export default element;
```

Kemudian kita memiliki file `index.js` yang berisi kode yang sama seperti sebelumnya.

Hasilnya adalah elemen `<h1>Hello, Budi!</h1>` akan ditampilkan di dalam elemen `<div id="root"></div>` di halaman web.

## REACT COMPONENTS
React components adalah bagian-bagian kode yang mandiri dan dapat digunakan kembali. Mereka memiliki tujuan yang sama dengan fungsi JavaScript, tetapi bekerja secara terpisah dan mengembalikan HTML.

React components memungkinkan kita untuk membagi antarmuka pengguna menjadi unit-unit yang lebih kecil dan lebih mudah dipelihara, serta menghindari pengulangan kode.

React components ada dua jenis, yaitu kelas komponen dan fungsi komponen. Dalam tutorial ini, kita akan fokus pada fungsi komponen.

Fungsi komponen adalah fungsi JavaScript yang menerima props (properti) sebagai argumen dan mengembalikan elemen React². Fungsi komponen biasanya ditulis dengan menggunakan JSX, yaitu sebuah sintaks yang memungkinkan kita untuk menulis elemen HTML di dalam kode JavaScript.

Contoh React components:

Misalkan kita memiliki file `App.js` yang berisi kode berikut:

```javascript
// Mengimpor React
import React from "react";

// Membuat fungsi komponen App
function App() {
  // Mengembalikan elemen React menggunakan JSX
  return (
    <div>
      <h1>Hello, world!</h1>
      <p>This is a function component</p>
    </div>
  );
}

// Mengekspor fungsi komponen App
export default App;
```

Kemudian kita memiliki file `index.js` yang berisi kode berikut:

```javascript
// Mengimpor React dan ReactDOM
import React from "react";
import ReactDOM from "react-dom";

// Mengimpor fungsi komponen App dari file App.js
import App from "./App";

// Menemukan elemen HTML dengan id "root"
const container = document.getElementById("root");

// Merender fungsi komponen App ke dalam elemen HTML
ReactDOM.render(<App />, container);
```

Hasilnya adalah fungsi komponen `App` akan ditampilkan di dalam elemen `<div id="root"></div>` di halaman web.

Fungsi komponen juga bisa menerima props sebagai argumen. Props adalah objek yang berisi data atau informasi yang ingin dikirimkan dari komponen induk ke komponen anak³. Props bersifat read-only, artinya tidak bisa diubah oleh komponen penerima.

Contoh React components dengan props:

Misalkan kita memiliki file `App.js` yang berisi kode berikut:

```javascript
// Mengimpor React
import React from "react";

// Membuat fungsi komponen Greeting
function Greeting(props) {
  // Mengembalikan elemen React menggunakan JSX dan props
  return (
    <h1>Hello, {props.name}!</h1>
  );
}

// Membuat fungsi komponen App
function App() {
  // Mengembalikan elemen React menggunakan JSX dan fungsi komponen Greeting
  return (
    <div>
      <Greeting name="Budi" />
      <Greeting name="Ani" />
      <Greeting name="Rudi" />
    </div>
  );
}

// Mengekspor fungsi komponen App
export default App;
```

Kemudian kita memiliki file `index.js` yang berisi kode yang sama seperti sebelumnya.

Hasilnya adalah fungsi komponen `App` akan menampilkan tiga fungsi komponen `Greeting` dengan props name yang berbeda-beda di dalam elemen `<div id="root"></div>` di halaman web.

## REACT STATE
React state adalah objek yang berisi data atau informasi yang bisa berubah seiring waktu di dalam komponen React. React state memungkinkan kita untuk membuat antarmuka pengguna yang interaktif dan dinamis, yang bisa menyesuaikan diri dengan perubahan data.

React state hanya bisa digunakan di dalam kelas komponen atau fungsi komponen. React state bersifat privat, artinya hanya bisa diakses dan diubah oleh komponen yang memiliki state tersebut.

Untuk menggunakan state di dalam kelas komponen, kita perlu melakukan beberapa langkah, yaitu:

- Mendefinisikan state awal di dalam konstruktor kelas komponen dengan menggunakan `this.state`.
- Mengubah state dengan menggunakan metode `this.setState()`, yang menerima objek baru sebagai argumen.
- Mengakses state dengan menggunakan `this.state` di dalam metode `render()` atau metode lainnya.

Contoh React state di dalam kelas komponen:

Misalkan kita memiliki file `App.js` yang berisi kode berikut:

```javascript
// Mengimpor React
import React from "react";

// Membuat kelas komponen App
class App extends React.Component {
  // Mendefinisikan konstruktor kelas komponen
  constructor(props) {
    // Memanggil konstruktor kelas induk
    super(props);
    // Mendefinisikan state awal
    this.state = {
      count: 0,
    };
  }

  // Membuat metode untuk menambahkan count
  incrementCount = () => {
    // Mengubah state dengan metode setState()
    this.setState({
      count: this.state.count + 1,
    });
  };

  // Membuat metode render
  render() {
    // Mengakses state dengan this.state
    return (
      <div>
        <h1>Counter</h1>
        <p>You clicked {this.state.count} times</p>
        <button onClick={this.incrementCount}>Click me</button>
      </div>
    );
  }
}

// Mengekspor kelas komponen App
export default App;
```

Kemudian kita memiliki file `index.js` yang berisi kode untuk merender kelas komponen `App` ke dalam elemen HTML:

```javascript
// Mengimpor React dan ReactDOM
import React from "react";
import ReactDOM from "react-dom";

// Mengimpor kelas komponen App dari file App.js
import App from "./App";

// Menemukan elemen HTML dengan id "root"
const container = document.getElementById("root");

// Merender kelas komponen App ke dalam elemen HTML
ReactDOM.render(<App />, container);
```

Hasilnya adalah kelas komponen `App` akan menampilkan sebuah counter yang bisa ditambahkan dengan menekan tombol "Click me". Setiap kali tombol ditekan, state `count` akan bertambah satu dan antarmuka pengguna akan diperbarui sesuai dengan nilai state terbaru.

Untuk menggunakan state di dalam fungsi komponen, kita perlu menggunakan hook `useState`, yang disediakan oleh pustaka `react`. Hook `useState` memungkinkan kita untuk menambahkan state lokal ke dalam fungsi komponen².

Untuk menggunakan hook `useState`, kita perlu melakukan beberapa langkah, yaitu:

- Mengimpor hook `useState` dari pustaka `react`.
- Memanggil hook `useState` di dalam fungsi komponen dengan memberikan nilai awal sebagai argumen. Hook `useState` akan mengembalikan sebuah array yang berisi dua elemen, yaitu nilai state saat ini dan sebuah fungsi untuk mengubah state tersebut.
- Menyimpan array yang dikembalikan oleh hook `useState` ke dalam variabel dengan menggunakan destructuring assignment. Variabel pertama biasanya menyimpan nilai state, sedangkan variabel kedua menyimpan fungsi untuk mengubah state.
- Mengubah state dengan memanggil fungsi yang disimpan di variabel kedua. Fungsi ini menerima nilai baru sebagai argumen.

Contoh React state di dalam fungsi komponen:

Misalkan kita memiliki file `App.js` yang berisi kode berikut:

```javascript
// Mengimpor React dan hook useState
import React, { useState } from "react";

// Membuat fungsi komponen App
function App() {
  // Memanggil hook useState dengan nilai awal 0
  // Menyimpan array yang dikembalikan oleh hook useState ke dalam variabel count dan setCount
  const [count, setCount] = useState(0);

  // Membuat fungsi untuk menambahkan count
  const incrementCount = () => {
    // Mengubah state dengan memanggil fungsi setCount
    setCount(count + 1);
  };

  // Mengembalikan elemen React menggunakan JSX dan state
  return (
    <div>
      <h1>Counter</h1>
      <p>You clicked {count} times</p>
      <button onClick={incrementCount}>Click me</button>
    </div>
  );
}

// Mengekspor fungsi komponen App
export default App;
```

Kemudian kita memiliki file `index.js` yang berisi kode yang sama seperti sebelumnya.

Hasilnya adalah fungsi komponen `App` akan menampilkan sebuah counter yang bisa ditambahkan dengan menekan tombol "Click me". Setiap kali tombol ditekan, state `count` akan bertambah satu dan antarmuka pengguna akan diperbarui sesuai dengan nilai state terbaru.

## REACT PROPS

React props adalah objek yang berisi data atau informasi yang dikirimkan dari komponen induk ke komponen anak. React props memungkinkan kita untuk mengirimkan data antara komponen dan menyesuaikan tampilan atau perilaku komponen.

React props bisa digunakan di dalam kelas komponen atau fungsi komponen. React props bersifat read-only, artinya tidak bisa diubah oleh komponen penerima.

Untuk menggunakan props di dalam kelas komponen, kita perlu melakukan beberapa langkah, yaitu:

- Mengirimkan props dari komponen induk ke komponen anak dengan menggunakan sintaks seperti atribut HTML. Props bisa berupa string, angka, boolean, array, objek, atau fungsi.
- Mengakses props di dalam kelas komponen dengan menggunakan `this.props` di dalam metode `render()` atau metode lainnya. Props disimpan dalam objek `this.props`, sehingga kita bisa mengakses nilai props dengan menggunakan dot notation atau bracket notation.

Contoh React props di dalam kelas komponen:

Misalkan kita memiliki file `App.js` yang berisi kode berikut:

```javascript
// Mengimpor React
import React from "react";

// Membuat kelas komponen Greeting
class Greeting extends React.Component {
  // Membuat metode render
  render() {
    // Mengakses props dengan this.props
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

// Membuat kelas komponen App
class App extends React.Component {
  // Membuat metode render
  render() {
    // Mengirimkan props dari komponen App ke komponen Greeting
    return (
      <div>
        <Greeting name="Budi" />
        <Greeting name="Ani" />
        <Greeting name="Rudi" />
      </div>
    );
  }
}

// Mengekspor kelas komponen App
export default App;
```

Kemudian kita memiliki file `index.js` yang berisi kode untuk merender kelas komponen `App` ke dalam elemen HTML:

```javascript
// Mengimpor React dan ReactDOM
import React from "react";
import ReactDOM from "react-dom";

// Mengimpor kelas komponen App dari file App.js
import App from "./App";

// Menemukan elemen HTML dengan id "root"
const container = document.getElementById("root");

// Merender kelas komponen App ke dalam elemen HTML
ReactDOM.render(<App />, container);
```

Hasilnya adalah kelas komponen `App` akan menampilkan tiga kelas komponen `Greeting` dengan props name yang berbeda-beda di dalam elemen `<div id="root"></div>` di halaman web.

Untuk menggunakan props di dalam fungsi komponen, kita perlu melakukan beberapa langkah, yaitu:

- Mengirimkan props dari komponen induk ke komponen anak dengan menggunakan sintaks seperti atribut HTML. Props bisa berupa string, angka, boolean, array, objek, atau fungsi.
- Mengakses props di dalam fungsi komponen dengan menggunakan parameter `props` yang menerima objek `props`. Kita bisa mengakses nilai props dengan menggunakan dot notation atau bracket notation. Kita juga bisa menggunakan destructuring assignment untuk menyimpan nilai props ke dalam variabel.

Contoh React props di dalam fungsi komponen:

Misalkan kita memiliki file `App.js` yang berisi kode berikut:

```javascript
// Mengimpor React
import React from "react";

// Membuat fungsi komponen Greeting
function Greeting(props) {
  // Mengakses props dengan parameter props
  return <h1>Hello, {props.name}!</h1>;
}

// Membuat fungsi komponen App
function App() {
  // Mengirimkan props dari fungsi komponen App ke fungsi komponen Greeting
  return (
    <div>
      <Greeting name="Budi" />
      <Greeting name="Ani" />
      <Greeting name="Rudi" />
    </div>
  );
}

// Mengekspor fungsi komponen App
export default App;
```

Kemudian kita memiliki file `index.js` yang berisi kode yang sama seperti sebelumnya.

Hasilnya adalah fungsi komponen `App` akan menampilkan tiga fungsi komponen `Greeting` dengan props name yang berbeda-beda di dalam elemen `<div id="root"></div>` di halaman web.

## STATE VS PROPS

React state dan props adalah dua mekanisme penting untuk menyimpan dan mengirimkan data di dalam komponen React. Namun, ada beberapa perbedaan antara keduanya, yaitu:

- React state adalah objek yang berisi data atau informasi yang bisa berubah seiring waktu di dalam komponen React. React state memungkinkan kita untuk membuat antarmuka pengguna yang interaktif dan dinamis, yang bisa menyesuaikan diri dengan perubahan data. React state hanya bisa digunakan di dalam kelas komponen atau fungsi komponen, dan bersifat privat, artinya hanya bisa diakses dan diubah oleh komponen yang memiliki state tersebut. React state bisa diubah dengan menggunakan metode `this.setState()` di dalam kelas komponen atau hook `useState()` di dalam fungsi komponen.
- React props adalah objek yang berisi data atau informasi yang dikirimkan dari komponen induk ke komponen anak. React props memungkinkan kita untuk mengirimkan data antara komponen dan menyesuaikan tampilan atau perilaku komponen. React props bisa digunakan di dalam kelas komponen atau fungsi komponen, dan bersifat read-only, artinya tidak bisa diubah oleh komponen penerima. React props bisa dikirimkan dengan menggunakan sintaks seperti atribut HTML, dan bisa diakses dengan menggunakan `this.props` di dalam kelas komponen atau parameter `props` di dalam fungsi komponen.

Secara singkat, perbedaan antara React state dan props adalah:

- State adalah data internal yang bisa berubah, sedangkan props adalah data eksternal yang tidak bisa berubah.
- State digunakan untuk mengontrol perilaku komponen, sedangkan props digunakan untuk mengonfigurasi komponen.
- State hanya bisa diubah oleh komponen itu sendiri, sedangkan props hanya bisa dikirimkan oleh komponen induk.

## CONSTRUCTOR

React constructor adalah metode yang secara otomatis dipanggil saat membuat objek dari kelas komponen. React constructor bisa digunakan untuk melakukan inisialisasi awal, seperti menetapkan nilai default untuk beberapa properti objek, atau memeriksa argumen yang dilewatkan. Singkatnya, React constructor membantu dalam pembuatan objek.

Di React, constructor tidak berbeda. Constructor bisa digunakan untuk mengikat event handler ke komponen dan/atau menginisialisasi state lokal komponen. Metode constructor dipanggil sebelum komponen di-mount dan, seperti kebanyakan hal di React, memiliki beberapa aturan yang harus diikuti saat menggunakannya, yaitu:

- Panggil super (props) sebelum menggunakan this.props
Karena sifat dari constructor, objek this.props tidak tersedia langsung dan bisa menyebabkan bug. Constructor berikut akan melempar error:

```javascript
constructor() {
  console.log(this.props);
}
```

Sebagai gantinya, kita ambil nilai props dari constructor dan lewatkan ke metode super:

```javascript
constructor(props) {
  super(props);
  console.log(this.props);
}
```

Ketika kita memanggil metode super, metode ini akan memanggil constructor dari kelas induk yang dalam kasus komponen React adalah React.Component.

- Jangan pernah memanggil setState () di dalam constructor
Constructor komponen Anda adalah tempat yang sempurna untuk menetapkan state awal komponen. Alih-alih menggunakan setState () seperti yang biasa Anda lakukan di metode lain di kelas Anda, Anda harus menetapkan state awal secara langsung:

```javascript
constructor(props) {
  super(props);
  this.state = {
    name: 'Budi',
    age: 22,
  };
}
```

Constructor adalah satu-satunya tempat yang bisa menetapkan state lokal secara langsung seperti itu. Di tempat lain di dalam komponen Anda, Anda harus mengandalkan setState ().

- Hindari menetapkan nilai dari this.props ke this.state
Ketika Anda menetapkan state awal komponen di dalam constructor, Anda harus mencoba menghindari menetapkan nilai dari properti. Ketika Anda melakukan hal seperti ini:

```javascript
constructor(props) {
  super(props);
  this.state = {
    name: props.name,
  };
}
```

Anda akan kehilangan kemampuan untuk menjalankan setState () nanti dan memperbarui properti. Alih-alih menetapkan properti langsung ke state, Anda bisa langsung merujuk properti di kode Anda dengan memanggil this.props.name.

- Ikuti event semua di satu tempat
Bukan aturan atau kesalahan, tetapi perlu dicatat bahwa Anda bisa dengan mudah mengikat event handler Anda di dalam constructor:

```javascript
constructor(props) {
  super(props);
  this.state = {
    // Menetapkan state awal
  };
  // Event handler kita
  this.onClick = this.onClick.bind(this);
  this.onKeyUp = this.onKeyUp.bind(this);
  // dst...
}
```

- Hindari menggunakan efek samping atau langganan di dalam constructor
Saya mengerti, Anda baru saja membuat komponen baru dan Anda ingin menarik data dari API dan mengaturnya ke state. Namun, jangan lakukan itu di dalam constructor. Sebagai gantinya, gunakan metode componentDidMount () untuk melakukan hal tersebut.

Contoh React constructor:

Misalkan kita memiliki file `App.js` yang berisi kode berikut:

```javascript
// Mengimpor React
import React from "react";

// Membuat kelas komponen App
class App extends React.Component {
  // Mendefinisikan constructor kelas komponen
  constructor(props) {
    // Memanggil constructor kelas induk
    super(props);
    // Mendefinisikan state awal
    this.state = {
      name: "Budi",
      age: 22,
    };
    // Mengikat event handler ke komponen ini
    this.handleClick = this.handleClick.bind(this);
  }

  // Membuat metode untuk menangani klik tombol
  handleClick() {
    // Mengubah state dengan metode setState()
    this.setState({
      name: "Ani",
      age: 21,
    });
  }

  // Membuat metode render
  render() {
    // Mengembalikan elemen React menggunakan JSX dan state
    return (
      <div>
        <h1>Hello, {this.state.name}!</h1>
        <p>You are {this.state.age} years old</p>
        <button onClick={this.handleClick}>Change name</button>
      </div>
    );
  }
}

// Mengekspor kelas komponen App
export default App;
```

Kemudian kita memiliki file `index.js` yang berisi kode untuk merender kelas komponen `App` ke dalam elemen HTML:

```javascript
// Mengimpor React dan ReactDOM
import React from "react";
import ReactDOM from "react-dom";

// Mengimpor kelas komponen App dari file App.js
import App from "./App";

// Menemukan elemen HTML dengan id "root"
const container = document.getElementById("root");

// Merender kelas komponen App ke dalam elemen HTML
ReactDOM.render(<App />, container);
```

Hasilnya adalah kelas komponen `App` akan menampilkan sebuah elemen `<h1>` dengan nama dan umur yang disimpan di state, dan sebuah tombol untuk mengubah nama. Ketika tombol diklik, metode handleClick akan dipanggil, yang akan mengubah state dengan metode setState, dan antarmuka pengguna akan diperbarui sesuai dengan state terbaru.

## REACT API

React Component API adalah kumpulan metode dan properti yang terkait dengan kelas komponen React. React Component API memungkinkan kita untuk membuat, mengelola, dan memanipulasi komponen React dengan berbagai cara.

React Component API terdiri dari beberapa bagian, yaitu:

- React.Component: Ini adalah kelas dasar untuk komponen React yang didefinisikan menggunakan kelas ES6. React.Component memiliki beberapa metode dan properti yang bisa kita gunakan untuk mengontrol perilaku dan siklus hidup komponen. Beberapa metode dan properti yang umum digunakan adalah:

  - constructor(props): Ini adalah metode yang dipanggil secara otomatis saat membuat objek dari kelas komponen. Metode ini bisa digunakan untuk menginisialisasi state awal dan mengikat event handler ke komponen.
  - render(): Ini adalah metode yang harus kita definisikan untuk mengembalikan elemen React yang akan ditampilkan oleh komponen. Metode ini harus murni, artinya tidak boleh mengubah state atau berinteraksi dengan DOM secara langsung.
  - componentDidMount(): Ini adalah metode yang dipanggil setelah komponen di-mount ke DOM. Metode ini bisa digunakan untuk melakukan operasi yang membutuhkan akses ke DOM atau data eksternal, seperti memanggil API atau mengatur timer.
  - componentDidUpdate(prevProps, prevState, snapshot): Ini adalah metode yang dipanggil setelah komponen diperbarui karena perubahan state atau props. Metode ini bisa digunakan untuk melakukan operasi berdasarkan perbandingan antara nilai sebelum dan sesudah perubahan, seperti memperbarui DOM atau memanggil API.
  - componentWillUnmount(): Ini adalah metode yang dipanggil sebelum komponen di-unmount dari DOM. Metode ini bisa digunakan untuk melakukan operasi pembersihan, seperti membatalkan permintaan jaringan atau menghapus event listener.
  - setState(updater, callback): Ini adalah metode yang digunakan untuk mengubah state komponen secara asinkron. Metode ini menerima dua argumen, yaitu updater dan callback. Updater bisa berupa objek atau fungsi yang mengembalikan objek, yang menentukan bagian state yang akan diubah. Callback adalah fungsi opsional yang akan dipanggil setelah state diperbarui dan komponen dirender ulang.
  - props: Ini adalah properti yang berisi objek props yang dikirimkan ke komponen oleh komponen induk. Props bersifat read-only, artinya tidak bisa diubah oleh komponen penerima. Props bisa berupa string, angka, boolean, array, objek, fungsi, atau JSX.
  - state: Ini adalah properti yang berisi objek state yang menampung data atau informasi yang bisa berubah seiring waktu di dalam komponen. State bersifat privat, artinya hanya bisa diakses dan diubah oleh komponen itu sendiri. State bisa berupa string, angka, boolean, array, objek, atau JSX.

- React.PureComponent: Ini adalah kelas turunan dari React.Component yang memiliki perilaku khusus untuk metode shouldComponentUpdate(). Metode ini menentukan apakah komponen perlu dirender ulang atau tidak berdasarkan perubahan state atau props. React.PureComponent melakukan perbandingan dangkal (shallow comparison) antara state dan props sebelumnya dengan state dan props saat ini, dan hanya merender ulang jika ada perbedaan. Kelas ini berguna untuk meningkatkan kinerja komponen dengan menghindari render ulang yang tidak perlu.

- React.memo: Ini adalah fungsi tingkat tinggi (higher-order function) yang digunakan untuk membungkus fungsi komponen dan memberikan perilaku serupa dengan React.PureComponent. Fungsi ini melakukan perbandingan dangkal antara props sebelumnya dengan props saat ini, dan hanya merender ulang jika ada perbedaan. Fungsi ini berguna untuk meningkatkan kinerja fungsi komponen dengan menghindari render ulang yang tidak perlu.

- React.createElement(type, props, children): Ini adalah fungsi yang digunakan untuk membuat elemen React dari tipe tertentu. Fungsi ini menerima tiga argumen, yaitu type, props, dan children. Type bisa berupa string yang mewakili elemen HTML, atau fungsi atau kelas yang mewakili komponen React. Props adalah objek opsional yang berisi atribut atau data yang ingin dikirimkan ke elemen. Children adalah argumen opsional yang berisi elemen anak atau konten yang ingin ditampilkan di dalam elemen. Fungsi ini biasanya tidak dipanggil secara langsung jika kita menggunakan JSX, karena JSX adalah sintaks gula (syntactic sugar) untuk memanggil fungsi ini.

- React.cloneElement(element, props, children): Ini adalah fungsi yang digunakan untuk mengkloning elemen React dan menggabungkan props baru dengan props asli. Fungsi ini menerima tiga argumen, yaitu element, props, dan children. Element adalah elemen React yang ingin dikloning. Props adalah objek opsional yang berisi atribut atau data baru yang ingin ditambahkan ke elemen. Children adalah argumen opsional yang berisi elemen anak atau konten baru yang ingin ditampilkan di dalam elemen.

- React.isValidElement(object): Ini adalah fungsi yang digunakan untuk memeriksa apakah objek yang diberikan adalah elemen React yang valid atau tidak. Fungsi ini menerima satu argumen, yaitu object, dan mengembalikan nilai boolean.

- React.Children: Ini adalah objek yang berisi metode-metode bantuan untuk mengoperasikan koleksi children properti dari komponen. Beberapa metode yang umum digunakan adalah:

  - React.Children.map(children, function): Ini adalah metode yang digunakan untuk memetakan setiap elemen anak ke fungsi tertentu dan mengembalikan array baru.
  - React.Children.forEach(children, function): Ini adalah metode yang digunakan untuk menjalankan fungsi tertentu pada setiap elemen anak tanpa mengembalikan array baru.
  - React.Children.count(children): Ini adalah metode yang digunakan untuk menghitung jumlah elemen anak.
  - React.Children.only(children): Ini adalah metode yang digunakan untuk memverifikasi bahwa hanya ada satu elemen anak dan mengembalikannya.
  - React.Children.toArray(children): Ini adalah metode yang digunakan untuk mengubah koleksi children menjadi array datar.

- React.Fragment: Ini adalah komponen khusus yang digunakan untuk merender beberapa elemen tanpa wrapper. React.Fragment bisa ditulis dengan menggunakan sintaks seperti tag HTML kosong (<></>) atau dengan menggunakan React.Fragment secara eksplisit (<React.Fragment></React.Fragment>). Komponen ini berguna untuk menghindari pembuatan DOM node tambahan yang tidak perlu.

- React.createRef(): Ini adalah fungsi yang digunakan untuk membuat objek ref, yaitu sebuah kontainer yang bisa menyimpan referensi ke elemen DOM atau komponen kelas. Fungsi ini biasanya dipanggil di dalam constructor komponen dan disimpan sebagai properti komponen. Objek ref memiliki properti current yang menunjuk ke node DOM atau instance komponen kelas.

- React.forwardRef(renderFunction): Ini adalah fungsi tingkat tinggi (higher-order function) yang digunakan untuk meneruskan ref dari komponen induk ke komponen anak. Fungsi ini menerima sebuah fungsi render sebagai argumen, yang menerima dua parameter, yaitu props dan ref. Fungsi render harus mengembalikan sebuah elemen React dan meneruskan ref ke elemen tersebut.

- React.lazy(dynamicImport): Ini adalah fungsi tingkat tinggi (higher-order function) yang digunakan untuk memuat komponen secara dinamis dengan menggunakan sintaks import() . Fungsi ini menerima sebuah fungsi sebagai argumen, yang harus mengembalikan sebuah promise yang menyelesaikan modul default dari komponen. Komponen hasil dari fungsi ini harus dirender di dalam komponen Suspense.

- React.Suspense: Ini adalah komponen khusus yang digunakan untuk menampilkan fallback UI sementara menunggu konten tertentu dimuat, seperti komponen dinamis atau data fetching. Komponen ini memiliki properti fallback, yaitu elemen React yang akan ditampilkan saat kontennya belum siap.

Contoh penggunaan beberapa metode dan properti dari React Component API:

```javascript
// Mengimpor React
import React from "react";

// Membuat kelas komponen App
class App extends React.Component {
  // Mendefinisikan constructor kelas komponen
  constructor(props) {
    // Memanggil constructor kelas induk
    super(props);
    // Mendefinisikan state awal
    this.state = {
      name: "Budi",
      age: 22,
    };
    // Mengikat event handler ke komponen ini
    this.handleClick = this.handleClick.bind(this);
  }

  // Membuat metode untuk menangani klik tombol
  handleClick() {
    // Mengubah state dengan metode setState()
    this.setState({
      name: "Ani",
      age: 21,
    });
  }

  // Membuat metode render
  render() {
    // Mengembalikan elemen React menggunakan JSX dan state
    return (
      <div>
        <h1>Hello, {this.state.name}!</h1>
        <p>You are {this.state.age} years old</p>
        <button onClick={this.handleClick}>Change name</button>
      </div>
    );
  }
}

// Mengekspor kelas komponen App sebagai default
export default App;
```

Berikut adalah contoh penggunaan React API untuk membuat sebuah aplikasi sederhana yang menampilkan daftar buku dan memungkinkan pengguna untuk menambahkan buku baru ke daftar.

```javascript
// Mengimpor React dan useState hook
import React, { useState } from "react";

// Membuat fungsi komponen BookList
function BookList() {
  // Mendefinisikan state awal untuk menyimpan daftar buku
  const [books, setBooks] = useState([
    { id: 1, title: "The Lord of the Rings" },
    { id: 2, title: "Harry Potter" },
    { id: 3, title: "The Hunger Games" },
  ]);

  // Mendefinisikan state awal untuk menyimpan input judul buku
  const [title, setTitle] = useState("");

  // Membuat fungsi untuk menangani perubahan input
  const handleChange = (e) => {
    // Mengambil nilai input dari event object
    const value = e.target.value;
    // Mengubah state title dengan nilai input
    setTitle(value);
  };

  // Membuat fungsi untuk menangani submit form
  const handleSubmit = (e) => {
    // Mencegah perilaku default dari form
    e.preventDefault();
    // Mengecek apakah input tidak kosong
    if (title) {
      // Membuat objek buku baru dengan id dan title
      const newBook = { id: Date.now(), title };
      // Mengubah state books dengan menambahkan buku baru ke array
      setBooks([...books, newBook]);
      // Mengosongkan state title
      setTitle("");
    }
  };

  // Mengembalikan elemen React menggunakan JSX dan state
  return (
    <div className="container">
      <h1>Book List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={handleChange}
          placeholder="Enter book title"
        />
        <button type="submit">Add Book</button>
      </form>
      <ul>
        {/* Menggunakan React.Children.map untuk memetakan setiap elemen books ke fungsi komponen Book */}
        {React.Children.map(books, (book) => (
          <Book book={book} />
        ))}
      </ul>
    </div>
  );
}

// Membuat fungsi komponen Book
function Book({ book }) {
  // Mengembalikan elemen React menggunakan JSX dan props
  return (
    <li>
      {book.title} - {book.id}
    </li>
  );
}

// Mengekspor fungsi komponen BookList sebagai default
export default BookList;
```

## REACT FORM 

React Forms adalah cara untuk memungkinkan pengguna berinteraksi dengan halaman web dengan memasukkan dan mengirimkan data di dalam komponen React. Seperti di HTML, React menggunakan elemen form seperti input, textarea, select, dan lain-lain untuk membuat form.

Menambahkan Form di React
Anda bisa menambahkan form dengan React seperti elemen lainnya:

```javascript
function MyForm() {
  return (
    <form>
      <label>Enter your name:</label>
      <input type="text" />
    </form>
  );
}
```

Ini akan berfungsi seperti biasa, form akan terkirim dan halaman akan refresh. Namun, ini biasanya bukan yang kita inginkan di React. Kita ingin mencegah perilaku default ini dan membiarkan React mengontrol form.

Menangani Form
Menangani form adalah tentang bagaimana Anda menangani data saat nilai atau data tersebut berubah atau terkirim. Di HTML, data form biasanya ditangani oleh DOM. Di React, data form biasanya ditangani oleh komponen.

Ketika data ditangani oleh komponen, semua data disimpan di state komponen. Anda bisa mengontrol perubahan dengan menambahkan event handler di atribut onChange. Anda bisa menggunakan hook useState untuk melacak nilai setiap input dan memberikan "sumber kebenaran tunggal" untuk seluruh aplikasi.

```javascript
import { useState } from "react";

function MyForm() {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setName(value);
  };

  return (
    <form>
      <label>Enter your name:</label>
      <input type="text" value={name} onChange={handleChange} />
    </form>
  );
}
```

Mengirimkan Form
Anda bisa mengontrol aksi submit dengan menambahkan event handler di atribut onSubmit untuk elemen <form>:

```javascript
import { useState } from "react";

function MyForm() {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setName(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`The name you entered was: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:</label>
      <input type="text" value={name} onChange={handleChange} />
      <input type="submit" />
    </form>
  );
}
```

Input Field yang Banyak
Anda bisa mengontrol nilai dari lebih dari satu input field dengan menambahkan atribut name untuk setiap elemen. Kita akan menginisialisasi state kita dengan objek kosong. Untuk mengakses field di event handler gunakan sintaks event.target.name dan event.target.value. Untuk mengubah state, gunakan kurung siku [bracket notation] di sekitar nama properti.

```javascript
import { useState } from "react";

function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:</label>
      <input type="text" name="username" value={inputs.username || ""} onChange={handleChange} />
      <label>Enter your age:</label>
      <input type="number" name="age" value={inputs.age || ""} onChange={handleChange} />
      <input type="submit" />
    </form>
  );
}
```

## REACT EVENTS

React Events adalah aksi yang bisa dipicu sebagai akibat dari interaksi pengguna atau sistem dengan halaman web. Misalnya, klik mouse, muat halaman web, tekan tombol, ubah ukuran jendela, dan interaksi lainnya disebut event. React memiliki sistem event sendiri yang sangat mirip dengan menangani event pada elemen DOM.

Sistem event React dikenal sebagai Synthetic Event, yaitu pembungkus lintas browser dari event asli browser. Synthetic Event memiliki antarmuka yang sama dengan event asli browser, termasuk stopPropagation() dan preventDefault(), kecuali event tersebut bekerja identik di semua browser.

Menangani Event di React
Menangani event dengan elemen React sangat mirip dengan menangani event pada elemen DOM. Ada beberapa perbedaan sintaks:

- Event React dinamai menggunakan camelCase (seperti onClick), bukan huruf kecil semua.
- Menggunakan JSX, Anda melewatkan fungsi sebagai event handler, bukan string.

Misalnya, HTML berikut:

```html
<button onclick="activateLasers()">Activate Lasers</button>
```

Sedikit berbeda di React:

```jsx
<button onClick={activateLasers}>Activate Lasers</button>
```

Anda tidak bisa mengembalikan false untuk mencegah perilaku default di React. Anda harus secara eksplisit memanggil preventDefault. Misalnya, dengan HTML biasa, untuk mencegah link default membuka halaman baru, Anda bisa menulis:

```html
<a href="#" onclick="console.log('The link was clicked.'); return false">Click me</a>
```

Di React, ini bisa sedikit berbeda:

```jsx
function handleClick(e) {
  e.preventDefault();
  console.log("The link was clicked.");
}

return <a href="#" onClick={handleClick}>Click me</a>;
```

Di sini, e adalah sebuah objek Synthetic Event. React menentukan objek ini sesuai dengan spesifikasi W3C, jadi Anda tidak perlu khawatir tentang kompatibilitas lintas browser.

Ketika Anda mendefinisikan sebuah komponen menggunakan kelas ES6, metode umum seperti handleClick dan handleSubmit harus diikat secara eksplisit ke this:

```jsx
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // Ini penting untuk membuat `this` bekerja di callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return <button onClick={this.handleClick}>{this.state.isToggleOn ? "ON" : "OFF"}</button>;
  }
}
```

Alternatifnya, Anda bisa menggunakan sintaks bidang kelas untuk menghindari mengikat secara eksplisit:

```jsx
class Toggle extends React.Component {
  state = { isToggleOn: true };

  // Ini adalah sintaks bidang kelas *eksperimental*
  handleClick = () => {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  };

  render() {
    return <button onClick={this.handleClick}>{this.state.isToggleOn ? "ON" : "OFF"}</button>;
  }
}
```

Atau Anda bisa menggunakan fungsi panah di dalam callback:

```jsx
class Toggle extends React.Component {
  state = { isToggleOn: true };

  render() {
    return (
      <button
        onClick={() => {
          this.setState((prevState) => ({
            isToggleOn: !prevState.isToggleOn,
          }));
        }}
      >
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
}
```

Namun, masalah dengan sintaks ini adalah callback berbeda dibuat setiap kali Toggle dirender. Dalam sebagian besar kasus, ini baik-baik saja. Namun, jika callback ini dilewatkan sebagai prop ke komponen bawah, komponen tersebut mungkin melakukan render ulang tambahan.

Event yang Didukung
React menormalkan event sehingga mereka memiliki properti yang konsisten di seluruh browser. Event handler di bawah ini dipicu oleh sebuah event dalam fase bubbling. Untuk mendaftarkan sebuah event handler untuk fase tangkapan (capture), tambahkan Capture ke nama event; misalnya, alih-alih menggunakan onClick, Anda akan menggunakan onClickCapture untuk menangani event klik dalam fase tangkapan.

Beberapa event yang didukung oleh React adalah:

- Clipboard Events: Event yang terkait dengan clipboard, seperti onCopy, onCut, dan onPaste.
- Composition Events: Event yang terkait dengan komposisi karakter IME (Input Method Editor), seperti onCompositionEnd, onCompositionStart, dan onCompositionUpdate.
- Keyboard Events: Event yang terkait dengan input keyboard, seperti onKeyDown, onKeyPress, dan onKeyUp.
- Focus Events: Event yang terkait dengan fokus elemen, seperti onFocus dan onBlur.
- Form Events: Event yang terkait dengan elemen form, seperti onChange, onSubmit, dan onReset.
- Mouse Events: Event yang terkait dengan input mouse, seperti onClick, onDoubleClick, onMouseDown, onMouseMove, dan onMouseUp.
- Pointer Events: Event yang terkait dengan input pointer (mouse, pena, sentuh), seperti onPointerDown, onPointerMove, dan onPointerUp.
- Selection Events: Event yang terkait dengan pemilihan teks atau konten, seperti onSelect.
- Touch Events: Event yang terkait dengan input sentuh, seperti onTouchStart, onTouchMove, dan onTouchEnd.
- UI Events: Event yang terkait dengan antarmuka pengguna (user interface), seperti onLoad dan onError.
- Wheel Events: Event yang terkait dengan roda mouse atau trackpad, seperti onWheel.

Contoh penggunaan beberapa event di React:

```jsx
import React from "react";

// Membuat fungsi komponen App
function App() {
  // Membuat fungsi untuk menangani klik tombol
  const handleClick = () => {
    alert("You clicked the button!");
  };

  // Membuat fungsi untuk menangani perubahan input
  const handleChange = (e) => {
    console.log("You typed:", e.target.value);
  };

  // Membuat fungsi untuk menangani submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("You submitted the form!");
  };

  // Mengembalikan elemen React menggunakan JSX dan event handler
  return (
    <div className="container">
      <h1>React Events</h1>
      <button onClick={handleClick}>Click Me</button>
      <input type="text" onChange={handleChange} />
      <form onSubmit={handleSubmit}>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

// Mengekspor fungsi komponen App sebagai default
export default App;
```

## REACT KEYS

React Keys adalah pengenal unik yang digunakan untuk mengidentifikasi item mana yang telah berubah, diperbarui, atau dihapus dari daftar dan untuk menentukan komponen mana dalam koleksi yang perlu dirender ulang. React Keys berguna ketika kita membuat komponen secara dinamis atau ketika pengguna mengubah daftar.

Menggunakan Keys dengan Komponen
Ketika kita membuat komponen secara dinamis dengan menggunakan metode map atau loop, kita harus memberikan atribut key untuk setiap elemen yang dihasilkan. Key harus berupa string yang secara unik mengidentifikasi item daftar di antara saudara kandungnya. Biasanya kita akan menggunakan ID dari data kita sebagai key.

Misalnya, kita memiliki array data berikut:

```javascript
const data = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];
```

Kemudian kita membuat komponen User yang menerima objek data sebagai prop dan menampilkan nama pengguna:

```jsx
function User({ data }) {
  return <div className="user">{data.name}</div>;
}
```

Kemudian kita membuat komponen UserList yang memetakan array data ke komponen User dan memberikan key berdasarkan id data:

```jsx
function UserList({ data }) {
  return (
    <div className="user-list">
      {data.map((user) => (
        <User key={user.id} data={user} />
      ))}
    </div>
  );
}
```

Kemudian kita melewatkan array data ke komponen UserList sebagai prop:

```jsx
<UserList data={data} />
```

Hasilnya adalah komponen UserList akan menampilkan tiga komponen User dengan nama Alice, Bob, dan Charlie.

Mengapa Key Penting?
Key penting karena mereka membantu React mengidentifikasi item mana yang telah berubah, diperbarui, atau dihapus dari daftar. Key juga membantu React mengoptimalkan kinerja rendering dengan meminimalkan jumlah elemen DOM yang dibuat atau dimodifikasi.

Tanpa key, React akan mencocokkan elemen berdasarkan urutan mereka dalam array. Ini bisa menyebabkan masalah ketika elemen ditambahkan, dihapus, atau diurutkan ulang dalam array. Misalnya, jika kita memiliki daftar todo seperti ini:

```jsx
const todos = [
  { id: 1, text: "Learn React" },
  { id: 2, text: "Build a website" },
  { id: 3, text: "Deploy to server" },
];
```

Dan kita melewatkan array ini ke sebuah komponen TodoList yang memetakan setiap item ke sebuah komponen Todo:

```jsx
function TodoList({ todos }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <Todo todo={todo} />
      ))}
    </ul>
  );
}
```

Komponen Todo menerima objek todo sebagai prop dan menampilkan teks todo:

```jsx
function Todo({ todo }) {
  return <li className="todo">{todo.text}</li>;
}
```

Jika kita tidak memberikan key untuk setiap komponen Todo, React akan memberi peringatan seperti ini:

Warning: Each child in a list should have a unique "key" prop.

Jika kita mengabaikan peringatan ini dan menghapus item pertama dari array todos, React akan mengira bahwa item pertama sekarang adalah "Build a website", item kedua adalah "Deploy to server", dan item ketiga telah dihapus. Ini bisa menyebabkan perilaku yang tidak diinginkan atau tidak konsisten.

Untuk menghindari hal ini, kita harus memberikan key untuk setiap komponen Todo berdasarkan id todo:

```jsx
function TodoList({ todos }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
```

Dengan cara ini, React akan tahu bahwa item pertama telah dihapus dan tidak perlu merender ulang item kedua dan ketiga.

Key Harus Unik di Antara Saudara Kandung
Key harus unik di antara saudara kandung, tetapi tidak perlu secara global unik. Dua elemen yang berbeda bisa memiliki key yang sama selama mereka tidak memiliki saudara kandung yang sama.

Misalnya, kita bisa memiliki dua komponen TodoList yang menerima array todos yang berbeda sebagai prop, tetapi menggunakan id todo yang sama sebagai key:

```jsx
const todos1 = [
  { id: 1, text: "Learn React" },
  { id: 2, text: "Build a website" },
];

const todos2 = [
  { id: 1, text: "Learn Vue" },
  { id: 2, text: "Build an app" },
];

function App() {
  return (
    <div className="app">
      <TodoList todos={todos1} />
      <TodoList todos={todos2} />
    </div>
  );
}
```

Ini tidak akan menyebabkan masalah karena setiap komponen TodoList memiliki array saudara kandung yang berbeda. Namun, jika kita memiliki array todos yang sama untuk kedua komponen TodoList, kita harus menggunakan key yang berbeda untuk setiap komponen TodoList:

```jsx
const todos = [
  { id: 1, text: "Learn React" },
  { id: 2, text: "Build a website" },
];

function App() {
  return (
    <div className="app">
      <TodoList key="list1" todos={todos} />
      <TodoList key="list2" todos={todos} />
    </div>
  );
}
```

Key Harus Stabil
Key harus stabil, artinya mereka tidak boleh berubah seiring waktu atau antara render ulang. Key yang stabil memungkinkan React untuk melacak item daftar dengan benar dan menghindari bug atau masalah kinerja.

Key yang tidak stabil bisa disebabkan oleh beberapa hal, seperti:

- Menggunakan indeks array sebagai key. Indeks array bisa berubah ketika item ditambahkan, dihapus, atau diurutkan ulang dalam array. Ini bisa menyebabkan React mengacaukan urutan elemen atau memperbarui elemen yang salah.
- Menggunakan nilai acak atau tanggal sebagai key. Nilai acak atau tanggal bisa berubah setiap kali komponen dirender ulang. Ini bisa menyebabkan React membuat elemen DOM baru atau menghapus elemen DOM lama secara tidak perlu.
- Menggunakan nilai yang berasal dari props atau state sebagai key. Nilai yang berasal dari props atau state bisa berubah karena aksi pengguna atau pembaruan data. Ini bisa menyebabkan React kehilangan jejak item daftar atau menimbulkan konflik dengan key lain.

Key yang stabil biasanya berasal dari data asli yang digunakan untuk membuat daftar, seperti ID unik atau slug. Jika data asli tidak memiliki nilai unik dan stabil, kita harus membuatnya sendiri dan menyimpannya di tempat yang aman, seperti database atau penyimpanan lokal.

## REACT REFS

React Refs adalah cara untuk mengakses node DOM atau elemen React yang dibuat di dalam metode render. Dalam alur data React yang biasa, props adalah satu-satunya cara yang digunakan komponen induk untuk berinteraksi dengan anak-anaknya. Untuk memodifikasi anak, Anda me-render ulang dengan props baru. Namun, ada beberapa kasus di mana Anda perlu memodifikasi anak secara imperatif di luar alur data biasa. Anak yang akan dimodifikasi bisa berupa instance dari komponen React, atau bisa berupa elemen DOM. Untuk kedua kasus ini, React menyediakan jalan keluar.

Kapan Menggunakan Refs
Ada beberapa kasus penggunaan yang baik untuk refs:

- Mengelola fokus, pemilihan teks, atau pemutaran media.
- Memicu animasi imperatif.
- Mengintegrasikan dengan pustaka DOM pihak ketiga.

Hindari menggunakan refs untuk hal apa pun yang bisa dilakukan secara deklaratif. Misalnya, alih-alih mengekspos metode open() dan close() pada komponen Dialog, lewatkan prop isOpen kepadanya.

Jangan Terlalu Sering Menggunakan Refs
Kecenderungan pertama Anda mungkin adalah menggunakan refs untuk "membuat sesuatu terjadi" di aplikasi Anda. Jika ini kasusnya, luangkan waktu sejenak dan pikirkan lebih kritis tentang di mana state harus dimiliki dalam hirarki komponen. Seringkali, menjadi jelas bahwa tempat yang tepat untuk "memiliki" state tersebut adalah di level yang lebih tinggi dalam hirarki. Lihat panduan Lifting State Up untuk contoh-contohnya.

Membuat Refs
Refs dibuat menggunakan React.createRef() dan dilampirkan ke elemen React melalui atribut ref. Refs biasanya ditetapkan ke properti instance ketika sebuah komponen dibuat sehingga mereka bisa dirujuk di seluruh komponen.

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return <div ref={this.myRef} />;
  }
}
```

Mengakses Refs
Ketika sebuah ref dilewatkan ke sebuah elemen dalam render, sebuah referensi ke node menjadi dapat diakses di atribut current dari ref.

```jsx
const node = this.myRef.current;
```

Nilai dari ref berbeda tergantung pada jenis node:

- Ketika atribut ref digunakan pada elemen HTML, ref yang dibuat di konstruktor dengan React.createRef() menerima elemen DOM dasar sebagai properti current-nya.
- Ketika atribut ref digunakan pada komponen kelas kustom, objek ref menerima instance terpasang dari komponen sebagai current-nya.
- Anda tidak boleh menggunakan atribut ref pada komponen fungsi karena mereka tidak memiliki instance.

Menambahkan Ref ke Elemen DOM
Kode ini menggunakan ref untuk menyimpan referensi ke node DOM:

```jsx
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    // membuat sebuah ref untuk menyimpan elemen textInput DOM
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    // Secara eksplisit fokus teks input menggunakan API DOM asli
    // Catatan: kita mengakses "current" untuk mendapatkan node DOM
    this.textInput.current.focus();
  }

  render() {
    // memberitahu React bahwa kita ingin mengasosiasikan ref
    // yang dibuat dengan elemen <input> yang kita render.
    return (
      <div>
        <input type="text" ref={this.textInput} />
        <input type="button" value="Focus the text input" onClick={this.focusTextInput} />
      </div>
    );
  }
}
```

React akan menetapkan elemen DOM asli ke properti current dari ref saat melewatkan elemen tersebut ke callback ref.

Menambahkan Ref ke Komponen Kelas
Jika kita ingin membungkus elemen HTML bawaan untuk menyesuaikan perilaku, maka kita harus meneruskan semua prop ke elemen bawaan yang kita render.

```jsx
function CustomTextInput(props) {
  // textInput harus dideklarasikan di sini sehingga ref bisa merujuk kepadanya
  const textInput = useRef(null);

  function handleClick() {
    textInput.current.focus();
  }

  return (
    <div>
      <input type="text" ref={textInput} />
      <input type="button" value="Focus the text input" onClick={handleClick} />
    </div>
  );
}
```

Namun, kita juga bisa menggunakan ref untuk mengakses instance komponen kelas kustom. Jika kita memiliki komponen kelas kustom Parent yang me-render komponen kelas kustom Child, kita bisa menggunakan ref untuk mendapatkan instance Child:

```jsx
class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.childRef = React.createRef();
  }

  componentDidMount() {
    // kita bisa mengakses instance Child melalui childRef
    console.log(this.childRef.current);
  }

  render() {
    return <Child ref={this.childRef} />;
  }
}

class Child extends React.Component {
  render() {
    return <div>Hi, I'm a child!</div>;
  }
}
```

Dengan cara ini, kita bisa memanggil metode atau mengakses properti dari instance Child melalui childRef.current. Misalnya, jika Child memiliki metode bernama greet(), kita bisa memanggilnya dari Parent seperti ini:

```jsx
this.childRef.current.greet();
```

Ini berguna ketika kita ingin memanggil metode imperatif atau mengakses nilai yang tidak digunakan untuk rendering pada komponen anak.

Refs dan Komponen Fungsi
Secara default, Anda tidak dapat menggunakan ref pada komponen fungsi karena mereka tidak memiliki instance. Namun, Anda dapat menggunakan ref dalam komponen fungsi dengan salah satu dari dua cara berikut:

- Menggunakan React.forwardRef (lihat di bawah)
- Menggunakan hook useRef di dalam komponen fungsi

Menggunakan React.forwardRef
React.forwardRef adalah fitur React yang memungkinkan Anda meneruskan ref ke komponen anak. Ini berguna ketika Anda membuat komponen tingkat tinggi (HOC) yang membungkus komponen lain.

Misalnya, kita memiliki komponen FancyButton yang merupakan HOC yang membungkus elemen button asli. Kita ingin menggunakan ref untuk mengakses node DOM button dari komponen induk.

Untuk melakukan ini, kita perlu meneruskan ref dari komponen induk ke elemen button di dalam FancyButton. Kita bisa menggunakan React.forwardRef untuk membantu kita dengan hal ini:

```jsx
// Membuat sebuah ref untuk menyimpan node DOM button
const ref = React.createRef();

// Membuat sebuah komponen FancyButton yang meneruskan ref ke elemen button
const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

// Kita sekarang bisa mendapatkan referensi langsung ke node DOM button:
<FancyButton ref={ref}>Click me!</FancyButton>;
```

React.forwardRef menerima sebuah fungsi sebagai parameter. Fungsi ini menerima dua argumen: props dan ref. Fungsi ini harus mengembalikan sebuah elemen React.

Dengan cara ini, kita bisa melewatkan ref dari komponen induk ke elemen anak melalui props. Ref akan menjadi parameter kedua dari fungsi yang dilewatkan ke React.forwardRef.

Menggunakan Hook useRef
Hook useRef adalah cara lain untuk menggunakan ref di dalam komponen fungsi. Hook useRef mengembalikan sebuah objek yang memiliki properti current yang dapat diubah dan ditetapkan ke node DOM atau elemen React.

Misalnya, kita memiliki komponen TextInputWithFocusButton yang menampilkan sebuah input teks dan sebuah tombol. Kita ingin fokus input teks ketika pengguna mengeklik tombol.

Untuk melakukan ini, kita bisa menggunakan hook useRef untuk membuat sebuah ref dan melewatkan ke elemen input. Kemudian kita bisa memanggil metode focus pada current dari ref ketika pengguna mengeklik tombol.

```jsx
import { useRef } from "react";

function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` menunjuk ke elemen input yang dipasangkan
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```

## REACT FRAGMENTS

React Fragments adalah fitur React yang memungkinkan Anda mengelompokkan daftar anak tanpa menambahkan node tambahan ke DOM. Fragments membiarkan Anda mengembalikan beberapa elemen dari sebuah komponen.

```jsx
render() {
  return (
    <React.Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </React.Fragment>
  );
}
```

Ada juga sintaks pendek baru untuk mendeklarasikan mereka. Seperti tag kosong:

```jsx
render() {
  return (
    <>
      <ChildA />
      <ChildB />
      <ChildC />
    </>
  );
}
```

Anda bisa menggunakan <></> dengan cara yang sama seperti Anda menggunakan elemen lain kecuali bahwa itu tidak mendukung key atau atribut.

Motivasi
Pola umum adalah untuk sebuah komponen mengembalikan daftar anak. Ambil contoh potongan React berikut:

```jsx
class Table extends React.Component {
  render() {
    return (
      <table>
        <tr>
          <Columns />
        </tr>
      </table>
    );
  }
}
```

<Columns /> perlu mengembalikan beberapa elemen <td> agar HTML yang dihasilkan valid. Jika div induk digunakan di dalam render() dari <Columns />, maka HTML yang dihasilkan akan tidak valid.

```jsx
class Columns extends React.Component {
  render() {
    return (
      <div>
        <td>Hello</td>
        <td>World</td>
      </div>
    );
  }
}
```

Hasil dalam output <Table /> dari:

```html
<table>
  <tr>
    <div>
      <td>Hello</td>
      <td>World</td>
    </div>
  </tr>
</table>
```

Fragments menyelesaikan masalah ini.

Penggunaan
```jsx
class Columns extends React.Component {
  render() {
    return (
      <React.Fragment>
        <td>Hello</td>
        <td>World</td>
      </React.Fragment>
    );
  }
}
```

Hasil dalam output <Table /> yang benar dari:

```html
<table>
  <tr>
    <td>Hello</td>
    <td>World</td>
  </tr>
</table>
```

Sintaks Pendek
Ada sintaks baru, lebih pendek yang bisa Anda gunakan untuk mendeklarasikan fragmen. Seperti tag kosong:

```jsx
class Columns extends React.Component {
  render() {
    return (
      <>
        <td>Hello</td>
        <td>World</td>
      </>
    );
  }
}
```

Anda bisa menggunakan <></> dengan cara yang sama seperti Anda menggunakan elemen lain kecuali bahwa itu tidak mendukung key atau atribut.

Fragments dengan Key
Fragments yang dideklarasikan dengan sintaks eksplisit <React.Fragment> bisa memiliki key. Kasus penggunaan untuk ini adalah memetakan koleksi ke array fragmen - misalnya, untuk membuat daftar deskripsi:

```jsx
function Glossary(props) {
  return (
    <dl>
      {props.items.map((item) => (
        // Tanpa `key`, React akan memberi peringatan key
        <React.Fragment key={item.id}>
          <dt>{item.term}</dt>
          <dd>{item.description}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
}
```

key adalah satu-satunya atribut yang bisa dilewatkan ke Fragment. Di masa depan, kita mungkin menambahkan dukungan untuk atribut tambahan, seperti event handler.

## REACT ROUTER

React Router adalah solusi routing yang populer dan lengkap untuk aplikasi React. React Router memungkinkan Anda membuat navigasi berbasis URL di aplikasi Anda dengan menggunakan komponen, hook, dan fungsi bantuan yang sudah dikembangkan sebelumnya. React Router menawarkan dua paket terpisah untuk mengimplementasikan routing di proyek React Web dan React Native.

- react-router-dom: Paket ini menyediakan komponen dan hook untuk routing berbasis web. Ini bergantung pada paket react-router inti dan menambahkan fitur spesifik web seperti browser history, link, dan navigasi.
- react-router-native: Paket ini menyediakan komponen dan hook untuk routing berbasis native. Ini juga bergantung pada paket react-router inti dan menambahkan fitur spesifik native seperti deep linking, back button, dan modal.

Untuk menggunakan React Router di aplikasi Anda, Anda perlu menginstal paket yang sesuai dengan jenis proyek Anda. Misalnya, jika Anda membuat aplikasi web dengan React, Anda perlu menginstal paket react-router-dom:

```bash
npm install react-router-dom
```

Atau jika Anda menggunakan yarn:

```bash
yarn add react-router-dom
```

Jika Anda membuat aplikasi native dengan React Native, Anda perlu menginstal paket react-router-native:

```bash
npm install react-router-native
```

Atau jika Anda menggunakan yarn:

```bash
yarn add react-router-native
```

Penggunaan Dasar
Untuk menggunakan React Router di aplikasi web Anda, Anda perlu mengimpor komponen dan hook dari paket react-router-dom. Komponen dan hook yang paling umum digunakan adalah:

- BrowserRouter: Komponen ini membungkus aplikasi Anda dan menyediakan akses ke history API browser. Ini harus ditempatkan di sekitar elemen root dari aplikasi Anda.
- Routes: Komponen ini mendefinisikan koleksi rute yang bisa dicocokkan dengan URL saat ini. Ini harus menjadi anak langsung dari BrowserRouter atau komponen router lainnya.
- Route: Komponen ini mewakili sebuah rute yang bisa dirender berdasarkan path yang cocok dengan URL saat ini. Ini harus menjadi anak langsung dari Routes atau Route lainnya.
- Link: Komponen ini membuat sebuah tautan navigasi yang bisa mengubah URL saat ini tanpa me-refresh halaman. Ini harus digunakan sebagai ganti elemen <a> biasa untuk tautan internal.
- Outlet: Komponen ini menampilkan elemen yang cocok dengan rute anak dari rute saat ini. Ini berguna untuk membuat layout bersarang atau rute bertingkat.
- useNavigate: Hook ini mengembalikan sebuah fungsi yang bisa digunakan untuk melakukan navigasi programatik ke URL lain. Ini berguna untuk menangani event seperti klik tombol atau submit form.
- useLocation: Hook ini mengembalikan sebuah objek yang merepresentasikan lokasi saat ini. Objek ini memiliki properti seperti pathname, search, hash, dan state yang bisa digunakan untuk mendapatkan informasi tentang URL saat ini.
- useParams: Hook ini mengembalikan sebuah objek yang berisi parameter rute dinamis dari rute saat ini. Parameter rute dinamis adalah bagian dari path yang diawali dengan titik dua (:), seperti /users/:id.

Contoh penggunaan beberapa komponen dan hook di atas adalah sebagai berikut:

```jsx
// Mengimpor komponen dan hook dari react-router-dom
import { BrowserRouter, Routes, Route, Link, Outlet, useNavigate, useLocation, useParams } from "react-router-dom";

// Membuat beberapa komponen halaman sederhana
function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Users() {
  // Menggunakan Outlet untuk menampilkan rute anak
  return (
    <div>
      <h1>Users Page</h1>
      <Outlet />
    </div>
  );
}

function User() {
  // Menggunakan useParams untuk mendapatkan parameter rute dinamis
  const { id } = useParams();
  return <h2>User ID: {id}</h2>;
}

function Contact() {
  // Menggunakan useNavigate untuk melakukan navigasi programatik
  const navigate = useNavigate();
  const handleSubmit = () => {
    // Navigasi ke halaman home setelah submit form
    navigate("/");
  };
  return (
    <div>
      <h1>Contact Page</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

function NotFound() {
  // Menggunakan useLocation untuk mendapatkan lokasi saat ini
  const location = useLocation();
  return <h1>Page not found: {location.pathname}</h1>;
}

// Membuat komponen aplikasi utama
function App() {
  return (
    // Menggunakan BrowserRouter untuk membungkus aplikasi
    <BrowserRouter>
      // Menggunakan Routes untuk mendefinisikan koleksi rute
      <Routes>
        // Menggunakan Route untuk mewakili setiap rute
        // Prop path menentukan pola URL yang harus dicocokkan
        // Prop element menentukan elemen yang harus dirender
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        // Menggunakan Route bertingkat untuk membuat rute bersarang
        <Route path="/users" element={<Users />}>
          // Rute anak akan menambahkan path ke rute induk
          // Misalnya, /users/:id akan cocok dengan /users/123
          <Route path=":id" element={<User />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        // Menggunakan * sebagai catch-all untuk rute yang tidak didefinisikan
        <Route path="*" element={<NotFound />} />
      </Routes>
      // Menggunakan Link untuk membuat tautan navigasi
      // Prop to menentukan URL tujuan
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </BrowserRouter>
  );
}
```

Dengan kode di atas, kita bisa membuat aplikasi web sederhana dengan beberapa halaman yang bisa diakses melalui URL atau tautan. Kita juga bisa menangani kasus seperti rute tidak ditemukan, rute dinamis, dan navigasi programatik dengan React Router.

## REACT CSS

React CSS adalah cara untuk menerapkan gaya pada komponen React dengan menggunakan CSS. Ada banyak cara untuk melakukan ini, tetapi tutorial ini akan melihat lebih dekat pada dua metode yang paling umum: inline styling dan CSS stylesheet.

Inline Styling
Untuk memberi gaya pada elemen dengan atribut style inline, nilainya harus berupa objek JavaScript:

```jsx
class MyHeader extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{ color: "red" }}>Hello Style!</h1>
        <p>Add a little style!</p>
      </div>
    );
  }
}
```

Catatan: Dalam JSX, ekspresi JavaScript ditulis di dalam kurung kurawal, dan karena objek JavaScript juga menggunakan kurung kurawal, gaya dalam contoh di atas ditulis di dalam dua set kurung kurawal {{}}.

Properti CSS dengan Camel Case
Karena CSS inline ditulis dalam objek JavaScript, properti dengan dua nama, seperti background-color, harus ditulis dengan sintaks camel case:

```jsx
class MyHeader extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{ backgroundColor: "lightblue" }}>Hello Style!</h1>
        <p>Add a little style!</p>
      </div>
    );
  }
}
```

Objek JavaScript
Anda juga bisa membuat objek dengan informasi gaya, dan merujuknya dalam atribut style:

```jsx
class MyHeader extends React.Component {
  render() {
    const mystyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial",
    };
    return (
      <div>
        <h1 style={mystyle}>Hello Style!</h1>
        <p>Add a little style!</p>
      </div>
    );
  }
}
```

CSS Stylesheet
Anda bisa menulis CSS Anda dalam file terpisah, cukup simpan file dengan ekstensi file .css, dan impor di aplikasi Anda.

App.css:
Buat file baru bernama "App.css" dan masukkan beberapa kode CSS di dalamnya:

```css
body {
  background-color: #282c34;
  color: white;
  padding: 40px;
  font-family: Arial;
  text-align: center;
}
```

Catatan: Anda bisa menyebut file apa pun yang Anda suka, asalkan ingat ekstensi file yang benar.

Impor stylesheet di aplikasi Anda:

index.js:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

class MyHeader extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello Style!</h1>
        <p>Add a little style!.</p>
      </div>
    );
  }
}

ReactDOM.render(<MyHeader />, document.getElementById("root"));
```

CSS Modules
Cara lain untuk menambahkan gaya ke aplikasi Anda adalah menggunakan CSS Modules. CSS Modules nyaman untuk komponen yang ditempatkan di file terpisah. CSS di dalam modul hanya tersedia untuk komponen yang mengimpornya, dan Anda tidak perlu khawatir tentang konflik nama.

Buat modul CSS dengan ekstensi .module.css, misalnya: mystyle.module.css.

mystyle.module.css:
Buat file baru bernama "mystyle.module.css" dan masukkan beberapa kode CSS di dalamnya:

```css
.bigblue {
  color: DodgerBlue;
  padding: 40px;
  font-family: Arial;
  text-align: center;
}
```

Impor stylesheet di komponen Anda:

App.js:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import styles from "./mystyle.module.css";

class Car extends React.Component {
  render() {
    return <h1 className={styles.bigblue}>Hello Car!</h1>;
  }
}

export default Car;
```

## REACT HOOKS

React Hooks adalah fitur yang ditambahkan ke React versi 16.8. Hooks memungkinkan Anda menggunakan fitur-fitur React seperti mengelola state dan melakukan efek samping tanpa menulis kelas. Dengan Hooks, Anda bisa membuat komponen fungsional yang lebih ringkas dan mudah dibaca.

Contoh penggunaan Hooks adalah useState dan useEffect. useState memungkinkan Anda mendeklarasikan variabel state yang bisa Anda perbarui secara langsung. useEffect memungkinkan Anda melakukan aksi setelah perubahan state tertentu terjadi.

Berikut adalah contoh kode yang menggunakan Hooks:

```jsx
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Counter() {
  const [count, setCount] = useState(0); // deklarasi variabel state count

  useEffect(() => {
    // melakukan efek samping setiap kali count berubah
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Counter />);
```

Selain menggunakan Hooks bawaan, Anda juga bisa membuat Hooks kustom sendiri. Hooks kustom berguna untuk menyimpan logika stateful yang perlu digunakan di beberapa komponen¹. Kami akan membahas lebih lanjut tentang Hooks kustom di bagian selanjutnya.

## REACT FLUX CONCEPT

React Flux Concept adalah pola arsitektur yang digunakan untuk mengelola aliran data searah dalam komponen React¹. Flux memberikan struktur yang jelas untuk memisahkan logika aplikasi dari lapisan presentasi sehingga kode tetap terorganisir dan lebih mudah dipelihara seiring waktu². Hal ini pada akhirnya berdampak pada kinerja dan skalabilitas aplikasi yang dibangun dengan Flux.

Flux memiliki tiga peran utama dalam menangani data: Dispatcher, Stores, dan Views (komponen React)². Aliran data dalam Flux adalah sebagai berikut:

- View adalah komponen React yang menampilkan UI. Ketika ada interaksi pengguna (seperti event), View akan memicu Action.
- Action adalah penanganan semua event yang dilewatkan oleh View. Lapisan ini biasanya digunakan untuk melakukan panggilan API. Setelah Action selesai, ia akan dikirimkan menggunakan Dispatcher. Action bisa berupa tambah post, hapus post, atau interaksi pengguna lainnya.
- Dispatcher adalah pusat utama dan pendaftaran tunggal. Ia mengirimkan payload dari Action ke Store. Ia juga memastikan bahwa tidak ada efek berantai ketika sebuah Action dikirimkan ke Store.
- Store adalah tempat menyimpan state dan logika aplikasi. Store akan memperbarui dirinya sendiri sebagai respons terhadap sebuah Action. Store juga akan memberitahu View bahwa ada perubahan yang terjadi, sehingga View bisa me-render ulang UI.

Berikut adalah contoh kode yang menggunakan Flux:

```jsx
// File: App.js
import React from "react";
import { render } from "react-dom";
import { Container } from "flux/utils";
import TodoStore from "./data/TodoStore";
import TodoActions from "./data/TodoActions";
import TodoList from "./components/TodoList";

class App extends React.Component {
  static getStores() {
    return [TodoStore];
  }

  static calculateState(prevState) {
    return {
      todos: TodoStore.getState(),
      onAddTodo: TodoActions.addTodo,
      onDeleteTodo: TodoActions.deleteTodo,
    };
  }

  render() {
    return <TodoList {...this.state} />;
  }
}

const app = Container.create(App);

render(<app />, document.getElementById("root"));
```

```jsx
// File: TodoList.js
import React from "react";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.value.trim()) {
      this.props.onAddTodo(this.state.value);
      this.setState({ value: "" });
    }
  }

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <ul>
          {this.props.todos.map((todo) => (
            <li key={todo.id}>
              {todo.text}
              <button onClick={() => this.props.onDeleteTodo(todo.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
```

```jsx
// File: TodoActions.js
import AppDispatcher from "./AppDispatcher";

const TodoActions = {
  addTodo: function (text) {
    AppDispatcher.dispatch({
      actionType: "ADD_TODO",
      text: text,
    });
  },

  deleteTodo: function (id) {
    AppDispatcher.dispatch({
      actionType: "DELETE_TODO",
      id: id,
    });
  },
};

export default TodoActions;
```

```jsx
// File: AppDispatcher.js
import { Dispatcher } from "flux";

export default new Dispatcher();
```

```jsx
// File: TodoStore.js
import Immutable from "immutable";
import { ReduceStore } from "flux/utils";
import AppDispatcher from "./AppDispatcher";

class TodoStore extends ReduceStore {
  constructor() {
    super(AppDispatcher);
  }

  getInitialState() {
    return Immutable.OrderedMap();
  }

  reduce(state, action) {
    switch (action.actionType) {
      case "ADD_TODO":
        // Don't add todos with no text.
        if (!action.text) {
          return state;
        }
        const id = Date.now().toString();
        return state.set(id, {
          id,
          text: action.text,
        });

      case "DELETE_TODO":
        return state.delete(action.id);

      default:
        return state;
    }
  }
}

export default new TodoStore();
```


