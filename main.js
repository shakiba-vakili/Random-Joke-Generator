const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const copyBtn = document.querySelector(".copy");

const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {
  jokeContainer.classList.remove("fade");
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      jokeContainer.textContent = `${item.joke}`;
      jokeContainer.classList.add("fade");
    });
};

copyBtn.addEventListener("click", () => {
  let text = document.querySelector("p").textContent;

  // Copy the text inside the text field
  navigator.clipboard.writeText(text);

  // Alert the copied text
  alert("Copied");
});

btn.addEventListener("click", getJoke);
getJoke();
