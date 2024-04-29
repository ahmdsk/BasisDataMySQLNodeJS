// var, const, let

const nama = "Dwi Romadhan"
const usia = 17

const tugas = 85
const uts = 90
const uas = 90
const nilai = (tugas + uts + uas) / 3

// Obeject
const dataMahasiswa = {
    nama_mhs: nama,
    usia_mhs: usia,
    nilai_mhs: nilai
}

//Array            
const dataArray=[nama, usia, nilai]

const arrayObject = [
    {
        nama_mhs: nama,
        usia_mhs: usia,
        nilai_mhs: nilai
    },
    {
        nama_mhs: "Andre",
        usia_mhs: 20,
        nilai_mhs: 77
    }
]

console.log(arrayObject[1].nilai_mhs)