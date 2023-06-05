// Make an HTTP GET request to the API endpoint
fetch("https://type.fit/api/quotes")
  .then((response) => response.json())
  .then((data) => {
    // Use the data in your project
    const randomIndex = Math.floor(Math.random() * data.length);
    const quote = data[randomIndex].text;
    const author = data[randomIndex].author;

    const indexElement = document.getElementById("index");
    indexElement.innerText = randomIndex

    const quoteElement = document.getElementById("quote");
    quoteElement.innerText = quote;

    const authorElement = document.getElementById("author");
    authorElement.innerText = author;
  })
  .catch((error) => {
    console.log("Error:", error);
  });

// async function hitAPI() {
//   const api = await fetch(endpoint);
//   const data = api.json();
//   console.log(data);
// }

// hitAPI();
