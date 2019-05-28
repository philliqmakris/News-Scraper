$(document).ready(function () {
    getArticles();

    $('#leaveComment').click(showCommentInput);
    $('#viewComments').click(showCommentArea);
    $('.submitButt').click(displayComment);


});

function getArticles() {

}





function showCommentInput() {

    $('#commentInput').show(1500);
    console.log('hello');
}


function showCommentArea() {
    var html = ` <table class="table table-sm text-center" id=tableText>
    <p class="userComment"> This is a comment </p>
    <hr class="HLhr2">
    <p class="userComment">This is a comment</p>
    <hr class="HLhr2">
    <p class="userComment"> This is a comment </p>
    <hr class="HLhr2">
    <p class="userComment">This is a comment</p>
    <hr class="HLhr2">
</table>`;

    $('#commentArea').html(html);
};



function displayComment() {
    $('')
};