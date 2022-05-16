
    $(function(){
        let scroller = $('#scroller div.innerScrollArea');
        let scrollerContent = scroller.children('ul');
        scrollerContent.children().clone().appendTo(scrollerContent);
        let curX = 0;
        scrollerContent.children().each(function(){
            let $this = $(this);
            $this.css('left', curX);
            curX += $this.outerWidth(true);
        });
        let fullW = curX / 2;
        let viewportW = scroller.width();

        // Scrolling speed management
        let controller = {curSpeed:0, fullSpeed:2};
        let $controller = $(controller);
        let tweenToNewSpeed = function(newSpeed, duration)
        {
            if (duration === undefined)
                duration = 600;
            $controller.stop(true).animate({curSpeed:newSpeed}, duration);
        };

        // Pause on hover
        scroller.hover(function(){
            tweenToNewSpeed(0);
        }, function(){
            tweenToNewSpeed(controller.fullSpeed);
        });

        // Scrolling management; start the automatical scrolling
        let doScroll = function()
        {
            let curX = scroller.scrollLeft();
            let newX = curX + controller.curSpeed;
            if (newX > fullW*2 - viewportW)
                newX -= fullW;
            scroller.scrollLeft(newX);
        };
        setInterval(doScroll, 20);
        tweenToNewSpeed(controller.fullSpeed);
    });