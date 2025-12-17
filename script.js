"use strict";

let params = {
  results: 20,
  gender: "male",
  nat: "US"
};
let promise = ajax.sendRequest("GET", "/api", params);
promise.then(function (results) {
  console.log(results);
});
