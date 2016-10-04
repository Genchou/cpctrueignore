var postsList = document.getElementById("postlist");
var ignored = postsList.getElementsByClassName("postbitignored");
for (var i = 0; i < ignored.length; i++) {
    ignored[i].remove();
}
