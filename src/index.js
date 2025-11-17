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
