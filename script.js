"use strict";

let params = {
  seed: "81f573bee181a743",
  results: 20,
};

$(document).on("click",".card" ,function () {
  console.log("dd")
});


loadCard(params);

async function loadCard(params) {
  let HTTPResponse = await loadData(params);
  console.log(HTTPResponse);
  HTTPResponse.data.results.forEach(function (person, i) {
    $("#boxCardScrol").append(createCard(person));
  });
}

function createCard(person) {
  return $("<div/>")
    .addClass("card")
    .append(
      $("<div/>")
        .css({
          width: "70px",
          height: "70px",
          margin: "5px",
          backgroundImage: `url(${person.picture.medium})`,
          backgroundPosition: "center",
          border: "2px,solid,#2D6A4F",
        })
        .addClass("rounded-circle"),
      $("<div/>")
        .text(`${person.name.first} ${person.name.last}`)
        .css({ margin: "5px" })
    );
}

async function loadData(params) {
  return await ajax.sendRequest("GET", "./api", params);
}
