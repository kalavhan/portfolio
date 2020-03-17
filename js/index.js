var n = 1;
var an = 0;
appearwords();
function appearwords() {
  $(".background-words > span:nth-of-type("+an+")").addClass("fadein");
  an = an + 1;
  if(an<19){
    setTimeout(function(){
      appearwords();
    }, 80)
  }else{
    seemorespell(n);
  }
}

function seemorespell(n){
  setTimeout(function() {
    $(".seemore-text span:nth-of-type("+n+")").removeClass("hidden");
    n = n+1;
    if (n<12){
      seemorespell(n);
    } else {
      setTimeout(function() {
        closebracket(n);
      }, 1200)
    }
  }, 200);
}

function closebracket(n){
  setTimeout(function() {
    n = n-1;
    $(".seemore-text span:nth-of-type("+n+")").addClass("hidden");
    if (n>2){
      closebracket(n);
    }else {
      $(".seemore-text span:nth-of-type(11)").removeClass("hidden");
      $(".seemore-text span:nth-of-type(12)").addClass("hidden");
      $(".seemore-text").addClass("seemore-rotate");
      setTimeout(function(){
        $(".seemore-text span:nth-of-type(11)").addClass("hidden");
        $(".seemore-text span:nth-of-type(1)").addClass("black-color");
      }, 1900)
    }
  }, 200);
}