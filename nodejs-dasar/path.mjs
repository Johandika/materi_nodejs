// Path adalah standart library yang digunakan untuk bekerja dengan lokasi file dan directory/folder
import path from 'path'

const file = "/Users/johandika/contoh.html"

console.log(path.sep) // \
console.log(path.dirname(file)) // /Users/johandika
console.log(path.basename(file)) // contoh.html
console.log(path.extname(file)) // .html
console.log(path.parse(file)) // { root: '/', dir: '/Users/johandika', base: 'contoh.html', ext: '.html', name: 'contoh'}