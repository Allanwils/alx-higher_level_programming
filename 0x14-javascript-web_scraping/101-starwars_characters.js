#!/usr/bin/node
'use strict';

const request = require('request');

const movieId = process.argv[2];
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}/`;

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  const characterUrls = JSON.parse(body).characters;
  const numCharacters = characterUrls.length;

  const characters = new Array(numCharacters);
  let numReceived = 0;

  characterUrls.forEach((characterUrl, i) => {
    request(characterUrl, (error, response, body) => {
      if (error) {
        console.error(error);
        return;
      }

      const character = JSON.parse(body);
      characters[i] = character.name;
      numReceived++;

      if (numReceived === numCharacters) {
        characters.forEach((name) => console.log(name));
      }
    });
  });
});
