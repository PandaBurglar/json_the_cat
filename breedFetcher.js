const request = require("request");

const fetchBreedDescription = (breedName, callback) => { //async so it needs a callback
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, res, body) => {
    // request fails, so print out the error argument  => edge case
    if (error) {
      callback(`Failed to complete request: ${error}`, null);
    }
    // convert the strings into object
    const data = JSON.parse(body);
    const breedInfo = data[0];
    if (breedInfo) {
      callback(null, breedInfo.description);
    } else {
      // assigned the first array in data to firstEntry
      callback(`Error: ${breedName} Not Found`, null);
    }
  });
};

module.exports = { fetchBreedDescription };