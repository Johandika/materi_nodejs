// debugger adalah standart library agar kita bisa mengikuti tahapan eksekusi program Node js
// breakpoint adalah lokasi dimana kita ingin menghentikan sementara eksekusi program, kata kuncinya : debugger;
// untuk menjalankannya kita perlu menuliskan kata kunci 'inspect', cth : node inspect debugger.mjs
// saat masuk mode debug beberapa perintah yg bisa digunakan : c: continue, n: step next, s: step in, o: step out , pause: pause running code, .exit: exit.
// kita bisa menginput watch('name') pada kode di bawah untuk fokus memperhatikan variabel name

function sayHello (name){
  debugger; // membuat breakpoint
  return `Hello ${name}`
}

const name = "Johan"
debugger; // membuat breakpoint

console.log(sayHello(name));

// untuk menjalankannya harus memasukkan inspect, cth : node inspect debugger.mjs