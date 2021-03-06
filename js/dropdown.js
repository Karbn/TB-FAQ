function hideDropContent(content, arrow) {
    content.attr('hidden', 'hidden');
    arrow.html('►');
}

function showDropContent(content, arrow) {
    content.removeAttr('hidden');
    content.css('border-left', '1px dashed black');
    content.children().each(function() {
        if (!$(this).hasClass('drop_content_item_bbc')) {
            $(this).show();
        }
    });
    content.contents().filter(function() {
        return (this.nodeType == 3);
    }).remove();
    arrow.html('▼');
}

$(document).ready(function() {
	$('strong.drop_title_bbc').on("click", function(e) {
		var dropdown = $(e.target).closest('div.dropdown_bbc');
		var title = $(dropdown).children('strong.drop_title_bbc');
		var content = $(dropdown).children('ul.drop_content_bbc');
		var arrow = $(title).children('span.drop_arrow_bbc');

		//alert("t: " + title.html() + "\nc: " + content.html() + "\na: " + arrow.html());
		if (content.attr('hidden') !== undefined) {
			showDropContent(content, arrow);
		} else {
			hideDropContent(content, arrow);
		}
	});
});

$(document).ready(function() {
    var content = $('div.dropdown_bbc').children('ul.drop_content_bbc');
    var title = $('div.dropdown_bbc').children('strong.drop_title_bbc').css({
        'cursor': 'pointer',
        'color': '#9f0000'
    });
    var arrow = $('div.dropdown_bbc').children('strong.drop_title_bbc').children('span.drop_arrow_bbc');
    hideDropContent(content, arrow);
});
