const breedName = process.argv.slice(2);
const { fetchBreedInformation } = require('./breedFetcher');

// returns undefined not good...
fetchBreedInformation(breedName, (err, desc) => {
  if (err) {
    console.log(err);
  } else {
    console.log(desc);
  }
});
