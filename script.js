jQuery(document).ready(function() {
	jQuery('.button a').click(function() {
		var pxValue = jQuery('#pixel').val();
		var vpwidth = jQuery('#vpwidth').val();
		var vwValue = parseFloat(pxValue / vpwidth) * 100;
		vwValue = vwValue + "vw";
		jQuery('.output label').text(vwValue);
		jQuery('.output').show();
	});

});