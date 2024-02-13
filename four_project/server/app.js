const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const fs = require('fs');
const cors = require('cors');

let corsOption = {
    origin: 'http://localhost:8080',
    credentials: true
}

app.use(cors(corsOption))

app.use(session({
    secret: 'secret code',
    resave: false,
    saveUninitialized: false,
    cookie:{
        secure: false,
        maxAge: 1000 * 60 * 60
    }
}));

app.use(express.json({
    limit: '50mb'
}))

const server = app.listen(3000, () => {
    console.log('server started port 3000.');
});


const db = {
    database: "fourcolor",
    connectionLimit: 10,
    host: "192.168.0.141",
    user: "root",
    password: "mariadb"

};

let sql = require('./sql.js');

fs.watchFile(__dirname + '/sql.js',(curr,prev) => {
    console.log('sql 변경시 재시작 없이 반영되도록 함');
    delete require.cache[require.resolve('./sql.js')];
    sql = require('./sql.js');
});

const dbPool = require('mysql').createPool(db);

app.post('/api/login', async (request, res) => {
    const { email, password } = request.body;

    // 이메일과 비밀번호를 데이터베이스에서 확인
    const user = await req.db('adminEmail', [email]);

    if (user.length > 0 && user[0].password === password) {
        // 로그인 성공
        request.session.email = email;
        res.json({ success: true, message: '로그인 성공' });
    } else {
        // 로그인 실패
        res.json({ success: false, message: '아이디 또는 비밀번호가 잘못되었습니다.' });
    }
});
app.post('/api/logout', (requset, res)=>{
    request.session.destroy()
    res.json({success:true, message:'로그아웃 성공'})
})

// app.post('/api/login', async(request, res) => {
//     request.session['email'] = 'sy99639@naver.com';
//     res.send('로그인 성공');
// })
app.post('/api/logout', async(request, res) => {
    request.session.destroy();
    res.send('로그아웃 성공');
})
app.post('/apirole/:alias', async(request, res) => {
    if(!request.session.email){
        return res.status(401).send({
            error: 'you need to login'
        });
    }
    try{
        res.send(await req.db(request.params.alias, request.body.param))
    }catch(err){
        res.status(500).send({
            error: ReferenceError
        });
    }
});
app.post('/api/:alias', async(request, res) => {
    try{
        res.send(await req.db(request.params.alias, request.body.param, request.body.where))
    }catch(err){
        res.status(500).send({
            error: ReferenceError
        });
    }
});
  app.post('/upload/:productId/:type/:fileName', async (request, res) => {

	let {      //여러개의 변수를 배열 형식을 이용해서 선언했다.
	  productId,
	  type,
	  fileName
	} = request.params;   //3개의 변수에 동일한 데이터를 입력한다.
	const dir = `${__dirname}/uploads/${productId}`;
	console.log('dir',dir);
	const file = `${dir}/${fileName}`;
	if (!request.body.data) return fs.unlink(file, async (err) => res.send({
	  err
	}));
	const data = request.body.data.slice(request.body.data.indexOf(';base64,') + 8);
	if (!fs.existsSync(dir)) fs.mkdirSync(dir);
  // 파일에 base64로 인코딩된 이미지 데이터를 쓰고 데이터베이스에 이미지 정보를 삽입합니다.
	fs.writeFile(file, data, 'base64', async (error) => {
	  await req.db('coffeeImageInsert', [{
		product_id: productId,
		type: type,
		path: fileName
	  }]);

	  if (error) {
		res.send({
		  error
		});
	  } else {
		res.send("ok");
	  }
	});
  });

  app.get('/download/:productId/:fileName', (request, res) => {
	const {
	  productId,
	  type,
	  fileName
	} = request.params;
	const filepath = `${__dirname}/uploads/${productId}/${fileName}`;
	console.log(filepath);
	res.header('Content-Type', `image/${fileName.substring(fileName.lastIndexOf("."))}`);
   if (!fs.existsSync(filepath)) res.status(404).send({
	  error: 'Can not found file.'
   });
	else fs.createReadStream(filepath).pipe(res);
  });
const req = {
    async db(alias, param =[], where=''){
        return new Promise((resolve, reject) => dbPool.query(sql[alias].query + where, param,
            (error, rows) => {
                if (error){
                    if(error.code != 'ER_DUP_ENTRY')
                    console.log(error)
                resolve({
                    error
                });
                }else resolve(rows)
            }));
    }
};