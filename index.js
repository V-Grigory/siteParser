class SitesParser {

  constructor(params) {
    this.params = params;
    this.parser = { err: '', data: {} };
  }

  start() {
    this.validateConstructorParams();
    if(this.parser.err) {
      return new Promise(reject => reject(this.parser.err));
    }
    return new Promise((responce, reject) => {
      this.parse()
        .then(() => responce(this.parser.data))
        .catch(() => reject(this.parser.err));
    })
  }

  validateConstructorParams() {
    this.parser.err = ''
  }

  parse() {
    return new Promise((responce, reject) => {
      this.parser.data = 'result parse';
      return responce()
    })
  }

}

module.exports = SitesParser;
