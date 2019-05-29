$(document).ready(function () {
    getArticles();

    $('#leaveComment').click(showCommentInput);
    $('#viewComments').click(showCommentArea);
    $('.submitButt').click(displayComment);



});

function getArticles() {

};



function showCommentInput() {
    $('#commentInput').show(1500);
    console.log('hello');
}


function showCommentArea() {
    $('#commentArea').show(1500);
};



function displayComment() {

    $('.userComment').empty();
    var newComment = $(".commentInput").val().trim();
    $('.userComment').append(newComment);
};



