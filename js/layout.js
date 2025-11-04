var app = angular.module('myApp',['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
    .when('/home',{
        templateUrl: 'home.html'
    })
    .when('/sanpham',{
        templateUrl: 'sanpham.html'
        
    })
    .when('/gioithieu',{
        templateUrl: 'gioithieu.html'
        
    })
    .when('/doanhthu',{
        templateUrl: 'dangnhap.html'
        
    })
    .when('/hoidap',{
        templateUrl: 'hoidap.html'
        
    })
    .when('/lienhe',{
        templateUrl: 'lienhe.html'
        
    })
    .when('/dangnhap',{
        templateUrl: 'dangnhap.html'
        
    })
    .when('/quenmatkhau',{
        templateUrl: 'quenmatkhau.html'
        
    })
    .when('/giohang',{
        templateUrl: 'giohang.html'
        
    })
    .when('/search',{
        templateUrl: 'search.html'
        
    })
    .otherwise({
        redirectTo:'/home'
    })
});
app.controller('productCtrl',function($scope){
    $scope.list_sanpham = [
        {
            id: "h1",
            name: "King",
            price: 280000,
            quantity: 1
        },
        {
            id: "h2",
            name: "Giò",
            price: 280000,
            quantity: 1
        },
        {
            id: "h3",
            name: "Goodgirl",
            price: 359000,
            quantity: 1
        },
        {
            id: "h4",
            name: "Luxury",
            price: 660000,
            quantity: 1
        },
        {
            id: "h5",
            name: "Sexy",
            price: 280000,
            quantity: 1
        },
        {
            id: "h6",
            name: "Charme",
            price: 280000,
            quantity: 1
        },
        {
            id: "h7",
            name: "Vescara",
            price: 280000,
            quantity: 1
        },
        {
            id: "h8",
            name: "Sauvage",
            price: 3220000,
            quantity: 1
        },
        {
            id: "h9",
            name: "CoCo",
            price: 320000,
            quantity: 1
        }
        
    ];
    $scope.list_sanpham1 = [
        {
            id: "h10",
            name: "Roja",
            price: 4000000,
            quantity: 1
        },
        {
            id: "h11",
            name: "Scandal",
            price: 3500000,
            quantity: 1
        },
        {
            id: "h12",
            name: "Body yellow",
            price: 190000,
            quantity: 1
        },
        {
            id: "h13",
            name: "Violon",
            price: 280000,
            quantity: 1
        },
        {
            id: "h14",
            name: "Paco Phantom",
            price: 500000,
            quantity: 1
        },
        {
            id: "h15",
            name: "Untol",
            price: 300000,
            quantity: 1
        },
        {
            id: "h16",
            name: "Cherry Blossom",
            price: 260000,
            quantity: 1
        },
        {
            id: "h17",
            name: "SecRow",
            price: 250000,
            quantity: 1
        },

        {
            id: "h18",
            name: "Sauve",
            price: 250000,
            quantity: 1
        },
        {
            id: "h19",
            name: "FrenchKiss",
            price: 400000,
            quantity: 1
        },
        {
            id: "h20",
            name: "Pink",
            price: 380000,
            quantity: 1
        },
        {
            id: "logo1",
            name: "Mon",
            price: 10000000,
            quantity: 1
        }
    ];
    $scope.list_sanpham_chinh = [
        {
            id: "h1",
            name: "King",
            price: 280000,
            quantity: 1
        },
        {
            id: "h2",
            name: "Giò",
            price: 280000,
            quantity: 1
        },
        {
            id: "h3",
            name: "Goodgirl",
            price: 359000,
            quantity: 1
        },
        {
            id: "h4",
            name: "Luxury",
            price: 660000,
            quantity: 1
        },
        {
            id: "h5",
            name: "Sexy",
            price: 280000,
            quantity: 1
        },
        {
            id: "h6",
            name: "Charme",
            price: 280000,
            quantity: 1
        },
        {
            id: "h7",
            name: "Vescara",
            price: 280000,
            quantity: 1
        },
        {
            id: "h8",
            name: "Sauvage",
            price: 3220000,
            quantity: 1
        },
        {
            id: "h9",
            name: "CoCo",
            price: 320000,
            quantity: 1
        },
        {
            id: "h10",
            name: "Roja",
            price: 4000000,
            quantity: 1
        },
        {
            id: "h11",
            name: "Scandal",
            price: 3500000,
            quantity: 1
        },
        {
            id: "h12",
            name: "Body yellow",
            price: 190000,
            quantity: 1
        },
        {
            id: "h13",
            name: "Violon",
            price: 280000,
            quantity: 1
        },
        {
            id: "h14",
            name: "Paco Phantom",
            price: 500000,
            quantity: 1
        },
        {
            id: "h15",
            name: "Untol",
            price: 300000,
            quantity: 1
        },
        {
            id: "h16",
            name: "Cherry Blossom",
            price: 260000,
            quantity: 1
        },
        {
            id: "h17",
            name: "SecRow",
            price: 250000,
            quantity: 1
        },

        {
            id: "h18",
            name: "Sauve",
            price: 250000,
            quantity: 1
        },
        {
            id: "h19",
            name: "FrenchKiss",
            price: 400000,
            quantity: 1
        },
        {
            id: "h20",
            name: "Pink",
            price: 380000,
            quantity: 1
        },
        {
            id: "logo1",
            name: "Mon",
            price: 10000000,
            quantity: 1
        }
        
    ];
    $scope.selectProduct = function (product, index) {
        $scope.selectedProduct = product;
        $scope.selectedProductIndex = index;
    };

    //     $scope.search = function () {
    // var keyword = $scope.timkiem.toLowerCase();
    // // Lọc sản phẩm dựa trên từ khóa
    // $scope.filteredList = $scope.list_sanpham_chinh.filter(function (l) {
    // if(!list_sanpham_chinh.name.toLowerCase().includes(keyword)){
    // $scope.nullSanPham = "Không tìm thấy sản phẩm"
    // }else{
    // return list_sanpham_chinh;
    // }
    // });
    // console.log($scope.filteredList)
    // };

    
});
app.run(function($rootScope){
    $rootScope.$on("$routeChangeStart",function(){
        $rootScope.loading=true;
    });
    $rootScope.$on("$routeChangeSuccess",function(){
        $rootScope.loading=false;
    });
    $rootScope.$on("$routeChangeEror",function(){
        $rootScope.loading=false;
        alert('Lỗi, không tải được tamplate');
    });
});


