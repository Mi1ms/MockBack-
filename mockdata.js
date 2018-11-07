var casual = require('casual');
var path = require('path');
console.log(path.dirname('db.json'))

var db = {
  indicators: [],
  groups:[]
};

for (let i = 5; i < 6; i++) {
  let group = {};
  // random name
  group.id = i;
  group.name = casual.words(casual.integer(1,2));
  // random indicator
  for (var a = 1; a < 4; a++) {
    var indicator = {}
    indicator.id = 20 + a
    indicator.label = casual.words(casual.integer(1, 4))
    indicator.typ = casual.integer(1, 2) == 1 ? 'crontask' : 'backup'
    indicator.status = casual.integer(1, 3) == 1 ? "success" : (casual.integer(2, 3) == 2 ? "warning" : "danger")
    indicator.details = 'error ?'
    indicator.forced = casual.integer(1, 2) == 1 ? true : false
    indicator.groupId = group.id

    db.indicators.push(indicator);
  }
  db.groups.push(group);
}
console.log(JSON.stringify(db))
