var Demo=function(){var e=function(){var e=$(".theme-panel");$("body").hasClass("page-boxed")===!1&&$(".layout-option",e).val("fluid"),$(".sidebar-option",e).val("default"),$(".page-header-option",e).val("fixed"),$(".page-footer-option",e).val("default"),$(".sidebar-pos-option").attr("disabled")===!1&&$(".sidebar-pos-option",e).val(App.isRTL()?"right":"left");var a=function(){$("body").removeClass("page-boxed").removeClass("page-footer-fixed").removeClass("page-sidebar-fixed").removeClass("page-header-fixed").removeClass("page-sidebar-reversed"),$(".page-header > .page-header-inner").removeClass("container"),1===$(".page-container").parent(".container").size()&&$(".page-container").insertAfter("body > .clearfix"),1===$(".page-footer > .container").size()?$(".page-footer").html($(".page-footer > .container").html()):1===$(".page-footer").parent(".container").size()&&($(".page-footer").insertAfter(".page-container"),$(".scroll-to-top").insertAfter(".page-footer")),$(".top-menu > .navbar-nav > li.dropdown").removeClass("dropdown-dark"),$("body > .container").remove()},o="",t=function(){var t=$(".layout-option",e).val(),i=$(".sidebar-option",e).val(),s=$(".page-header-option",e).val(),r=$(".page-footer-option",e).val(),n=$(".sidebar-pos-option",e).val(),d=$(".sidebar-style-option",e).val(),l=$(".sidebar-menu-option",e).val(),p=$(".page-header-top-dropdown-style-option",e).val();if("fixed"==i&&"default"==s&&(alert("Default Header with Fixed Sidebar option is not supported. Proceed with Fixed Header with Fixed Sidebar."),$(".page-header-option",e).val("fixed"),$(".sidebar-option",e).val("fixed"),i="fixed",s="fixed"),a(),"boxed"===t){$("body").addClass("page-boxed"),$(".page-header > .page-header-inner").addClass("container");$("body > .page-wrapper > .clearfix").after('<div class="container"></div>');$(".page-container").appendTo("body > .page-wrapper > .container"),"fixed"===r?$(".page-footer").html('<div class="container">'+$(".page-footer").html()+"</div>"):$(".page-footer").appendTo("body > .page-wrapper > .container")}o!=t&&App.runResizeHandlers(),o=t,"fixed"===s?($("body").addClass("page-header-fixed"),$(".page-header").removeClass("navbar-static-top").addClass("navbar-fixed-top")):($("body").removeClass("page-header-fixed"),$(".page-header").removeClass("navbar-fixed-top").addClass("navbar-static-top")),$("body").hasClass("page-full-width")===!1&&("fixed"===i?($("body").addClass("page-sidebar-fixed"),$("page-sidebar-menu").addClass("page-sidebar-menu-fixed"),$("page-sidebar-menu").removeClass("page-sidebar-menu-default"),Layout.initFixedSidebarHoverEffect()):($("body").removeClass("page-sidebar-fixed"),$("page-sidebar-menu").addClass("page-sidebar-menu-default"),$("page-sidebar-menu").removeClass("page-sidebar-menu-fixed"),$(".page-sidebar-menu").unbind("mouseenter").unbind("mouseleave"))),"dark"===p?$(".top-menu > .navbar-nav > li.dropdown").addClass("dropdown-dark"):$(".top-menu > .navbar-nav > li.dropdown").removeClass("dropdown-dark"),"fixed"===r?$("body").addClass("page-footer-fixed"):$("body").removeClass("page-footer-fixed"),"light"===d?$(".page-sidebar-menu").addClass("page-sidebar-menu-light"):$(".page-sidebar-menu").removeClass("page-sidebar-menu-light"),"hover"===l?"fixed"==i?($(".sidebar-menu-option",e).val("accordion"),alert("Hover Sidebar Menu is not compatible with Fixed Sidebar Mode. Select Default Sidebar Mode Instead.")):$(".page-sidebar-menu").addClass("page-sidebar-menu-hover-submenu"):$(".page-sidebar-menu").removeClass("page-sidebar-menu-hover-submenu"),App.isRTL()?"left"===n?($("body").addClass("page-sidebar-reversed"),$("#frontend-link").tooltip("destroy").tooltip({placement:"right"})):($("body").removeClass("page-sidebar-reversed"),$("#frontend-link").tooltip("destroy").tooltip({placement:"left"})):"right"===n?($("body").addClass("page-sidebar-reversed"),$("#frontend-link").tooltip("destroy").tooltip({placement:"left"})):($("body").removeClass("page-sidebar-reversed"),$("#frontend-link").tooltip("destroy").tooltip({placement:"right"})),Layout.fixContentHeight(),Layout.initFixedSidebar()},i=function(e){var a=App.isRTL()?e+"-rtl":e;$("#style_color").attr("href",Layout.getLayoutCssPath()+"themes/"+a+".min.css"),"light2"==e?$(".page-logo img").attr("src",Layout.getLayoutImgPath()+"logo-invert.png"):$(".page-logo img").attr("src",Layout.getLayoutImgPath()+"logo.png")};$(".toggler",e).click(function(){$(".toggler").hide(),$(".toggler-close").show(),$(".theme-panel > .theme-options").show()}),$(".toggler-close",e).click(function(){$(".toggler").show(),$(".toggler-close").hide(),$(".theme-panel > .theme-options").hide()}),$(".theme-colors > ul > li",e).click(function(){var a=$(this).attr("data-style");i(a),$("ul > li",e).removeClass("current"),$(this).addClass("current")}),$("body").hasClass("page-boxed")&&$(".layout-option",e).val("boxed"),$("body").hasClass("page-sidebar-fixed")&&$(".sidebar-option",e).val("fixed"),$("body").hasClass("page-header-fixed")&&$(".page-header-option",e).val("fixed"),$("body").hasClass("page-footer-fixed")&&$(".page-footer-option",e).val("fixed"),$("body").hasClass("page-sidebar-reversed")&&$(".sidebar-pos-option",e).val("right"),$(".page-sidebar-menu").hasClass("page-sidebar-menu-light")&&$(".sidebar-style-option",e).val("light"),$(".page-sidebar-menu").hasClass("page-sidebar-menu-hover-submenu")&&$(".sidebar-menu-option",e).val("hover");$(".sidebar-option",e).val(),$(".page-header-option",e).val(),$(".page-footer-option",e).val(),$(".sidebar-pos-option",e).val(),$(".sidebar-style-option",e).val(),$(".sidebar-menu-option",e).val();$(".layout-option, .page-header-option, .page-header-top-dropdown-style-option, .sidebar-option, .page-footer-option, .sidebar-pos-option, .sidebar-style-option, .sidebar-menu-option",e).change(t)},a=function(e){var a="rounded"===e?"components-rounded":"components";a=App.isRTL()?a+"-rtl":a,$("#style_components").attr("href",App.getGlobalCssPath()+a+".min.css"),"undefined"!=typeof Cookies&&Cookies.set("layout-style-option",e)};return{init:function(){e(),$(".theme-panel .layout-style-option").change(function(){a($(this).val())}),"undefined"!=typeof Cookies&&"rounded"===Cookies.get("layout-style-option")&&(a(Cookies.get("layout-style-option")),$(".theme-panel .layout-style-option").val(Cookies.get("layout-style-option")))}}}();App.isAngularJsApp()===!1&&jQuery(document).ready(function(){Demo.init()});var Layout=function(){var e="layouts/layout/img/",a="layouts/layout/css/",o=App.getResponsiveBreakpoint("md"),t=[],i=[],s=function(){var e,a=$(".page-content"),t=$(".page-sidebar"),i=$("body");if(i.hasClass("page-footer-fixed")===!0&&i.hasClass("page-sidebar-fixed")===!1){var s=App.getViewPort().height-$(".page-footer").outerHeight()-$(".page-header").outerHeight(),r=t.outerHeight();r>s&&(s=r+$(".page-footer").outerHeight()),a.height()<s&&a.css("min-height",s)}else{if(i.hasClass("page-sidebar-fixed"))e=d(),i.hasClass("page-footer-fixed")===!1&&(e-=$(".page-footer").outerHeight());else{var n=$(".page-header").outerHeight(),l=$(".page-footer").outerHeight();e=App.getViewPort().width<o?App.getViewPort().height-n-l:t.height()+20,e+n+l<=App.getViewPort().height&&(e=App.getViewPort().height-n-l)}a.css("min-height",e)}},r=function(e,a,t){var i=location.hash.toLowerCase(),s=$(".page-sidebar-menu");if("click"===e||"set"===e?a=$(a):"match"===e&&s.find("li > a").each(function(){var e=$(this).attr("ui-sref");if(t&&e){if(t.is(e))return void(a=$(this))}else{var o=$(this).attr("href");if(o&&(o=o.toLowerCase(),o.length>1&&i.substr(1,o.length-1)==o.substr(1)))return void(a=$(this))}}),a&&0!=a.size()&&"javascript:;"!=a.attr("href")&&"javascript:;"!=a.attr("ui-sref")&&"#"!=a.attr("href")&&"#"!=a.attr("ui-sref")){parseInt(s.data("slide-speed")),s.data("keep-expanded");s.hasClass("page-sidebar-menu-hover-submenu")===!1?s.find("li.nav-item.open").each(function(){var e=!1;$(this).find("li").each(function(){var o=$(this).attr("ui-sref");if(t&&o){if(t.is(o))return void(e=!0)}else if($(this).find(" > a").attr("href")===a.attr("href"))return void(e=!0)}),e!==!0&&($(this).removeClass("open"),$(this).find("> a > .arrow.open").removeClass("open"),$(this).find("> .sub-menu").slideUp())}):s.find("li.open").removeClass("open"),s.find("li.active").removeClass("active"),s.find("li > a > .selected").remove(),a.parents("li").each(function(){$(this).addClass("active"),$(this).find("> a > span.arrow").addClass("open"),1===$(this).parent("ul.page-sidebar-menu").size()&&$(this).find("> a").append('<span class="selected"></span>'),1===$(this).children("ul.sub-menu").size()&&$(this).addClass("open")}),"click"===e&&App.getViewPort().width<o&&$(".page-sidebar").hasClass("in")&&$(".page-header .responsive-toggler").click()}},n=function(){$(".page-sidebar-mobile-offcanvas .responsive-toggler").click(function(e){$("body").toggleClass("page-sidebar-mobile-offcanvas-open"),e.preventDefault(),e.stopPropagation()}),$("body").hasClass("page-sidebar-mobile-offcanvas")&&$(document).on("click",function(e){$("body").hasClass("page-sidebar-mobile-offcanvas-open")&&0===$(e.target).closest(".page-sidebar-mobile-offcanvas .responsive-toggler").length&&0===$(e.target).closest(".page-sidebar-wrapper").length&&($("body").removeClass("page-sidebar-mobile-offcanvas-open"),e.preventDefault(),e.stopPropagation())}),$(".page-sidebar-menu").on("click","li > a.nav-toggle, li > a > span.nav-toggle",function(e){var a=$(this).closest(".nav-item").children(".nav-link");if(!(App.getViewPort().width>=o&&!$(".page-sidebar-menu").attr("data-initialized")&&$("body").hasClass("page-sidebar-closed")&&1===a.parent("li").parent(".page-sidebar-menu").size())){var t=a.next().hasClass("sub-menu");if(!(App.getViewPort().width>=o&&1===a.parents(".page-sidebar-menu-hover-submenu").size())){if(t===!1)return void(App.getViewPort().width<o&&$(".page-sidebar").hasClass("in")&&$(".page-header .responsive-toggler").click());var i=a.parent().parent(),r=a,n=$(".page-sidebar-menu"),d=a.next(),l=n.data("auto-scroll"),p=parseInt(n.data("slide-speed")),c=n.data("keep-expanded");c||(i.children("li.open").children("a").children(".arrow").removeClass("open"),i.children("li.open").children(".sub-menu:not(.always-open)").slideUp(p),i.children("li.open").removeClass("open"));var g=-200;d.is(":visible")?($(".arrow",r).removeClass("open"),r.parent().removeClass("open"),d.slideUp(p,function(){l===!0&&$("body").hasClass("page-sidebar-closed")===!1&&($("body").hasClass("page-sidebar-fixed")?n.slimScroll({scrollTo:r.position().top}):App.scrollTo(r,g)),s()})):t&&($(".arrow",r).addClass("open"),r.parent().addClass("open"),d.slideDown(p,function(){l===!0&&$("body").hasClass("page-sidebar-closed")===!1&&($("body").hasClass("page-sidebar-fixed")?n.slimScroll({scrollTo:r.position().top}):App.scrollTo(r,g)),s()})),e.preventDefault()}}}),App.isAngularJsApp()&&$(".page-sidebar-menu li > a").on("click",function(e){App.getViewPort().width<o&&$(this).next().hasClass("sub-menu")===!1&&$(".page-header .responsive-toggler").click()}),$(".page-sidebar").on("click"," li > a.ajaxify",function(e){e.preventDefault(),App.scrollTop();var a=$(this).attr("href"),t=$(".page-sidebar ul");t.children("li.active").removeClass("active"),t.children("arrow.open").removeClass("open"),$(this).parents("li").each(function(){$(this).addClass("active"),$(this).children("a > span.arrow").addClass("open")}),$(this).parents("li").addClass("active"),App.getViewPort().width<o&&$(".page-sidebar").hasClass("in")&&$(".page-header .responsive-toggler").click(),Layout.loadAjaxContent(a,$(this))}),$(".page-content").on("click",".ajaxify",function(e){e.preventDefault(),App.scrollTop();var a=$(this).attr("href");App.getViewPort().width<o&&$(".page-sidebar").hasClass("in")&&$(".page-header .responsive-toggler").click(),Layout.loadAjaxContent(a)}),$(document).on("click",".page-header-fixed-mobile .page-header .responsive-toggler",function(){App.scrollTop()}),p(),$(".page-sidebar").on("click",".sidebar-search .remove",function(e){e.preventDefault(),$(".sidebar-search").removeClass("open")}),$(".page-sidebar .sidebar-search").on("keypress","input.form-control",function(e){if(13==e.which)return $(".sidebar-search").submit(),!1}),$(".sidebar-search .submit").on("click",function(e){e.preventDefault(),$("body").hasClass("page-sidebar-closed")&&$(".sidebar-search").hasClass("open")===!1?(1===$(".page-sidebar-fixed").size()&&$(".page-sidebar .sidebar-toggler").click(),$(".sidebar-search").addClass("open")):$(".sidebar-search").submit()}),0!==$(".sidebar-search").size()&&($(".sidebar-search .input-group").on("click",function(e){e.stopPropagation()}),$("body").on("click",function(){$(".sidebar-search").hasClass("open")&&$(".sidebar-search").removeClass("open")}))},d=function(){var e=App.getViewPort().height-$(".page-header").outerHeight(!0);return $("body").hasClass("page-footer-fixed")&&(e-=$(".page-footer").outerHeight()),e},l=function(){var e=$(".page-sidebar-menu");return s(),0===$(".page-sidebar-fixed").size()?void App.destroySlimScroll(e):void(App.getViewPort().width>=o&&!$("body").hasClass("page-sidebar-menu-not-fixed")&&(e.attr("data-height",d()),App.destroySlimScroll(e),App.initSlimScroll(e),s()))},p=function(){$("body").hasClass("page-sidebar-fixed")&&$(".page-sidebar").on("mouseenter",function(){$("body").hasClass("page-sidebar-closed")&&$(this).find(".page-sidebar-menu").removeClass("page-sidebar-menu-closed")}).on("mouseleave",function(){$("body").hasClass("page-sidebar-closed")&&$(this).find(".page-sidebar-menu").addClass("page-sidebar-menu-closed")})},c=function(){$("body").on("click",".sidebar-toggler",function(e){var a=$("body"),o=$(".page-sidebar"),t=$(".page-sidebar-menu");$(".sidebar-search",o).removeClass("open"),a.hasClass("page-sidebar-closed")?(a.removeClass("page-sidebar-closed"),t.removeClass("page-sidebar-menu-closed"),Cookies&&Cookies.set("sidebar_closed","0")):(a.addClass("page-sidebar-closed"),t.addClass("page-sidebar-menu-closed"),a.hasClass("page-sidebar-fixed")&&t.trigger("mouseleave"),Cookies&&Cookies.set("sidebar_closed","1")),$(window).trigger("resize")})},g=function(){$(".page-header").on("click",'.hor-menu a[data-toggle="tab"]',function(e){e.preventDefault();var a=$(".hor-menu .nav"),o=a.find("li.current");$("li.active",o).removeClass("active"),$(".selected",o).remove();var t=$(this).parents("li").last();t.addClass("current"),t.find("a:first").append('<span class="selected"></span>')}),$(".page-header").on("click",".search-form",function(e){$(this).addClass("open"),$(this).find(".form-control").focus(),$(".page-header .search-form .form-control").on("blur",function(e){$(this).closest(".search-form").removeClass("open"),$(this).unbind("blur")})}),$(".page-header").on("keypress",".hor-menu .search-form .form-control",function(e){if(13==e.which)return $(this).closest(".search-form").submit(),!1}),$(".page-header").on("mousedown",".search-form.open .submit",function(e){e.preventDefault(),e.stopPropagation(),$(this).closest(".search-form").submit()}),$(document).on("click",".mega-menu-dropdown .dropdown-menu",function(e){e.stopPropagation()})},h=function(){$("body").on("shown.bs.tab",'a[data-toggle="tab"]',function(){s()})},u=function(){var e=300,a=500;navigator.userAgent.match(/iPhone|iPad|iPod/i)?$(window).bind("touchend touchcancel touchleave",function(o){$(this).scrollTop()>e?$(".scroll-to-top").fadeIn(a):$(".scroll-to-top").fadeOut(a)}):$(window).scroll(function(){$(this).scrollTop()>e?$(".scroll-to-top").fadeIn(a):$(".scroll-to-top").fadeOut(a)}),$(".scroll-to-top").click(function(e){return e.preventDefault(),$("html, body").animate({scrollTop:0},a),!1})},f=function(){$(".full-height-content").each(function(){var e,a=$(this);if(e=App.getViewPort().height-$(".page-header").outerHeight(!0)-$(".page-footer").outerHeight(!0)-$(".page-title").outerHeight(!0)-$(".page-bar").outerHeight(!0),a.hasClass("portlet")){var t=a.find(".portlet-body");App.destroySlimScroll(t.find(".full-height-content-body")),e=e-a.find(".portlet-title").outerHeight(!0)-parseInt(a.find(".portlet-body").css("padding-top"))-parseInt(a.find(".portlet-body").css("padding-bottom"))-5,App.getViewPort().width>=o&&a.hasClass("full-height-content-scrollable")?(e-=35,t.find(".full-height-content-body").css("height",e),App.initSlimScroll(t.find(".full-height-content-body"))):t.css("min-height",e)}else App.destroySlimScroll(a.find(".full-height-content-body")),App.getViewPort().width>=o&&a.hasClass("full-height-content-scrollable")?(e-=35,a.find(".full-height-content-body").css("height",e),App.initSlimScroll(a.find(".full-height-content-body"))):a.css("min-height",e)})};return{initHeader:function(){g()},setSidebarMenuActiveLink:function(e,a){r(e,a,null)},setAngularJsSidebarMenuActiveLink:function(e,a,o){r(e,a,o)},initSidebar:function(e){l(),n(),c(),App.isAngularJsApp()&&r("match",null,e),App.addResizeHandler(l)},initContent:function(){f(),h(),App.addResizeHandler(s),App.addResizeHandler(f)},initFooter:function(){u()},init:function(){this.initHeader(),this.initSidebar(null),this.initContent(),this.initFooter()},loadAjaxContent:function(e,a){var o=$(".page-content .page-content-body");App.startPageLoading({animate:!0}),$.ajax({type:"GET",cache:!1,url:e,dataType:"html",success:function(e){App.stopPageLoading(),o.html(e);for(var i=0;i<t.length;i++)t[i].call(e);a.size()>0&&0===a.parents("li.open").size()&&$(".page-sidebar-menu > li.open > a").click(),Layout.fixContentHeight(),App.initAjax()},error:function(e,a,t){App.stopPageLoading(),o.html("<h4>Could not load the requested content.</h4>");for(var s=0;s<i.length;s++)i[s].call(e)}})},addAjaxContentSuccessCallback:function(e){t.push(e)},addAjaxContentErrorCallback:function(e){i.push(e)},fixContentHeight:function(){s()},initFixedSidebarHoverEffect:function(){p()},initFixedSidebar:function(){l()},getLayoutImgPath:function(){return App.getAssetsPath()+e},getLayoutCssPath:function(){return App.getAssetsPath()+a}}}();App.isAngularJsApp()===!1&&jQuery(document).ready(function(){Layout.init()});