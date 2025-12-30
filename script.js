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

const boxCardGrid = document.getElementById("boxCardGrid"),
  scrollBarBoxCardGrid = document.getElementById("scrollBarBoxCardGrid"),
  bntGenerateUser = document.getElementById("bntGenerateUser"),
  lstlstGender = document.getElementById("lstlstGender"),
  boxCheckboxGrid = document.getElementById("boxCheckboxGrid"),
  textRicercaFlag = document.getElementById("textRicercaFlag"),
  boxInfoValues = document.getElementsByClassName("boxInfoValue"),
  boxInfoImg = document.querySelector(".boxInfoImg"),
  boxCustomizeUser = document.querySelector("#boxCustomizeUser"),
  btnCustomize = document.getElementById("btnCustomize"),
  btnStars = document.getElementById("btnStars"),
  btnChronology = document.getElementById("btnChronology"),
  btnModalCustomize = document.getElementById("btnModalCustomize"),
  boxChronology = document.getElementById("boxChronology");

//#endregion

//#region Eventi Associati ad Elementi del DOM statici

$(document).on("click", ".cardInner", function () {
  if (!boolNavPersonButtonClicked && !boolInfoButtonClicked) {
    $(this).toggleClass("flipped");
  }
  boolNavPersonButtonClicked = false;
  boolInfoButtonClicked = false;
  boolStarClicked = false;
});

$(document).on("click", ".checkboxFlag", function () {
  let NAT = $(this).attr("NAT");
  if (this.checked) {
    params.nat += `${NAT},`;
  } else {
    params.nat = params.nat
      .split(",")
      .filter(function (nat) {
        return nat != `${NAT}`;
      })
      .toString();
  }
  console.log(params);
});

boxCard.addEventListener("scroll", function () {
  let totaleScrollabile = this.scrollHeight - this.clientHeight;
  if (totaleScrollabile > 0) {
    let percentuale = (this.scrollTop / totaleScrollabile) * 100;
    scrollBarBoxCardGrid.style.width = percentuale + "%";
  }
});

$("#inputNumberUser").on("change", function () {
  if ($(this).val() <= 0 || $(this).val() == "") {
    $(this).val(1);
  } else if ($(this).val() > 5000) {
    $(this).val(5000);
  }
  $("#labelNumberUser").text(`N° User: ${$(this).val()}`);
  $("#inputRangeUser").val($(this).val());
  params.results = $(this).val();
  console.log(params);
});

$("#inputRangeUser").on("change", function () {
  $("#inputNumberUser").val($(this).val());
  $("#labelNumberUser").text(`N° User: ${$(this).val()}`);
  params.results = $(this).val();
  console.log(params);
});

bntGenerateUser.addEventListener("click", function () {
  loadCard(params);
});

lstlstGender.addEventListener("change", function () {
  params.gender = this.value;
  console.log(params);
});

btnCustomize.addEventListener("click", function () {
  boxCardGrid.innerHTML = "";
  boolFavoritesClicked = false;
  boxCustomizeUser.style.display = "";
  boxChronology.style.display = "";
  deleteBoxCustomizeElement("");
  boxChronology.style.display = "none";
});

btnStars.addEventListener("click", function () {
  boxCardGrid.innerHTML = "";
  boolFavoritesClicked = true;
  boxChronology.style.display = "";
  boxCustomizeUser.style.display = "none";
  loadFavorites(JSON.parse(localStorage.getItem("favorites")));
});

btnChronology.addEventListener("click", function () {
  boxChronology.style.display = "";
  if (!JSON.parse(localStorage.getItem("chronology"))) {
    alert("Non è ancora presente una cronologia");
  } else {
    boxCardGrid.innerHTML = "";
    boxChronology.innerHTML = "";
    boolFavoritesClicked = false;
    deleteBoxCustomizeElement("none");
    boxCustomizeUser.style.display = "";
    boxChronology.style.display = "";
    loadChronology(JSON.parse(localStorage.getItem("chronology")));
  }
});



//#endregion

let params = {
    nat: "",
    gender: "",
  },
  boolNavPersonButtonClicked = false,
  boolStarClicked = false,
  boolInfoButtonClicked = false,
  boolFavoritesClicked = false,
  nation = "",
  indexUser = 0;

scrollBarBoxCardGrid.style.display = "none";
boxChronology.style.display = "none";

loadCheckbox(params.nat);

async function loadCard(params) {
  indexUser = 0;
  scrollBarBoxCardGrid.style.width = "0%";
  boxCardGrid.innerHTML = "";
  let HTTPResponse = await loadData("https://randomuser.me", "./api", params);
  console.log(HTTPResponse.data);
  if (HTTPResponse.data.info.results <= 4) {
    scrollBarBoxCardGrid.style.display = "none";
  } else {
    scrollBarBoxCardGrid.style.display = "";
  }
  if (
    boxChronology.style.display == "none" &&
    params.nat == "" &&
    params.gender == ""
  ) {
    saveInLocalStorage("chronology", {
      results: HTTPResponse.data.info.results,
      seed: HTTPResponse.data.info.seed,
    });
  }
  HTTPResponse.data.results.forEach(function (person, i) {
    $("#boxCardGrid").append(
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
        .html(boolFavoritesClicked ? stars[1] : stars[0])
        .click(function () {
          if (!boolFavoritesClicked) {
            if ($(this).html() == stars[0]) {
              $(this).html(stars[1]);
              saveInLocalStorage("favorites", person);
            } else {
              $(this).html(stars[0]);
              deleteInLocalStorage("favorites", person);
            }
          } else {
            deleteInLocalStorage("favorites", person);
            loadFavorites(JSON.parse(localStorage.getItem("favorites")));
          }
        })
    );
}

function createCardBack(person) {
  let vectUserInfoNavButton = [
    `${person.name.first} ${person.name.last}`,
    person.email,
    person.dob.date.split("T")[0],
    `${person.location.street.name} ${person.location.street.number}`,
    person.cell,
    person.login.password,
  ];
  let vectUserInfoBoxInfoModal = [
    `${person.name.title} ${person.name.first} ${person.name.last}`,
    person.login.username,
    person.login.password,
    person.email,
    person.gender,
    `${person.dob.age} years (${person.dob.date.split("T")[0]})`,
    `${person.location.country} (${person.nat})`,
    person.location.state,
    person.location.city,
    `${person.location.street.name} ${person.location.street.number}`,
    person.location.postcode,
    person.cell,
    person.phone,
  ];
  let infoButton = $("<div/>")
    .addClass("infoButton")
    .attr("data-bs-target", "#infoModal")
    .attr("data-bs-toggle", "modal")
    .html(
      `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M260-320q47 0 91.5 10.5T440-278v-394q-41-24-87-36t-93-12q-36 0-71.5 7T120-692v396q35-12 69.5-18t70.5-6Zm260 42q44-21 88.5-31.5T700-320q36 0 70.5 6t69.5 18v-396q-33-14-68.5-21t-71.5-7q-47 0-93 12t-87 36v394Zm-40 118q-48-38-104-59t-116-21q-42 0-82.5 11T100-198q-21 11-40.5-1T40-234v-482q0-11 5.5-21T62-752q46-24 96-36t102-12q58 0 113.5 15T480-740q51-30 106.5-45T700-800q52 0 102 12t96 36q11 5 16.5 15t5.5 21v482q0 23-19.5 35t-40.5 1q-37-20-77.5-31T700-240q-60 0-116 21t-104 59ZM280-494Z"/></svg>`
    )
    .click(function () {
      boolInfoButtonClicked = true;
      boxInfoImg.style.backgroundImage = `url(${person.picture.large})`;
      loadBoxInfoModal(vectUserInfoBoxInfoModal);
    });
  let imgBack = $("<div/>")
    .addClass("imgBack")
    .css({ backgroundImage: `url(${person.picture.thumbnail})` });
  let divTextPerson = $("<div/>")
    .addClass("textPerson")
    .append(
      $("<div/>")
        .addClass("textPersonGeneral")
        .text("...")
        .attr("id", `textPersonGeneral${indexUser}`),
      $("<div/>")
        .addClass("textPersonValue")
        .attr("id", `textPersonValue${indexUser}`)
    );
  let divNavigatePerson = $("<div/>").addClass("navigatePerson");
  navPerson.forEach(function (jsonCard, i) {
    divNavigatePerson.append(
      $("<div/>")
        .addClass(`navPersonButton`)
        .val(vectUserInfoNavButton[i])
        .attr("textDisplay", jsonCard.text)
        .attr("index", indexUser)
        .html(jsonCard.svg)
        .hover(function () {
          $(`#textPersonGeneral${$(this).attr("index")}`).text(
            `${$(this).attr("textDisplay")}`
          );
          $(`#textPersonValue${$(this).attr("index")}`).text(
            `${$(this).val()}`
          );
        })
        .click(function () {
          boolNavPersonButtonClicked = true;
          $(`#textPersonGeneral${$(this).attr("index")}`).text(
            `${$(this).attr("textDisplay")}`
          );
          $(`#textPersonValue${$(this).attr("index")}`).text(
            `${$(this).val()}`
          );
        })
    );
  });
  indexUser++;
  return $("<div/>")
    .addClass("cardBack")
    .append(divTextPerson, divNavigatePerson, imgBack, infoButton);
}

async function loadData(URLSito, url, params) {
  return await ajax.sendRequest("GET", URLSito, url, params);
}

function loadCheckbox(nation) {
  boxCheckboxGrid.innerHTML = "";
  bandiere.forEach(function (bandiera, i) {
    if (
      bandiera.nome.toUpperCase().startsWith(nation.toUpperCase()) ||
      nation == ""
    ) {
      $(boxCheckboxGrid).append(createBoxCheck(bandiera));
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
  return $("<div/>").addClass("boxCheckboxGrid").append(imgBandiera, checkbox);
}

function loadBoxInfoModal(vectInfo) {
  Array.from(boxInfoValues).forEach(function (boxInfoValue, i) {
    boxInfoValue.textContent = vectInfo[i];
  });
}

function loadFavorites(people) {
  indexUser = 0;
  scrollBarBoxCardGrid.style.width = "0%";
  boxCardGrid.innerHTML = "";
  if (people.lenght <= 4) {
    scrollBarBoxCardGrid.style.display = "none";
  } else {
    scrollBarBoxCardGrid.style.display = "";
  }
  people.forEach(function (person) {
    $("#boxCardGrid").append(
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

function saveInLocalStorage(key, person) {
  let vectJson = JSON.parse(localStorage.getItem(key)) || [];
  vectJson.push(person);
  localStorage.setItem(key, JSON.stringify(vectJson));
}

function deleteInLocalStorage(key, person) {
  let vectJson = JSON.parse(localStorage.getItem(key));
  vectJson = vectJson.filter(function (json) {
    return json.name.first != person.name.first;
  });
  localStorage.setItem(key, JSON.stringify(vectJson));
}

function deleteBoxCustomizeElement(string) {
  lstGender.style.display = string;
  boxCheckboxGrid.style.display = string;
  bntGenerateUser.style.display = string;
  slider.style.display = string;
}

function loadChronology(chronology) {
  chronology.forEach(function (element) {
    $(boxChronology).append(
      $("<div/>")
        .text(`Results: ${element.results} Seed: ${element.seed}`)
        .click(function () {
          loadCard(element);
        })
    );
  });
}
