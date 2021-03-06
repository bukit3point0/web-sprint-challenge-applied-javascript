

const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

const thisHeader = document.createElement("div");
const thisDate = document.createElement("span");
const thisTitle = document.createElement("h1");
const thisTemp = document.createElement("span");

thisHeader.classList.add("header");
thisDate.classList.add("date");
thisTemp.classList.add("temp");

thisDate.textContent = date;
thisTitle.textContent = title;
thisTemp.textContent = temp;

thisHeader.appendChild(thisDate);
thisHeader.appendChild(thisTitle);
thisHeader.appendChild(thisTemp);

return thisHeader;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  
const headerContainer = document.querySelector(selector);

headerContainer.appendChild(Header("Lambda Times","February 12, 2021","35*"))

}

export { Header, headerAppender }
