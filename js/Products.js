function name(params) {
    
}

function ConvertListProDuctsToHTML(ListProducts) {
    var HTMLListProducts = 
    '<div id="products" class="container">';
    for (var i = 0; i < ListProducts.length; i++)
    {
        var Products = ListProducts[i];
        var HTMLProducts = ConvertProductsToHTML(Products);
        HTMLListProducts += HTMLProducts;
    }
    HTMLListProducts += '</div>';
    return HTMLListProducts;
}

function ConvertProductsToHTML(Products) {
    var HTML = '';
    HTML += '<div class="col-md-3 p-1">'
    HTML += '<div class="card" style="border-radius: 0;">'
    HTML += '<img class="card-img-top" src="Img/Collections/015.png" alt="Card image" style="width:100%">'
    HTML += '<div class="card-body">'
    HTML += '<h4 class="card-title">Mô Hình Đồ Chơi POP MART Nori Youth</h4>'
    HTML += '<p class="card-text">280,000đ</p>'
    HTML += '<a href="GioHang1.html" class="btn btn-primary text-center" style="width: 80%;">Mua ngay</a>'
    HTML += '<button type="button" class="btn btn-default btn-md">'
    HTML += '<span class="glyphicon glyphicon-shopping-cart"></span>'
    HTML += '</button>'
    HTML += '</div>'
    HTML += '</div>'
    HTML += '</div>'
    return HTML;
}