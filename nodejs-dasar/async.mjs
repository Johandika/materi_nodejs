// secara default ketika kita menggunakan Javascript module maka  kode kita akan menjadi global async
// cara membbuat menjadi JS module dengan menambahkan "type": "module" di package.json

//KODE 1 , kode ini akan jalan di JS module tetapi tidak di commonjs karena dengan menggunakan module maka async akan diterapkan secara global seacar otomatis, gunakan .mjs untuk file js module
function samplePromise(){
  return Promise.resolve('Eko')
}

const nama = await samplePromise()
console.log(nama)

//KODE 2 , kode ini akan jalan tetapi perlu di bungkus dengan function. Karena pada common js module tidak di terapkan secara global, 
// function samplePromise2(){
//   return Promise.resolve('Eko')
// }

// async function run(){
//   const nama = await samplePromise2();
//   console.log(nama)
// }

// run()