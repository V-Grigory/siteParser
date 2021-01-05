const SitesParser = require('./index');

let sitesParser = new SitesParser({
  sitesUrl: ['s1', 's2', 's3'],
  searchPhrases: ['ph1', 'ph2']
});

sitesParser.start()
  .then(v => console.log(v))
  .catch(e => console.log(e));

// console.log(sitesParser.start());
