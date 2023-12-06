document.querySelector("button").addEventListener("click", getFetch);
const iframe = document.querySelector("iframe");
const img = document.querySelector("img");
const explanation = document.querySelector("#explanation");

function getFetch() {
  const choice = document.querySelector("input").value;

  const url = `https://api.nasa.gov/planetary/apod?api_key=indnPhDKN3xXETqcUDUwrKSnETefnW5chcIS4fDd`;

  fetch(url + "&date=" + `${choice}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      img.src = null;
      iframe.src = null;
      explanation.value = null;
      switch (data.media_type) {
        case "image":
          img.style.display = "block";
          explanation.style.display = "";
          img.src = data.hdurl;
          iframe.style.display = "none";
          break;
        case "video":
          iframe.style.display = "block";
          iframe.src = data.url;
          img.style.display = "none";
          explanation.style.display = "";
          break;
        default:
          img.src = "/img/waiting.jpg";
      }
      if (data.code == 400) {
        document.querySelector("h3").innerText = data.msg;
        explanation.style.display = "none";
      } else {
        document.querySelector("h3").innerText = data.title;
        document.querySelector("#explanation").innerText = data.explanation;
      }
    })
    .catch((err) => console.log(`error ${err}`));
}

// Fix So the dates are valid
