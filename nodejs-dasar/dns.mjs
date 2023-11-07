// DNS adalah standart library yang bisa digunakan untuk bekerja dengan DNS(Domain Name Server)
// Ada 2 versi, callback dan promises(rekomendasi)
import dns from 'dns/promises'

const address = await dns.lookup('www.programmerzamannow.com')

console.log(address) // { address: '185.199.108.153', family: 4 }
console.log(address.address) // 185.199.108.153