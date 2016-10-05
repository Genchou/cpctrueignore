// NOT USED

var postsList = document.getElementById("postlist");
if (postsList != null) {
    var ignored = postsList.getElementsByClassName("postbitignored");
    for (var i = 0; i < ignored.length; i++) {
        ignored[i].remove();
    }
}
