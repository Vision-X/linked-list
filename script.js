$("#enter").on('click', function(){
  checkForError();
})

//readButton
$('.card-section').on('click', '.readButton', function(){
  $(this).parent().toggleClass("read");
})
//deleteButton
$('.card-section').on('click', '.deleteButton', function(){
  // $(this).parent().toggle(".read");
  // $(this).parent().remove();
  $(this).parent().slideToggle("slow", function(){
    $(this).remove();
  });
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
  `;
  $(".card-section").prepend(placeholder);
  //clear fields
  $(".inputField1").val("");
  $(".inputField2").val("");
  //disable enter button
  // $("#enter").attr("disabled", true); //works, no enable function built
}

function checkForError(){
  var title = $(".inputField1").val();
  var url = $(".inputField2").val();
  if (title === "" || url === ""){
    alert("A Title and URL are required to submit")
  }
  else {
    createBookmark();
  }
}
