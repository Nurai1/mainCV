	function initMap() {
		var element = document.getElementById('map');
		var options = {
			zoom: 10,
			center: {lat: 59.940208, lng: 30.328092},
		};

		var myMap = new google.maps.Map(element, options);

		var markers = [
			{
				coordinates: {lat: 59.93632218, lng: 30.30214906},
				info: '<h3>Медный всадник</h3>'
			},
			{
				coordinates: {lat: 59.940208, lng: 30.328092},
				info: '<h3>Санкт-Петербург</h3>'
			},
			{
				coordinates: {lat: 59.92556558, lng: 30.29412925}, 
				info: '<h3>Мариинский театр</h3><br><img src="https://rutraveller.ru/icache/place/5/037/537_603x354.jpg" style="width:250px;height:150px;object-fit:cover"><br><p>Описание</p>'
			}
		];

		for(var i = 0; i < markers.length; i++) {
			addMarker(markers[i]);
		}

		function addMarker(properties) {
			var marker = new google.maps.Marker({
				position: properties.coordinates,
				map: myMap
			});

			if(properties.image) {
				marker.setIcon(properties.image);
			}

			if(properties.info) {
				var InfoWindow = new google.maps.InfoWindow({
					content: properties.info
				});

				marker.addListener('click', function(){
					InfoWindow.open(myMap, marker);
				});
			}
		}
	}
