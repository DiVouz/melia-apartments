let imageSliderIndex=0,imageSliderData={images:[{src:{webp:"images/outside/1.webp",jpg:"images/outside/1.jpg"},description:{en:"",gr:""}},{src:{webp:"images/outside/2.webp",jpg:"images/outside/2.jpg"},description:{en:"",gr:""}},{src:{webp:"images/outside/3.webp",jpg:"images/outside/3.jpg"},description:{en:"",gr:""}},{src:{webp:"images/outside/4.webp",jpg:"images/outside/4.jpg"},description:{en:"",gr:""}},{src:{webp:"images/studio1/1.webp",jpg:"images/studio1/1.jpg"},description:{en:"Bedroom | Studio 1",gr:"Bedroom | Studio 1"}},{src:{webp:"images/studio1/2.webp",jpg:"images/studio1/2.jpg"},description:{en:"Bedroom | Studio 1",gr:"Bedroom | Studio 1"}},{src:{webp:"images/studio1/3.webp",jpg:"images/studio1/3.jpg"},description:{en:"Kitchenette | Studio 1",gr:"Kitchenette | Studio 1"}},{src:{webp:"images/studio1/4.webp",jpg:"images/studio1/4.jpg"},description:{en:"Bathroom | Studio 1",gr:"Bathroom | Studio 1"}},{src:{webp:"images/studio2/1.webp",jpg:"images/studio2/1.jpg"},description:{en:"Bedroom | Studio 2",gr:"Bedroom | Studio 2"}},{src:{webp:"images/studio2/2.webp",jpg:"images/studio2/2.jpg"},description:{en:"Bedroom | Studio 2",gr:"Bedroom | Studio 2"}},{src:{webp:"images/studio2/3.webp",jpg:"images/studio2/3.jpg"},description:{en:"Bedroom | Studio 2",gr:"Bedroom | Studio 2"}},{src:{webp:"images/studio2/4.webp",jpg:"images/studio2/4.jpg"},description:{en:"Kitchenette | Studio 2",gr:"Kitchenette | Studio 2"}},{src:{webp:"images/outside/5.webp",jpg:"images/outside/5.jpg"},description:{en:"",gr:""}},{src:{webp:"images/outside/6.webp",jpg:"images/outside/6.jpg"},description:{en:"",gr:""}},{src:{webp:"images/outside/7.webp",jpg:"images/outside/7.jpg"},description:{en:"",gr:""}},{src:{webp:"images/outside/8.webp",jpg:"images/outside/8.jpg"},description:{en:"",gr:""}},{src:{webp:"images/outside/9.webp",jpg:"images/outside/9.jpg"},description:{en:"",gr:""}},{src:{webp:"images/outside/10.webp",jpg:"images/outside/10.jpg"},description:{en:"",gr:""}},{src:{webp:"images/outside/11.webp",jpg:"images/outside/11.jpg"},description:{en:"",gr:""}},{src:{webp:"images/outside/12.webp",jpg:"images/outside/12.jpg"},description:{en:"",gr:""}},{src:{webp:"images/outside/13.webp",jpg:"images/outside/13.jpg"},description:{en:"Panormos beach",gr:"Panormos beach"}},{src:{webp:"images/outside/14.webp",jpg:"images/outside/14.jpg"},description:{en:"Kastani beach",gr:"Kastani beach"}},{src:{webp:"images/outside/15.webp",jpg:"images/outside/15.jpg"},description:{en:"Milia beach",gr:"Milia beach"}},{src:{webp:"images/outside/16.webp",jpg:"images/outside/16.jpg"},description:{en:"",gr:""}},{src:{webp:"images/outside/17.webp",jpg:"images/outside/17.jpg"},description:{en:"",gr:""}},{src:{webp:"images/outside/18.webp",jpg:"images/outside/18.jpg"},description:{en:"",gr:""}},{src:{webp:"images/outside/19.webp",jpg:"images/outside/19.jpg"},description:{en:"",gr:""}},{src:{webp:"images/outside/20.webp",jpg:"images/outside/20.jpg"},description:{en:"",gr:""}},{src:{webp:"images/outside/21.webp",jpg:"images/outside/21.jpg"},description:{en:"",gr:""}},{src:{webp:"images/outside/22.webp",jpg:"images/outside/22.jpg"},description:{en:"",gr:""}},{src:{webp:"images/outside/23.webp",jpg:"images/outside/23.jpg"},description:{en:"",gr:""}},{src:{webp:"images/outside/24.webp",jpg:"images/outside/24.jpg"},description:{en:"",gr:""}},{src:{webp:"images/outside/25.webp",jpg:"images/outside/25.jpg"},description:{en:"",gr:""}},{src:{webp:"images/outside/26.webp",jpg:"images/outside/26.jpg"},description:{en:"",gr:""}},{src:{webp:"images/outside/27.webp",jpg:"images/outside/27.jpg"},description:{en:"",gr:""}}]};function setStickClass(){const e=document.querySelector(".navbar");new IntersectionObserver(([e])=>e.target.classList.toggle("isSticky",e.intersectionRatio<1),{threshold:[1]}).observe(e)}function toggleExtraFeatures(){let e=$("#extraFeatures");e&&e.stop(!0,!1).slideToggle(600,function(){initExtraFeatures()})}function scrollToTab(e){let i=$(`#${e}`),s=$("#navbar");if(i&&s){let e=$("#navbar_more_menu");e&&!e.is(":hidden")&&(toggleExtraNavbarMenu(!1),toggleBigLangMenu(!1),toggleSmallLangMenu(!1)),$("html, body").stop(!0,!1).animate({scrollTop:i.offset().top-s.height()+2},1200)}}function imageSliderAdd(e){(imageSliderIndex+=e)>imageSliderData.images.length-1?imageSliderIndex%=imageSliderData.images.length:imageSliderIndex<0&&(imageSliderIndex=Math.abs(imageSliderIndex+imageSliderData.images.length)%imageSliderData.images.length),imageSliderGoTo(imageSliderIndex)}function imageSliderGoTo(e){e>imageSliderData.images.length?e=imageSliderData.images.length:e<0&&(e=0),imageSliderIndex=e;let i=$("#imagesTab_img"),s=$("#imagesTab_description");i&&i.stop(!0,!1).animate({opacity:-1},200,function(){$("html").hasClass("webp")?i.attr("src",imageSliderData.images[e].src.webp):i.attr("src",imageSliderData.images[e].src.jpg),i.stop(!0,!1).animate({opacity:1},200),s&&(s.html(imageSliderData.images[e].description[currentLan]),null!=imageSliderData.images[e].description[currentLan]&&""!=imageSliderData.images[e].description[currentLan]?s.addClass("titleOn"):s.removeClass("titleOn"))})}function setFirstParalHeight(){let e=$(".parallax.paral1"),i=$(".navbar");e&&e.css("height",$(window).height()-i.outerHeight()-1)}function toggleExtraNavbarMenu(e){let i=$("#navbar_more_menu");i&&(null!=e?1==e?i.stop(!0,!1).slideDown(0):i.stop(!0,!1).slideUp(0):i.stop(!0,!1).slideToggle(600))}function toggleBigLangMenu(e){let i=$("#big_lang_choose");i&&(null!=e?1==e?i.stop(!0,!1).slideDown(0):i.stop(!0,!1).slideUp(0):i.stop(!0,!1).slideToggle(400))}function toggleSmallLangMenu(e){let i=$("#small_lang_choose");i&&(null!=e?e?i.stop(!0,!1).slideDown(0):i.stop(!0,!1).slideUp(0):i.stop(!0,!1).slideToggle(400))}$(document).ready(function(){setStickClass(),setFirstParalHeight(),imageSliderGoTo(imageSliderIndex)}),$(window).resize(function(){setFirstParalHeight(),window.matchMedia("(max-width: 1100px)").matches||(toggleExtraNavbarMenu(!1),toggleSmallLangMenu(!1))});