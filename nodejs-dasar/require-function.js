const os = require('os') // menggunakan function-require alih alih module, ubah type di config js dari module jadi commonjs

console.log(os.platform())
console.log(os.cpus())