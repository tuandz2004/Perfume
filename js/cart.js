
$(document).ready(function () {
  // Kiểm tra nếu đã có sessionStorage["shopping-cart-items"] hay chưa?
  if (sessionStorage["shopping-cart-items"] != null) {
    shoppingCartItems = JSON.parse(sessionStorage["shopping-cart-items"]);
  } else {
    shoppingCartItems = [];
  }

  // Hiển thị thông tin từ giỏ hàng
  displayShoppingCartItems();
});

// Sự kiện click các button có class=".add-to-cart"
$(document).on("click", ".add-to-cart", function () {
  var button = $(this);
  var id = button.attr("id");
  var name = button.attr("data-name");
  var price = button.attr("data-price");
  var anh=button.attr("anh")
  var quantity = 1;

  var item = {
    id: id,
    name: name,
    price: price,
    anh:anh,
    quantity: quantity
  };

  var exists = false;
  $.each(shoppingCartItems, function (index, value) {
    if (value.id == item.id) {
      value.quantity++;
      exists = true;
      return false;
    }
  });

  if (!exists) {
    shoppingCartItems.push(item);
  }

  sessionStorage["shopping-cart-items"] = JSON.stringify(shoppingCartItems);
  displayShoppingCartItems();
});

// Xóa hết giỏ hàng shoppingCartItems
$(document).on("click", "#button-clear", function () {
  shoppingCartItems = [];
  sessionStorage.removeItem("shopping-cart-items");
  $("#table-products > tbody").html("");
  // Tính tổng số tiền trong giỏ hàng
function calculateTotalAmount() {
  var totalAmount = 0;
  
  $.each(shoppingCartItems, function (index, item) {
    var itemPrice = parseFloat(item.price);
    var itemQuantity = parseInt(item.quantity);
    var itemTotal = itemPrice * itemQuantity;
    totalAmount += itemTotal;
  });
  return totalAmount;
}
$(document).ready(function() {
  displayShoppingCartItems();
  var totalAmount = calculateTotalAmount();
  $("#total-amount").text("$"+ totalAmount);
});
});

// Hiển thị giỏ hàng ra table
function displayShoppingCartItems() {
  var htmlString = "";
  $.each(shoppingCartItems, function (index, item) {
    htmlString += "<tr>";
    
    htmlString += "<td>" +"<img src="+ item.anh +" width='100' alt='' >" + "</td>";
    htmlString += "<td>" + item.name + "</td>";
    htmlString += "<td style='text-align: right'>" + item.price + "</td>";
    htmlString += "<td>";
    htmlString += "<button class='btn btn-sm btn-primary decrease-quantity' data-id='" + item.id + "'>-</button>";
    htmlString += "<span class='quantity'>" + item.quantity + "</span>";
    htmlString += "<button class='btn btn-sm btn-primary increase-quantity' data-id='" + item.id + "'>+</button>";
    htmlString += "</td>";
    htmlString += "<td style='text-align: right'>" + "$"+item.price * item.quantity + "</td>";
    htmlString += "<td><button class='btn btn-sm btn-danger delete-quantity' data-id='" + item.id + "'>Delete</button></td>";
    htmlString += "</tr>";
  });

  $("#table-products > tbody").html(htmlString);
}


// Giảm số lượng của item trong giỏ hàng
$(document).on("click", ".decrease-quantity", function () {
  var itemId = $(this).data("id");
  decreaseCartItemQuantity(itemId);
  displayShoppingCartItems();
  // Tính tổng số tiền trong giỏ hàng
function calculateTotalAmount() {
  var totalAmount = 0;
  
  $.each(shoppingCartItems, function (index, item) {
    var itemPrice = parseFloat(item.price);
    var itemQuantity = parseInt(item.quantity);
    var itemTotal = itemPrice * itemQuantity;
    totalAmount += itemTotal;
  });
  return totalAmount;
}

$(document).ready(function() {
  // Gọi hàm displayShoppingCartItems để hiển thị thông tin giỏ hàng
  displayShoppingCartItems();
  
  // Tính tổng số tiền
  var totalAmount = calculateTotalAmount();
  
  // In tổng số tiền lên trang HTML
  $("#total-amount").text("$"+ totalAmount);
});
});

// Tăng số lượng của item trong giỏ hàng
$(document).on("click", ".increase-quantity", function () {
  var itemId = $(this).data("id");
  increaseCartItemQuantity(itemId);
  displayShoppingCartItems();
  // Tính tổng số tiền trong giỏ hàng
function calculateTotalAmount() {
  var totalAmount = 0;
  
  $.each(shoppingCartItems, function (index, item) {
    var itemPrice = parseFloat(item.price);
    var itemQuantity = parseInt(item.quantity);
    var itemTotal = itemPrice * itemQuantity;
    totalAmount += itemTotal;
  });
  return totalAmount;
}
$(document).ready(function() {
  displayShoppingCartItems();
  var totalAmount = calculateTotalAmount();
  $("#total-amount").text("$"+ totalAmount);
});
});

// Xoá số lượng của item trong giỏ hàng
$(document).on("click", ".delete-quantity", function () {
  var itemId = $(this).data("id");
  deleteCartItemQuantity(itemId);
  displayShoppingCartItems();
  // Tính tổng số tiền trong giỏ hàng
function calculateTotalAmount() {
  var totalAmount = 0;
  
  $.each(shoppingCartItems, function (index, item) {
    var itemPrice = parseFloat(item.price);
    var itemQuantity = parseInt(item.quantity);
    var itemTotal = itemPrice * itemQuantity;
    totalAmount += itemTotal;
  });
  return totalAmount;
}
$(document).ready(function() {
  displayShoppingCartItems();
  var totalAmount = calculateTotalAmount();
  $("#total-amount").text("$"+ totalAmount);
});
});

// Giảm số lượng của item trong giỏ hàng
function decreaseCartItemQuantity(itemId) {
  $.each(shoppingCartItems, function (index, item) {
    if (item.id === itemId && item.quantity > 1) {
      item.quantity--;
      return false;
    }
  });
}

// Tăng số lượng của item trong giỏ hàng
function increaseCartItemQuantity(itemId) {
  $.each(shoppingCartItems, function (index, item) {
    if (item.id === itemId) {
      item.quantity++;
      return false;
    }
  });
}

// Xoá số lượng của item trong giỏ hàng
function deleteCartItemQuantity(itemId) {
  shoppingCartItems = shoppingCartItems.filter(function (item) {
    return item.id !== itemId;
  });
}
// Tính tổng số tiền trong giỏ hàng
function calculateTotalAmount() {
  var totalAmount = 0;
  
  $.each(shoppingCartItems, function (index, item) {
    var itemPrice = parseFloat(item.price);
    var itemQuantity = parseInt(item.quantity);
    var itemTotal = itemPrice * itemQuantity;
    totalAmount += itemTotal;
  });
  return totalAmount;
}
$(document).ready(function() {
  displayShoppingCartItems();
  var totalAmount = calculateTotalAmount();
  $("#total-amount").text("$"+ totalAmount);
});



// Xử lý sự kiện nút thanh toán
var checkoutButton = document.getElementById('checkout-button');
$(document).ready(function() {
  $('#checkout-button').click(function() {
    shoppingCartItems = [];
    sessionStorage.removeItem("shopping-cart-items");
    $("#table-products > tbody").html("");
    alert('Đã thanh toán thành công!');
  });
});
