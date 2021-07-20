 const parallax = document.getElementById("contB");
 window.addEventListener("scroll",function(){
     let offset = window.pageYOffset;
     parallax.style.backgroundPositionY=offset * 0.2 +"px";
     //offsetP= (offset * 0.2)
     console.log('offset: '+offset);
   //  console.log('offset Porcentage: '+offsetP);
     if( offset > 300 && offset < 900){
        document.getElementById("contB").style.backgroundImage = "none";
        document.getElementById("contB__Nav").style.display = "flex";
        document.getElementById("buttonOrganizer").style.display = "flex";
        document.getElementById("contDisplay").style.display = "flex";
        document.getElementById("contFooter").style.display = "flex";
     }else{
        document.getElementById("contB").style.backgroundImage = "url('../images/home/tv3.gif')";  
        document.getElementById("contB__Nav").style.display = "none";
        document.getElementById("buttonOrganizer").style.display = "none";
        document.getElementById("contDisplay").style.display = "none";
        document.getElementById("contFooter").style.display = "none";
     }
 })
 
 