const tab = document.querySelector("tabs-container");

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

  const topicsDiv = document.createElement("div");
  const jsTab = document.createElement("div");
  const bsTab = document.createElement("div");
  const techTab = document.createElement("div");

  topicsDiv.appendChild(jsTab);
  topicsDiv.appendchild(bsTab);
  topicsDiv.appendChild(techTab);

  topicsDiv.classList.add("topics");
  jsTab.classList.add("tab");
  bsTab.classList.add("tab");
  techTab.classList.add("tab");

  jsTab.textContent = topics[0];
  bsTab.textContent = topics[1];
  techTab.textContent = topics[2];
}



const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //

  const topicL = "https://lambda-times-api.herokuapp.com/topics"

  topicL.forEach(item => {
    axios.get(item).then(res => {
      console.log(res.data)
      tab.appendChild(Tabs(res.data))
    })
    .catch(err => {
      alert(`You messed up real bad ${err}`)
    })
  })
}

export { Tabs, tabsAppender }
