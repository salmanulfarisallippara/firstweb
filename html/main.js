
/*slide img*/
 var myIndex = 0;
 carousel();
 
 function carousel() {
   var i;
   var x = document.getElementsByClassName("mySlides");
   for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
   }
   myIndex++;
   if (myIndex > x.length) {myIndex = 1}    
   x[myIndex-1].style.display = "block";  
   setTimeout(carousel, 2000); // Change image every 2 seconds
 }
 $(document).ready(function(){
  $('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true ,
    autoplaySpeed: 2000,
  });
 })
 

 $(document).ready(function(){
   $('.my-class').slick({
     slidesToShow: 4,
   slidesToScroll: 1,
   autoplaySpeed: 2000
   });
 });
 

