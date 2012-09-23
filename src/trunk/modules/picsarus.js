// Copyright (c) 2011 Romain Vallet <romain.vallet@gmail.com>
// Licensed under the MIT license, read license.txt

var hoverZoomPlugins = hoverZoomPlugins || [];
hoverZoomPlugins.push( {
	name: 'Picsarus',
	version: '0.1',
	prepareImgLinks: function(callback) {
		var res = [];
			
		$('a[href*="picsarus.com/"]').each(function() {
			var link = $(this),
				aHref = link.attr('href').split('/');
			if (aHref.length < 4) { return; }
			var url = 'http://www.picsarus.com/upload_images/' + aHref[3];
			link.data().hoverZoomSrc = [url + '.jpg', url + '.png', url + '.gif'];
			res.push(link);
		});

		if (res.length) { callback($(res));	}
	}
});