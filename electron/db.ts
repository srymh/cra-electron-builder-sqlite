import * as sqlite from 'sqlite3';
import {Idol} from './types';

export const createTableAndInsert = function(idol: Idol) {
  const db = new sqlite.Database('example.sqlite');
  db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS idols (name TEXT, age INTEGER)');

    const stmt = db.prepare('INSERT INTO idols VALUES (?, ?)');
    stmt.run([idol.name, idol.age]);

    stmt.finalize();
  });

  db.close();
};
