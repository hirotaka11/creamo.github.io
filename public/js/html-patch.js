!function(e){function t(){var t=e(".article-summary .thumbnail").width(),i=245*t/520;e(".article-summary .thumbnail").height(i)}function i(){var t=e(".nav-container-inner").width()-10,i=e("#main-nav").width(),n=e("#sub-nav").width();if(i+n>t){0==e(".main-nav-more").length&&(e('<li class="main-nav-list-item top-level-menu main-nav-more">          <a class="main-nav-list-link" href="javascript:;">More</a>          <ul class="main-nav-list-child">          </ul></li>').appendTo(e("#main-nav")),e(".main-nav-more").hover(function(){e(window).width()<480||e(this).children(".main-nav-list-child").slideDown("fast")},function(){e(window).width()<480||e(this).children(".main-nav-list-child").slideUp("fast")}));for(var o=e("#main-nav").children().length,a=o-2;a>=0;a--){var r=e("#main-nav").children().eq(a);if(!(i+n>t))return;r.prependTo(e(".main-nav-more > ul")),i=e("#main-nav").width()}}e(".main-nav-more").length>0&&(e(".main-nav-more > ul").children().appendTo(e("#main-nav")),e(".main-nav-more").remove())}e(".main-nav-list > li").unwrap(),e("#main-nav > li > .main-nav-list-link").each(function(){e(".page-title-link").length>0&&(e(this).html().toUpperCase()==e(".page-title-link").html().toUpperCase()?e(this).addClass("current"):e(this).attr("href")==e(".page-title-link").attr("data-url")&&e(this).addClass("current"))}),e("#sidebar .sidebar-toggle").click(function(){e("#sidebar").hasClass("expend")?e("#sidebar").removeClass("expend"):e("#sidebar").addClass("expend")}),t(),i(),e(".main-nav-list-item").hover(function(){e(window).width()<480||e(this).children(".main-nav-list-child").slideDown("fast")},function(){e(window).width()<480||e(this).children(".main-nav-list-child").slideUp("fast")}),e(".main-nav-list-item").each(function(){e(this).find(".main-nav-list-child").length>0&&e(this).addClass("top-level-menu")}),e(window).resize(function(){t(),i()})}(jQuery);