jQuery(function($) {
    let page = 2;
    $(window).scroll(function() {
        if ($(window).scrollTop() + $(window).height() >= $(document).height() - 200) {
            $.post(jm_ajax_obj.ajax_url, {
                action: 'jm_load_more_posts',
                page: page
            }, function(data) {
                if (data) {
                    $('.site-main').append(data);
                    page++;
                }
            });
        }
    });
});