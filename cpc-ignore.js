var postsList = document.getElementById("postlist");
var ignored = postsList.getElementsByClassName("postbitignored");
console.log(ignored);
for (var i = 0; i < ignored.length; i++) {
    console.log(ignored[i]);
    ignored[i].remove();
}
