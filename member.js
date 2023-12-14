function skilsMember() {
    var member = document.getElementById("member");
    var memberValue = member.options[member.selectedIndex].value;
    if (memberValue == "yes") {
        document.getElementById("skils").style.display = "block";
    } else {
        document.getElementById("skils").style.display = "none";
    }
}