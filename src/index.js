function updateTime() {
  // Los Angeles
  const losAngeles = document.querySelector("#Los-angeles");
  if (losAngeles) {
    losAngeles.querySelector(".date").innerHTML = moment()
      .tz("America/Los_Angeles")
      .format("MMMM Do YYYY");

    losAngeles.querySelector(".time").innerHTML = moment()
      .tz("America/Los_Angeles")
      .format("h:mm:ss A");
  }

  // Tokyo
  const tokyo = document.querySelector("#Tokyo");
  if (tokyo) {
    tokyo.querySelector(".date").innerHTML = moment()
      .tz("Asia/Tokyo")
      .format("MMMM Do YYYY");

    tokyo.querySelector(".time").innerHTML = moment()
      .tz("Asia/Tokyo")
      .format("h:mm:ss A");
  }

  // Paris
  const paris = document.querySelector("#Paris");
  if (paris) {
    paris.querySelector(".date").innerHTML = moment()
      .tz("Europe/Paris")
      .format("MMMM Do YYYY");

    paris.querySelector(".time").innerHTML = moment()
      .tz("Europe/Paris")
      .format("h:mm:ss A");
  }

  // Sydney
  const sydney = document.querySelector("#Sydney");
  if (sydney) {
    sydney.querySelector(".date").innerHTML = moment()
      .tz("Australia/Sydney")
      .format("MMMM Do YYYY");

    sydney.querySelector(".time").innerHTML = moment()
      .tz("Australia/Sydney")
      .format("h:mm:ss A");
  }
}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="city" id="${cityTimeZone.replace("_", "-").split("/")[1]}">
      <h2>${cityTimeZone.replace("_", " ").split("/")[1]}</h2>
      <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      <div class="time">${cityTime.format("h:mm:ss A")}</div>
    </div>
    <a href="/">&#8592; Back to all cities</a>
  `;
}
let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
