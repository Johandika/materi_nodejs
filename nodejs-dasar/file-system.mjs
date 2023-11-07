// File System adalah standart library yang bisa digunakan untuk memanipulasi file system
// Tedapat 3 jenis library dalam file system : 
// 1. Library bersifat blocking(synchronous)
// 2. Library bersifat non-blocking(asynchronous) menggunakan callback
// 3. Library bersifat non-blocking(asynchronous) menggunakan promise => rekomendasi
import fs from 'fs/promises';

// salah satu contoh adalah fs untuk menulis text di file yang ditentukan
const buffer = fs.readFile('file-system.mjs') // contoh dengan promise
console.log(buffer.toString());
await fs.writeFile('tempt.txt','Hello world')