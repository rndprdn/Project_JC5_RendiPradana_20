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
    port: '3306',
    multipleStatements: true
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
        if(err){
          throw err;
        } else{
          res.send(result);
        }
    })
});

app.post('/editform', (req, res) => {
    var updateNamaProduk = req.body.namaProduk;
    var updateHargaProduk = req.body.hargaProduk;
    var updateQtyProduk = req.body.qty;
    var updateDescProduk = req.body.deskripsi;
    var id = req.body.idProduk;

    var sql = `UPDATE produk SET nama_produk = "${updateNamaProduk}", harga = "${updateHargaProduk}", qty = "${updateQtyProduk}", deskripsi = "${updateDescProduk}" WHERE id="${id}"`;
    db.query(sql, (err, result) => {
        if(err){
          throw err;
        } else{
          res.send('Data berhasil diubah...');
        }
    })
})

app.get('/editform/:id', (req, res) => {
    var sql = `SELECT * FROM produk WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if(err){
          throw err;
        } else{
          res.send(result);
        }
    })
})

app.post('/deletedata', (req, res) => {
    var produkID = req.body.idProduk;
    // console.log(produkID);

    var sql = `DELETE FROM produk WHERE id = ${produkID}`;
    db.query(sql, (err, result) => {
        if(err){
            throw err;
        } else{
            res.send(result);
        }
    })
})

app.post('/kirimdata', (req, res) => {
    var namaProduk = req.body.namaproduk;
    var hargaProduk = req.body.hargaproduk;
    var category = req.body.categoryid;
    var desk = req.body.deskripsi;
    var size = req.body.size;
    var qty = req.body.qty;
    var gambarProduk1 = req.files.gambarproduk1.name;
    var gambarProduk2 = req.files.gambarproduk2.name;

    console.log(gambarProduk1);
    // console.log(hargaProduk)
    // console.log(category)
    // console.log(desk)

    if(namaProduk !== '' && hargaProduk !== '' && category !== '' && desk !== '' && size !== '' && qty !== '' && gambarProduk1 !== '' && gambarProduk2 !== ''){
      var tampungGambar1 = req.files.gambarproduk1;
      var tampungGambar2 = req.files.gambarproduk2;
      tampungGambar1.mv('./tampunganGambar/' + gambarProduk1, (err) => {
        if(err){
          console.log('Upload gagal!');
        } else{
          console.log('Upload berhasil!');

          var sql = `INSERT INTO produk (nama_produk, harga, foto_produk, category_id, deskripsi, size, qty) 
                     VALUES ("${namaProduk}", "${hargaProduk}", "${gambarProduk1}", "${category}", "${desk}", "${size}", "${qty}")`;
          db.query(sql, (err, result) => {
            if(err){
              throw err;
            } else{
              res.send('1');
            }
          })
        }
      })
      tampungGambar2.mv('./tampunganGambar/' + gambarProduk2, (err) => {
        if(err){
          console.log('Upload gagal!');
        } else{
          console.log('Upload berhasil!');

          var sql = `INSERT INTO produk (foto_produk) 
                     VALUES ("${gambarProduk2}")`;
          db.query(sql, (err, result) => {
            if(err){
              throw err;
            } else{
              res.send('1');
            }
          })
        }
      })
    }
});

app.post('/login', (req, res) => {
  var username = req.body.inputUsername;
  var password = req.body.inputPassword;

  // var passwordUser = password;
  // var passwordEncrypt = crypto.createHash('sha256', secret).update(passwordUser).digest('hex');

  var sql = `SELECT * FROM admin`;
  db.query(sql, (err, result) => {
    if(err){
      throw err;
    } else{
      for(var i=0; i<result.length; i++){
        if(username === result[i].username && password === result[i].password){
          console.log('login berhasil');
          var userId = result[i].id
          console.log(userId);  
          res.send((userId).toString());
          break;
        } else if(i === result.length - 1){
          console.log('login gagal');
        }
      }
    }
  })
})

app.get('/formproduk', (req, res) => {
    var sql = 'SELECT * FROM category_produk;'
    sql +=  'SELECT * FROM size_chart'
    db.query(sql, (err, result) => {
        if(err){
            throw err;
        } else{
            // console.log(result);
            res.send(result);
        }
    })
})

app.post('/tambahcategory', (req, res) => {
  var category = req.body.addCategory;

  var sql = `INSERT INTO category_produk (category) VALUES ("${category}")`;
  db.query(sql, (err, result) => {
    if(err){
      throw err;
    } else{
      res.end('Data berhasil disimpan..');
    }
  })
})

app.post('/deletecategory', (req, res) => {
  var idCategory = req.body.idCategory;

  var sql = `DELETE FROM category_produk WHERE id = "${idCategory}"`;
  db.query(sql, (err, result) => {
    if(err){
      throw err;
    } else{
      res.send(result);
    }
  })
})

app.post('/tambahsize', (req, res) => {
  var size = req.body.addSize;

  var sql = `INSERT INTO size_chart (size) VALUES ("${size}")`;
  db.query(sql, (err, result) => {
    if(err){
      throw err;
    } else{
      res.end('Data berhasil disimpan..');
    }
  })
})

app.post('/deletesize', (req, res) => {
  var idSize = req.body.idSize;

  var sql = `DELETE FROM size_chart WHERE id = "${idSize}"`;
  db.query(sql, (err, result) => {
    if(err){
      throw err;
    } else{
      res.send(result);
    }
  })
})

app.listen(port, (req, res) => {
    console.log(`Server tersambung pada port ${port}...`);
});