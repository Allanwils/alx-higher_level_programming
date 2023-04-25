#!/usr/bin/node

const fs = require('fs');
const request = require('request');

if (process.argv.length !== 4) {
  console.error(`Usage: ${process.argv[1]} <url> <file>`);
  process.exit(1);
}

const url = process.argv[2];
const file = process.argv[3];

request(url, (error, response, body) => {
  if (error) {
    console.error(`Error requesting ${url}: ${error.message}`);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error(`Unexpected status code ${response.statusCode} from ${url}`);
    process.exit(1);
  }

  fs.writeFile(file, body, { encoding: 'utf-8' }, (error) => {
    if (error) {
      console.error(`Error writing to file ${file}: ${error.message}`);
      process.exit(1);
    }

    console.log(`Successfully wrote response body to ${file}`);
  });
});
