$(document).ready(function () {

    $('#leaveComment').click(showCommentInput);
    $('#viewComments').click(showCommentArea);
    $('.submitButt').click(displayComment);



});




function showCommentInput() {
    $('#commentInput').toggle(1500);
    console.log('hello');
}


function showCommentArea() {
    $('#commentArea').toggle(1500);

    var newComment = $(".commentInput").val().trim();
    $('.userComment').append(newComment);
};



function displayComment() {

    $('.userComment').empty();
    var newComment = $(".commentInput").val().trim();
    $('.userComment').append(newComment);
    $('.commentInput').val('');

};

//to populate html with scraped data use jquery plus a for loop to get scraped data
var scrapedData = 
for (i = 0; i < scrapedData.length; i++) {
    
    $('.headline').append(date);

    $('.story1').append(article);

}










var html = `<div class="container" id="newsCont">
    <h1 class="headline"></h1>
    
    <hr class="HLhr">
    
    <button class="saveButt2">| Save Article |</button>

    <p class="story1"></p>

    <button id="leaveComment" class="comment">| Write a Comment |</button>
    
    <span id="commentInput">
    
    <input class="commentInput"><button onclick='showCommentArea()' class="submitButt" type="submit">Submit</button>
    
    </span>
    
    <button id="viewComments" class="saveButt">| View Comment |</button>

    <br><br>
    
    <div id="commentArea">
        
    <span>

        <h1 class="commentTitle"><u>Comments</u></h1>

    </span>
        
    <p class="userComment"></p>

    <hr>
    
    </div>

    </div>
`;

