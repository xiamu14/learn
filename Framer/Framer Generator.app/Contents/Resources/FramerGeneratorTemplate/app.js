
// Demo code: bounce all the views

for (layerName in myLayers) {

	var layer = myLayers[layerName]

	layer.onTap(function(event, layer) {

		// Wind up the layer by making it smaller
		layer.scale = 0.7;

		// Animate the layer back to the original size with a spring
		layer.animate({
			properties: {
				scale:1.0
			},
			curve: "spring",
			curveOptions: {
				tension: 1000,
				friction: 15
			}
		})

		// Only animate this layer, not other ones below
		event.stopPropagation()
	})
}
