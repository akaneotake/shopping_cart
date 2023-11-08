// Update the subtotal by input Quantity
$(document).on('input', '.quantity input', function() {
  var quantity = $(this).closest('input').val();
  var price = $(this).parent().siblings('.price').children('span').text();
  var cost = $(this).parent().siblings('.cost');
  var newCost = (quantity * price).toFixed(2);

  if (quantity > 0) {    
    $(cost).html('$<span>' + newCost + '</span>');
  } else if (quantity === '') {
    $(cost).html('');
  };
  return cost;
 });

////////// THIS DOESN'T WORK!!! //////////
var updateSubtotal = function() {
  var quantity = $(this).closest('input').val();
  var price = $(this).parent().siblings('.price').children('span').text();
  var cost = $(this).parent().siblings('.cost');
  var newCost = (quantity * price).toFixed(2);
  if (quantity > 0) {    
    $(cost).html('$<span>' + newCost + '</span>');
  } else if (quantity === '') {
    $(cost).html('');
  };
  return cost;
};

$(document).on('input', '.quantity input', function() {
  updateSubtotal();
});
//////////////////////////////////////////////


// Add Items
$(document).on('click', '#addBtn button', function() {
  var newItem = $('#newItem input').val();
  var newPrice = Number($('#newPrice input').val()).toFixed(2);
  $('#addItems').before('<tr class="itemList"><td class="item">' + newItem + '</td><td class="price">$<span>' + newPrice +'</span></td><td class="quantity"><input type="number" value="0"/></td><td class="cost"></td><td class="removeBtn"><button class="btn">Remove</button></td></tr>');
  // Delete the input value after add
  $('#newItem input').val('');
  $('#newPrice input').val('');
});

// Remove Items
$(document).on('click', '.removeBtn button',(function() {
  var itemList = $(this).parent().parent();
  $(itemList).remove();
}));