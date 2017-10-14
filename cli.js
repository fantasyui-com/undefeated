#!/usr/bin/env node

/**
 * Module dependencies.
 */

const program = require('commander');
const main = require('./index.js');

program
  .version('0.1.0')
  .option('-p, --pages <pages>', 'Number of pages', 3)
  .parse(process.argv);

main(program);
