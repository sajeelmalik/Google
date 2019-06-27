# @sajeel/google

[![npm (scoped)](https://img.shields.io/badge/npm-v2.1.0-blue.svg)](https://www.npmjs.com/package/@sajeel/google)
[![npm bundle size (minified)](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://www.npmjs.com/package/@sajeel/google)
[![dependencies version](https://img.shields.io/badge/dependencies-uptodate-orange.svg)](https://www.npmjs.com/package/@sajeel/google)

A lightweight package boasting a simple but uncontroversially groundbreaking set of searching algorithms rivaling that of tech giant, Google.

## Install

`$ npm install @sajeel/google` 


## Usage:

### Instantiation
```js
    var google = require('@sajeel/google');
```

### Array Search
```js
    var {positions, count, time} = google.search(["captain america", "thor", "black widow", "captain america", "captain america", "iron man", "quicksilver", "spiderman", "starlord", "captain america", "ant man", "dr. strange", "thanos", "captain marvel", "gamora", "hulk", "nebula", "hawkeye", "vision", "scarlet witch"], "captain america");

    console.log(`Captain America appears ${count} time(s) at indices ${positions.length > 1 ? positions.splice(0, positions.length-1).join(", ") + ", and " + positions[positions.length-1]: positions.join("")}. Your search took ${time}s long to execute.`)
    // ==> Captain America appears 4 time(s) at indices 0, 3, 4, and 9. Your search took 0.23s long to execute.
```

### Online Search
```js
    google.searchOnline("James Harden Beard");
    // Opens default browser with a Google search.

```
