// your script file for adding your own jquery
$(function() {
// Your Code from here on down. Don't delete that line above!
var $button = $.backToTop({

    // background color
    backgroundColor: '#5D5D5D',

    // text color
    color: '#FFFFFF',

    // container element
    container: this._body, 

    // 'nonn', 'spin', 'fade', 'zoom', or 'spin-inverse'
    effect: 'spin',

    // enable the back to top button
    enabled: true, 

    // width/height of the back to top button
    height: 70,  
    width: 70,

    // icon
    icon: 'fas fa-chevron-up',

    // margins 
    marginX: 20,
    marginY: 20,  

    // bottom/top left/right
    position: 'bottom right',           

    // trigger position
    pxToTrigger: 100,
    
    // scroll animation
    scroll<a href="https://www.jqueryscript.net/animation/">Animation</a>: 0, 

    // or 'fawesome'
    theme: 'default',

    // z-index
    zIndex: 999
    
});

$(".alberta").flip();

$(".burnside").flip();

$(".downtown").flip();

$(".nw").flip();

$(".sellwood").flip();

// End of Your Code . Don't delete that line below!!
});