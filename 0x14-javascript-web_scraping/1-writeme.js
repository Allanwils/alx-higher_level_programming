#!/usr/bin/node
const fs = require('fs').promises;

const [filePath, stringToWrite] = process.argv.slice(2);

fs.writeFile(filePath, stringToWrite, { encoding: 'utf-8' })
  .catch((err) => console.error(err));
