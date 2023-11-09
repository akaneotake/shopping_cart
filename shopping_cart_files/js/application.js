// Update the Subtotal
var updateSubtotal = function(ele) {
  var quantity = $(ele).find('.quantity input').val();
  var price = $(ele).find('.price span').text();
  var cost = $(ele).find('.cost span');
  var newCost = (quantity * price).toFixed(2);

  if (quantity > 0) {    
    $(cost).html(newCost);
  } else if (quantity === '') {
    $(cost).html('');
  };
  return $(cost).html();
};

// Update the Total Cost
var updateTotalCost = function() {
  var costs = [];
  $('.itemList').each(function(i, ele) {
    var newCost = updateSubtotal(ele);
    costs.push(Number(newCost));
  });
  var totalCost = costs.reduce(function(sum, num) { 
    return sum + num;
  });
  $('#totalCost span').html(totalCost.toFixed(2));
};

// When DOM is ready:
$(document).ready(function() {
  // Update the Subtotal and Total Cost by Quantity input
  var timeout;
  $(document).on('input', '.quantity input', function() {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      updateSubtotal();
      updateTotalCost();
    }, 500);
  });

  // Remove Items
  $(document).on('click', '.remove i', function() {
    var itemList = $(this).parent().parent('.itemList');
    $(itemList).remove();
    // Total Cost - Subtotal of the deleted element
    var totalCost = $('#totalCost span');
    var cost = $(this).parent().siblings('.cost').children('span').text();
    $(totalCost).html((totalCost.html() - cost).toFixed(2));
  });

  // Add Items
  $(document).on('click', '#addBtn button', function() {
    var newItem = $('#newItem input').val();
    var newPrice = Number($('#newPrice input').val()).toFixed(2);
    $('#addItems').before('<tr class="itemList"><td class="item">' + newItem + '</td><td class="price">$<span>' + newPrice +'</span></td><td class="quantity"><input type="number" value="0"/></td><td class="cost">$<span></span></td><td class="remove"><i class="fa-regular fa-trash-can"></i></td></tr>');
    // Delete the input value after add item
    $('#newItem input').val('');
    $('#newPrice input').val('');
  });
});