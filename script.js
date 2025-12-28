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
  { nome: "Afghanistan", nat: "AF", flag: "https://flagcdn.com/w80/af.png" },
  { nome: "Albania", nat: "AL", flag: "https://flagcdn.com/w80/al.png" },
  { nome: "Algeria", nat: "DZ", flag: "https://flagcdn.com/w80/dz.png" },
  { nome: "Andorra", nat: "AD", flag: "https://flagcdn.com/w80/ad.png" },
  { nome: "Angola", nat: "AO", flag: "https://flagcdn.com/w80/ao.png" },
  {
    nome: "Antigua e Barbuda",
    nat: "AG",
    flag: "https://flagcdn.com/w80/ag.png",
  },
  { nome: "Arabia Saudita", nat: "SA", flag: "https://flagcdn.com/w80/sa.png" },
  { nome: "Argentina", nat: "AR", flag: "https://flagcdn.com/w80/ar.png" },
  { nome: "Armenia", nat: "AM", flag: "https://flagcdn.com/w80/am.png" },
  { nome: "Australia", nat: "AU", flag: "https://flagcdn.com/w80/au.png" },
  { nome: "Austria", nat: "AT", flag: "https://flagcdn.com/w80/at.png" },
  { nome: "Azerbaigian", nat: "AZ", flag: "https://flagcdn.com/w80/az.png" },
  { nome: "Bahamas", nat: "BS", flag: "https://flagcdn.com/w80/bs.png" },
  { nome: "Bahrein", nat: "BH", flag: "https://flagcdn.com/w80/bh.png" },
  { nome: "Bangladesh", nat: "BD", flag: "https://flagcdn.com/w80/bd.png" },
  { nome: "Barbados", nat: "BB", flag: "https://flagcdn.com/w80/bb.png" },
  { nome: "Belgio", nat: "BE", flag: "https://flagcdn.com/w80/be.png" },
  { nome: "Belize", nat: "BZ", flag: "https://flagcdn.com/w80/bz.png" },
  { nome: "Benin", nat: "BJ", flag: "https://flagcdn.com/w80/bj.png" },
  { nome: "Bhutan", nat: "BT", flag: "https://flagcdn.com/w80/bt.png" },
  { nome: "Bielorussia", nat: "BY", flag: "https://flagcdn.com/w80/by.png" },
  { nome: "Bolivia", nat: "BO", flag: "https://flagcdn.com/w80/bo.png" },
  {
    nome: "Bosnia ed Erzegovina",
    nat: "BA",
    flag: "https://flagcdn.com/w80/ba.png",
  },
  { nome: "Botswana", nat: "BW", flag: "https://flagcdn.com/w80/bw.png" },
  { nome: "Brasile", nat: "BR", flag: "https://flagcdn.com/w80/br.png" },
  { nome: "Brunei", nat: "BN", flag: "https://flagcdn.com/w80/bn.png" },
  { nome: "Bulgaria", nat: "BG", flag: "https://flagcdn.com/w80/bg.png" },
  { nome: "Burkina Faso", nat: "BF", flag: "https://flagcdn.com/w80/bf.png" },
  { nome: "Burundi", nat: "BI", flag: "https://flagcdn.com/w80/bi.png" },
  { nome: "Cambogia", nat: "KH", flag: "https://flagcdn.com/w80/kh.png" },
  { nome: "Camerun", nat: "CM", flag: "https://flagcdn.com/w80/cm.png" },
  { nome: "Canada", nat: "CA", flag: "https://flagcdn.com/w80/ca.png" },
  { nome: "Capo Verde", nat: "CV", flag: "https://flagcdn.com/w80/cv.png" },
  { nome: "Ciad", nat: "TD", flag: "https://flagcdn.com/w80/td.png" },
  { nome: "Cile", nat: "CL", flag: "https://flagcdn.com/w80/cl.png" },
  { nome: "Cina", nat: "CN", flag: "https://flagcdn.com/w80/cn.png" },
  { nome: "Cipro", nat: "CY", flag: "https://flagcdn.com/w80/cy.png" },
  {
    nome: "Città del Vaticano",
    nat: "VA",
    flag: "https://flagcdn.com/w80/va.png",
  },
  { nome: "Colombia", nat: "CO", flag: "https://flagcdn.com/w80/co.png" },
  { nome: "Comore", nat: "KM", flag: "https://flagcdn.com/w80/km.png" },
  { nome: "Corea del Nord", nat: "KP", flag: "https://flagcdn.com/w80/kp.png" },
  { nome: "Corea del Sud", nat: "KR", flag: "https://flagcdn.com/w80/kr.png" },
  { nome: "Costa d'Avorio", nat: "CI", flag: "https://flagcdn.com/w80/ci.png" },
  { nome: "Costa Rica", nat: "CR", flag: "https://flagcdn.com/w80/cr.png" },
  { nome: "Croazia", nat: "HR", flag: "https://flagcdn.com/w80/hr.png" },
  { nome: "Cuba", nat: "CU", flag: "https://flagcdn.com/w80/cu.png" },
  { nome: "Danimarca", nat: "DK", flag: "https://flagcdn.com/w80/dk.png" },
  { nome: "Dominica", nat: "DM", flag: "https://flagcdn.com/w80/dm.png" },
  { nome: "Ecuador", nat: "EC", flag: "https://flagcdn.com/w80/ec.png" },
  { nome: "Egitto", nat: "EG", flag: "https://flagcdn.com/w80/eg.png" },
  { nome: "El Salvador", nat: "SV", flag: "https://flagcdn.com/w80/sv.png" },
  {
    nome: "Emirati Arabi Uniti",
    nat: "AE",
    flag: "https://flagcdn.com/w80/ae.png",
  },
  { nome: "Eritrea", nat: "ER", flag: "https://flagcdn.com/w80/er.png" },
  { nome: "Estonia", nat: "EE", flag: "https://flagcdn.com/w80/ee.png" },
  { nome: "Etiopia", nat: "ET", flag: "https://flagcdn.com/w80/et.png" },
  { nome: "Fiji", nat: "FJ", flag: "https://flagcdn.com/w80/fj.png" },
  { nome: "Filippine", nat: "PH", flag: "https://flagcdn.com/w80/ph.png" },
  { nome: "Finlandia", nat: "FI", flag: "https://flagcdn.com/w80/fi.png" },
  { nome: "Francia", nat: "FR", flag: "https://flagcdn.com/w80/fr.png" },
  { nome: "Gabon", nat: "GA", flag: "https://flagcdn.com/w80/ga.png" },
  { nome: "Gambia", nat: "GM", flag: "https://flagcdn.com/w80/gm.png" },
  { nome: "Georgia", nat: "GE", flag: "https://flagcdn.com/w80/ge.png" },
  { nome: "Germania", nat: "DE", flag: "https://flagcdn.com/w80/de.png" },
  { nome: "Ghana", nat: "GH", flag: "https://flagcdn.com/w80/gh.png" },
  { nome: "Giamaica", nat: "JM", flag: "https://flagcdn.com/w80/jm.png" },
  { nome: "Giappone", nat: "JP", flag: "https://flagcdn.com/w80/jp.png" },
  { nome: "Gibuti", nat: "DJ", flag: "https://flagcdn.com/w80/dj.png" },
  { nome: "Giordania", nat: "JO", flag: "https://flagcdn.com/w80/jo.png" },
  { nome: "Grecia", nat: "GR", flag: "https://flagcdn.com/w80/gr.png" },
  { nome: "Grenada", nat: "GD", flag: "https://flagcdn.com/w80/gd.png" },
  { nome: "Guatemala", nat: "GT", flag: "https://flagcdn.com/w80/gt.png" },
  { nome: "Guinea", nat: "GN", flag: "https://flagcdn.com/w80/gn.png" },
  {
    nome: "Guinea Equatoriale",
    nat: "GQ",
    flag: "https://flagcdn.com/w80/gq.png",
  },
  { nome: "Guinea-Bissau", nat: "GW", flag: "https://flagcdn.com/w80/gw.png" },
  { nome: "Guyana", nat: "GY", flag: "https://flagcdn.com/w80/gy.png" },
  { nome: "Haiti", nat: "HT", flag: "https://flagcdn.com/w80/ht.png" },
  { nome: "Honduras", nat: "HN", flag: "https://flagcdn.com/w80/hn.png" },
  { nome: "India", nat: "IN", flag: "https://flagcdn.com/w80/in.png" },
  { nome: "Indonesia", nat: "ID", flag: "https://flagcdn.com/w80/id.png" },
  { nome: "Iran", nat: "IR", flag: "https://flagcdn.com/w80/ir.png" },
  { nome: "Iraq", nat: "IQ", flag: "https://flagcdn.com/w80/iq.png" },
  { nome: "Irlanda", nat: "IE", flag: "https://flagcdn.com/w80/ie.png" },
  { nome: "Islanda", nat: "IS", flag: "https://flagcdn.com/w80/is.png" },
  { nome: "Isreale", nat: "IL", flag: "https://flagcdn.com/w80/il.png" },
  { nome: "Italia", nat: "IT", flag: "https://flagcdn.com/w80/it.png" },
  { nome: "Kazakistan", nat: "KZ", flag: "https://flagcdn.com/w80/kz.png" },
  { nome: "Kenya", nat: "KE", flag: "https://flagcdn.com/w80/ke.png" },
  { nome: "Kirghizistan", nat: "KG", flag: "https://flagcdn.com/w80/kg.png" },
  { nome: "Kiribati", nat: "KI", flag: "https://flagcdn.com/w80/ki.png" },
  { nome: "Kuwait", nat: "KW", flag: "https://flagcdn.com/w80/kw.png" },
  { nome: "Laos", nat: "LA", flag: "https://flagcdn.com/w80/la.png" },
  { nome: "Lesotho", nat: "LS", flag: "https://flagcdn.com/w80/ls.png" },
  { nome: "Lettonia", nat: "LV", flag: "https://flagcdn.com/w80/lv.png" },
  { nome: "Libano", nat: "LB", flag: "https://flagcdn.com/w80/lb.png" },
  { nome: "Liberia", nat: "LR", flag: "https://flagcdn.com/w80/lr.png" },
  { nome: "Libia", nat: "LY", flag: "https://flagcdn.com/w80/ly.png" },
  { nome: "Liechtenstein", nat: "LI", flag: "https://flagcdn.com/w80/li.png" },
  { nome: "Lituania", nat: "LT", flag: "https://flagcdn.com/w80/lt.png" },
  { nome: "Lussemburgo", nat: "LU", flag: "https://flagcdn.com/w80/lu.png" },
  {
    nome: "Macedonia del Nord",
    nat: "MK",
    flag: "https://flagcdn.com/w80/mk.png",
  },
  { nome: "Madagascar", nat: "MG", flag: "https://flagcdn.com/w80/mg.png" },
  { nome: "Malawi", nat: "MW", flag: "https://flagcdn.com/w80/mw.png" },
  { nome: "Malesia", nat: "MY", flag: "https://flagcdn.com/w80/my.png" },
  { nome: "Maldive", nat: "MV", flag: "https://flagcdn.com/w80/mv.png" },
  { nome: "Mali", nat: "ML", flag: "https://flagcdn.com/w80/ml.png" },
  { nome: "Malta", nat: "MT", flag: "https://flagcdn.com/w80/mt.png" },
  { nome: "Marocco", nat: "MA", flag: "https://flagcdn.com/w80/ma.png" },
  { nome: "Mauritania", nat: "MR", flag: "https://flagcdn.com/w80/mr.png" },
  { nome: "Mauritius", nat: "MU", flag: "https://flagcdn.com/w80/mu.png" },
  { nome: "Messico", nat: "MX", flag: "https://flagcdn.com/w80/mx.png" },
  { nome: "Moldavia", nat: "MD", flag: "https://flagcdn.com/w80/md.png" },
  { nome: "Monaco", nat: "MC", flag: "https://flagcdn.com/w80/mc.png" },
  { nome: "Mongolia", nat: "MN", flag: "https://flagcdn.com/w80/mn.png" },
  { nome: "Montenegro", nat: "ME", flag: "https://flagcdn.com/w80/me.png" },
  { nome: "Mozambico", nat: "MZ", flag: "https://flagcdn.com/w80/mz.png" },
  { nome: "Namibia", nat: "NA", flag: "https://flagcdn.com/w80/na.png" },
  { nome: "Nauru", nat: "NR", flag: "https://flagcdn.com/w80/nr.png" },
  { nome: "Nepal", nat: "NP", flag: "https://flagcdn.com/w80/np.png" },
  { nome: "Nicaragua", nat: "NI", flag: "https://flagcdn.com/w80/ni.png" },
  { nome: "Niger", nat: "NE", flag: "https://flagcdn.com/w80/ne.png" },
  { nome: "Nigeria", nat: "NG", flag: "https://flagcdn.com/w80/ng.png" },
  { nome: "Norvegia", nat: "NO", flag: "https://flagcdn.com/w80/no.png" },
  { nome: "Nuova Zelanda", nat: "NZ", flag: "https://flagcdn.com/w80/nz.png" },
  { nome: "Oman", nat: "OM", flag: "https://flagcdn.com/w80/om.png" },
  { nome: "Paesi Bassi", nat: "NL", flag: "https://flagcdn.com/w80/nl.png" },
  { nome: "Pakistan", nat: "PK", flag: "https://flagcdn.com/w80/pk.png" },
  { nome: "Palau", nat: "PW", flag: "https://flagcdn.com/w80/pw.png" },
  { nome: "Panama", nat: "PA", flag: "https://flagcdn.com/w80/pa.png" },
  {
    nome: "Papua Nuova Guinea",
    nat: "PG",
    flag: "https://flagcdn.com/w80/pg.png",
  },
  { nome: "Paraguay", nat: "PY", flag: "https://flagcdn.com/w80/py.png" },
  { nome: "Perù", nat: "PE", flag: "https://flagcdn.com/w80/pe.png" },
  { nome: "Polonia", nat: "PL", flag: "https://flagcdn.com/w80/pl.png" },
  { nome: "Portogallo", nat: "PT", flag: "https://flagcdn.com/w80/pt.png" },
  { nome: "Qatar", nat: "QA", flag: "https://flagcdn.com/w80/qa.png" },
  { nome: "Regno Unito", nat: "GB", flag: "https://flagcdn.com/w80/gb.png" },
  {
    nome: "Repubblica Ceca",
    nat: "CZ",
    flag: "https://flagcdn.com/w80/cz.png",
  },
  {
    nome: "Repubblica Centrafricana",
    nat: "CF",
    flag: "https://flagcdn.com/w80/cf.png",
  },
  {
    nome: "Repubblica del Congo",
    nat: "CG",
    flag: "https://flagcdn.com/w80/cg.png",
  },
  {
    nome: "Repubblica Dominicana",
    nat: "DO",
    flag: "https://flagcdn.com/w80/do.png",
  },
  { nome: "Romania", nat: "RO", flag: "https://flagcdn.com/w80/ro.png" },
  { nome: "Russia", nat: "RU", flag: "https://flagcdn.com/w80/ru.png" },
  { nome: "Ruanda", nat: "RW", flag: "https://flagcdn.com/w80/rw.png" },
  {
    nome: "Saint Kitts e Nevis",
    nat: "KN",
    flag: "https://flagcdn.com/w80/kn.png",
  },
  { nome: "Saint Lucia", nat: "LC", flag: "https://flagcdn.com/w80/lc.png" },
  {
    nome: "Saint Vincent e Grenadine",
    nat: "VC",
    flag: "https://flagcdn.com/w80/vc.png",
  },
  { nome: "Samoa", nat: "WS", flag: "https://flagcdn.com/w80/ws.png" },
  { nome: "San Marino", nat: "SM", flag: "https://flagcdn.com/w80/sm.png" },
  { nome: "Senegal", nat: "SN", flag: "https://flagcdn.com/w80/sn.png" },
  { nome: "Serbia", nat: "RS", flag: "https://flagcdn.com/w80/rs.png" },
  { nome: "Seychelles", nat: "SC", flag: "https://flagcdn.com/w80/sc.png" },
  { nome: "Sierra Leone", nat: "SL", flag: "https://flagcdn.com/w80/sl.png" },
  { nome: "Singapore", nat: "SG", flag: "https://flagcdn.com/w80/sg.png" },
  { nome: "Siria", nat: "SY", flag: "https://flagcdn.com/w80/sy.png" },
  { nome: "Slovacchia", nat: "SK", flag: "https://flagcdn.com/w80/sk.png" },
  { nome: "Slovenia", nat: "SI", flag: "https://flagcdn.com/w80/si.png" },
  { nome: "Somalia", nat: "SO", flag: "https://flagcdn.com/w80/so.png" },
  { nome: "Spagna", nat: "ES", flag: "https://flagcdn.com/w80/es.png" },
  { nome: "Sri Lanka", nat: "LK", flag: "https://flagcdn.com/w80/lk.png" },
  { nome: "Stati Uniti", nat: "US", flag: "https://flagcdn.com/w80/us.png" },
  { nome: "Sudafrica", nat: "ZA", flag: "https://flagcdn.com/w80/za.png" },
  { nome: "Sudan", nat: "SD", flag: "https://flagcdn.com/w80/sd.png" },
  { nome: "Sudan del Sud", nat: "SS", flag: "https://flagcdn.com/w80/ss.png" },
  { nome: "Svezia", nat: "SE", flag: "https://flagcdn.com/w80/se.png" },
  { nome: "Svizzera", nat: "CH", flag: "https://flagcdn.com/w80/ch.png" },
  { nome: "Suriname", nat: "SR", flag: "https://flagcdn.com/w80/sr.png" },
  { nome: "Taiwan", nat: "TW", flag: "https://flagcdn.com/w80/tw.png" },
  { nome: "Tagikistan", nat: "TJ", flag: "https://flagcdn.com/w80/tj.png" },
  { nome: "Tanzania", nat: "TZ", flag: "https://flagcdn.com/w80/tz.png" },
  { nome: "Thailandia", nat: "TH", flag: "https://flagcdn.com/w80/th.png" },
  { nome: "Togo", nat: "TG", flag: "https://flagcdn.com/w80/tg.png" },
  { nome: "Tonga", nat: "TO", flag: "https://flagcdn.com/w80/to.png" },
  {
    nome: "Trinidad e Tobago",
    nat: "TT",
    flag: "https://flagcdn.com/w80/tt.png",
  },
  { nome: "Tunisia", nat: "TN", flag: "https://flagcdn.com/w80/tn.png" },
  { nome: "Turchia", nat: "TR", flag: "https://flagcdn.com/w80/tr.png" },
  { nome: "Turkmenistan", nat: "TM", flag: "https://flagcdn.com/w80/tm.png" },
  { nome: "Ucraina", nat: "UA", flag: "https://flagcdn.com/w80/ua.png" },
  { nome: "Uganda", nat: "UG", flag: "https://flagcdn.com/w80/ug.png" },
  { nome: "Ungheria", nat: "HU", flag: "https://flagcdn.com/w80/hu.png" },
  { nome: "Uruguay", nat: "UY", flag: "https://flagcdn.com/w80/uy.png" },
  { nome: "Uzbekistan", nat: "UZ", flag: "https://flagcdn.com/w80/uz.png" },
  { nome: "Vanuatu", nat: "VU", flag: "https://flagcdn.com/w80/vu.png" },
  { nome: "Venezuela", nat: "VE", flag: "https://flagcdn.com/w80/ve.png" },
  { nome: "Vietnam", nat: "VN", flag: "https://flagcdn.com/w80/vn.png" },
  { nome: "Yemen", nat: "YE", flag: "https://flagcdn.com/w80/ye.png" },
  { nome: "Zambia", nat: "ZM", flag: "https://flagcdn.com/w80/zm.png" },
  { nome: "Zimbabwe", nat: "ZW", flag: "https://flagcdn.com/w80/zw.png" },
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
  if (!boolNavPersonButtonClicked) {
    $(this).toggleClass("flipped");
  }
  boolNavPersonButtonClicked = false;
});

$(document).on("click", ".checkboxFlag", function () {
  if (this.checked) {
    params.nat = $(this).attr("NAT");
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
  loadCheckbox(nation)
});

//#endregion

let params = {},
  boolNavPersonButtonClicked = false,
  nation = "";

barraProgressioneCard.style.display = "none";

loadCheckbox(nation);

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
  let divTextPerson = $("<div/>").addClass("textPerson").text("...");
  let divNavigatePerson = $("<div/>").addClass("navigatePerson");
  navPerson.forEach(function (jsonCard, i) {
    divNavigatePerson.append(
      $("<div/>")
        .addClass("navPersonButton")
        .val(vectPerson[i])
        .attr("textDisplay", jsonCard.text)
        .html(jsonCard.svg)
        .hover(function () {
          divTextPerson.text(`${$(this).attr("textDisplay")}${$(this).val()}`);
        })
        .click(function () {
          boolNavPersonButtonClicked = true;
          divTextPerson.text(`${$(this).attr("textDisplay")}${$(this).val()}`);
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
  boxCheckbox.innerHTML = ""
  bandiere.forEach(function (bandiera, i) {
    if (bandiera.nome.toUpperCase().startsWith(nation.toUpperCase()) || nation == "") {
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
