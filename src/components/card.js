import axios from "axios";


const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");

  const headlineDiv = document.createElement("div");
  const authorDiv = document.createElement("div");
  const imgDiv = document.createElement("div");
  const image = document.createElement("img");
  const authorBy = document.createElement("span");

  cardDiv.appendChild(headlineDiv);
  cardDiv.appendChild(authorDiv);
  authorDiv.appendChild(imgDiv);
  imgDiv.appendChild(image);
  authorDiv.appendChild(authorBy);

  headlineDiv.classList.add("headline");
  authorDiv.classList.add("author");
  imgDiv.classList.add("img-container");

  headlineDiv.textContent = `${article.headline}`;
  authorBy.textContent = `By ${article.authorName}`;

  image.setAttribute("src", `${article.authorPhoto}`);

  cardDiv.addEventListener("click", event => {
    console.log(`Article: ${article.headline}`)
  })

  return cardDiv;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  const articlesLambda = "https://lambda-times-api.herokuapp.com/articles"
  const articleContainer = document.querySelector(selector)

  axios.get(articlesLambda)
  .then (res => {
    console.log(res.data.articles);
    const articleData = res.data.articles;
    const topics = (Object.keys(articleData))
    topics.forEach(info => {
      articleData[info].forEach(art => {
        articleContainer.appendChild(Card(art));
      })
    })
  })
  .catch (err => {
    console.log(`EVERYTHING IS BAD AND THE WORLD IS ON FIRE ${err}`);
  })
  //adding this to test the git push
}

export { Card, cardAppender }
