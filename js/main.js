document.querySelector("button").addEventListener("click", getFetch);
const iframe = document.querySelector("iframe");
const img = document.querySelector("img");

function getFetch() {
  const choice = document.querySelector("input").value;

  const url = `https://api.nasa.gov/planetary/apod?api_key=indnPhDKN3xXETqcUDUwrKSnETefnW5chcIS4fDd`;

  fetch(url + "&date=" + `${choice}`)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      img.src = null;
      iframe.src = null;
      switch (data.media_type) {
        case "image":
          img.style.display = "block";
          img.src = data.hdurl;
          iframe.style.display = "none";
          break;
        case "video":
          iframe.style.display = "block";
          iframe.src = data.url;
          img.style.display = "none";
          break;
        default:
          img.src = "/img/nasa.jpg";
      }
      if (data.code == 400) {
        document.querySelector("h3").innerText = data.msg;
        document.querySelector(".explanation").innerText =
          "Please enter a valid date to get a description";
      } else {
        document.querySelector("h3").innerText = data.title;
        document.querySelector(".explanation").innerText = data.explanation;
      }
    })
    .catch((err) => console.log(`error ${err}`));
}

// Fix So the dates are valid
