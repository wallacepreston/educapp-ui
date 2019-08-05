require('dotenv').config();
const path = require('path');
const fs = require('fs');
const _ = require('lodash');

const configNames = ['apiServer'];
const configData = _.pick(process.env, configNames);
const configJSON = JSON.stringify(configData, null, 2);
fs.writeFileSync( 
  path.join(__dirname, 'config.js'), 
  '// Do not edit; generated automatically from env vars / .env file\n\nexport default ' + configJSON
);