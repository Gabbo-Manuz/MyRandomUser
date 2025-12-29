"use strict";

//#region Costanti Di Dati

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
    <svg viewBox="0 0 24 24"
     width="24"
     height="24"
     fill="none"
     stroke="black"
     stroke-width="2"
     stroke-linecap="round"
     stroke-linejoin="round">
  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
  <line x1="3" y1="10" x2="21" y2="10"/>
  <line x1="8" y1="2" x2="8" y2="6"/>
  <line x1="16" y1="2" x2="16" y2="6"/>
  
</svg>
    `,
  },
  {
    text: "My street is ",
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

const bandiere = [
  { nome: "Australia", nat: "AU", flag: "https://flagcdn.com/w80/au.png" },
  { nome: "Brasile", nat: "BR", flag: "https://flagcdn.com/w80/br.png" },
  { nome: "Canada", nat: "CA", flag: "https://flagcdn.com/w80/ca.png" },
  { nome: "Svizzera", nat: "CH", flag: "https://flagcdn.com/w80/ch.png" },
  { nome: "Germania", nat: "DE", flag: "https://flagcdn.com/w80/de.png" },
  { nome: "Danimarca", nat: "DK", flag: "https://flagcdn.com/w80/dk.png" },
  { nome: "Spagna", nat: "ES", flag: "https://flagcdn.com/w80/es.png" },
  { nome: "Finlandia", nat: "FI", flag: "https://flagcdn.com/w80/fi.png" },
  { nome: "Francia", nat: "FR", flag: "https://flagcdn.com/w80/fr.png" },
  { nome: "Regno Unito", nat: "GB", flag: "https://flagcdn.com/w80/gb.png" },
  { nome: "Irlanda", nat: "IE", flag: "https://flagcdn.com/w80/ie.png" },
  { nome: "India", nat: "IN", flag: "https://flagcdn.com/w80/in.png" },
  { nome: "Iran", nat: "IR", flag: "https://flagcdn.com/w80/ir.png" },
  { nome: "Messico", nat: "MX", flag: "https://flagcdn.com/w80/mx.png" },
  { nome: "Paesi Bassi", nat: "NL", flag: "https://flagcdn.com/w80/nl.png" },
  { nome: "Norvegia", nat: "NO", flag: "https://flagcdn.com/w80/no.png" },
  { nome: "Nuova Zelanda", nat: "NZ", flag: "https://flagcdn.com/w80/nz.png" },
  { nome: "Serbia", nat: "RS", flag: "https://flagcdn.com/w80/rs.png" },
  { nome: "Turchia", nat: "TR", flag: "https://flagcdn.com/w80/tr.png" },
  { nome: "Ucraina", nat: "UA", flag: "https://flagcdn.com/w80/ua.png" },
  { nome: "Stati Uniti", nat: "US", flag: "https://flagcdn.com/w80/us.png" },
];

const stars = [
  `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#FFD700" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>`,
  `<svg width="30" height="30" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>`,
];

//#endregion

//#region Puntatori ad Elementi del DOM

const boxCardScrol = document.getElementById("boxCardScrol"),
  barraProgressioneCard = document.getElementById("barraProgressioneCard"),
  btnGenerateUser = document.getElementById("generateUser"),
  lstGender = document.getElementById("lstGender"),
  boxCheckbox = document.getElementById("boxCheckbox"),
  textRicercaFlag = document.getElementById("textRicercaFlag");

//#endregion

//#region Eventi Associati ad Elementi del DOM statici

$(document).on("click", ".cardInner", function () {
  if (!boolNavPersonButtonClicked || !boolStarClicked) {
    $(this).toggleClass("flipped");
  }
  boolNavPersonButtonClicked = false;
  boolStarClicked = false;
});

$(document).on("click", ".checkboxFlag", function () {
  if (this.checked) {
    params.nat += `${$(this).attr("NAT")},`;
  } else {
    params.nat = "";
  }
  console.log(params);
});

boxCard.addEventListener("scroll", function () {
  let totaleScrollabile = this.scrollHeight - this.clientHeight;
  if (totaleScrollabile > 0) {
    let percentuale = (this.scrollTop / totaleScrollabile) * 100;
    barraProgressioneCard.style.width = percentuale + "%";
  }
});

$("#numberUser").on("change", function () {
  if ($(this).val() <= 0 || $(this).val() == "") {
    $(this).val(1);
  } else if ($(this).val() > 5000) {
    $(this).val(5000);
  }
  $("#textNUser").text(`N° User: ${$(this).val()}`);
  $("#rangeUser").val($(this).val());
  params.results = $(this).val();
  console.log(params);
});

$("#rangeUser").on("change", function () {
  $("#numberUser").val($(this).val());
  $("#textNUser").text(`N° User: ${$(this).val()}`);
  params.results = $(this).val();
  console.log(params);
});

btnGenerateUser.addEventListener("click", function () {
  loadCard(params);
});

lstGender.addEventListener("change", function () {
  params.gender = this.value;
  console.log(params);
});

textRicercaFlag.addEventListener("input", function () {
  nation = this.value;
  loadCheckbox(nation);
});

//#endregion

let params = {
    nat: "",
  },
  boolNavPersonButtonClicked = false,
  boolStarClicked = false,
  nation = "";

barraProgressioneCard.style.display = "none";

loadCheckbox(params.nat);

async function loadCard(params) {
  barraProgressioneCard.style.width = "0%";
  boxCardScrol.innerHTML = "";
  let HTTPResponse = await loadData("https://randomuser.me", "./api", params);
  console.log(HTTPResponse.data);
  if (HTTPResponse.data.info.results <= 4) {
    barraProgressioneCard.style.display = "none";
  } else {
    barraProgressioneCard.style.display = "";
  }
  HTTPResponse.data.results.forEach(function (person, i) {
    console.log(person.nat);
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
        .css({ marginRight: "70px" }),
      $("<div/>")
        .addClass("star")
        .html(stars[0])
        .click(function () {
          boolStarClicked = true;
          $(this).html($(this).html() == stars[0] ? stars[1] : stars[0]);
        })
    );
}

function createCardBack(person) {
  /*
  street
: 
{number: 9877, name: 'Bruce St'}
  */
  let vectPerson = [
    `${person.name.first} ${person.name.last}`,
    person.email,
    person.dob.date.split("T")[0],
    `${person.location.street.name} ${person.location.street.number}`,
    person.cell,
    person.login.password,
  ];
  let imgBack = $("<div/>")
    .addClass("imgBack")
    .css({ backgroundImage: `url(${person.picture.thumbnail})` });
  let divTextPerson = $("<div/>")
    .addClass("textPerson")
    .append(
      $("<div/>").addClass("textPersonGeneral").text("..."),
      $("<div/>").addClass("textPersonValue")
    );
  let divNavigatePerson = $("<div/>").addClass("navigatePerson");
  navPerson.forEach(function (jsonCard, i) {
    divNavigatePerson.append(
      $("<div/>")
        .addClass("navPersonButton")
        .val(vectPerson[i])
        .attr("textDisplay", jsonCard.text)
        .html(jsonCard.svg)
        .hover(function () {
          $(".textPersonGeneral").text(`${$(this).attr("textDisplay")}`);
          $(".textPersonValue").text(`${$(this).val()}`);
        })
        .click(function () {
          boolNavPersonButtonClicked = true;
          $(".textPersonGeneral").text(`${$(this).attr("textDisplay")}`);
          $(".textPersonValue").text(`${$(this).val()}`);
        })
    );
  });
  return $("<div/>")
    .addClass("cardBack")
    .append(divTextPerson, divNavigatePerson, imgBack);
}

async function loadData(URLSito, url, params) {
  return await ajax.sendRequest("GET", URLSito, url, params);
}

function loadCheckbox(nation) {
  boxCheckbox.innerHTML = "";
  bandiere.forEach(function (bandiera, i) {
    if (
      bandiera.nome.toUpperCase().startsWith(nation.toUpperCase()) ||
      nation == ""
    ) {
      $(boxCheckbox).append(createBoxCheck(bandiera));
    }
  });
}

function createBoxCheck(bandiera) {
  let imgBandiera = $("<div/>")
    .addClass("imgBandiera")
    .css({ backgroundImage: `url(${bandiera.flag})` });
  let checkbox = $("<input/>")
    .addClass("checkboxFlag")
    .attr("type", "checkbox")
    .attr("NAT", bandiera.nat);
  return $("<div/>").addClass("boxCheckbox").append(imgBandiera, checkbox);
}

