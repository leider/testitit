'use strict';

var
  homedir = process.argv[2],
  domain = process.argv[3],
  ezmlm = require('ezmlm-node')(homedir, domain),
  group = process.argv[4],
  user = process.argv[5];

ezmlm.subscribeUserToList(user, group, null);
