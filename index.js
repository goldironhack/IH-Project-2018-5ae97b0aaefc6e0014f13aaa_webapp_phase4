 function initMap() {
        var map = new google.maps.Map(document.getElementById('newyorkmap'), {
          zoom: 11,
          center: {lat: 41.876, lng: -87.624}
        });

        var ctaLayer = new google.maps.KmlLayer({
          url: ' https://data.cityofnewyork.us/api/geospatial/99bc-9p23?method=export&format=KML',
          map: map
        });
      }
var projection = d3.geo.mercator()
						.center([40.731500,-73.880842])
						.scale(850)
    					.translate([width/2, height/2]);
var path = d3.geo.path()
					.projection(projection);
var color = d3.scale.category20();
            d3.json("https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/nycd/FeatureServer/0/query?where=1=1&outFields=*&outSR=4326&f=geojson", function(error, root) {
		
		if (error) 
			return console.error(error);
		console.log(root.features);
		
		svg.selectAll("path")
			.data( root.features )
			.enter()
			.append("path")
			.attr("stroke","#000")
			.attr("stroke-width",1)
			.attr("d", path )
			.on("mouseover",function(d,i){
                d3.select(this)
                    .attr("fill","yellow");
            })
            .on("mouseout",function(d,i){
                d3.select(this)
                    .attr("fill",color(i));
            });
		
	});
var xmlhttp = new XMLHttpRequest();   
		var url="https://data.cityofnewyork.us/api/views/qgea-i56i/rows.json?accessType=DOWNLOAD";
	xmlhttp.open("GET",url,true);
	xmlhttp.send(null);
	xmlhttp.onreadystatechange=function(){
	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	var myArr = xmlhttp.responseText;
	var json=JSON.parse(myArr);
	for (var i = 0;i<json.data.length;i++) {
		var database=[];
		database.push(json.data[i][30]);//lat
		database.push(json.data[i][31]);//lng
		database.push(json.data[i][22]);//boroughname
		database.push(json.data[i][16]);//crimename
		washeddata.push(database)
	}}}
var xmlhttp = new XMLHttpRequest();   
		var url="https://data.cityofnewyork.us/api/views/hg8x-zxpr/rows.json?accessType=DOWNLOAD";
	xmlhttp.open("GET",url,true);
	xmlhttp.send(null);
	xmlhttp.onreadystatechange=function(){
	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	var myArr1 = xmlhttp.responseText;
	var json1=JSON.parse(myArr1);
	for (var i = 0;i<json1.data.length;i++) {
		var database1=[];
		database1.push(json1.data[i][32]);//extrmely low
		database1.push(json1.data[i][16]);//borough name
		database1.push(json1.data[i][24]);//lat
		database1.push(json1.data[i][24]);//long
		washeddata.push(database1)
	}}}
var heatmapData =[ new google.maps.LatLng(database[1],database[2] ];
	
  var heatmap = new google.maps.visualization.HeatmapLayer({
  data: heatmapData
});
heatmap.setMap(newyorkmap);
	
	