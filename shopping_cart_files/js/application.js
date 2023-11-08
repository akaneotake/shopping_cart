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
    // Quantityの入力やめたとき0に戻す？
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










// function for sum
var sum = function(acc, x) {
  return acc + x;
};

// Update the Total Cost
var updateTotalCost = function() {
  var costs = [];

  $('tbody tr').each(function(i, ele) {
    var newCost = updateSubtotal();
    costs.push(newCost);
  });

  var totalCost = costs.reduce(sum);

  $('#totalCost span').html(totalCost);
};





// When DOM is ready:
$(document).ready(function() {
  // Update Total Cost
  updateTotalCost();

  // Remove Items
  $(document).on('click', '.remove i',(function() {
    var itemList = $(this).parent().parent();
    $(itemList).remove();
  }));


  // Update Total Cost by input
  var timeout;
  $(document).on('input', 'tr input', function() {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      updateTotalCost();
    }, 1000);
  });


  // Add Items
  $(document).on('click', '#addBtn button', function() {
    var newItem = $('#newItem input').val();
    var newPrice = Number($('#newPrice input').val()).toFixed(2);
    $('#addItems').before('<tr class="itemList"><td class="item">' + newItem + '</td><td class="price">$<span>' + newPrice +'</span></td><td class="quantity"><input type="number" value="0"/></td><td class="cost"></td><td class="remove"><i class="fa-regular fa-trash-can"></i></i></td></tr>');

    updateTotalCost();

    // Delete the input value after add
    $('#newItem input').val('');
    $('#newPrice input').val('');
  });
});