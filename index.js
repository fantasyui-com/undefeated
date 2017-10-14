#!/usr/bin/env node

/**
 * Module dependencies.
 */

const path = require('path');
const mkdirp = require('mkdirp');
const fs = require('fs');

const oneof = require('oneof');
const hbs = require('handlebars');
const data = require('./src/data.js');

hbs.registerHelper('each', function(context, options) {
  var ret = "";
  if(context){
  for(var i=0, j=context.length; i<j; i++) {
    ret = ret + options.fn(Object.assign(context[i], {index:i, number:i+1, numbers:context.length, position:(i+1)} ));
  }
  }
  return ret;
});

hbs.registerHelper('if', function(conditional, options) {
  if(conditional) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});

hbs.registerHelper('price', function(amount) {
  return setup.currencySymbol + (parseInt(amount)/100).toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + " " + setup.currency;
});


function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function pages(numberOfPages, data){
  const pages = [];

  for(let x = 0; x<numberOfPages; x++){

    let page = JSON.parse(JSON.stringify(data));
    page.workout = shuffle(page.workout);
    page.workout = page.workout.slice(0,6)

    page.workout.map(o=>{
      o.content = hbs.compile(o.text)({value:oneof(o.values||[])});
    });
    page.workout.map(o=>{
      o.icon = oneof([
        'ambulance',
        'heart',
        'medkit',
        'universal-access',
        'university',
        'thermometer-full',
      ]);
      o.next = hbs.compile(`Shuffle and draw next card in {{value}} days.`)({value:oneof([7,7,7,14,14,14,14,14,30,30,30,30,30,30,30,])});
    });

    pages.push( page );

  }

  return pages;

}

function main(program){
  mkdirp.sync( path.join(__dirname, 'dist') );
  const source = fs.readFileSync( path.join(__dirname, 'src', 'index.ejs'), 'utf8')
  const template = hbs.compile(source);

  const html = template( { page: pages( program.pages , data ) } );
  fs.writeFileSync(path.join(__dirname, 'dist', 'index.html'), html)
}

module.exports = main;
