# grab-wizard [![npm](https://img.shields.io/npm/v/grab-wizard)](https://www.npmjs.com/package/grab-wizard) [![NPM Downloads](https://img.shields.io/npm/dm/grab-wizard)](https://npmcharts.com/compare/grab-wizard)

**Grab Wizard** is a lightweight JavaScript package for navigating and retrieving values from nested data structures.
<br/>
## Install
You can install the package using npm:

```bash
npm install grab-wizard
```
<br/>

## Usage
```js
const { grabValue, grabPath } = require("grab-wizard");

var person = {
  firstName: "Ali",
  lastName: "Parsa",
  age: 21,
  info: {
    address: {
      city: 'New York',
      zip: '10001',
    }
  }
};

console.log(grabValue(person, "info.city", "default value")) //=> 'New Yourk'
console.log(grabPath(person, "info.city", "default value")) //=> '.info.address.city' 

```
<br/>

## Example
You can grab value or path without select parents:

```js
const { grabValue, grabPath } = require("grab-wizard");

var sample_1 = {
  firstName: "Ali",
  lastName: "Parsa",
  age: 21,
  info: {
    address: {
      city: 'New York',
      zip: '10001',
    }
  }
};

var sample_2 = {
  firstName: "Ali",
  lastName: "Parsa",
  age: 21,
  info: {
    location: {
      city: 'Canada',
      zip: '10001',
    }
  }
};

console.log(grabValue(sample_1, "info.city")) //=> 'New York'
console.log(grabPath(person, "info.city")) //=> '.info.address.city'

console.log(grabValue(sample_2, "city")) //=> 'Canada'
console.log(grabPath(person, "city")) //=> '.info.location.city'

console.log(grabValue(sample_2, "info.wrong","not found!")) //=> 'not found!'


