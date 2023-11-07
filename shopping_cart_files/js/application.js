// Change the Cost value by input Quantity
$(document).on('input', '.quantity input', function() {
  var quantity = $(this).closest('input').val();
  console.log(quantity);
  var price = $(this).parent().prev().children('span').text();
  console.log(price);
  var newCost = (quantity * price).toFixed(2);
  if (quantity > 0) {    
    var cost = $(this).parent().next().html('$' + newCost);
    return cost;
  };
});

// Add Items
$('#addBtn button').click(function() {
  var newItem = $('#newItem input').val();
  var newPrice = $('#newPrice input').val();
  $('#addItems').before('<tr><td class="item">' + newItem + '</td><td class="price">$<span>' + newPrice +'</span></td><td class="quantity"><input type="number" value="0"/></td><td class="cost"></td><td><button class="btn">Remove</button></td></tr>');

  // Delete the input value after add
  $('#newItem input').val('');
  $('#newPrice input').val('');
});

// Remove Items
$('.removeBtn button').click(function() {
  var itemList = $(this).parent().parent();
  $(itemList).remove();
});