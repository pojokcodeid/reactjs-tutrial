# ReactJS
![cover!](cover.jpg)
## DAFTAR ISI

- [Sejarah React](#SEJARAH-REACT)
- [Kenapa Memilih React](#KENAPA-MEMILIH-REACT)
- [Lifesicle React](#LIFECYCLE-RAEACT)
- [Memulai dengan CDN](#MEMULAI-REACT-DENGAN-CDN)
- [Memulai React dengan NodeJS](#MEMULAI-REACT-DENGAN-NODEJS)

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
