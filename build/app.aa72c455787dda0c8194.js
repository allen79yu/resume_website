webpackJsonp([0],[,function(t,n,e){t.exports=e(2)},function(t,n,e){"use strict";(function(t){e(3),e(4),e(5),t(function(){function n(){a.animate({bottom:"35px"},1e3,"easeOutSine").animate({bottom:"15px"},1e3,"easeOutSine",n)}function e(){u.animate({bottom:"75px"},1e3,"easeOutSine").animate({bottom:"55px"},1e3,"easeOutSine",e)}function i(t,n){return"top"==n?r.find(".abouts").eq(t).offset().top:"outer"==n?r.find(".abouts").eq(t).outerHeight()/2:r.find(".abouts").eq(t)}function o(t){r.find(".abouts").eq(t).animate({opacity:"1.0"},300),r.find(".abouts").eq(t).addClass("open")}var a=t("#scroll-down"),u=t(".cv-dl a");n(),e();var s=t(".description-block").height();t(".path-block").css("height",s+"px");var r=t(".about-section"),c=(t(window).height(),r.find(".profile-pic")),f=c.height()/2,h=r.find(".abouts").last(),l=r.find(".abouts").first(),d=h.offset().top+h.height()/2,p=l.offset().top+l.height()/2,w=t(".top-pic"),g=t(".top-pic img"),M=t(".bottom-pic img");c.hide(),g.hide(),M.hide();var I,v=t(".kv-section");t(window).resize(function(){clearTimeout(I),I=setTimeout(function(){var n=t(window).height()/2,e=w.offset().left;w.offset().top,h.offset().top,h.height(),l.offset().top,l.height(),c.css("left",e+"px"),c.css("top",n-f+"px")},250),t(window).width()<992?(v.css("height",t("#video").height()+"px"),o(0),o(1),o(2),o(3)):v.css("height","540px")}),t(document).ready(function(){t(window).trigger("resize"),t(window).trigger("scroll")}),t(window).scroll(function(){var n=t(window).scrollTop()+t(window).height()/2;n>=p&&d>=n?(c.show(),g.hide(),M.hide(),n>=p&&1!=l.hasClass("open")&&o(0),n>=i(1,"top")+i(1,"outer")&&1!=i(1,"").hasClass("open")&&o(1),n>=i(2,"top")+i(2,"outer")&&1!=i(2,"").hasClass("open")&&o(2)):(n>=d&&1!=h.hasClass("open")&&o(3),p>n?(c.hide(),g.show()):(c.hide(),M.show()))}),t(".slide-block").each(function(){function n(t){t<0&&(t=4),u.animate({left:-100*t+"%"},p),r.find(".slides-description").css("display","none"),r.find(".slides-description:eq("+t+")").css("display","block"),h=t}function e(){clearInterval(o)}function i(){o=setInterval(function(){n((h+1)%l)},d)}var o,a=t(this),u=(t(".portfolio"),a.find(".slide")),s=u.find(".slides"),r=t(".description"),c=t(".prev"),f=t(".next"),h=0,l=8,d=7e3,p=500;s.each(function(n){t(this).css({left:100*n+"%"})}),c.on("click",function(t){t.preventDefault(),e(),n((h-1)%l),i()}),f.on("click",function(t){t.preventDefault(),e(),n((h+1)%l),i()}),n(h),i()});var O=(t(".contact-icon"),t(".click-contact")),b=t(".contact-circle");O.on("mouseenter",function(){b.toggleClass("launch"),O.hide()}),b.on("mouseleave",function(){b.toggleClass("launch"),O.show()});var m=t("#skills-title");t(window).scroll(function(){t(window).scrollTop()<m.height()+m.offset().top?u.hide():u.show()})})}).call(n,e(0))},function(t,n,e){(function(t){!function(t){t.easing.jswing=t.easing.swing,t.extend(t.easing,{def:"easeOutQuad",swing:function(n,e,i,o,a){return t.easing[t.easing.def](n,e,i,o,a)},easeInQuad:function(t,n,e,i,o){return i*(n/=o)*n+e},easeOutQuad:function(t,n,e,i,o){return-i*(n/=o)*(n-2)+e},easeInOutQuad:function(t,n,e,i,o){return(n/=o/2)<1?i/2*n*n+e:-i/2*(--n*(n-2)-1)+e},easeInCubic:function(t,n,e,i,o){return i*(n/=o)*n*n+e},easeOutCubic:function(t,n,e,i,o){return i*((n=n/o-1)*n*n+1)+e},easeInOutCubic:function(t,n,e,i,o){return(n/=o/2)<1?i/2*n*n*n+e:i/2*((n-=2)*n*n+2)+e},easeInQuart:function(t,n,e,i,o){return i*(n/=o)*n*n*n+e},easeOutQuart:function(t,n,e,i,o){return-i*((n=n/o-1)*n*n*n-1)+e},easeInOutQuart:function(t,n,e,i,o){return(n/=o/2)<1?i/2*n*n*n*n+e:-i/2*((n-=2)*n*n*n-2)+e},easeInQuint:function(t,n,e,i,o){return i*(n/=o)*n*n*n*n+e},easeOutQuint:function(t,n,e,i,o){return i*((n=n/o-1)*n*n*n*n+1)+e},easeInOutQuint:function(t,n,e,i,o){return(n/=o/2)<1?i/2*n*n*n*n*n+e:i/2*((n-=2)*n*n*n*n+2)+e},easeInSine:function(t,n,e,i,o){return-i*Math.cos(n/o*(Math.PI/2))+i+e},easeOutSine:function(t,n,e,i,o){return i*Math.sin(n/o*(Math.PI/2))+e},easeInOutSine:function(t,n,e,i,o){return-i/2*(Math.cos(Math.PI*n/o)-1)+e},easeInExpo:function(t,n,e,i,o){return 0==n?e:i*Math.pow(2,10*(n/o-1))+e},easeOutExpo:function(t,n,e,i,o){return n==o?e+i:i*(1-Math.pow(2,-10*n/o))+e},easeInOutExpo:function(t,n,e,i,o){return 0==n?e:n==o?e+i:(n/=o/2)<1?i/2*Math.pow(2,10*(n-1))+e:i/2*(2-Math.pow(2,-10*--n))+e},easeInCirc:function(t,n,e,i,o){return-i*(Math.sqrt(1-(n/=o)*n)-1)+e},easeOutCirc:function(t,n,e,i,o){return i*Math.sqrt(1-(n=n/o-1)*n)+e},easeInOutCirc:function(t,n,e,i,o){return(n/=o/2)<1?-i/2*(Math.sqrt(1-n*n)-1)+e:i/2*(Math.sqrt(1-(n-=2)*n)+1)+e},easeInElastic:function(t,n,e,i,o){var a=1.70158,u=0,s=i;if(0==n)return e;if(1==(n/=o))return e+i;if(u||(u=.3*o),s<Math.abs(i)){s=i;var a=u/4}else var a=u/(2*Math.PI)*Math.asin(i/s);return-s*Math.pow(2,10*(n-=1))*Math.sin((n*o-a)*(2*Math.PI)/u)+e},easeOutElastic:function(t,n,e,i,o){var a=1.70158,u=0,s=i;if(0==n)return e;if(1==(n/=o))return e+i;if(u||(u=.3*o),s<Math.abs(i)){s=i;var a=u/4}else var a=u/(2*Math.PI)*Math.asin(i/s);return s*Math.pow(2,-10*n)*Math.sin((n*o-a)*(2*Math.PI)/u)+i+e},easeInOutElastic:function(t,n,e,i,o){var a=1.70158,u=0,s=i;if(0==n)return e;if(2==(n/=o/2))return e+i;if(u||(u=o*(.3*1.5)),s<Math.abs(i)){s=i;var a=u/4}else var a=u/(2*Math.PI)*Math.asin(i/s);return n<1?s*Math.pow(2,10*(n-=1))*Math.sin((n*o-a)*(2*Math.PI)/u)*-.5+e:s*Math.pow(2,-10*(n-=1))*Math.sin((n*o-a)*(2*Math.PI)/u)*.5+i+e},easeInBack:function(t,n,e,i,o,a){return void 0==a&&(a=1.70158),i*(n/=o)*n*((a+1)*n-a)+e},easeOutBack:function(t,n,e,i,o,a){return void 0==a&&(a=1.70158),i*((n=n/o-1)*n*((a+1)*n+a)+1)+e},easeInOutBack:function(t,n,e,i,o,a){return void 0==a&&(a=1.70158),(n/=o/2)<1?i/2*(n*n*((1+(a*=1.525))*n-a))+e:i/2*((n-=2)*n*((1+(a*=1.525))*n+a)+2)+e},easeInBounce:function(n,e,i,o,a){return o-t.easing.easeOutBounce(n,a-e,0,o,a)+i},easeOutBounce:function(t,n,e,i,o){return(n/=o)<1/2.75?i*(7.5625*n*n)+e:n<2/2.75?i*(7.5625*(n-=1.5/2.75)*n+.75)+e:n<2.5/2.75?i*(7.5625*(n-=2.25/2.75)*n+.9375)+e:i*(7.5625*(n-=2.625/2.75)*n+.984375)+e},easeInOutBounce:function(n,e,i,o,a){return e<a/2?.5*t.easing.easeInBounce(n,2*e,0,o,a)+i:.5*t.easing.easeOutBounce(n,2*e-a,0,o,a)+.5*o+i}})}(t)}).call(n,e(0))},function(t,n){},function(t,n){}],[1]);