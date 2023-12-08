# nested-data-navigator [![npm](https://img.shields.io/npm/v/nested-data-navigator)](https://www.npmjs.com/package/nested-data-navigator) [![NPM Downloads](https://img.shields.io/npm/dm/nested-data-navigator)](https://npmcharts.com/compare/nested-data-navigator)

**Nested Data Navigator** is a lightweight JavaScript package for navigating and retrieving values from nested data structures.
<br/>
## Install
You can install the package using npm:

```bash
npm install nested-data-navigator
```
<br/>

## Usage
```js
const { grabValue, grabPath } = require("nested-data-navigator");

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
const { grabValue, grabPath } = require("nested-data-navigator");

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


