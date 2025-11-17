let intervalId;

// Update all cities (home screen)
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
}

// Start updating all clocks
intervalId = setInterval(updateTime, 1000);
updateTime();

// When choosing ONE city
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (!cityTimeZone) return;

  let cityName = cityTimeZone.split("/")[1].replace("_", " ");
  let cityTime = moment().tz(cityTimeZone);

  // Stop updating full list
  clearInterval(intervalId);

  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = `
    <div class="city">
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      <div class="time">${cityTime.format("h:mm:ss A")}</div>
    </div>

    <br>
    <a href="/" style="text-decoration:none; font-size:18px;">⬅ Back to all cities</a>
  `;

  // Start updating the selected city
  intervalId = setInterval(() => {
    let now = moment().tz(cityTimeZone);

    citiesElement.querySelector(".date").innerHTML = now.format("MMMM Do YYYY");

    citiesElement.querySelector(".time").innerHTML = now.format("h:mm:ss A");
  }, 1000);
}

document.querySelector("#city").addEventListener("change", updateCity);
