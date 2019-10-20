// var parseString = require('xml2js').parseString;
// var xml = "<root>Hello xml2js! <hh>fdhg</hh></root>"


console.log("hello");
import { get } from 'axios';

// Make a request for a user with a given ID
get('https://www.goodreads.com/search.xml?key=kdkfMXXmWyeBLlDhErORdQ&q=Ender%27s+Gam')
  .then(function (response) {
    // handle success
    console.log(response.data)
    parseString(response.data, function (err, result) {
        console.log(result.GoodReads);
    });
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {

    // always executed
  });


//   import axios from 'axios';

//   import {default as axios} from 'axios';