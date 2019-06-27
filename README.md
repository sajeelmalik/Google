# @sajeel/google

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
    var avengersSearch = google.search(["captain america", "thor", "black widow", "captain america", "captain america", "iron man", "quicksilver", "spiderman", "starlord", "captain america", "ant man", "dr. strange", "thanos", "captain marvel", "gamora", "hulk", "nebula", "hawkeye", "vision", "scarlet witch"], "captain america"));

    // ==> { positions: [ 0, 3, 4, 9 ], count: 4, time: '0.13' }

    console.log(`Your search took ${avengersSearch.time}s long to execute.`)
    // ==> Your search took 0.13s long to execute.
```

### Online Search
```js
    google.searchOnline("James Harden Beard");
    // Opens default browser with a Google search.

```
