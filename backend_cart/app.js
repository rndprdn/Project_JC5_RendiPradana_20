const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyparser = require('body-parser');
const upload = require('express-fileupload');
const crypto = require('crypto');
const app = express();
const port = 8000;
const secret = 'maqlo';

app.use('/tampunganGambar', express.static('tampunganGambar'));
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
    var updateFotoProduk = req.body.fotoproduk;
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
    var gambarProduk = req.files.gambarproduk.name;

    // console.log(gambarProduk);
    // console.log(hargaProduk)
    // console.log(category)
    // console.log(desk)

    if(namaProduk !== '' && hargaProduk !== '' && category !== '' && desk !== '' && size !== '' && qty !== '' && gambarProduk !== ''){
      var tampungGambar = req.files.gambarproduk;
      tampungGambar.mv('./tampunganGambar/' + gambarProduk, (err) => {
        if(err){
          console.log('Upload gagal!');
        } else{
          console.log('Upload berhasil!');

          var sql = `INSERT INTO produk (nama_produk, harga, foto_produk, category_id, deskripsi, size, qty) 
                     VALUES ("${namaProduk}", "${hargaProduk}", "${gambarProduk}", "${category}", "${desk}", "${size}", "${qty}")`;
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

app.post('/loginadmin', (req, res) => {
  var username = req.body.inputUsername;
  var password = req.body.inputPassword;

  var sql = `SELECT * FROM admin`;
  db.query(sql, (err, result) => {
    if(err){
      throw err;
    } else{
      for(var i=0; i<result.length; i++){
        if(username === result[i].username && password === result[i].password){
          console.log('login berhasil');
          var userId = result[i].id
          // console.log(userId);  
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

// USER BACKEND

app.post('/createaccount', (req, res) => {
  var namaDepan = req.body.namadepan;
  var namaBelakang = req.body.namabelakang;
  var username = req.body.username;
  var email = req.body.email;
  var password = req.body.password;

  var passwordUser = password;
  var passwordEncrypt = crypto.createHash('sha256', secret).update(passwordUser).digest('hex');

  var sql = `INSERT INTO newusers (nama_depan, nama_belakang, username,	email, password) VALUES ("${namaDepan}", "${namaBelakang}", "${username}", "${email}", "${passwordEncrypt}")`;
  db.query(sql, (err, result) => {
    if(err){
      throw err;
    } else{
      console.log(result);
    }
  })
})

app.post('/loginuser', (req, res) => {
  var username = req.body.username;
  var password = req.body.password;

  var passwordUser = password;
  var passwordEncrypt = crypto.createHash('sha256', secret).update(passwordUser).digest('hex');

  var sql = 'SELECT * FROM newusers';
  db.query(sql, (err, result) => {
    if(err){
      throw err;
    } else{
      for(var i=0; i<result.length; i++){
        if(username === result[i].username && passwordEncrypt === result[i].password){
          console.log('Login berhasil');
          var userId = result[i].id;
          res.send((userId).toString());
        } else if(i === result.length - 1){
          console.log('Login gagal');
        }
      }
    }
  })
})

app.post('/profileuser', (req, res) => {
  var userId = req.body.idUser;

  var sql = `SELECT * FROM newusers WHERE id = "${userId}"`;
  db.query(sql, (err, result) => {
    if(err){
      throw err;
    } else{
      res.send(result);
    }
  })
})

// menarik category id untuk memfilter di product list
app.get('/categoryfilter', (req, res) => {
  var sql = 'SELECT * FROM category_produk';
  db.query(sql, (err, result) => {
    if(err){
      throw err;
    } else{
      res.send(result);
    }
  })
})

// mengirim id category dari frontEnd ke backEnd untuk menarik produk sesuai id yang di kirim untuk memfilter produk
app.post('/produkfilter', (req, res) => {
  var categoryid = req.body.categoryId;

  console.log(categoryid);
  if(categoryid === 6){
    var sql = `SELECT * FROM produk`;
    db.query(sql, (err,  result) => {
      if(err){
        throw err;
      } else{
        res.send(result);
      }
    })
  } else{
    var sql = `SELECT * FROM produk WHERE category_id = "${categoryid}"`;
    db.query(sql, (err,  result) => {
      if(err){
        throw err;
      } else{
        res.send(result);
      }
    })
  }
})

app.get('/allproduk', (req, res) => {
  var sql = `SELECT * FROM produk`;
  db.query(sql, (err,  result) => {
    if(err){
      throw err;
    } else{
      res.send(result);
    }
  })
})

app.get('/bestproduct', (req, res) => {
  var sql = 'SELECT * FROM produk WHERE category_id=1 LIMIT 1;'
  sql += 'SELECT * FROM produk WHERE category_id=2 LIMIT 1;'
  sql += 'SELECT * FROM produk WHERE category_id=3 LIMIT 1;'
  sql += 'SELECT * FROM produk WHERE category_id=4 LIMIT 1;'
  db.query(sql, (err,  result) => {
    if(err){
      throw err;
    } else{
      res.send(result);
    }
  })
})

app.post('/productdetail', (req, res) => {
  var idproduk = req.body.idproduk;

  var sql = `SELECT produk.id, nama_produk, harga, foto_produk, deskripsi, size_chart.size, qty FROM produk JOIN category_produk ON produk.category_id=category_produk.id JOIN size_chart ON produk.size = size_chart.id WHERE produk.id = "${idproduk}"`;
  db.query(sql, (err, result) => {
    if(err){
      throw err;
    } else{
      res.send(result);
    }
  })
})

app.post('/cart', (req, res) => {
  var idproduk = req.body.idproduk;
  var userid  = req.body.userID;

  var sql = `SELECT * FROM produk WHERE id="${idproduk}"`;
  db.query(sql, (err, result) => {
    if(err){
      throw err;
    } else{
      var userID = userid;
      var produkid = idproduk;
      var namaproduk = result[0].nama_produk;
      var fotoproduk = result[0].foto_produk;
      var desk = result[0].deskripsi;
      var harga = result[0].harga;
      var size = result[0].size;

      var sql2 = `INSERT INTO cart (id_user, product_id, nama_produk, foto_produk, desk, harga, size) VALUES ("${userID}", "${produkid}", "${namaproduk}", "${fotoproduk}", "${desk}", "${harga}", "${size}")`;
      db.query(sql2, (err, result) => {
        if(err){
          throw err;
        } else{
          res.send('1');
        }
      })
    }
  })
})

// get data cart untuk ditampilkan di component cart sesuai id user yg sedang login saat itu
app.post('/datacart', (req, res) => {
  var iduser = req.body.id;

  var sql = `SELECT cart.id, id_user, product_id, nama_produk, foto_produk, desk, harga, size_chart.size, qty FROM cart JOIN size_chart ON cart.size = size_chart.id WHERE id_user="${iduser}" AND status="0";`
  sql += `SELECT id, harga*qty AS "subTotalPrice" FROM cart WHERE id_user="${iduser}" AND status="0"`
  db.query(sql, (err, result) => {
    if(err){
      throw err;
    } else{
      res.send(result);
    }
  })
})

// menghitung jumlah cart menggunakan query count
app.post('/jumlahcart', (req, res) => {
  var userid = req.body.userID;

  var sql = `SELECT count(*) AS jumlah FROM cart WHERE id_user="${userid}" AND status="0"`;
  db.query(sql, (err, result) => {
    if(err){
      throw err
    } else{
      res.send(result);
    }
  })
})

// untuk mengupdate item cart
app.post('/updatecart', (req, res) => {
  var userID = req.body.userID;
  var newQty = req.body.newQty;
  var cartID = req.body.cartID;

  var updateCart = `UPDATE cart SET qty="${newQty}" WHERE id="${cartID}"`;
  db.query(updateCart, (err, result) => {
    if(err){
      throw err;
    } else{
      var reTake = `SELECT * FROM cart WHERE id_user="${userID}";` // retake the cart list
      reTake += `SELECT id, harga*qty AS "subTotalPrice" FROM cart WHERE id_user="${userID}" AND status="0"`
      db.query(reTake, (err, result) => {
        if(err){
          throw err;
        } else{
          res.send(result);
        }
      })
    }
  })
})

// untuk menghapus item di cart
app.post('/deletecart', (req, res) => {
  userid = req.body.iduser;
  idcart = req.body.idcart;

  var sql = `DELETE FROM cart WHERE id_user="${userid}" AND id="${idcart}"`;
  db.query(sql, (err, result) => {
    if(err){
      throw err;
    } else{
      res.send(result);
    }
  })
})

// get data untuk ditampilkan di checkout
app.post('/cartCO', (req, res) => {
  var iduser = req.body.iduser;

  var sql = `SELECT id, nama_produk, foto_produk, qty, harga FROM cart WHERE id_user="${iduser}" AND status="0";`
  sql += `SELECT harga*qty AS "subTotalPrice" FROM cart WHERE id_user="${iduser}" AND status="0";`
  sql += 'SELECT * FROM payment_method;'
  sql += 'SELECT * FROM delivery_method';
  db.query(sql, (err, result) => {
    if(err){
      throw err;
    } else{
      res.send(result);
    }
  })
})

app.post('/checkout', (req, res) => {
  var iduser = req.body.iduser;
  var namalengkap = req.body.namalengkap;
  var alamat = req.body.alamat;
  var kota = req.body.kota;
  var negara = req.body.negara;
  var kodepos = req.body.kodepos;
  var nohp = req.body.nohp;
  var email = req.body.email;
  var payment = req.body.payment;
  var delivery = req.body.delivery;
  var listcart = req.body.listcart;
  var count = 0;

  var takeorderID = 'SELECT kode_invoice FROM invoice';
  db.query(takeorderID, (err, result) => {
    // takeorderID query to see the latest invoice code, to generate new inv code
    if (err){
      throw err
    } else{
      var length = result.length;
      console.log(length)
      console.log(result)
      
      var lastINV = 0;
      (length === 0) ? lastINV = 0 : lastINV = parseInt(result[length-1].kode_invoice);
      var INV = lastINV + 1;
      var INVcode = '';
      
      if (INV < 10)  INVcode = INVcode + '0000' + INV
      else if (INV >= 10 && INV < 100) INVcode = INVcode + '000' + INV
      else if (INV >= 100 && INV < 1000) INVcode = INVcode + '00' + INV
      else if (INV >= 1000 && INV < 10000) INVcode = INVcode + '0' + INV
      else INVcode = INVcode + INV
      // generate Invoice Code
      console.log(INVcode)

      for(var i=0; i<listcart.length; i++){
        var namaproduk = listcart[i].nama_produk;
        var hargabarang = listcart[i].harga;
        var qty = listcart[i].qty;
        var subtotal = listcart[i].harga*listcart[i].qty;
    
        var sql = `INSERT INTO invoice (kode_invoice, user_id, nama_lengkap,	alamat,	kota,	negara,	kodepos, no_hp, email, payment, delivery, nama_produk, qty, harga_barang, subtotal) VALUES ("${INVcode}", "${iduser}" "${namalengkap}", "${alamat}", "${kota}", "${negara}", "${kodepos}", "${nohp}", "${email}", "${payment}", "${delivery}", "${namaproduk}", "${qty}", "${hargabarang}", "${subtotal}");`
        sql += `UPDATE cart SET status="1" WHERE id_user="${iduser}" AND status="0"`
        db.query(sql, (err, result) => {
          if(err){
            throw err;
          } else{
            count++
            if(count === listcart.length){
              res.send('1')
            }
          }
        })
      }
    }})
})

app.get('/jumlahdata', (req, res) => {
  var sql = 'SELECT COUNT(*) AS jumlah FROM invoice';
  db.query(sql, (err, result) => {
    if(err){
      throw err;
    } else{
      res.send(result);
    }
  })
})

app.get('/jumlahuser', (req, res) => {
  var sql = 'SELECT COUNT(*) AS jumlah FROM newusers';
  db.query(sql, (err, result) => {
    if(err){
      throw err;
    } else{
      res.send(result);
    }
  })
})

app.get('/profileadmin', (req, res) => {
  var sql = 'SELECT * FROM admin';
  db.query(sql, (err, result) => {
    if(err){
      throw err;
    } else{
      res.send(result);
    }
  })
})

app.post('/datainvoice', (req, res) => {
  var iduser = req.body.iduser;

  var sql = `SELECT * FROM invoice WHERE user_id="${iduser}"`;
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