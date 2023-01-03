const fs = require('fs');

const dataBuffer = fs.readFileSync('1-json.json');
const JsonString = dataBuffer.toString();
const JsonObject = JSON.parse(JsonString);
JsonObject.name = 'Yogesh';
JsonObject.planet = 'Moon, Marse';
JsonObject.age = 33;

fs.writeFileSync('1-json.json', JSON.stringify(JsonObject));