'use strict';

var
  homedir = process.argv[2],
  domain = process.argv[3],
  ezmlm = require('ezmlm-node')(homedir, domain, '.ezmlmrc'),
  group = process.argv[4];


ezmlm.replyToList(group, function (err) {
  console.log(err);
});
