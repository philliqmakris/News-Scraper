$(document).ready(function () {

    $('#leaveComment').click(showCommentInput);
    $('#viewComments').click(showCommentArea);
    $('.submitButt').click(displayComment);
    grabData();


});


function grabData() {
    $.ajax({
        url: '/scrape',
        method: "GET"
    }).then(function (response) {
        response.forEach(element => {

            let mainDiv = $('<div>').attr('class', 'container').attr('id', 'newsCont');
            let h1 = $('<h1>').attr('class', 'headline').text(element.date);
            let hr = $('<hr>').attr('class', 'HLhr');
            let button = $('<button>').attr('class', 'saveButt2');
            let paragraph = $('<p>').attr('class', 'story1').text(element.text);
            let button2 = $('<button>').attr('class', 'comment');
            let span = $('<span>').attr('id', 'commentInput');
            let input = $('<input').attr('class', 'commentInput');
            let br = $('<br>');
            let br2 = $('<br>');
            let commentDiv = $('<div>').attr('id', 'commentArea');
            let span2 = $('<span>');
            let commentTitle = $('<h1>').attr('class', 'commentTitle');
            let userComment = $('<p>').attr('class', 'userComment');
            let hr2 = $('<hr>');
            let br1 = $('<br>');
            let hr3 = $('<hr>').attr('class', 'underCommentsHR');
            
            console.log(element);
            span2.append(commentTitle, $('<u>').text('Comments'));
            commentDiv.append(span2);
            $('#holder').append(mainDiv);
            //created para element, then set text equal to the elements text.
            //next create another element and set element date to that
            //then append them to the page
            //dynamically create all html elements



        });

    });
};


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
// var scrapedData = 
// for (i = 0; i < scrapedData.length; i++) {

//     $('.headline').append(date);

//     $('.story1').append(article);

// }










