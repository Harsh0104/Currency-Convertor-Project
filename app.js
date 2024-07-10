const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

// const BASE_URL1 = "GET /fetch-one?from=USD&to=EUR";

let btn = document.querySelector(".btn");

const fromCurr = document.querySelector(".from select");

const toCurr = document.querySelector(".To select");
const inputamount = document.querySelector("#amount");

const msg = document.querySelector(".para")

const changedate = document.querySelector(".para1");

let harsh1 = document.querySelector(".harsh");




// console.log(myname.value);

const countryList = {
    AED: "AE",
    AFN: "AF",
    XCD: "AG",
    ALL: "AL",
    AMD: "AM",
    ANG: "AN",
    AOA: "AO",
    AQD: "AQ",
    ARS: "AR",
    AUD: "AU",
    AZN: "AZ",
    BAM: "BA",
    BBD: "BB",
    BDT: "BD",
    XOF: "BE",
    BGN: "BG",
    BHD: "BH",
    BIF: "BI",
    BMD: "BM",
    BND: "BN",
    BOB: "BO",
    BRL: "BR",
    BSD: "BS",
    NOK: "BV",
    BWP: "BW",
    BYR: "BY",
    BZD: "BZ",
    CAD: "CA",
    CDF: "CD",
    XAF: "CF",
    CHF: "CH",
    CLP: "CL",
    CNY: "CN",
    COP: "CO",
    CRC: "CR",
    CUP: "CU",
    CVE: "CV",
    CYP: "CY",
    CZK: "CZ",
    DJF: "DJ",
    DKK: "DK",
    DOP: "DO",
    DZD: "DZ",
    ECS: "EC",
    EEK: "EE",
    EGP: "EG",
    ETB: "ET",
    EUR: "FR",
    FJD: "FJ",
    FKP: "FK",
    GBP: "GB",
    GEL: "GE",
    GGP: "GG",
    GHS: "GH",
    GIP: "GI",
    GMD: "GM",
    GNF: "GN",
    GTQ: "GT",
    GYD: "GY",
    HKD: "HK",
    HNL: "HN",
    HRK: "HR",
    HTG: "HT",
    HUF: "HU",
    IDR: "ID",
    ILS: "IL",
    INR: "IN",
    IQD: "IQ",
    IRR: "IR",
    ISK: "IS",
    JMD: "JM",
    JOD: "JO",
    JPY: "JP",
    KES: "KE",
    KGS: "KG",
    KHR: "KH",
    KMF: "KM",
    KPW: "KP",
    KRW: "KR",
    KWD: "KW",
    KYD: "KY",
    KZT: "KZ",
    LAK: "LA",
    LBP: "LB",
    LKR: "LK",
    LRD: "LR",
    LSL: "LS",
    LTL: "LT",
    LVL: "LV",
    LYD: "LY",
    MAD: "MA",
    MDL: "MD",
    MGA: "MG",
    MKD: "MK",
    MMK: "MM",
    MNT: "MN",
    MOP: "MO",
    MRO: "MR",
    MTL: "MT",
    MUR: "MU",
    MVR: "MV",
    MWK: "MW",
    MXN: "MX",
    MYR: "MY",
    MZN: "MZ",
    NAD: "NA",
    XPF: "NC",
    NGN: "NG",
    NIO: "NI",
    NPR: "NP",
    NZD: "NZ",
    OMR: "OM",
    PAB: "PA",
    PEN: "PE",
    PGK: "PG",
    PHP: "PH",
    PKR: "PK",
    PLN: "PL",
    PYG: "PY",
    QAR: "QA",
    RON: "RO",
    RSD: "RS",
    RUB: "RU",
    RWF: "RW",
    SAR: "SA",
    SBD: "SB",
    SCR: "SC",
    SDG: "SD",
    SEK: "SE",
    SGD: "SG",
    SKK: "SK",
    SLL: "SL",
    SOS: "SO",
    SRD: "SR",
    STD: "ST",
    SVC: "SV",
    SYP: "SY",
    SZL: "SZ",
    THB: "TH",
    TJS: "TJ",
    TMT: "TM",
    TND: "TN",
    TOP: "TO",
    TRY: "TR",
    TTD: "TT",
    TWD: "TW",
    TZS: "TZ",
    UAH: "UA",
    UGX: "UG",
    USD: "US",
    UYU: "UY",
    UZS: "UZ",
    VEF: "VE",
    VND: "VN",
    VUV: "VU",
    YER: "YE",
    ZAR: "ZA",
    ZMK: "ZM",
    ZWD: "ZW",
  };

const dropdowns = document.querySelectorAll(".dropdown select");

for(let select of dropdowns){
for(codes in countryList){
    // console.log(codes, countryList[codes] );
    let newOptions = document.createElement("option");
    newOptions.innerText = codes;
    newOptions.value = codes;
    if(select.name==="from" && codes =="USD"){
        newOptions.selected = "selected";
    }
    else if(select.name === "To" && codes === "INR"){
        newOptions.selected = "selected";
    }
    select.append(newOptions);

}

select.addEventListener("change", (evt)=>{
    updateFlag(evt.target);

});
}

// harsh1.innerText= "hiii";

const updateFlag=(element)=>{
   let codes = element.value;
   console.log(codes);
   let countrycode = countryList[codes];
   let newSrc = `https://flagsapi.com/${countrycode}/flat/64.png`;

   let img = element.parentElement.querySelector("img");
   img.src = newSrc;
   
}

inputamount.addEventListener("change" , async(evt)=>{
    // console.log("hii");
    evt.preventDefault();
    let amount = document.querySelector("#amount");
    let amountVal = amount.value;
    console.log(amountVal);
    if(amountVal===""|| amountVal<1){
      amountVal=1;
      amount.value = "1";  
    }
    console.log(fromCurr.value , toCurr.value);
 const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;

 let respone = await fetch(URL);
 let data = await respone.json();
 let date = data["date"];
 console.log(data);
 console.log(respone);
 let rate = data[toCurr.value.toLowerCase()];
 console.log(rate);
 let finalamount = amountVal*rate;
 msg.innerText = `${amountVal} ${fromCurr.value} = ${finalamount} ${toCurr.value}`;
 changedate.innerText = `Date Updated: ${date}`;
});

btn.addEventListener("click", async(evt)=>{
    evt.preventDefault();
    let amount = document.querySelector("#amount");
    let amountVal = amount.value;
    console.log(amountVal);
    if(amountVal===""|| amountVal<1){
      amountVal=1;
      amount.value = "1";  
    }
    console.log(fromCurr.value , toCurr.value);
 const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;

 let respone = await fetch(URL);
 let data = await respone.json();
 console.log(data);
 console.log(respone);
 let rate = data[toCurr.value.toLowerCase()];
 let date = data["date"];
 console.log(rate);
 console.log(date);
 let finalamount = amountVal*rate;
 msg.innerText = `${amountVal} ${fromCurr.value} = ${finalamount} ${toCurr.value}`;
 changedate.innerText = `Date Updated: ${date}`;



}) 