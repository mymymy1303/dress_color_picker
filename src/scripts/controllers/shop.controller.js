angular.module('shopController', []).controller("ShopController", _shopController)

function _shopController($scope) {
	$scope.products = 
	
	{
		"lists": [{
				"name": "Samsung Galaxy J6",
				"price": 4790000,
				"img": "https://cdn.tgdd.vn/Products/Images/42/160729/samsung-galaxy-j6-2018-1-400x460-400x460-400x460-400x460.png",
				"desc": "Trong phân khúc smartphone tầm trung, Samsung Galaxy J6 là cái tên tiếp theo được nhắc đến với một thiết kế đẹp, hiệu năng tốt và có màn hình 18.5:9 thời thượng.",
				"link": "asdasd"
			},
			{
				"name": "Samsung Galaxy J4",
				"price": 4790000,
				"img": "https://cdn.tgdd.vn/Products/Images/42/153963/samsung-galaxy-j4-3-400x460.png",
				"desc": "Samsung Galaxy J4 là cái tên tiếp theo thuộc dòng J mà Samsung mới ra mắt với một số tính năng nổi bật nhằm cạnh tranh với các đối thủ trong phân khúc smartphone giá rẻ.",
				"link": "asdasd"
			},
			{
				"name": "Samsung Galaxy J7+",
				"price": 4790000,
				"img": "https://cdn.tgdd.vn/Products/Images/42/112970/samsung-galaxy-j7-plus-2-400x460.png",
				"desc": "Samsung Galaxy J7+ là dòng smartphone tầm trung nhưng được trang bị camera kép có khả năng chụp ảnh xóa phông chân dung cùng thiết kế đẹp và hiệu năng mạnh mẽ.",
				"link": "asdasd"
			}
		]
	}
	
}
