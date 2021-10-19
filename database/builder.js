const path = require('path');

const fs = require('fs');

const db = JSON.parse(fs.readFileSync(path.join(__dirname, 'products.json'), 'utf8'));

const newDb = db.map(e => {
  e.image = `/img/0${(e.body.length % 3) + 1}.jpg`;

  return e;
});


fs.writeFileSync(path.join(__dirname, 'products.json'), JSON.stringify(newDb));