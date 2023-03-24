const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('C:/sqlite/quotes.sqlite', (err) => {
    if(err){
        return console.error('there is an error' + err.message);
    }
    console.log('connected to db, quotes')  
}
);

// db.serialize(function() {
//     db.run("CREATE TABLE quotes(info text)")
//     console.log('created quotes table for db.');
// })
let sql = `SELECT Name FROM quotes`;
db.all(sql,[],(err,rows) =>{
    if(err){
        throw err;
    }
    rows.forEach((row) =>{
        console.log(row.name);
    })
})
db.close((err) => {
    if(err){
        return console.error(err.message)
    }
    console.log('close the database');
})

