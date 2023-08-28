$(document).ready(function () {
    insertArticle();
});

function insertArticle() {
    readData();
}
function readData(){
    fetch('./assets/js/data/article.txt')
    .then(response => response.text())
    .then(text => {
        $('#article').html(text)
    })
    .then(function(){
        BEAUTY_CODE();
    })
    .then(function() {
        $("#toc").toc();
    })
    .catch(error => {
        console.error('Error:', error);
    });
}