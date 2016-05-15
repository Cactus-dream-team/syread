  window.setGap = function(){
    document.querySelector('.columned-text').style.webkitColumnGap = window.outerWidth*0.05+'px';
    document.querySelector('.columned-text').style.mozColumnGap = window.outerWidth*0.05+'px';
    document.querySelector('.columned-text').style.columnGap = window.outerWidth*0.05+'px';
  };

  window.pagination = (function(){
    var pageN = 0;

    var swipe = function(){
      document.querySelector('.columned-text').style.transform = 'translate(' + -1*(pageN * window.outerWidth * 0.95) + 'px)';
    };
    return {
      nextPage:function () {
        var offset = document.querySelector('.columned-text.content  p:last-of-type').offsetLeft;
        if((pageN+1)*window.outerWidth * 0.95 < offset) pageN++;
        swipe();
      },
      prevPage:function () {
        if(pageN>0) pageN--;
        swipe();
      }
    }
  })();

  window.addEventListener('resize',setGap);
