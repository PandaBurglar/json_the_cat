const breedName = process.argv.slice(2);
const request = require("request");
const url =  "https://api.thecatapi.com/v1/breeds/search?q=" + breedName;

const fetchBreedInformation = (breedInfo, callback) => {
  request(url, (error,res,body) => {
    // convert the strings into objects
    const data = JSON.parse(body);
    // assigned the first array in data to firstEntry
    breedInfo = data[0];
    let breedDescription = breedInfo.description;
    // request fails, so print out the error argument  => edge case
    if (error) {
      callback(error, null);
      return;
    } else if (breedInfo === null) {
      callback('Error: Breed Not Found', null);
      return;
    } else {
      // print the description
      callback(null, breedDescription);
      return;
    }
  });
};

// returns undefined not good...
fetchBreedInformation(breedName, (err, info) => {
  if (err) {
    console.log(err);
  } else console.log(info);
});
