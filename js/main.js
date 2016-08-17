$(function(){
	//Video Section

	var position = 0;
	var playlist;
	var video;

	window.onload = function() {
		playlist = [
					"videos/coding.mp4",
					"videos/huru.mp4",
					"videos/wine.mp4"
					];
		video = document.getElementById('video');
		video.addEventListener("ended", nextVideo,false);

		video.src = playlist[position];
		video.load();
		video.play();
	};

	function nextVideo() {
		position++;
		if (position >= playlist.length) {
			position = 0;
		}
		video.src = playlist[position];
		video.load();
		video.play();
	}

	$scrollDown = $("#scroll-down");
	$cv = $('.cv-dl a');

	/* up down icon effect */
	function scrollDownAnimate(){
		$scrollDown.animate({'bottom' : '35px'},1000,'easeOutSine').animate({'bottom' : '15px'},1000,'easeOutSine',scrollDownAnimate);
	}
	function cvAnimate(){
		$cv.animate({'bottom' : '75px'},1000,'easeOutSine').animate({'bottom' : '55px'},1000,'easeOutSine',cvAnimate);
	}
	scrollDownAnimate();
	cvAnimate();

	//About Section

	var dHeight = $('.description-block').height();
	$('.path-block').css('height', dHeight + 'px');
	
	/*Value Setting*/
	var $about = $('.about-section'),
		winMiddle = $(window).height()/2,
	    $aboutPic = $about.find('.profile-pic'),
	    aboutPicMid = $aboutPic.height()/2,
	    $last = $about.find('.abouts').last(),
	    $first = $about.find('.abouts').first();
	    lastMidOffset = $last.offset().top + ($last.height())/2 ,
	    firstMidOffset = $first.offset().top + ($first.height())/2,
	    $sample = $('.top-pic'),
	    $topPic = $('.top-pic img'),
	    $bottomPic =  $('.bottom-pic img');

	$aboutPic.hide();
	$topPic.hide();
	$bottomPic.hide();

	var $kv = $('.kv-section');
	var rTime;

	$(window).resize(function() {
		/*Value Reset*/
		clearTimeout(rTime);
  		rTime = setTimeout(function() {
			var winMiddle = $(window).height()/2,
	    		left = $sample.offset().left,
	    		top = $sample.offset().top,
	    		lastMidOffset = $last.offset().top + ($last.height())/2,
	    		firstMidOffset = $first.offset().top + ($first.height())/2;
	    	/* Change Pic position */
	    	$aboutPic.css('left', left+'px');
			$aboutPic.css('top', (winMiddle-aboutPicMid)+'px');
            
  		}, 250);
		/* Set kv height */
		if($(window).width() < 992){
			$kv.css('height',$('#video').height() + 'px');
			popout(0);
			popout(1);
			popout(2);
			popout(3);
		}
		else{
			$kv.css('height','540px');
		}
	});

	$(document).ready(function(){
		$(window).trigger('resize');
		$(window).trigger('scroll');
	});

	$(window).scroll(function(){
		var scrollLong = $(window).scrollTop() + $(window).height()/2 ;
		if(scrollLong >= firstMidOffset && lastMidOffset >= scrollLong){
			$aboutPic.show();
			$topPic.hide();
			$bottomPic.hide();
			
			if(scrollLong >= firstMidOffset && $first.hasClass('open') != true){
				popout(0);
			}
			if(scrollLong >= getAbout(1, 'top') + getAbout(1, 'outer') && getAbout(1, '').hasClass('open') != true){
				popout(1);
			}
			if(scrollLong >= getAbout(2, 'top') + getAbout(2, 'outer') && getAbout(2, '').hasClass('open') != true){
				popout(2);
			}
		}
		else{
			if(scrollLong >= lastMidOffset && $last.hasClass('open') != true){
				popout(3);
			}
			if(firstMidOffset > scrollLong){
				$aboutPic.hide();
				$topPic.show();
			}
			else{
				$aboutPic.hide();
				$bottomPic.show();
			}
		}
	});
	/* Get About */
	function getAbout(index, attr){
		if(attr == 'top'){
			return $about.find('.abouts').eq(index).offset().top;
		}
		if(attr == 'outer'){
			return $about.find('.abouts').eq(index).outerHeight()/2;
		}
		else{
			return $about.find('.abouts').eq(index);
		}
	}
	/* Pop out function */
	function popout(index){
		$about.find('.abouts').eq(index).animate({'opacity': '1.0'}, 300);
		$about.find('.abouts').eq(index).addClass('open');
	}
	//Portfolio Section Effect
	$('.slide-block').each(function(){
		var $container = $(this),
			$portfolio = $('.portfolio'),
			$slideOutter = $container.find('.slide'), 
			$slides = $slideOutter.find('.slides'),
			$description = $('.description'),
			$prev = $('.prev'),
			$next = $('.next'),
			currentIndex = 0,
			slideCount = 5,
			interval = 7000,
			duration = 500,              
    	    easing = 'easeInOut', 
		    timer;

		$slides.each(function (i) {
        	    $(this).css({ left: 100 * i + '%' });
    	});
		
		$prev.on('click', function(event) {
			event.preventDefault();
			stopTimer();
			var prevIndex = (currentIndex - 1) % slideCount;
			moveSlide(prevIndex);
			startTimer();
		});
		$next.on('click', function(event) {
			event.preventDefault();
			stopTimer();
			var nextIndex = (currentIndex + 1) % slideCount;
			moveSlide(nextIndex);
			startTimer();
		});

		function moveSlide(i){
			if(i < 0){
				i = 4;
			} 
			$slideOutter.animate({ left: - 100 * i + '%' }, duration);
			$description.find('.slides-description').css('display','none');
			$description.find('.slides-description:eq('+ i +')').css('display','block'); 
			currentIndex = i;
		}

		function stopTimer () {
            clearInterval(timer);
        }

		function startTimer(){
			timer = setInterval(function(){
				var nextIndex = (currentIndex + 1) % slideCount;
            	moveSlide(nextIndex);
            }, interval);
		}
		moveSlide(currentIndex);

    	startTimer();
    });
	//Contact Section Effect
	var $targetIcon = $('.contact-icon');
	var $contactClick = $('.click-contact');
	var $contactCircle = $('.contact-circle');

	$contactClick.on('mouseenter', function(){
		$contactCircle.toggleClass('launch');
		$contactClick.hide();
	});

	$contactCircle.on('mouseleave', function(){
		$contactCircle.toggleClass('launch');
		$contactClick.show();
	});

	$skillAnchor = $('#skills-title');

	/*cv effect*/
	$(window).scroll(function(){
		if($(window).scrollTop() < $skillAnchor.height() + $skillAnchor.offset().top){
			$cv.hide();
		}
		else{
			$cv.show();
		}
	});

	function showText(obj){
		obj.nextAll().stop(true).animate({'opacity':'1.0'},300);
	}
	function hideText(obj){
		obj.nextAll().stop(true).animate({'opacity':'0.0'},300);
	}
	function kick(obj){
		obj.parent().next().stop(true).animate({'margin-left':'100px'},300);
	}
	function pullBack(obj){
		obj.parent().next().stop(true).animate({'margin-left':'0px'},300);
	}

});