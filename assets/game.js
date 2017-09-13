//Create a function that selects a number between 19-120.//
//to do that we need 120-19= 101 + 19 //

$ (document).ready (function()){
	var Random=Math.floor(Math.random()*101+19)

// next have to append var=random to randomNumber id in html//
//class=numberMatch//
// also has to be global//

	$('#randomNumber').text(Random);

// next have to make random number function per gem//
//since its between 1-12 you do 12-1=11+1//

	var n1= Math.floor(Math.random()*11+1)
	var n2= Math.floor(Math.random()*11+1)
	var n3= Math.floor(Math.random()*11+1)
	var n4= Math.floor(Math.random()*11+1)



// click function for the crystals //
	$('#one').on('click',function(){
    userTotal = userTotal + n1;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
    //sets win/lose conditions
        if (userTotal == Random){
          yay();
        }
        else if (userTotal > Random){
          loser();
     	}
 	})

    $('#two').on('click',function(){
    userTotal = userTotal + n2;
    console.log("New userTotal= " + userTotal);
    $('#scoreTotal').text(userTotal); 
    //sets win/lose conditions
        if (userTotal == Random){
          yay();
        }
        else if (userTotal > Random){
          loser();
      	}
    })


    $('#three').on('click',function(){
    userTotal = userTotal + n3;
    console.log("New userTotal= " + userTotal);
    $('#scoreTotal').text(userTotal); 
    //sets win/lose conditions
        if (userTotal == Random){
          yay();
        }
        else if (userTotal > Random){
          loser();
      	}
    })


    $('#four').on('click',function(){
    userTotal = userTotal + n4;
    console.log("New userTotal= " + userTotal);
    $('#scoreTotal').text(userTotal); 
    //sets win/lose conditions
        if (userTotal == Random){
          yay();
        }
        else if ( userTotal > Random){
          loser();
      	}
    });


// counter for wins and losses and append to html//

	var userTotal = 0;
	var wins = 0;
	var losses = 0;

$('numberWins').text(wins);
$('numberLosses').text(losses);

// win alert function //

function yay(){
	alert("Crystal Clear!");
	wins++;
	$('#numberWins').text(wins);
	reset();
}

// lose alert function //

function loser(){
	alert("Gem Over")
	losses++;
	$('#numberLosses').text(losses);
	reset();
}


// resetting function - after result//

function reset(){
	Random=Math.floor (Math.random()*101+19);
	console.log(Random)
	
	$('#randomNumber').text(Random);
	n1= Math.floor(Math.random()*11+1);
	n2= Math.floor(Math.random()*11+1);
	n3= Math.floor(Math.random()*11+1);
	n4= Math.floor(Math.random()*11+1);
	userTotal = 0;
	$('#scoreTotal').text(userTotal);
	}

};