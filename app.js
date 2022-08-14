var button = document.querySelector(".button");
var inputValue = document.querySelector(".inputValue");
var name = document.querySelector(".name");
var desc = document.querySelector(".desc");
var temp = document.querySelector(".temp");

// button.addEventListener("click", function () {
//   fetch(
//     "https://api.openweathermap.org/data/2.5/weather?q=" +
//       inputValue.value +
//       "&appid=b0a08197b097d176401847667ab0fb80"
//   )
//     .then((Response) => Response.json())
//     .then((data) => console.log(data))

//     .catch((err) => alert("Wrong City name!"));
// });

button.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputValue.value +
      "&appid=b0a08197b097d176401847667ab0fb80"
  )
    .then((Response) => Response.json())
    .then((data) => {
      var nameValue = data["name"];
      var tempValue = data["main"]["temp"];
      var descValue = data["weather"][0]["description"];

      //   name.innerHtml = nameValue;

      console.log(tempValue);
      document.getElementById("temp").innerHTML = tempValue;
      document.getElementById("desc").innerHTML = descValue;
      document.getElementById("name").innerHTML = nameValue;
    })

    .catch((err) => alert("Wrong City name!"));
});
