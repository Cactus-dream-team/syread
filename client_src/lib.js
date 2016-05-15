  window.setGap = function(){
    document.querySelector('.columned-text').style.webkitColumnGap = window.outerWidth*0.05+'px';
    document.querySelector('.columned-text').style.mozColumnGap = window.outerWidth*0.05+'px';
    document.querySelector('.columned-text').style.columnGap = window.outerWidth*0.05+'px';
  };

  window.pagination = (function(){
    var pageN = 0;
    var offsetP = 0;
    var swipe = function(){
      document.querySelector('.columned-text').style.transform = 'translate(' + -1*(pageN * window.outerWidth * 0.95) + 'px)';
    };
    var offsetCount = function(){
      var l = Array.prototype.slice.call(document.querySelectorAll('.columned-text p')).find((p,i) => {
        if (p.offsetLeft >= (pageN * window.outerWidth * 0.95)){
          offsetP = i;
          return true;
        }
        else
          return false;
      })
      $.post( "http://46.105.85.199:3000/marks", { name: "John", time: "2pm" } );
    };
    return {
      getOffset:function(){
        return offsetP;
      },
      findMark:function(pNum){
        var ps = Array.prototype.slice.call(document.querySelectorAll('.columned-text p'));
        if(ps.length == 0) return;
        while((pageN+1) * window.outerWidth * 0.95 < ps[pNum].offsetLeft){
          pageN++;
        }
        swipe();
      },
      reset:function(){
        pageN = 0;
      },
      nextPage:function (x) {
        var last = document.querySelector('.columned-text.content  p:last-of-type');
        if(last) {
          var offset = last.offsetLeft;
          if ((pageN + 1) * window.outerWidth * 0.95 < offset) pageN++;
          else x();
        }else x();
        swipe();
        offsetCount();
      },
      prevPage:function (x) {
        if(pageN>0) pageN--;
        else x();
        swipe();
        offsetCount();
      }
    }
  })();

  window.addEventListener('resize',setGap);
