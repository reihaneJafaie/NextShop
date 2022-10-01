$(document).ready(function () {

      let inputPass =$('#pwd');
      let eye = $('.eyes');

      eye.fadeOut()
      $(inputPass).keyup(function () {
            eye.fadeIn()

            if (inputPass.val() > 1) {
                  eye.fadeIn(300)
            }
            else if (inputPass.val() < 1) {
                  eye.fadeOut(300)
            }
      });

      eye.click(function(){
            if(inputPass.attr('type')=='password'){

                  $(eye).attr("src","../img/login/hide.png");
                  inputPass.attr("type","text");
          
              }
              else{
      
                  inputPass.attr("type", "password");
                  $(eye).attr("src","../img/login/view.png");
                 
              }

      })





});