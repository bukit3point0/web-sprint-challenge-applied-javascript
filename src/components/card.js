

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

  // article.forEach(story => {
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

  // })

  return cardDiv;
}

const articlesY = {
  0: {
    id: "1e4d8724-5973-4b5b-84d9-a30a3c5adb70", 
    headline: "ES8: The Next Step in the Evolution of Javascript and What it Means For Your Projects", 
    authorPhoto: "https://tk-assets.lambdaschool.com/08d1372e-e393-47f1-ac44-fcb7d0baf0e2_sir.jpg", 
    authorName: "SIR RUFF'N'STUFF"},
  1: {
    id: "553e2401-c95d-4029-89b8-fc6bdb60ae5e", 
    headline: "Type Coercion: Why Does NaN !== NaN? and Other Strange Occurrences", 
    authorPhoto: "https://tk-assets.lambdaschool.com/a9471235-ed71-4b11-ae15-5a4fa1151d30_bones.jpg", 
    authorName: "BONES R. LIFE"},
  2: {
    id: "9c2ed89e-7150-4cd6-a5c2-4a4f3d6932c8", 
    headline: "When to Rest, When to Spread: Why There Are Two Meanings Behind '...'", 
    authorPhoto: "https://tk-assets.lambdaschool.com/44260ce3-c8f0-4db8-bc1d-9877662fdf96_puppers.jpg", 
    authorName: "PUPPER S. DOGGO"},
  3: {
    id: "b3af02ec-5733-4a14-8876-5db708d20051", 
    headline: "Typescript: Ten Things you Should Know Before Building Your Next Angular Application", 
    authorPhoto: "https://tk-assets.lambdaschool.com/08d1372e-e393-47f1-ac44-fcb7d0baf0e2_sir.jpg", 
    authorName: "SIR RUFF'N'STUFF"},
}

// console.log(articlesY[0].headline)
// console.log(articlesY[1])
// console.log(articlesY[2])
// console.log(articlesY[3])


for (let i=0; i<articlesY.length; i++) {
  console.log(articlesY[i].headline);
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
  console.log(articlesLambda)

  const articleContainer = document.querySelector(selector);

  articleContainer.appendChild(Card(articlesY["0"]))

  axios.get(articlesLambda)
  .then (res => {
    const array = res.data
    console.log(array)
    array.forEach(item => {
      console.log(item)
    })

  })
  .catch (err => {
    alert `WHYYYYYYYYYY ${err}`
  })

  

  // articlesY.forEach(item => {
  //   const array = item
  //   console.log(array)
  //   articleContainer.appendChild(Card(articlesY[array]))
  // })

  
    // axios.get(articlesLambda)
    // .then(res => {
    //   console.log(res.data.articles.javascript)
    //   articleContainer.appendChild(Card(res.data.articles.javascript))
    //   console.log(articleContainer)
    // })
    // .catch(err => {
    //   alert(`You messed up real bad ${err}`)
    // })
  
}

export { Card, cardAppender }
