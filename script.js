function addArticle(userTitle, userURL){
  var newArticle = document.createElement("article");
  var newH2 = document.createElement("h2");
  var newA = document.createElement("a");
  var newReadButton = document.createElement("button");
  var newDeleteButton = document.createElement("button");

  newArticle.appendChild(newH2);
  newArticle.appendChild(document.createElement('hr'));
  newArticle.appendChild(document.createElement('hr'));
  newArticle.appendChild(newA);
  newArticle.appendChild(newReadButton);
  newArticle.appendChild(newDeleteButton);

  newArticle.classList.add('card');
  newH2.innerHTML = userTitle;
  newA.innerHTML = userURL;
  newA.href = userURL;
  newReadButton.innerHTML = "Read";
  newReadButton.classList.add("readButton");
  newDeleteButton.innerHTML = "Delete";
  newDeleteButton.classList.add("deleteButton");

  var currentArticle = document.getElementById('card1');
  var sectionRight = document.querySelector('.section-right');
  sectionRight.insertBefore(newArticle, currentArticle);
}
