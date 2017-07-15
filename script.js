//on page load
checkForInput();
toggleReadButton();

//listeners
$("#enter-btn").on('click', function() {
  createBookmark();
})

$('.card-section').on('click', '.readbtn', function() {
  $(this).parent().toggleClass("read");
  updateReadCounters();
  toggleReadButton();
})

$('.card-section').on('click', '.deletebtn', function() {
  $(this).parent().slideToggle("slow", function() {
    $(this).remove();
    updateTotalCounter();
    updateReadCounters();
  });
})

$(".input-field-1, .input-field-2").on('input', checkForInput);

$("#clear-read-btn").on('click', function(){
  $(".card.read").slideToggle("slow", function(){
    $(this).remove();
    updateTotalCounter();
    updateReadCounters();
  })
})

//functions
function createBookmark() {
  var title = $(".input-field-1").val();
  var url = $(".input-field-2").val();
  if(/^(http[s]?:\/\/)/.test(url)){
    var pathURL = url;
  }
  else {
    var pathURL = "http://" + url;
  }
  var placeholder = `
  <article class="card">
    <h2>${title}</h2>
    <hr>
    <a target = _blank href="${pathURL}">${url}</a>
    <hr>
    <button type="button" class="readbtn">Read</button>
    <button type="button" class="deletebtn">Delete</button>
  </article>
  `;
  $(".card-section").prepend(placeholder);
  $(".input-field-1").val("");
  $(".input-field-2").val("");
  $("#enter-btn").attr("disabled", true);
  updateTotalCounter();
  updateReadCounters();
  $("p, #clear-read-btn").slideDown("slow");
}

function checkForInput() {
  var title = $(".input-field-1").val();
  var url = $(".input-field-2").val();
  if (title === "" || url === ""){
    $("#enter-btn").attr("disabled", true);
  }
  else {
    $("#enter-btn").attr("disabled", false);
  }
}

function updateTotalCounter() {
  var currentCardCount = $('.card').length;
  $('#total-display').text(currentCardCount);
}

function updateReadCounters() {
  var currentReadCount = $('.card.read').length;
  $('#read-display').text(currentReadCount);
  var currentUnreadCount = $('.card').length - $('.card.read').length;
  $('#unread-display').text(currentUnreadCount);
}
function toggleReadButton(){
  if($('.read').length === 0){
    console.log('should disable');
    $("#clear-read-btn").attr('disabled', true);
  }
  else{
    console.log('should enable');
    $("#clear-read-btn").attr('disabled', false);
  }
}
