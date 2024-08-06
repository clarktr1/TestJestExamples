const sqlite3 = require('sqlite3').verbose();

function createDatabase() {
  const db = new sqlite3.Database(':memory:');

  db.serialize(() => {
    db.run("DROP TABLE IF EXISTS user");
    db.run("CREATE TABLE user (id INT PRIMARY KEY, name TEXT)");
    const stmt = db.prepare("INSERT INTO user VALUES (?, ?)");
    stmt.run(1, "Lil");
    stmt.run(2, "Aman");
    stmt.finalize();
  });

  return db;
}

module.exports = createDatabase;
