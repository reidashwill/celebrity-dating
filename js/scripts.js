$(document).ready(function() {
  $("form#formGroup1").submit(function(event) {
    event.preventDefault();
    var gender = $("input:radio[name=gender]:checked").val();
    if(gender === 'men') {
      $('#rosie').hide();
      $('#frank').show();
    } else if(gender ==='women') {
      $('#frank').hide();
      $('#rosie').show();
    }
  });
});
