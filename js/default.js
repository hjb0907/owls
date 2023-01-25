document.addEventListener('DOMContentLoaded', () => {
    new TypeIt('#visual h2') //
      .pause(1000)
      .delete(6, { delay: 1000 })
      .type('ready!')
      .go();
  });



$(window).resize(function(){
    ScrollOut({
        onShown: (element) => {
          new TypeIt(element.querySelector('.contents_project .col h3'), {
            startDelay: 700,
            cursor: false,
          })
            .pause(2000)
            .go();
        },
      });
});

    ScrollOut({
        onShown: (element) => {
          new TypeIt(element.querySelector('.contents_project .col h3'), {
            startDelay: 700,
            cursor: false,
          })
            .pause(2000)
            .go();
        },
      });


       let nav=document.querySelector("#nav");
       let close=document.querySelector(".btn_close");
       let gnb=document.querySelector(".gnb");
   
       nav.addEventListener("click",function(){
           gnb.classList.add("show");
           document.querySelector(".overlay").classList.add("show");
            document.querySelector("body").style.overflow="hidden";
       });
   
       close.addEventListener("click",function(){
           gnb.classList.remove("show");
           document.querySelector(".overlay").classList.remove("show");
            document.querySelector("body").style.overflow="auto";
       });

       let header=document.querySelector("#header");
    window.addEventListener("scroll" , function(){
       let top=window.scrollY;
       //console.log(top);
      if(top>0){
            header.classList.add("active");
      }else{
             header.classList.remove("active");
      }
    });

  

     $(window).scroll(function(){
        var sct=$(this).scrollTop();
        if(sct>$(".col3").offset().top-500){
            $(".contents_project .graph").find("span").addClass("ani_stack");
        }else{$(".contents_project .graph").find("span").removeClass("ani_stack");}
     });

     $(window).scroll(function(){
        var sct=$(this).scrollTop();
        if(sct>$(".col1").offset().top-500){
            $(".contents_project .pic img").eq(0).addClass("picopacity");
            $(".contents_project .pic img").eq(1).addClass("picopacitydelay");
            $(".contents_project .pic img").eq(2).addClass("picopacitydelay2");
            
        }else{
        $(".contents_project .pic img").eq(0).removeClass("picopacity");
        $(".contents_project .pic img").eq(1).removeClass("picopacitydelay");
        $(".contents_project .pic img").eq(2).removeClass("picopacitydelay2");
    }
     });

     $(window).scroll(function(){
        var sct=$(this).scrollTop();
        if(sct>$(".col2").offset().top-500){
            $(".contents_project .pic img").eq(3).addClass("picopacity");
            $(".contents_project .pic img").eq(4).addClass("picopacitydelay");
            $(".contents_project .pic img").eq(5).addClass("picopacitydelay2");
            
        }else{
        $(".contents_project .pic img").eq(3).removeClass("picopacity");
        $(".contents_project .pic img").eq(4).removeClass("picopacitydelay");
        $(".contents_project .pic img").eq(5).removeClass("picopacitydelay2");
    }
     });

     $(window).scroll(function(){
        var sct=$(this).scrollTop();
        if(sct>$(".col3").offset().top-500){
            $(".contents_project .col3 svg").eq(1).addClass("picopacity");
            
            
        }else{
            $(".contents_project .col3 svg").eq(1).removeClass("picopacity");
    }
     });
