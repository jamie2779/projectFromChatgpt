const tweets = document.querySelector("#tweets");
const tweet = document.querySelector(".tweet");

const newTweet = tweet.cloneNode(true);
newTweet.querySelector("strong").textContent = "Another User";
newTweet.querySelector("p").textContent = "Another Sample Tweet";

tweets.appendChild(newTweet);
