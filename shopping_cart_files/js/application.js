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

