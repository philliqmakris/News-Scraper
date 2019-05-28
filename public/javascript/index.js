$(document).ready(function () {
    getArticles();
});

function getArticles() {

}


$('leaveComment').click(showCommentInput);


function showCommentInput() {
    var html = `<input class="commentInput"><button class="submitButt" type="submit">Submit</button>`;

    $('commentInput').html(html);
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


$('#viewComments').click(showCommentArea);