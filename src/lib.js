import './lib.css';

class Lib {
  constructor(options) {
    if (process.env.NODE_ENV !== 'production') {
      console.log('Looks like we are in development mode!');
    }
  }

  static create(options) {
    return new Lib(options);
  }

  print() {
    console.log("This is a message from the library package");
  }

  toast() {
    alert("This is a message from the library package");
  }
}

module.exports = Lib;
