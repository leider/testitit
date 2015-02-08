'use strict';

var
  homedir = process.argv[2],
  domain = process.argv[3],
  ezmlm = require('ezmlm-node')(homedir, domain);

ezmlm.allLists(function (err, lists) {
  console.log(lists.join());
});
