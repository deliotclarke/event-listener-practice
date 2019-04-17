console.log("my man!");

//mirror mirror code below here
const message = document.querySelector("#message");
const mirrorOne = document.querySelector("#mirrorone");
const mirrorTwo = document.querySelector("#mirrortwo");

message.addEventListener("keyup", function (event) {
  mirrorOne.textContent = event.target.value
  mirrorTwo.textContent = event.target.value
})

//feed me seymour code below here
const audrey = document.getElementById("audrey")

/*
    Add an event listener to the `document` object to listen
    for the "scroll" event.
*/
window.addEventListener("scroll", function () {
  let yep = window.scrollY / 3;
  let yep2 = window.scrollY / 4;
  if (yep > 50) {
    audrey.style.width = `${yep}px`;
  }
  if (yep > 100) {
    audrey.style.height = `${yep2}px`;
  }
  /*
      Adjust the width of audrey to be 1/3 the value of
      `window.scrollY`. No lower than 50px, though.
  */



  /*
      Adjust the height of audrey to be 1/4 the value of
      `window.scrollY`. No lower than 100px, though.
  */
})

//wonder powers code below here

//<section id="flight" class="power disabled">
//when button is clicked it should change class to "power enabled"

const flight = document.querySelector("#flight");
const xray = document.querySelector("#xray");
const mindreading = document.querySelector("#mindreading");
const powerArr = [flight, xray, mindreading]
const all = document.querySelectorAll(".power");

// const flightHandler = () => {
//   flight.className = "power enabled";
// }

// const xrayHandler = () => {
//   xray.className = "power enabled";
// }

// const mindHandler = () => {
//   mind.className = "power enabled";
// }

const activateAll = () => {
  all.forEach((item) => {
    item.className = "power enabled";
  })
}

const deactivateAll = () => {
  all.forEach((item) => {
    item.className = "power disabled";
  })
}

//i need one function that will change the "disabled" part of each of the individual powers to "enabled"

const oneFunction = e => {
  let splitArr = e.target.id.split("-");
  powerArr.forEach((item) => {
    if (splitArr[1] == item.id) {
      item.className = "power enabled";
    }
  })
  // if (splitArr[1] === "flight") {
  //   flight.className = "power enabled";
  // } else if (splitArr[1] === "mindreading") {
  //   mindreading.className = "power enabled";
  // } else if (splitArr[1] === "xray") {
  //   xray.className = "power enabled";
  // }
}


document.querySelector("#activate-mindreading").addEventListener("click", oneFunction);
document.querySelector("#activate-xray").addEventListener("click", oneFunction);
document.querySelector("#activate-flight").addEventListener("click", oneFunction);
document.querySelector("#activate-all").addEventListener("click", activateAll);
document.querySelector("#deactivate-all").addEventListener("click", deactivateAll);