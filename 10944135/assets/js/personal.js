var s = document.getElementsByClassName("site");
var i;
for (i = 0; i < s.length; i++) {
    s[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var stadium = this.nextElementSibling;
        if (stadium.style.maxHeight) {
            stadium.style.maxHeight = null;
        } else { stadium.style.maxHeight = stadium.scrollHeight + "px"; }
    });
}