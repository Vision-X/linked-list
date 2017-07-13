//on page load
checkForInput();

//listeners
$("#enter-btn").on('click', function() {
  createBookmark();
})

$('.card-section').on('click', '.readButton', function() {
  $(this).parent().toggleClass("read");
  updateReadCounters();
})

$('.card-section').on('click', '.deleteButton', function() {
  $(this).parent().slideToggle("slow", function() {
    $(this).remove();
    updateTotalCounter();
    updateReadCounters();
  });
})

$(".input-field-1, .input-field-2").on('input', checkForInput);

//functions
function createBookmark() {
  var title = $(".input-field-1").val();
  var url = $(".input-field-2").val();
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
  $(".input-field-1").val("");
  $(".input-field-2").val("");
  $("#enter-btn").attr("disabled", true);
  updateTotalCounter();
  updateReadCounters();
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
