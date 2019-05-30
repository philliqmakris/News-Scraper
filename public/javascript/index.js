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
        // console.log(response);
        response.forEach(element => {
            console.log(element);
            var myPar = $('<p>');

            myPar.text = element.text;

            var myDate = $('<h1>');

            myDate.text = element.text;

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










