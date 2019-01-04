#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const chalk = require('chalk');
const boxen = require('boxen');

const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
  borderColor: 'green'
};

// Define escaped ASCII art for our name
const header = `                                      
_|_|_|    _|_|    _|      _|  _|_|_|_|_|    _|_|      _|_|_|  _|    _|  
  _|    _|    _|  _|_|  _|_|        _|    _|    _|  _|        _|  _|    
  _|    _|_|_|_|  _|  _|  _|      _|      _|_|_|_|  _|        _|_|      
  _|    _|    _|  _|      _|    _|        _|    _|  _|        _|  _|    
_|_|_|  _|    _|  _|      _|  _|_|_|_|_|  _|    _|    _|_|_|  _|    _|  
                                                                     ${chalk.white('.: zack9433 :.')}`;

const bio = `\
I am a husband, dad, software engineer, MAC fan,
love all things about web dev and living in the Taiwan.
I'm convinced I'll never be able to stop learning.`;

// Actual layout using chalk template rendering for alignment
let output = chalk`
{blue ---------------------------------------------------------------------}
  {yellow ${header}}
{blue ---------------------------------------------------------------------}

      {bold Work:}  Staff Software Engineer at MOXA
   {bold Twitter:}  {blue https://twitter.com/}{magenta zack9433}
    {bold GitHub:}  {blue https://github.com/}{magenta zack9433}
  {bold LinkedIn:}  {blue https://linkedin.com/in/}{magenta zack9433}
       {bold Web:}  {blue https://}{magenta zack9433}{blue .github.io}

      {bold Card:}  {cyan npx} {magenta zack9433}

{yellow ${bio}}`;

// Remove leading newline and write our card to bin/output for distro
const [, ...trimmed] = output.split('\n');
const card = chalk.white(boxen(trimmed.join('\n'), options));
fs.writeFileSync(path.join(__dirname, 'bin/output'), card);
console.log(card);
