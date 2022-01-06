const mysql = require("mysql");
 const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "TEjas@2599",
  database: "exam",
};
async function connctionCheck() {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();

    console.log("connection succuful....")
    await connection.endAsync();
}

async function addUser(user) {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    let sql = `insert into user (username,password,contact ,city) values(?,?,?,?)`;
    connection.queryAsync(sql, [user.username, user.password, user.contact, user.city]);
    console.log("connection succuful....")
    await connection.endAsync();
}

const user = {username:'tejas', password:'hfhshf', contact:'5648945712', city:'vivre' };
addUser(user);


//connctionCheck();

