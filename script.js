$("#enter").on('click', function(){
  createBookmark();
  // clearFields();
  // disableEnter();
})

function createBookmark(){
  var title = $(".inputField1").val();
  var url = $(".inputField2").val();
  var placeholder = `
  <article class="card">
    <h2>${title}</h2>
    <hr>
    <a target = _blank href="${url}">${url}</a>
    <hr>
    <button type="button" class="readButton">Read</button>
    <button type="button" class="deleteButton">Delete</button>
  </article>
  `
  $(".card-section").prepend(placeholder);
  //clear fields
  $(".inputField1").val("");
  $(".inputField2").val("");
  //disable enter button
  $("#enter").attr("disabled", true);
}
