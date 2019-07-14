$( document ).ready(function(){
  var Random=Math.floor(Math.random()* (120-19)+19);

    
  // Selects a random number to be shown at the start of the game
  // Number should be should be between 19 - 120
  //
  $('#randomNumber').text(Random);
  // Appending random number to the randomNumber id in the html doc
  //
  var num1= Math.floor(Math.random()*12)+ 1;
  var num2= Math.floor(Math.random()*12)+ 1;
  var num3= Math.floor(Math.random()*12)+ 1;
  var num4= Math.floor(Math.random()*12)+ 1;
  // Setting up random numbers for each gem
  // Random number has to be between 1 - 12
  // 
  var userTotal= 0; 
  var wins= 0;
  var losses = 0;
  //  Decaring variables for tallies
  $('numberWins').text(wins);
  $('numberLosses').text(losses);
  //resets the game
  function reset() {

    Random=Math.floor(Math.random()* (120-19)+19);
    $('#randomNumber').text(Random);
    num1= Math.floor(Math.random()*12)+ 1
    num2= Math.floor(Math.random()*12)+ 1
    num3= Math.floor(Math.random()*12)+ 1
    num4= Math.floor(Math.random()*12)+ 1
    userTotal= 0;
    $('#finalTotal').text(userTotal);
  }
  //adds the wins to the userTotal
  function win(){
    
      wins++; 
      $('#numberWins').text(wins);
      reset();
      Swal.fire("You won!");
      // alert('win')
  }
 
  //addes the losses to the userTotal
  function lose(){
    
      losses++;
      $('#numberLosses').text(losses);
      reset()
      Swal.fire("You lose!");
      //alert('lose');
  }
    $('#one').on ('click', function(){
      userTotal = userTotal + num1;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
            //sets win/lose conditions
          if (userTotal == Random){
            win();
          }
          else if ( userTotal > Random){
            lose();
          }   
    })  
    $('#two').on ('click', function(){
      userTotal = userTotal + num2;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
          if (userTotal == Random){
            win();
          }
          else if ( userTotal > Random){
            lose();
          } 
    })  
    $('#three').on ('click', function(){
      userTotal = userTotal + num3;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal);
  //sets win/lose conditions
            if (userTotal == Random){
            win();
          }
          else if ( userTotal > Random){
            lose();
          } 
    })  
    $('#four').on ('click', function(){
      userTotal = userTotal + num4;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
        
            if (userTotal == Random){
            win();
          }
          else if ( userTotal > Random){
            lose();
          }
    });   
  reset()
 /*tried to add a modal here but couldn't get it to work so the code is not here becasue it did not make sense*/
/*ended up getting it to work for the most part*/
Swal.fire({
  title: 'There are modals on this page!',
  text: '',
  type: 'modal',
  confirmButtonText: 'Cool'
});
});
