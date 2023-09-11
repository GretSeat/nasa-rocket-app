document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const choice = document.querySelector("input").value;
  const url = `https://api.nasa.gov/planetary/apod?api_key=indnPhDKN3xXETqcUDUwrKSnETefnW5chcIS4fDd`;

  try {
    fetch(url + "&date=" + `${choice}`)
      .then((res) => res.json())
      .then((data) => {
        document.querySelector("img").src = null;
        document.querySelector("iframe").src = null;
        switch (data.media_type) {
          case "image":
            document.querySelector("img").hidden = false;
            document.querySelector("img").src = data.hdurl;
            document.querySelector("iframe").hidden = true;
            break;
          case "video":
            document.querySelector("iframe").hidden = false;
            document.querySelector("iframe").src = data.url;
            document.querySelector("img").hidden = true;
            break;
          default:
        }

        document.querySelector("h3").innerText = data.explanation;
      });
  } catch (err) {
    console.log(`error ${err}`);
  }
}
