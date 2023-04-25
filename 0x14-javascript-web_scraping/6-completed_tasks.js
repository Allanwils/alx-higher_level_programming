#!/usr/bin/node
'use strict';

const request = require('request');
const apiUrl = process.argv[2];

request(apiUrl, function (error, response, body) {
  if (error) throw error;
  if (response.statusCode !== 200) {
    console.error('Error:', response.statusCode);
    return;
  }

  const tasks = JSON.parse(body);
  const completedTasks = {};

  for (const task of tasks) {
    if (task.completed) {
      const userId = task.userId;
      completedTasks[userId] = completedTasks[userId] || 0;
      completedTasks[userId]++;
    }
  }

  console.log(completedTasks);
});
