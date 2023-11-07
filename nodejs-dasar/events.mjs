// Events adalah standart library di node js yang bisa digunakan sebagai implementasi dari Event Listener
// Di dalam events, terdapat sebuah class bernama event emmiter yang bisa digunakan untuk menampung data listener per jenis event
// Lalu kita bisa melakukan emmit untuk mentrigger jenis event dan mengirim data ke event tersebut

import {EventEmitter} from 'events'

const emitter = new EventEmitter();

emitter.addListener('hello', (name)=>{
  console.log(`Hello ${name}`) // dia akan berjalan jika emitternya sama
})

emitter.addListener('hello', (name)=>{
  console.log(`Gas ${name}`) // dia akan berjalan jika emitternya sama
})

emitter.emit('hello','eko') 