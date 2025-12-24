"use strict";

let params = {
  seed: "81f573bee181a743",
  results: 10,
};

const navPerson = [
  {
    text: "My name is ",
    svg: `
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="black" stroke-width="2">
        <circle cx="12" cy="8" r="4"/>
        <path d="M4 20c0-4 4-6 8-6s8 2 8 6"/>
      </svg>
    `,
  },
  {
    text: "My email is ",
    svg: `
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="black" stroke-width="2">
        <rect x="3" y="5" width="18" height="14" rx="2"/>
        <path d="M3 7l9 6 9-6"/>
      </svg>
    `,
  },
  {
    text: "My birthday is ",
    svg: `
      <svg viewBox="0 0 50 50" width="50" height="50" fill="none" stroke="black" stroke-width="2">
  <text x="25" y="30" text-anchor="middle" font-size="20" fill="black" font-family="Arial, sans-serif">1</text>
</svg>


    `,
  },
  {
    text: "My location is ",
    svg: `
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="black" stroke-width="2">
        <path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7z"/>
        <circle cx="12" cy="9" r="2.5"/>
      </svg>
    `,
  },
  {
    text: "My number is ",
    svg: `
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="black" stroke-width="2">
  <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.11-.21c1.2.48 2.5.74 3.84.74a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1C10.29 21 3 13.71 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.34.26 2.64.74 3.84a1 1 0 0 1-.21 1.11l-2.2 2.2z"/>
</svg>
    `,
  },
  {
    text: "My password is ",
    svg: `
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="black" stroke-width="2">
        <rect x="5" y="11" width="14" height="10" rx="2"/>
        <path d="M8 11V7a4 4 0 0 1 8 0v4"/>
      </svg>
    `,
  },
];

$(document).on("click", ".cardInner", function () {
  $(this).toggleClass("flipped");
});

loadCard(params);

async function loadCard(params) {
  let HTTPResponse = await loadData(params);
  console.log(HTTPResponse);
  HTTPResponse.data.results.forEach(function (person, i) {
    $("#boxCardScrol").append(
      $("<div/>")
        .addClass("card")
        .append(
          $("<div/>")
            .addClass("cardInner")
            .append(createCardFront(person), createCardBack(person))
        )
    );
  });
}

function createCardFront(person) {
  return $("<div/>")
    .addClass("cardFront")
    .append(
      $("<div/>")
        .css({
          backgroundImage: `url(${person.picture.medium})`,
        })
        .addClass("rounded-circle imgFront"),
      $("<div/>")
        .append(
          $("<div/>").text(`${person.name.first}`),
          $("<div/>").text(`${person.name.last}`)
        )
        .css({ marginRight: "70px" })
    );
}

function createCardBack(person) {
  let vectPerson = [
    `${person.name.first} ${person.name.last}`,
    person.email,
    person.registered.age,
    person.location.country,
    person.phone,
    person.login.password,
  ];
  let divTextPerson = $("<div/>").addClass("textPerson").text("...");
  let divNavigatePerson = $("<div/>").addClass("navigatePerson");
  navPerson.forEach(function (text, i) {
    let button = $("<div/>")
      .addClass("navPersonButton")
      .val(vectPerson[i])
      .attr("textDisplay", text.text)
      .html(text.svg)
      .hover(function () {
        divTextPerson.text(
          `${$(this).attr("textDisplay")}${$(this).val()}`
        );        
      });
    // let button = `<div class="navPersonButton" value="${vectPerson[i]}" textDisplay="${text.text}">${text.svg}</div>`;
    divNavigatePerson.append(button);
    console.log(button);
  });
  return $("<div/>")
    .addClass("cardBack")
    .append(divTextPerson, divNavigatePerson);
}

async function loadData(params) {
  return await ajax.sendRequest("GET", "./api", params);
}
