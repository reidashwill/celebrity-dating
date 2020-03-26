$(document).ready(function() {
  $("form#formGroup1").submit(function(event) {
    event.preventDefault();
    var gender = $("input:radio[name=gender]:checked").val();
    var drink = $("input:radio[name=drink]:checked").val();
    var height = $("input:radio[name=height]:checked").val();
    if(gender === 'men' && drink === 'ale' && height === 'short') {
      $('#uhura').hide();
      $('#crusher').hide();
      $('#dobby').show();
      $('#jareth').hide();
      $('#hagrid').hide();
      $('#hoggle').hide();
      $('#rosie').hide();
      $('#galadriel').hide();
    } else if(gender === 'men' && drink === 'ale' && height === 'tall') {
      $('#uhura').hide();
      $('#crusher').hide();
      $('#dobby').hide();
      $('#jareth').hide();
      $('#hagrid').show();
      $('#hoggle').hide();
      $('#rosie').hide();
      $('#galadriel').hide();
    } else if(gender === 'men' && drink === 'scotch' && height === 'short') {
      $('#uhura').hide();
      $('#crusher').hide();
      $('#dobby').hide();
      $('#jareth').hide();
      $('#hagrid').hide();
      $('#hoggle').show();
      $('#rosie').hide();
      $('#galadriel').hide();
    } else if(gender === 'men' && drink === 'scotch' && height === 'tall') {
      $('#uhura').hide();
      $('#crusher').hide();
      $('#dobby').hide();
      $('#jareth').show();
      $('#hagrid').hide();
      $('#hoggle').hide();
      $('#rosie').hide();
      $('#galadriel').hide();
    } else if(gender === 'women' && drink === 'ale' && height === 'short') {
      $('#uhura').hide();
      $('#crusher').hide();
      $('#dobby').hide();
      $('#jareth').hide();
      $('#hagrid').hide();
      $('#hoggle').hide();
      $('#rosie').show();
      $('#galadriel').hide();
    } else if(gender === 'women' && drink === 'ale' && height === 'tall') {
      $('#uhura').hide();
      $('#crusher').hide();
      $('#dobby').hide();
      $('#jareth').hide();
      $('#hagrid').hide();
      $('#hoggle').hide();
      $('#rosie').hide();
      $('#galadriel').show();
    } else if(gender === 'women' && drink === 'scotch' && height === 'short') {
      $('#uhura').hide();
      $('#crusher').show();
      $('#dobby').hide();
      $('#jareth').hide();
      $('#hagrid').hide();
      $('#hoggle').hide();
      $('#rosie').hide();
      $('#galadriel').hide();
    } else if(gender === 'women' && drink === 'scotch' && height === 'tall') {
      $('#uhura').show();
      $('#crusher').hide();
      $('#dobby').hide();
      $('#jareth').hide();
      $('#hagrid').hide();
      $('#hoggle').hide();
      $('#rosie').hide();
      $('#galadriel').hide();
    } else {
      alert('you forgot a section!');
    }
  });
});
