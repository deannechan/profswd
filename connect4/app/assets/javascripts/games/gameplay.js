var grid = [[], [], [], [], [], [], []];
var disc = 0;
var start = true;
var maxheight = 6;

var computePos = function(index) {
   return (maxheight - grid[index].length) * 70;    //computes the position of disc to slide into column
   
};

var updateGame = function(index) {
    var col = grid[index].length;        //get how many discs in the column

    if(col >= maxheight || start==false)    //column is full or game not starting
        return false;   

    disc++;                                
    var person = disc % 2;                  //who placed the disc
    grid[index].push(person);

   if(winner(person, index, col)) {        //if winner
        $(".win").show();
        if(disc % 2)
            var p = "player2";  // if disc % 2 == 1
        else
            var p = "player1";
        var newDisc = "<div class=\"token " + p + "\"></div>";
        $(".win").append($(newDisc));     
        start=false;
    }

 
    if(grid[index].length === maxheight) //check if draw
        checkForDraw();

    return true;
};

var checkLoc = function(person, x, y) {
    if((x < 0) || (x > 6)) // if x is not between 0-6 (7 columns) 
        return false;
    if((y < 0) || (y > maxheight - 1)) // if y is not between 0-5 (6 rows)
        return false;
    return (grid[x][y] === person);
};

var winner = function(person, x, y) {
    if(!checkLoc(person, x, y)) 
        return false;

    var directions = [
    				[1,0], 	//east-west
    				[1,1], 	//northeast-southwest
    				[0,1], 	//north-south
    				[1,-1]];	//southeast-northwest
    var matches = 0;

    for(var i = 0; i < 4; i++) {
        for(var j = 1; ; j++)
            if(checkLoc(person, x+j*directions[i][0], y+j*directions[i][1]))
                matches++;
            else 
                break;
        for(var j = 1; ; j++)
            if(checkLoc(person, x-j*directions[i][0], y-j*directions[i][1]))
                matches++;
            else 
                break;

        if(matches >= 3) 
            return true;

        matches = 0;
    }
    return false;
};


var checkForDraw = function() {
    for(var i = 0; i < grid.length; i++) //if all the grid are full
        if(grid[i].length < maxheight)
            return;

    $(".lose").show();
    $(".view .token").hide();
    start=false;                            //stop the game
};


var updatePlayerDisc = function() {
    $(".view .token").remove();                 // remove the previous .view .token
    $(".view .token").effect("fade");           //fade out

    if(disc % 2)
        var p = "player1"; //if disc % 2 == 1
    else
        var p = "player2";

    var newDisc = "<div style=\"display:none\" class=\"token " + p + "\"></div>";
    $(".view > div").prepend($(newDisc));
    $(".view .token").show("slide");            //show the new .view .token of the current player
    $(".win > div").remove();
};


$(document).ready(function() {
    $(".table .button").click(function() {              //clicking the buttons
        var index = $(this).parent().index();           //get column number
       
        if(!updateGame(index))                          //game starting? or column not yet full?
            return;

        if(disc % 2)
            var p = "player2";  // if disc % 2 == 1
        else
            var p = "player1";

        var newDisc = "<div class=\"token " + p + "\"></div>"; //add html div tag with class="token player1/2"
        $(this).prev().prepend(newDisc);                       //add html .table .token player1/2
        $(this).prev().children(".token:nth-child(1)").animate({top:"+="+computePos(index)+"px"});    //get next position of disc to be placed
       
        if(!start)
            return;
        updatePlayerDisc();
    });

    $(".buttonReset").click(function() {       //clicking restart
        $(".table .token").hide(function(){
            $(this).remove();                  //remove all .game .token tags
        });

        for(var i = 0; i < grid.length; i++) 
            grid[i] = [];                    //empty the disc count of each column

        $(".win").hide();                       //hide messages
        $(".lose").hide();
        $(".display h2").text("Winner!");
        
        start=true;                             //start new game
        disc=0;                                 //initialize discs to 0
        updatePlayerDisc();                     // player1 disc first
    });
});