#!/usr/bin/env node

'use strict';

var argv = require('minimist')(process.argv.slice(2));
var Liftoff = require('liftoff');

//TODO: Design this system

// set env var for ORIGINAL cwd
// // before anything touches it
var basedir = process.env.INIT_CWD = process.cwd();

var cli = new Liftoff({
    name: 'sandwich',
    extensions: require('interpret').jsVariants
});

cli.launch({
    cwd: argv.cwd,
    configPath: argv.recipe,
    require: argv.require
}, run);

function run(env) {
    // TODO: Implement application
}
