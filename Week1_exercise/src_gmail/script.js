var inbox = document.getElementById("inbox");
var complete_mail = document.getElementById("complete-mail_id");
var mail_box = document.getElementById("mail-box_id");


inbox.onclick = function() {show_content()};
mail_box.onclick = function() {cmt_mail()};


function show_content(){
    mail_box.style.display = "block";
    complete_mail.style.display = "none";

}
function cmt_mail(){
    // console.log("vah");
    mail_box.style.display = "none";
    complete_mail.style.display = "block";
}
function searchFun(){
    var input = document.getElementById("myInput");
    var filter = input.value.toLowerCase();
    var nodes = document.getElementsByClassName("mail-list");

    for (i = 0; i < nodes.length; i++) {
        let temp = nodes[i].querySelector('.mail-content .subject .sub-text');
        // console.log(temp)
        if (temp.innerText.toLowerCase().includes(filter)) {
        nodes[i].style.display = "block";
        } else {
        nodes[i].style.display = "none";
        }
    }
}