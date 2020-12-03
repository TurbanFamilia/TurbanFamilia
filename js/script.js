

 const slides=document.querySelector(".header-slider").children;
 const prev=document.querySelector("#js--btn-prev");
 const next=document.querySelector("#js--btn-next");
 let index=0;


   prev.addEventListener("click",function(){
       prevSlide();
       resetTimer();
   })

   next.addEventListener("click",function(){
      nextSlide(); 
      resetTimer();
   })

   function prevSlide(){
   	 if(index==0){
   	 	index=slides.length-1;
   	 }
   	 else{
   	 	index--;
   	 }
   	 changeSlide();
   }

   function nextSlide(){
      if(index==slides.length-1){
      	index=0;
      }
      else{
      	index++;
      }
      changeSlide();
   }

   function changeSlide(){
   	       for(let i=0; i<slides.length; i++){
   	       	 slides[i].classList.remove("active");
   	       }

       slides[index].classList.add("active");
   }

   function resetTimer(){
   	  // when click to indicator or controls button 
   	  // stop timer 
   	  clearInterval(timer);
   	  // then started again timer
   	  timer=setInterval(autoPlay,6000);
   }
 
  
  function autoPlay(){
      nextSlide();
  }

  let timer=setInterval(autoPlay,6000);
  
function openReg () {
    window.open('./regulations.html')
}

function closeReg () {
    window.close()
}
 



