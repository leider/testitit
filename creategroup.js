'use strict';

var
  homedir = process.argv[2],
  domain = process.argv[3],
  ezmlm = require('ezmlm-node')(homedir, domain, '.ezmlmrc'),
  group = process.argv[4];

ezmlm.createListNamed(group, ezmlm.defaultOptions, 'some prefix of ' + group);
