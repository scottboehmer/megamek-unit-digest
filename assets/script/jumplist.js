function showJumplist() {
    document.getElementById("jumpcontainer").style.display = "block";
}

function hideJumplist() {
    document.getElementById("jumpcontainer").style.display = "none";
}

const jumpheaders = document.getElementsByClassName("jumpheader");
for (let i = 0; i < jumpheaders.length; i++) {
    jumpheaders[i].addEventListener("click", () => {showJumplist();});
}

const jumplinks = document.getElementsByClassName("jumplink");
for (let i = 0; i < jumplinks.length; i++) {
    jumplinks[i].addEventListener("click", () => {hideJumplist();});
}
