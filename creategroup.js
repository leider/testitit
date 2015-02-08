'use strict';

var
  homedir = process.argv[1],
  domain = process.argv[2],
  ezmlm = require('ezmlm-node')(homedir, domain),
  group = process.argv[3];

ezmlm.createListNamed(group, ezmlm.defaultOptions, null);
