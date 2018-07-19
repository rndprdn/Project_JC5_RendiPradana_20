const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyparser = require('body-parser');
const upload = require('express-fileupload');
const crypto = require('crypto');
const app = express();
const port = 8000;
const secret = 'maqlo';

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cors());  
app.use(upload());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mybrand',
    port: '3306'
});

db.connect();

app.get('/', (req, res) => {
    // req.body = menarik data yang ada pada sebuah wesite
    // req.params = menerima parameter url yang wajib di isi ('http://localhost:8000/menu/:params=1?/params=2')
    // req.query = menerima parameter url yang boleh di isi diantara keduanya ('http://localhost:8000/menu?params=1&params=2') <=  contoh menggunakan query string

    // res.end(nasi); = mengirimkan respon berupa string
    // res.render('file'); = menampilkan file yang dituju
    // res.json(); = menampilkan hasil berupa json
    // res.send(); = mengirim apa yg dipanggil di dalam send() berupa string maupun array

    var sql = 'SELECT * FROM produk';
    db.query(sql, (err, result) => {
        if(err) throw err;
        res.send(result);
    })
});

app.post('/editdata', (req, res) => {
    var updateNamaProduk = req.body.namaProduk;
    var updateHargaProduk = req.body.hargaProduk;
    var id = req.body.idProduk;

    var sql = `UPDATE produk SET nama_produk = "${updateNamaProduk}", harga = "${updateHargaProduk} WHERE id = "${id}"`;
    db.query(sql, (err, result) => {
        if(err) throw err;
        res.send('Data berhasil diubah...');
    })
})

app.get('/editdata/:id', (req, res) => {
    var sql = `SELECT * FROM produk WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if(err) throw err;
        res.send(result);
    })
})

app.post('/deletedata', (req, res) => {
    var produkID = req.body.idProduk;
    console.log(produkID);

    var sql = `DELETE FROM produk WHERE id = ${produkID}`;
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
    })
})

app.post('/form', (req, res) => {
    var namaProduk = req.body.dataSatu;
    var hargaProduk = req.body.dataDua;

    var sql = `INSERT INTO produk (nama_produk, harga) VALUES ("${namaProduk}", "${hargaProduk}")`;
    db.query(sql, (err, result) => {
        if(err) throw err;
        res.end('Data berhasil disimpan...');
    })
});

app.post('/login', (req, res) => {
    var username = req.body.inputUsername;
    var password = req.body.inputPassword;

    // var passwordUser = password;
    // var passwordEncrypt = crypto.createHash('sha256', secret).update(passwordUser).digest('hex');

    console.log(username);
    console.log(password);
    
    var sql = `SELECT * FROM newusers`;
    db.query(sql, (err, result) => {
        if(err){
            throw err;
        } else{
            for(var i=0; i<result.length; i++){
                if(username === result[i].Username && password === result[i].Password){
                    var status = 'Oke';
                    res.send(status);
                    console.log(status);
                    break;
                } else if(i === result.length - 1){
                    res.send('Gagal');
                }
            }
        }
    })
})

app.listen(port, (req, res) => {
    console.log(`Server tersambung pada port ${port}...`);
});