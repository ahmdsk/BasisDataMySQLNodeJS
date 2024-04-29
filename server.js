const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/data-mahasiswa', (req, res)=> {
    res.send('Nama : Budi <br> NIM : 123456789')
})

app.get('/nilai-mahasiswa', (req, res)=>{
    const nama = req.query.nama
    const npm = req.query.npm
    
    const nilai = req.query.nilai

    /**
     TUGAS
     1. tambahkan query (tugas, uts, uas)
     2. untuk nilai dihasilkan dari penjumlahan tugas, uts, uas
        rumus tugas + uts + uas / 3
     3. tampilkan nilai hasil dari penjumlahan tgs, uts, uas
     */

    res.send(`Nama : ${nama} <br> Npm : ${npm} <br> Nilai : ${nilai}`)
})

app.listen(5000)