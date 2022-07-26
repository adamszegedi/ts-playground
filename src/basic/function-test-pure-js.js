const { getName } = require('./function');

// (alias) getName(user: any): string
// import getName signiture
// firstname placeholder lastname placeholder
console.log(getName());
// firstname placeholder lastname placeholder
console.log(getName('Adam'));
// Adam lastname placeholder
console.log(getName({ first: 'Adam' }));